class DbStorage {

    constructor(dbname) {
        this.dbname = dbname;
        this.db = null;

        this.stores = [
            { "name": "identities", "keyPath": "publicKeyFingerprint", "type": Identity.name },
            { "name": "communities" }, { "name": "invites" },
            { "name": "messages" }, { "name": "entries" },
            { "name": "gateways", "keyPath": "url", "type": Gateway.name }];
    }

    // connect(name, version) {
    //     var self = this;
    //     return new Promise((resolve, reject) => {
    //         const request = indexedDB.open(name, version);
    //         request.onupgradeneeded = myUpgradeHandlerFunction;
    //         request.onsuccess = () => resolve(request.result);
    //         request.onerror = () => reject(request.error);
    //         request.onblocked = () => { console.error('blocked'); };
    //     });
    // }

    // put(conn, value, store) {
    //     var self = this;
    //     return new Promise((resolve, reject) => {
    //         const tx = conn.transaction(self.dbname);
    //         const store = tx.objectStore(store);
    //         const request = store.put(value);
    //         request.onsuccess = () => resolve(request.result);
    //         request.onerror = () => reject(request.error);
    //     });
    // }

    // Article on using idb.js: https://developers.google.com/web/ilt/pwa/working-with-indexeddb
    async initialize() {
        let self = this;

        // window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        // window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
        // window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

        if (!('indexedDB' in window)) {
            throw new Error('This browser doesn\'t support IndexedDB.');
        }

        let request = indexedDB.open(self.dbname, 1);

        request.onupgradeneeded = (event) => {

            console.log('TEST1');

            // let txn = event.target.transaction;
            // let store = txn.objectStore("text messages");

            // store.name = "mobile messages";
            // let index = store.index("recipient");
            // index.name = "recipients";

            let txn = event.target.transaction; // txn.mode == "versionchange"
            txn.objectStoreNames; // a list of objectstore names can be accessed in this txn.

            self.db = txn.db;

            debugger;

            for (var i = 0, len = self.stores.length; i < len; i++) {
                let store = self.stores[i];

                if (!self.db.objectStoreNames.contains(store.name)) {

                    var optional = {};

                    if (store.keyPath) {
                        optional = { "keyPath": store.keyPath };
                    }

                    var objectStore = self.db.createObjectStore(store.name, optional);
                    //objectStore.createIndex('indexName', 'property', options);
                }
            }
        };

        request.onsuccess = (event) => {

            console.log('TEST2');

            this.db = event.target.result;

            this.db.onclose = (event) => {
                alert("the database: " + db.name + "was closed outside the script!");
            };

            //var objectStore = db.createObjectStore("name", { keyPath: "myKey" });

            //let store = db.transaction(this.dbname).objectStore('identities');

            // let today = new Date();
            // let yesterday = new Date(today);
            // yesterday.setDate(today.getDate() - 1);
            // let activities = null;
            // let request = store.getAll(IDBKeyRange(yesterday, today), 10);

            // request.onsuccess = (event) => {
            //   activities = event.target.result;
            // };


        };

        // this.db = await idb.open(this.dbname, 1, (upgradeDB) => {
        //     for (var i = 0, len = self.stores.length; i < len; i++) {
        //         let store = self.stores[i];

        //         if (!upgradeDB.objectStoreNames.contains(store.name)) {

        //             var optional = {};

        //             if (store.keyPath)
        //             {
        //                 optional = { "keyPath": store.keyPath };
        //             }

        //             var objectStore = upgradeDB.createObjectStore(store.name, optional);
        //             //objectStore.createIndex('indexName', 'property', options);
        //         }
        //     }
        // });
    }

    async connect() {

        if (!('indexedDB' in window)) {
            throw new Error('This browser doesn\'t support IndexedDB.');
        }

        var self = this;
        return new Promise((resolve, reject) => {

            let request = indexedDB.open(self.dbname, 1);
            request.onupgradeneeded = (event) => {

                // let txn = event.target.transaction;
                // let store = txn.objectStore("text messages");

                // store.name = "mobile messages";
                // let index = store.index("recipient");
                // index.name = "recipients";

                let txn = event.target.transaction; // txn.mode == "versionchange"
                txn.objectStoreNames; // a list of objectstore names can be accessed in this txn.

                self.db = txn.db;

                for (var i = 0, len = self.stores.length; i < len; i++) {
                    let store = self.stores[i];

                    if (!self.db.objectStoreNames.contains(store.name)) {

                        var optional = {};

                        if (store.keyPath) {
                            optional = { "keyPath": store.keyPath };
                        }

                        var objectStore = self.db.createObjectStore(store.name, optional);
                        //objectStore.createIndex('indexName', 'property', options);
                    }
                }

                //resolve(event);
            };

            request.onsuccess = (event) => {

                this.db = event.target.result;

                this.db.onclose = (event) => {
                    alert("the database: " + db.name + "was closed outside the script!");
                };

                resolve(event);

                //var objectStore = db.createObjectStore("name", { keyPath: "myKey" });

                //let store = db.transaction(this.dbname).objectStore('identities');

                // let today = new Date();
                // let yesterday = new Date(today);
                // yesterday.setDate(today.getDate() - 1);
                // let activities = null;
                // let request = store.getAll(IDBKeyRange(yesterday, today), 10);

                // request.onsuccess = (event) => {
                //   activities = event.target.result;
                // };

            };

            request.onerror = () => reject(request.error);
            request.onblocked = () => { console.error('blocked'); };
        });
    }

    async getAll(storeName) {

        var self = this;
        return new Promise((resolve, reject) => {

            var store = this.stores.find((store) => store.type == storeName);

            if (!store) {
                reject('Unable to find a store for the data type. Type name: ' + storeName);
                //throw new Error('Unable to find a store for the data type. Type name: ' + data.constructor.name);
            }

            //console.log(store);
            //debugger;

            var tx = this.db.transaction(store.name, 'readwrite');
            var store = tx.objectStore(store.name);

            //var storeIndex = store.index('index');
            //var myIndex = objectStore.index('index');
            //var getAllKeysRequest = storeIndex.getAllKeys();

            //let request = store.getAll(IDBKeyRange(yesterday, today), 10);
            //let request = store.getAllKeys();
            let request = store.getAll();

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);

            // store.getAll();

            // await store.add(data);
            // await tx.complete;

            // let request = store.getAll(IDBKeyRange(yesterday, today), 10);

            // request.onsuccess = (event) => {
            //     activities = event.target.result;
            // };


            // console.log('INSERT!!');


            // const tx = conn.transaction(self.dbname);
            // const store = tx.objectStore(store);
            // const request = store.put(value);
            // request.onsuccess = () => resolve(request.result);
            // request.onerror = () => reject(request.error);

        });




        // var db = initialize();
        // db.put()


        // var tx = db.transaction('identities', 'readwrite');
        // var objectStore = tx.objectStore('identities');


        // tx.objectStore(this.dbname).put(data);

    }

    async put(data) {

        var storeName = data._type;
        var store = this.stores.find((store) => store.type == storeName);

        if (!store) {
            throw new Error('Unable to find a store for the data type. Type name: ' + storeName);
        }

        console.log(store);

        var tx = this.db.transaction(store.name, 'readwrite');
        var store = tx.objectStore(store.name);

        await store.add(data);
        await tx.complete;

        console.log('INSERT!!');

        // var db = initialize();
        // db.put()


        // var tx = db.transaction('identities', 'readwrite');
        // var objectStore = tx.objectStore('identities');


        // tx.objectStore(this.dbname).put(data);

    }

    async delete(data) {

        var storeName = data._type;
        //var storeName = data.constructor.name;
        // if (storeName === 'Object')
        // {
            
        // }

        var store = this.stores.find((store) => store.type == storeName);

        if (!store) {
            throw new Error('Unable to find a store for the data type. Type name: ' + storeName);
        }

        console.log(store);

        var tx = this.db.transaction(store.name, 'readwrite');
        var store = tx.objectStore(store.name);

        await store.delete(data.url);
        await tx.complete;
    }

    async deleteDatabase() {

        await idb.delete(this.dbname);

        //var db = await idb.open('ume', 1);

        // var tx = db.transaction('identities', 'readwrite');
        // tx.objectStore('identities').put({}, )

        // await idb.delete('ume');

        // var request = indexedDB.deleteDatabase(this.dbname);

        // request.onerror = function (event) {

        // };

        // request.onsuccess = function (event) {

        // }


    }



}