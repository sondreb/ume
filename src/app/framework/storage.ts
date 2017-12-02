import { Injectable } from '@angular/core';
import { ApplicationState } from './application-state';
import Dexie from 'dexie';


// class TableInfo {
// 	TableName: string;
// 	PrimaryFieldName: string;
// 	PrimaryIndexName: string;
// }

export default class TableInfo {
	TableName: string;
	PrimaryFieldName: string;
	PrimaryIndexName: string;
}

@Injectable()
export class StorageService {


	private storage: any;
	private stores: any;
	private dbname = 'ume.db';
	public db: IDBDatabase;
	private IndxDb: IDBFactory;

	constructor(public appState: ApplicationState) {

		this.IndxDb = window.indexedDB;

		this.stores = [
			{ 'name': 'identities', 'keyPath': 'id', 'type': 'Identity' },
			{ 'name': 'profiles', 'keyPath': 'id', 'type': 'Profile' },
			{ 'name': 'communities', 'keyPath': 'id', 'type': 'Community' },
			{ 'name': 'invites' },
			{ 'name': 'messages' }, { 'name': 'entries' },
			{ 'name': 'gateways', 'keyPath': 'url', 'type': 'Gateway' }];



		// if (window.localStorage && appState.persist) {
		// 	this.storage = window.localStorage;
		// } else {
		// 	this.storage = {
		// 		items: [],
		// 		getItem: function (key) {
		// 			return this.items[key];
		// 		},
		// 		setItem: function (key, value) {
		// 			this.items[key] = value;
		// 		},
		// 		removeItem: function (key) {
		// 			delete this.items[key];
		// 		}
		// 	};
		// }
	}

	initialize(): Promise<IDBDatabase> {

		const self = this;

		const promise = new Promise<IDBDatabase>((resolve, reject) => {
			let req: IDBOpenDBRequest;
			req = this.IndxDb.open(this.dbname);

			req.onblocked = (e: any) => {
				console.log('BLOCKED!');
			};

			req.onupgradeneeded = (e: any) => {

				this.db = e.target.result;

				for (let i = 0, len = self.stores.length; i < len; i++) {
					const store = self.stores[i];

					if (!self.db.objectStoreNames.contains(store.name)) {

						// const parms: IDBObjectStoreParameters = { keyPath: tInfo.PrimaryFieldName };
						let optional: IDBObjectStoreParameters = {};

						if (store.keyPath) {
							optional = { 'keyPath': store.keyPath };
						}

						const objectStore = self.db.createObjectStore(store.name, optional);

						// Make sure we create an index on the name property for all tables to ensure search performs well.
						objectStore.createIndex('name', 'name');
						// objectStore.createIndex('indexName', 'property', options);
					}
				}

				const transaction = e.target.transaction;
				transaction.onComplete = () => {
					resolve(this.db);
				};

				// resolve(this.db);

				// for (const tInfo of this.tInfos) {
				// 	const parms: IDBObjectStoreParameters = { keyPath: tInfo.PrimaryFieldName };
				// 	let tblLocal: IDBObjectStore;
				// 	tblLocal = this.db.createObjectStore(tInfo.TableName, parms);
				// 	tblLocal.createIndex(tInfo.PrimaryIndexName, tInfo.PrimaryFieldName);
				// }
				// const transaction = e.target.transaction;
				// transaction.onComplete = () => {
				// 	resolve(this.db);
				// };

			};

			req.onsuccess = (e: any) => {
				this.db = e.target.result;
				resolve(this.db);
			};

			req.onerror = (e: ErrorEvent) => {
				console.log(e.error);
				reject(e);
			};
		});

		return promise;
	}

	// AddTables(e: any) {
	// 	md.db = e.target.result;
	// 	let parms: IDBObjectStoreParameters;
	// 	let tInfo: TableInfo;
	// 	for (let it in md.tInfos) {
	// 		tInfo = md.tInfos[it];
	// 		parms = { keyPath: tInfo.PrimaryFieldName };
	// 		let tblLocal: IDBObjectStore;
	// 		tblLocal = md.db.createObjectStore(tInfo.TableName, parms);
	// 		tblLocal.createIndex(tInfo.PrimaryIndexName, tInfo.PrimaryFieldName);
	// 	}
	// }

	// Article on using idb.js: https://developers.google.com/web/ilt/pwa/working-with-indexeddb
	async initialize2() {
		const self = this;

		// window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
		// window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
		// window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

		if (!('indexedDB' in window)) {
			throw new Error('This browser doesn\'t support IndexedDB.');
		}

		const request = indexedDB.open(self.dbname, 1);

		request.onupgradeneeded = (event) => {

			console.log('TEST1');

			// let txn = event.target.transaction; // txn.mode == "versionchange"
			// txn.objectStoreNames; // a list of objectstore names can be accessed in this txn.

			// self.db = txn.db;

			// debugger;

			// for (let i = 0, len = self.stores.length; i < len; i++) {
			// 	const store = self.stores[i];

			// 	if (!self.db.objectStoreNames.contains(store.name)) {

			// 		var optional = {};

			// 		if (store.keyPath) {
			// 			optional = { "keyPath": store.keyPath };
			// 		}

			// 		var objectStore = self.db.createObjectStore(store.name, optional);
			// 		//objectStore.createIndex('indexName', 'property', options);
			// 	}
			// }
		};

		request.onsuccess = (event) => {

			// console.log('TEST2');

			// this.db = event.target.result;

			// this.db.onclose = (event) => {
			// 	alert("the database: " + db.name + "was closed outside the script!");
			// };

			// var objectStore = db.createObjectStore("name", { keyPath: "myKey" });

			// let store = db.transaction(this.dbname).objectStore('identities');

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

		// if (!('indexedDB' in window)) {
		// 	throw new Error('This browser doesn\'t support IndexedDB.');
		// }

		// const self = this;
		// return new Promise((resolve, reject) => {

		// 	let request = indexedDB.open(self.dbname, 1);
		// 	request.onupgradeneeded = (event) => {

		// 		let txn = event.target.transaction; // txn.mode == "versionchange"
		// 		txn.objectStoreNames; // a list of objectstore names can be accessed in this txn.

		// 		self.db = txn.db;

		// 		for (var i = 0, len = self.stores.length; i < len; i++) {
		// 			let store = self.stores[i];

		// 			if (!self.db.objectStoreNames.contains(store.name)) {

		// 				var optional = {};

		// 				if (store.keyPath) {
		// 					optional = { "keyPath": store.keyPath };
		// 				}

		// 				var objectStore = self.db.createObjectStore(store.name, optional);
		// 				//objectStore.createIndex('indexName', 'property', options);
		// 			}
		// 		}

		// 		//resolve(event);
		// 	};

		// 	request.onsuccess = (event) => {

		// 		this.db = event.target.result;

		// 		this.db.onclose = (event) => {
		// 			alert("the database: " + db.name + "was closed outside the script!");
		// 		};

		// 		resolve(event);
		// 	};

		// 	request.onerror = () => reject(request.error);
		// 	request.onblocked = () => { console.error('blocked'); };
		// });
	}

	async getAll(dataType) {

		try {
			debugger;
			const storeName = dataType;
			const storeDescription = this.stores.find((s) => s.type === storeName);

			if (!storeDescription) {
				throw new Error('Unable to find a store for the data type. Type name: ' + storeName);
			}

			const tx = this.db.transaction(storeDescription.name, 'readwrite');
			const store = tx.objectStore(storeDescription.name);

			const query = await (<any> store).getAll() as IDBRequest;

			await tx.oncomplete;

			return query.result;
		} catch (err) {
			console.error(err);
			debugger;

		}
	}

	async get(dataType, key) {

		const storeName = dataType;
		const storeDescription = this.stores.find((s) => s.type === storeName);

		if (!storeDescription) {
			throw new Error('Unable to find a store for the data type. Type name: ' + storeName);
		}

		console.log(storeDescription);

		const tx = this.db.transaction(storeDescription.name, 'readwrite');
		const store = tx.objectStore(storeDescription.name);

		const query = await store.get(key);
		await tx.oncomplete;

		return query.result;

		// console.log('INSERT!!');


		// const self = this;
		// return new Promise((resolve, reject) => {

		// 	let store = this.stores.find((store) => store.type === storeName);

		// 	if (!store) {
		// 		reject('Unable to find a store for the data type. Type name: ' + storeName);
		// 	}

		// 	const tx = this.db.transaction(store.name, 'readwrite');
		// 	const store = tx.objectStore(store.name);

		// 	const request = store.get(key);

		// 	request.onsuccess = () => resolve(request.result);
		// 	request.onerror = () => reject(request.error);
		// });
	}

	// put(source: string, object: any): Observable<any> {
	// 	let self = this;

	// 	return Observable.create((observer: any) => {
	// 		this.open().subscribe((db: any) => {
	// 			let tx = db.transaction(source, "readwrite");
	// 			let store = tx.objectStore(source);
	// 			store.put(object);

	// 			tx.oncomplete = () => {
	// 				observer.next(object);
	// 				db.close();
	// 				observer.complete();
	// 			};
	// 			db.onerror = (e: any) => {
	// 				db.close();
	// 				self.handleError("IndexedDB error: " + e.target.errorCode);
	// 			}
	// 		});
	// 	});
	// };

	async put(data) {

		const storeName = data.type;
		const storeDescription = this.stores.find((s) => s.type === storeName);

		if (!storeDescription) {
			throw new Error('Unable to find a store for the data type. Type name: ' + storeName);
		}

		console.log(storeDescription);

		const tx = this.db.transaction(storeDescription.name, 'readwrite');
		const store = tx.objectStore(storeDescription.name);

		await store.put(data);
		await tx.oncomplete;

		console.log('INSERT!!');
	}

	async delete(data) {

		// const storeName = data._type;

		// let store = this.stores.find((store) => store.type === storeName);

		// if (!store) {
		// 	throw new Error('Unable to find a store for the data type. Type name: ' + storeName);
		// }

		// console.log(store);

		// const tx = this.db.transaction(store.name, 'readwrite');
		// const store = tx.objectStore(store.name);

		// await store.delete(data.url);
		// await tx.complete;
	}

	deleteDatabase(): Promise<any> {
		if (this.db) {
			this.db.close();
		}

		const promise = new Promise((resolve, reject) => {

			const req = this.IndxDb.deleteDatabase(this.dbname);

			req.onerror = (e) => {
				console.error(e);
				reject(e);
			};

			req.onsuccess = (e) => {
				console.log('Database deleted.');
				resolve(e);
			};

		});

		return promise;
	}

	// async deleteDatabase() {
	// 	this.db.close();
	// 	this.IndxDb.deleteDatabase(this.dbname);
	// 	this.OpenInitDB();
	// }

	// public get(key): any {
	// 	const valueString = this.storage.getItem(key);
	// 	let valueObject = null;

	// 	if (valueString != null && valueString !== '') {
	// 		valueObject = JSON.parse(valueString);
	// 	}

	// 	return valueObject;
	// }

	// public set(key, value) {
	// 	if (value != null && value !== '') {
	// 		const valueString = JSON.stringify(value);
	// 		this.storage.setItem(key, valueString);
	// 	} else if (value === null) {
	// 		// When null value, remove entry from storage.
	// 		this.storage.removeItem(key);
	// 	}
	// }
}
