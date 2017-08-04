var db = null;
var ia = null;
var messages = null;
var socket = null;

function onPopulate() {
    log('Population Test');
    //var db = new loki('ume.db');
}

function onPublish() {
    log('Publish');

    var text = document.getElementById('message').value;

    if (!text) {
        return;
    }

    log('text: ' + text);
    messages.insert({ id: 1, text: text });

    // Clear the user input.
    document.getElementById('message').value = '';

    socket.emit('publish', text);
}

function deleteDatabase() {
    // DELETE DATABASE
    // delete 'finance'/'test' value from catalog
    db.deleteDatabase('test', function () {
        log('Database Deleted.');
        // database deleted
    });
}

function log(text) {
    console.debug('ume: ' + text);
};

// Now let's implement the autoloadback referenced in loki constructor
function databaseInitialize() {
    var entries = db.getCollection("entries");
    messages = db.getCollection("messages");

    // Since our LokiFsStructuredAdapter is partitioned, the default 'quickstart3.db'
    // file will actually contain only the loki database shell and each of the collections
    // will be saved into independent 'partition' files with numeric suffix.

    // Add our main example collection if this is first run.
    // This collection will save into a partition named quickstart3.db.0 (collection 0)  
    if (entries === null) {
        // first time run so add and configure collection with some arbitrary options
        entries = db.addCollection("entries", { indices: ['x'], clone: true });
    }

    // Now let's add a second collection only to prove that this saved partition (quickstart3.db.1) 
    // doesn't need to be saved every time the other partitions do if it never gets any changes
    // which need to be saved.  The first time we run this should be the only time we save it.
    if (messages === null) {
        messages = db.addCollection("messages");
        messages.insert({ txt: "i will only insert into this collection during databaseInitialize" });
    }

    // kick off any program logic or start listening to external events
    runProgramLogic();
}

// While we could have done this in our databaseInitialize function, 
//   lets go ahead and split out the logic to run 'after' initialization into this 'runProgramLogic' function
function runProgramLogic() {
    var entries = db.getCollection("entries");
    var entryCount = entries.count();
    var now = new Date();

    log("old number of entries in database : " + entryCount);

    entries.insert({ x: now.getTime(), y: 100 - entryCount });
    entryCount = entries.count();

    log("new number of entries in database : " + entryCount);

    log("");
    log("Wait 4 seconds for the autosave timer to save our new addition")
    log("If you waited 4 seconds, the next time you run this script the numbers should increase by 1");
    log("The four second interval can be adjusted in the call to loki constructor");
}

function convertStringToArrayBufferView(str) {

    var bytes = new TextEncoder().encode(str);
    return bytes;

    // var bytes = new Uint8Array(str.length);
    // for (var iii = 0; iii < str.length; iii++) {
    //     bytes[iii] = str.charCodeAt(iii);
    // }

    // return bytes;
}

function convertArrayBufferViewtoString(buffer) {

    var text = new TextDecoder('utf-8').decode(buffer);
    return text;

    // var str = "";
    // for (var iii = 0; iii < buffer.byteLength; iii++) {
    //     str += String.fromCharCode(buffer[iii]);
    // }

    // return str;
}

function generatePublicKey(cb) {
    var crypto = window.crypto || window.msCrypto;
    var key_object = null;
    var promise_key = null;

    if (crypto.subtle) {
        //alert("Cryptography API Supported");

        //Parameters:
        //1. Symmetric Encryption algorithm name and its requirements
        //2. Boolean indicating extractable. which indicates whether or not the raw keying material may be exported by the application (http://www.w3.org/TR/WebCryptoAPI/#dfn-CryptoKey-slot-extractable)
        //3. Usage of the key. (http://www.w3.org/TR/WebCryptoAPI/#cryptokey-interface-types)
        promise_key = crypto.subtle.generateKey({ name: "AES-CBC", length: 128 }, false, ["encrypt", "decrypt"]);

        promise_key.then(function (key) {
            key_object = key;

            log('Key: ' + key);
            cb(key);
        });

        promise_key.catch = function (e) {
            log(e.message);
        }
    }
    else {
        alert("Cryptography API not Supported");
    }
}

function createCommunity() {
    
    console.log('Create Community.');

    


}

function generateKeys() {
    generatePublicKey(function (key) {
        encrypt('YOUANDMEØÆÅ', key);
    });
}

function encrypt(data, key_object) {
    //var data = "QNimate";

    var encrypted_data = null;
    var encrypt_promise = null;

    //iv: Is initialization vector. It must be 16 bytes
    var vector = crypto.getRandomValues(new Uint8Array(16));

    encrypt_promise = crypto.subtle.encrypt({ name: "AES-CBC", iv: vector }, key_object, convertStringToArrayBufferView(data));

    encrypt_promise.then(
        function (result) {
            encrypted_data = new Uint8Array(result);
            console.log('Encrypted data:', encrypted_data);
            decrypt(encrypted_data, key_object, vector);
        },
        function (e) {
            console.log(e.message);
        }
    );
}

function decrypt(data, key_object, vector) {

    decrypt_promise = crypto.subtle.decrypt({ name: "AES-CBC", iv: vector }, key_object, data);

    decrypt_promise.then(
        function (result) {
            decrypted_data = new Uint8Array(result);
            console.log(convertArrayBufferViewtoString(decrypted_data));
        },
        function (e) {
            console.log(e.message);
        }
    );
}

(function onStart() {

    ia = new LokiIndexedAdapter("ume");

    db = new loki('ume.db', {
        adapter: ia,
        autoload: true,
        autoloadCallback: databaseInitialize,
        autosave: true,
        autosaveInterval: 4000
    });

    socket = io('http://localhost:8081');

    socket.on('connect', function () {
        log('Connected to Gateway');
    });

    socket.on('event', function (data) {
        log('Event Received: ' + data);
    });

    socket.on('disconnect', function () {
        log('Disconnected from Gateway');
    });

    var buffer = convertStringToArrayBufferView('YOUANDMEØÆÅ');
    console.log(buffer);

    var result = convertArrayBufferViewtoString(buffer);
    console.log(result);

    log('onStart');
})();
