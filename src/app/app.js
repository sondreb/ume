// @xts-check

var db = null;
var ia = null;
var messages = null;
var socket = null;

randomWords = ['remind'
    , 'tease'
    , 'word'
    , 'representative'
    , 'temper'
    , 'imagine'
    , 'flock'
    , 'tug'
    , 'muddled'
    , 'smiling'
    , 'knock'
    , 'earth'
    , 'resonant'
    , 'various'
    , 'man'
    , 'fear'
    , 'youthful'
    , 'license'
    , 'pancake'
    , 'rat'
    , 'redundant'
    , 'icy'
    , 'arm'
    , 'serious'
    , 'choke'
    , 'tacit'
    , 'lettuce'
    , 'rhythm'
    , 'watery'
    , 'floor'
    , 'trip'
    , 'meaty'
    , 'neat'
    , 'describe'
    , 'probable'
    , 'amount'
    , 'necessary'
    , 'best'
    , 'lamp'
    , 'decisive'
    , 'cats'
    , 'development'
    , 'elfin'
    , 'pick'
    , 'fruit'
    , 'coach'
    , 'dispensable'
    , 'discover'
    , 'veil'
    , 'page'
    , 'afford'
    , 'sleep'
    , 'dust'
    , 'surround'
    , 'defective'
    , 'tangy'
    , 'size'
    , 'zonked'
    , 'tiger'
    , 'drop'
    , 'substantial'
    , 'truculent'
    , 'periodic'
    , 'drunk'
    , 'cause'
    , 'polish'
    , 'quarrelsome'
    , 'quicksand'
    , 'interrupt'
    , 'married'
    , 'noise'
    , 'lavish'
    , 'window'
    , 'tray'
    , 'scribble'
    , 'haunt'
    , 'shaggy'
    , 'calculating'
    , 'capricious'
    , 'thankful'
    , 'escape'
    , 'rude'
    , 'earthquake'
    , 'nutty'
    , 'flight'
    , 'sassy'
    , 'dad'
    , 'skinny'
    , 'book'
    , 'damaged'
    , 'rough'
    , 'paint'
    , 'consist'
    , 'previous'
    , 'unaccountable'
    , 'grandmother'
    , 'buzz'
    , 'educate'
    , 'eye'
    , 'rhyme'
    , 'awake'
    , 'sneeze'
    , 'mix'
    , 'legs'
    , 'puffy'
    , 'stormy'
    , 'lethal'
    , 'drag'
    , 'awesome'
    , 'spoil'
    , 'guitar'
    , 'library'
    , 'barbarous'
    , 'command'
    , 'substance'
    , 'sigh'
    , 'queue'
    , 'settle'
    , 'certain'
    , 'enchanted'
    , 'price'
    , 'cough'
    , 'ocean'
    , 'spotless'
    , 'frightened'
    , 'swim'
    , 'tempt'
    , 'star'
    , 'scold'
    , 'point'
    , 'fragile'
    , 'tail'
    , 'nippy'
    , 'invent'
    , 'accept'
    , 'breath'
    , 'gorgeous'
    , 'toys'
    , 'truthful'
    , 'prefer'
    , 'abhorrent'
    , 'sip'
    , 'stone'
    , 'lip'
    , 'attract'
    , 'inform'
    , 'powder'
    , 'pushy'
    , 'self'
    , 'regret'
    , 'red'
    , 'touch'
    , 'examine'
    , 'trap'
    , 'magenta'
    , 'numerous'
    , 'mitten'
    , 'river'
    , 'saw'
    , 'plane'
    , 'bouncy'
    , 'number'
    , 'reading'
    , 'stream'
    , 'wait'
    , 'sofa'
    , 'murky'
    , 'military'
    , 'fear'
    , 'ticket'
    , 'ultra'
    , 'hand'
    , 'trip'
    , 'attraction'
    , 'tame'
    , 'rings'
    , 'permissible'
    , 'strengthen'
    , 'bad'
    , 'slow'
    , 'engine'
    , 'whistle'
    , 'tart'
    , 'bubble'
    , 'force'
    , 'reaction'
    , 'step'
    , 'unadvised'
    , 'fold'
    , 'flat'
    , 'screw'
    , 'zany'
    , 'feigned'
    , 'natural'
    , 'degree'
    , 'notebook'
    , 'clam'
    , 'aberrant'
    , 'madly'
    , 'thunder'
    , 'nine'
    , 'record'
    , 'bashful'
    , 'fantastic'
    , 'join'
    , 'poke'
    , 'sneeze'
    , 'owe'
    , 'trashy'
    , 'work'
    , 'blind'
    , 'cannon'
    , 'maid'
    , 'return'
    , 'connection'
    , 'worried'
    , 'crash'
    , 'coordinated'
    , 'burst'
    , 'high'
    , 'enchanting'
    , 'dynamic'
    , 'effect'
    , 'produce'
    , 'shade'
    , 'exchange'
    , 'terrible'
    , 'needless'
    , 'clear'
    , 'mine'
    , 'oval'
    , 'important'
    , 'frighten'
    , 'plant'
    , 'friends'
    , 'ad hoc'
    , 'exist'
    , 'symptomatic'
    , 'fearful'
    , 'teeth'
    , 'wise'
    , 'irate'
    , 'act'
    , 'scarecrow'
    , 'measure'
    , 'miss'
    , 'suppose'
    , 'trail'
    , 'threatening'
    , 'cycle'
    , 'endurable'
    , 'tasty'
    , 'zippy'
    , 'thundering'
    , 'noisy'];

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

var logOutput = document.getElementById('log-output');

function log(text) {
    console.debug(text);

    // var timestamp = new Date();

    // if (typeof text !== 'string') {
    //     text = JSON.stringify(text);
    // }

    // var p = document.createElement("p");
    // p.innerText = timestamp.toTimeString().split(' ')[0] + ': ' + text;
    // logOutput.appendChild(p);
};

// Now let's implement the autoloadback referenced in loki constructor
function databaseInitialize() {
    var entries = db.getCollection("entries");
    var messages = db.getCollection("messages");
    var gateways = db.getCollection("gateways");
    var communities = db.getCollection("communities");

    // Since our LokiFsStructuredAdapter is partitioned, the default 'quickstart3.db'
    // file will actually contain only the loki database shell and each of the collections
    // will be saved into independent 'partition' files with numeric suffix.

    // Add our main example collection if this is first run.
    // This collection will save into a partition named quickstart3.db.0 (collection 0)  
    if (entries === null) {
        // first time run so add and configure collection with some arbitrary options
        entries = db.addCollection("entries", { indices: ['x'], clone: true });
    }

    if (gateways === null) {
        // first time run so add and configure collection with some arbitrary options
        gateways = db.addCollection("gateways");
    }

    if (communities === null) {
        // first time run so add and configure collection with some arbitrary options
        communities = db.addCollection("communities");
    }

    // Now let's add a second collection only to prove that this saved partition (quickstart3.db.1) 
    // doesn't need to be saved every time the other partitions do if it never gets any changes
    // which need to be saved.  The first time we run this should be the only time we save it.
    if (messages === null) {
        messages = db.addCollection("messages");
        messages.insert({ txt: "i will only insert into this collection during databaseInitialize" });
    }

    window.ume.storage.entries = entries;
    window.ume.storage.messages = messages;
    window.ume.storage.gateways = gateways;
    window.ume.storage.communities = communities;

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

    var gateways = window.ume.storage.gateways.data;

    gateways.forEach((item) => {
        
        //var gatewayUrl = element('gateways').value;
        //console.log('connect to: ', gatewayUrl);

        console.log('Connecting to gateway: ', item.gateway);

        var socket = io(item.gateway);

        socket.on('connect', function () {
            console.log('Connected to Gateway');
            //element('connection-status').innerText = 'Connected';
            //gatewayConnected = true;
            // Connect to the correct community room.
            //socket.emit('join', { "community": communityKey });
        });

        socket.on('event', function (data) {
            console.log('Event Received: ' + data);
        });

        socket.on('disconnect', function () {
            //element('connection-status').innerText = 'Disconnected';
            console.log('Disconnected from Gateway');
            gatewayConnected = false;
        });

        // Store a reference to the socket on the global ume structure.
        window.ume.gateways.push(socket);
    });
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

// function createAndSaveAKeyPair() {
//     return window.crypto.subtle.generateKey(
//         {
//             name: "RSA-OAEP",
//             modulusLength: 2048,
//             publicExponent: new Uint8Array([1, 0, 1]),  // 24 bit representation of 65537
//             hash: { name: "SHA-256" }
//         },
//         true,   // can extract it later if we want
//         ["encrypt", "decrypt"]).
//         then(function (key) {
//             keyPair = key;
//             return key;
//         });
// }



// Key pair creation:
async function createAndSaveAKeyPair() {
    // Returns a promise.
    // Takes no input, yields a key pair to the then handler.
    // Side effect: updates keyPair in enclosing scope with new value.

    const keyPair = await window.crypto.subtle.generateKey(
        {
            name: "RSASSA-PKCS1-v1_5",
            modulusLength: 2048,
            publicExponent: new Uint8Array([1, 0, 1]),  // 24 bit representation of 65537
            hash: { name: "SHA-256" }
        },
        true,   // can extract it later if we want
        ["sign", "verify"]);

    return keyPair;
}

async function sign(message, privateKey) {
    // Returns a Promise that yields a Blob to its
    // then handler. The Blob points to an signed
    // representation of the file. The structure of the
    // Blob's content's structure:
    //    16 bit integer length of the digital signature
    //    Digital signature
    //    Original plaintext

    const msgBuffer = new TextEncoder('utf-8').encode(message);                     // encode as UTF-8
    const hashBuffer = await crypto.subtle.sign({
        name: "RSASSA-PKCS1-v1_5",
    }, privateKey, msgBuffer);     // sign the message
    const hashArray = Array.from(new Uint8Array(hashBuffer));                       // convert ArrayBuffer to Array
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join(''); // convert bytes to hex string
    return hashHex;
    // return window.crypto.subtle.sign(
    //     { name: "RSASSA-PKCS1-v1_5" },
    //     privateKey,
    //     plaintext).then(() => {
    //         console.log('YES!');
    //     });

    // function packageResults(signature) {
    //     // Returns a Blob representing the package of
    //     // the signature it is provided and the original
    //     // plaintext (in an enclosing scope).

    //     var length = new Uint16Array([signature.byteLength]);
    //     return new Blob(
    //         [
    //             length,     // Always a 2 byte unsigned integer
    //             signature,  // "length" bytes long
    //             plaintext   // Remainder is the original plaintext
    //         ],
    //         { type: "application/octet-stream" }
    //     );
    // }

} // End of sign

async function verify(publicKey, signature, data) {


    const signatureBuffer = new TextEncoder('utf-8').encode(signature);
    const dataBuffer = new TextEncoder('utf-8').encode(data);

    return await window.crypto.subtle.verify({
        name: "RSASSA-PKCS1-v1_5",
    }, publicKey, signatureBuffer, dataBuffer)

}

async function sha256(message) {
    const msgBuffer = new TextEncoder('utf-8').encode(message);                     // encode as UTF-8
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);            // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer));                       // convert ArrayBuffer to Array
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join(''); // convert bytes to hex string
    return hashHex;
}

async function importKey(jwk) {

    // var jwk = {
    //     alg: 'RSASSA-PKCS1-v1_5',
    //     key_ops: ['verify'],
    //     ext: true,
    //     e: 'AQAB',
    //     kty: 'RSA',
    //     n: 'voFDcAgBSoGnffppOk_ESoQnPg6JOYXJZRv4SD6USJgsSzmFuyqw-En7LS-WvW6twN1wwJjJAyXbzohEZQEvsaR7uTXdcFqNERXef_b-MZv7NdTm9BG2euG9zaHe5NZad89U5b9hGOS9RB_rBgIsg5VZXAuDF6HnltepsQFPWFc'
    // };

    return await window.crypto.subtle.importKey(
        "jwk", //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
        jwk,
        {   //these are the algorithm options
            name: "RSASSA-PKCS1-v1_5",
            hash: { name: "SHA-256" }, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
        },
        false, //whether the key is extractable (i.e. can be used in exportKey)
        ["verify"] //"verify" for public key import, "sign" for private key imports
    )
}

//sha256('abc').then(hash => console.log(hash));


function hex(buffer) {
    var hexCodes = [];
    var view = new DataView(buffer);
    for (var i = 0; i < view.byteLength; i += 4) {
        // Using getUint32 reduces the number of iterations needed (we process 4 bytes each time)
        var value = view.getUint32(i)
        // toString(16) will give the hex representation of the number without padding
        var stringValue = value.toString(16)
        // We use concatenation and slice for padding
        var padding = '00000000'
        var paddedValue = (padding + stringValue).slice(-padding.length)
        hexCodes.push(paddedValue);
    }

    // Join all the hex strings into one
    return hexCodes.join("");
}

var keyPair;    // Used by several handlers later

//sha256('abc').then(hash => console.log(hash));

// function importCommunityKey(){
//     window.crypto.subtle.importKey(
//         "jwk", //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
//         {   //this is an example jwk key, other key types are Uint8Array objects
//             kty: "EC",
//             crv: "P-256",
//             x: "zCQ5BPHPCLZYgdpo1n-x_90P2Ij52d53YVwTh3ZdiMo",
//             y: "pDfQTUx0-OiZc5ZuKMcA7v2Q7ZPKsQwzB58bft0JTko",
//             ext: true,
//         },
//         {   //these are the algorithm options
//             name: "ECDSA",
//             namedCurve: "P-256", //can be "P-256", "P-384", or "P-521"
//         },
//         false, //whether the key is extractable (i.e. can be used in exportKey)
//         ["verify"] //"verify" for public key import, "sign" for private key imports
//     )
//     .then(function(publicKey){
//         //returns a publicKey (or privateKey if you are importing a private key)
//         console.log(publicKey);
//     })
//     .catch(function(err){
//         console.error(err);
//     });
// }

// async function sign()
// {
//     window.crypto.subtle.sign(
//         {
//             name: "ECDSA",
//             hash: {name: "SHA-256"}, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
//         },
//         privateKey, //from generateKey or importKey above
//         data //ArrayBuffer of data you want to sign
//     )
//     .then(function(signature){
//         //returns an ArrayBuffer containing the signature
//         console.log(new Uint8Array(signature));
//     })
//     .catch(function(err){
//         console.error(err);
//     });
// }

// async function verify() {
//     window.crypto.subtle.verify(
//         {
//             name: "ECDSA",
//             hash: {name: "SHA-256"}, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
//         },
//         publicKey, //from generateKey or importKey above
//         signature, //ArrayBuffer of the signature
//         data //ArrayBuffer of the data
//     )
//     .then(function(isvalid){
//         //returns a boolean on whether the signature is true or not
//         console.log(isvalid);
//     })
//     .catch(function(err){
//         console.error(err);
//     });
// }

function stringToArrayBuffer(string) {
    var encoder = new TextEncoder("utf-8");
    return encoder.encode(string);
}

function arrayBufferToHexString(arrayBuffer) {
    var byteArray = new Uint8Array(arrayBuffer);
    var hexString = "";
    var nextHexByte;

    for (var i = 0; i < byteArray.byteLength; i++) {
        nextHexByte = byteArray[i].toString(16);  // Integer to base 16
        if (nextHexByte.length < 2) {
            nextHexByte = "0" + nextHexByte;     // Otherwise 10 becomes just a instead of 0a
        }
        hexString += nextHexByte;
    }
    return hexString;
}

async function deriveAKey(password) {
    var salt = "ume-salt-value-for-derived-key";
    var iterations = 1000;

    //var hash = document.getElementById("hash-name").value;
    //var password = document.getElementById("password").value;

    // First, create a PBKDF2 "key" containing the password
    var baseKey = await window.crypto.subtle.importKey(
        "raw",
        stringToArrayBuffer(password),
        { "name": "PBKDF2" },
        false,
        ["deriveKey"]);

    var aesKey = await window.crypto.subtle.deriveKey(
        {
            "name": "PBKDF2",
            "salt": stringToArrayBuffer(salt),
            "iterations": iterations,
            "hash": "SHA-512" // Is 256 enough and better performance, or should we go with 512 for added security?
        },
        baseKey,
        { "name": "AES-CBC", "length": 128 }, // Key we want
        true,                               // Extrable
        ["encrypt", "decrypt"]              // For new key
    );

    var keyBytes = await window.crypto.subtle.exportKey("raw", aesKey);

    var hexKey = arrayBufferToHexString(keyBytes);

    return hexKey;

    //document.getElementById("aes-key").textContent = hexKey;

    // Derive a key from the password
    // then(function (baseKey) {
    //     return
    // }).
    //     // Export it so we can display it
    //     then(function (aesKey) {
    //         return window.crypto.subtle.exportKey("raw", aesKey);
    //     }).
    //     // Display it in hex format
    //     then(function (keyBytes) {
    //         var hexKey = arrayBufferToHexString(keyBytes);
    //         document.getElementById("aes-key").textContent = hexKey;
    //     }).
    //     catch(function (err) {
    //         alert("Key derivation failed: " + err.message);
    //     });
}

function convertArrayBufferViewtoString(buffer) {
    var str = "";
    for (var iii = 0; iii < buffer.byteLength; iii++) {
        str += String.fromCharCode(buffer[iii]);
    }

    return str;
}

async function generateKeyPair() {
    key = await crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, true, ["sign", "verify"]);
    return key;
}

async function exportKey(key) {
    return await window.crypto.subtle.exportKey("raw", key);
}

function generatePassPhrase(length) {
    var randomValues = securePRNG.getRandomValues(new Uint8Array(length));

    var randomString = '';

    for (var i = 0; i < randomValues.byteLength; i++) {
        randomString += ' ' + randomWords[randomValues[i]];
    }

    // Remove the initial empty space of the string.
    return randomString.substring(1);
}

async function generateKeyPair() {
    return await window.crypto.subtle.generateKey(
        {
            name: "ECDSA",
            namedCurve: "P-256", //can be "P-256", "P-384", or "P-521"
        },
        true, //whether the key is extractable (i.e. can be used in exportKey)
        ["sign", "verify"] //can be any combination of "sign" and "verify"
    );
}

function spkiToPEM(keydata) {
    var keydataS = arrayBufferToString(keydata);
    var keydataB64 = window.btoa(keydataS);
    //var keydataB64Pem = formatAsPem(keydataB64);
    return keydataB64;
}

function arrayBufferToString(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return binary;
}

async function exportPublicKeyFromKeyObject(keyObject) {
    return await window.crypto.subtle.exportKey(
        "spki", //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
        keyObject //can be a publicKey or privateKey, as long as extractable was true
    );
}

function toHexString(buffer) {
    var byteArray = new Uint8Array(buffer);
    var s = '0x';
    byteArray.forEach(function (byte) {
        s += ('0' + (byte & 0xFF).toString(16)).slice(-2);
    });
    return s;
}

function toHexString2(buffer) {
    var byteArray = new Uint8Array(buffer);
    return Array.from(byteArray, function (byte) {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('')
}

function bufferToHex(buffer) {
    var i;
    var len;
    var hex = '';
    var c;

    for (i = 0, len = buffer.length; i < len; i += 1) {
        c = buffer[i].toString(16);
        if (c.length < 2) {
            c = '0' + c;
        }
        hex += c;
    }

    return hex;
}

// Should be fairly fast way to convert to Base64. So many ways floating around.
function arrayBufferToBase64(ab) {
    var arr = Array.prototype.slice.call(new Uint8Array(ab)); //Create a normal array        

    var arr1 = arr.map(function (item) {
        return String.fromCharCode(item);    //Convert
    });

    return window.btoa(arr1.join(''));   //Form a string
}

function uint8ToBase64(buffer) {
    var binary = '';
    var len = buffer.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(buffer[i]);
    }
    return window.btoa(binary);
}

// var base64 = btoa(
//     new Uint8Array(arrayBuffer)
//         .reduce((data, byte) => data + String.fromCharCode(byte), '')
// );

function arrayToBase64String(a) {
    return btoa(String.fromCharCode(...a));
}

function base64StringToArray(s) {
    let asciiString = atob(s);
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}

function buf2hex(buffer) {
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}

function arrayBufferToHexString(arrayBuffer) {
    if (typeof arrayBuffer !== 'object') {
        throw new TypeError('Input must be ArrayBuffer.');
    }

    var byteArray = new Uint8Array(arrayBuffer);
    var hexString = '';
    var nextHexByte;

    for (var i = 0; i < byteArray.byteLength; i++) {
        nextHexByte = byteArray[i].toString(16);
        if (nextHexByte.length < 2) {
            nextHexByte = '0' + nextHexByte;
        }
        hexString += nextHexByte;
    }

    return hexString;
};

/* 
EXAMPLE:

var jwk = {
    crv : "P-256",
    d : "v3q0jjMcubyt2noKslVXW2z2zeMmY_LX08NzKt-f23Q",
    ext : true,
    key_ops : ["sign"],
    kty : "EC",
    x : "jROeikve3r4x3D5_StBimzmeOwevpcDUgo23SPzAhmk",
    y : "6G2ISYypE3mLHHH1Z0K0yt4TTZEW5Jjet0dDyJFoESw"
}

d = private key (private exponent)

*/

async function exportJwkFromKeyObject(keyObject) {
    return await window.crypto.subtle.exportKey(
        'jwk', //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
        keyObject //can be a publicKey or privateKey, as long as extractable was true
    );
}

async function exportKeyFromKeyObject(keyObject, public) {
    var keyType = 'pkcs8';

    if (public) {
        keyType = 'spki'
    }

    return await window.crypto.subtle.exportKey(
        keyType, //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
        keyObject //can be a publicKey or privateKey, as long as extractable was true
    );
}

async function privateKeyFromCryptoObjectAsHex(cryptoObject) {
    var exportedKeyBuffer = await exportKeyFromKeyObject(cryptoObject.privateKey, false);

    var exportKeyHex = arrayBufferToBase64(exportedKeyBuffer);

    // console.log(new Uint8Array(exportedKeyBuffer));
    // console.log(new Uint8Array(exportedKeyBuffer).length);
    // console.log('encrypted', window.Unibabel.arrToBase64(new Uint8Array(encrypted)));

    return exportKeyHex;
}

async function publicKeyFromCryptoObjectAsHex(cryptoObject) {
    var exportedKeyBuffer = await exportKeyFromKeyObject(cryptoObject.publicKey, true);


    // console.log(new Uint8Array(exportedKeyBuffer));
    // console.log(new Uint8Array(exportedKeyBuffer).length);
    // console.log('encrypted', window.Unibabel.arrToBase64(new Uint8Array(encrypted)));

    var exportKeyHex = arrayBufferToBase64(exportedKeyBuffer);
    return exportKeyHex;
}

async function keysFromCryptoObjectAsHex(cryptoObject) {
    var exportedKeyBuffer = await exportJwkFromKeyObject(cryptoObject);

    debugger;

    console.log(exportedKeyBuffer);

    // console.log(new Uint8Array(exportedKeyBuffer));
    // console.log(new Uint8Array(exportedKeyBuffer).length);
    // console.log('encrypted', window.Unibabel.arrToBase64(new Uint8Array(encrypted)));

    //var exportKeyHex = arrayBufferToBase64(exportedKeyBuffer);
    return exportKeyHex;
}

function generateInviteKey() {
    var randomValues = securePRNG.getRandomValues(new Uint8Array(32));
    var invitationKey = arrayBufferToBase64(randomValues);
    return invitationKey;
}

function generateInvitation(communityId) {

    var invitation = {
        'cid': communityId,
        'ikey': generateInviteKey(),
    };

    return invitation;
}

async function signInvitation(privateKey, data) {
    return await window.crypto.subtle.sign(
        {
            name: "ECDSA",
            hash: { name: "SHA-256" }, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
        },
        privateKey, //from generateKey or importKey above
        data //ArrayBuffer of data you want to sign
    );
}

async function verifyInvitation(publicKey, signature, data) {
    return await window.crypto.subtle.verify(
        {
            name: "ECDSA",
            hash: { name: "SHA-256" }, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
        },
        publicKey, //from generateKey or importKey above
        signature, //ArrayBuffer of the signature
        data //ArrayBuffer of the data
    );
}

function stringToUint(string) {
    var string = btoa(unescape(JSON.stringify(string))),
        charList = string.split(''),
        uintArray = [];

    for (var i = 0; i < charList.length; i++) {
        uintArray.push(charList[i].charCodeAt(0));
    }

    return new Uint8Array(uintArray);
}

function stringUnicodeToUint(string) {
    var string = btoa(unescape(encodeURIComponent(string))),
        charList = string.split(''),
        uintArray = [];

    for (var i = 0; i < charList.length; i++) {
        uintArray.push(charList[i].charCodeAt(0));
    }

    return new Uint8Array(uintArray);
}

function uintToString(uintArray) {
    var encodedString = String.fromCharCode.apply(null, uintArray),
        decodedString = decodeURIComponent(escape(atob(encodedString)));

    return decodedString;
}

async function generateHash(array) {
    return await window.crypto.subtle.digest(
        {
            name: "SHA-256",
        },
        array);
}

// ucs-2 string to base64 encoded ascii
function utoa(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

// base64 encoded ascii to ucs-2 string
function atou(str) {
    return decodeURIComponent(escape(window.atob(str)));
}

function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

//b64EncodeUnicode('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
//b64EncodeUnicode('\n'); // "Cg=="

function b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

//b64DecodeUnicode('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"
//b64DecodeUnicode('Cg=='); // "\n"

async function generateCommunity() {

    var salt = "ume-salt-value-for-derived-key";

    var crypt = new OpenCrypto();

    // First thing a user does, is generate or join a community.
    var communityKeys = await generateKeyPair();

    // Keep it secret, keep it safe.
    // Similar to how we encrypt the users private key, we will also put the community private key on the network of users, to ensure it can be
    // restored in case of emergency, of if a user do not want to store any local cached copy and always restore a community from the network.
    var communityPrivateKey = await exportJwkFromKeyObject(communityKeys.privateKey);

    // Spread it safely, always hidden in plain view.
    var communityPublicKey = await exportJwkFromKeyObject(communityKeys.publicKey);

    // Should the computed hash for Community Public Key be based upon the whole JWK (JSON-structure) or a concat of the x and y values?
    var communityPublicKeyArray = JSON.stringify(communityPublicKey);
    var communityPrivateKeyArray = JSON.stringify(communityPrivateKey);

    var communityHash = await generateHash(stringUnicodeToUint(communityPublicKeyArray));
    var communityKey = arrayBufferToBase64(communityHash);

    // What is the best balance of security and usability for pass phrase derived keys?
    var passPhrase = generatePassPhrase(20);

    // The pass phrase that a user must remember and can save. In the future, we will add support for encrypting the pass phrase for local storage, similar to how one can protect the private key in PFX files.
    // The logic for encrypting the private key could also be used to "lock" down the ume-app and require users to unlock their private key before continue using the app.
    console.log('passPhrase:', passPhrase);

    // Generate the 256-bit key from the pass phrase. This is a deterministic generation, which ensures that a user can restore their private key on a different device.
    var passPhraseKey = await crypt.keyFromPassphrase(passPhrase, salt);

    return {
        communityId: communityKey,
        privateKey: btoa(communityPublicKeyArray),
        publicKey: btoa(communityPrivateKeyArray),
        passPhrase: passPhrase,
        passPhraseKey: passPhraseKey
    };

}


async function simulate() {

    var salt = "ume-salt-value-for-derived-key";
    var crypt = new OpenCrypto();
    var userList = new Array();

    // First thing a user does, is generate or join a community.
    var communityKeys = await generateKeyPair();

    // Keep it secret, keep it safe.
    // Similar to how we encrypt the users private key, we will also put the community private key on the network of users, to ensure it can be
    // restored in case of emergency, of if a user do not want to store any local cached copy and always restore a community from the network.
    var communityPrivateKey = await exportJwkFromKeyObject(communityKeys.privateKey);

    // Spread it safely, always hidden in plain view.
    var communityPublicKey = await exportJwkFromKeyObject(communityKeys.publicKey);

    console.log(JSON.stringify(communityPrivateKey));
    console.log(JSON.stringify(communityPublicKey));

    // Should the computed hash for Community Public Key be based upon the whole JWK (JSON-structure) or a concat of the x and y values?
    var communityPublicKeyArray = stringUnicodeToUint(JSON.stringify(communityPrivateKey));
    var communityHash = await generateHash(communityPublicKeyArray);
    var communityKey = arrayBufferToBase64(communityHash);

    console.log('COMMUNITY AS HEX: ', arrayBufferToHexString(communityHash));
    console.log('COMMUNITY AS BASE64: ', arrayBufferToBase64(communityHash));

    // Generate a set of private/public keys used for identification of the owner.
    var userKeys = await generateKeyPair();

    // This key we will actually share to all members of the community, but in a pass phrased encrypted manner. We want to do this
    // to ensure a user can restore their private keys from the network of users, if they loose their backups.
    var userPrivateKey = await exportJwkFromKeyObject(userKeys.privateKey);

    // Spread it safely, always hidden in plain view.
    var userPublicKey = await exportJwkFromKeyObject(userKeys.publicKey);

    console.log(JSON.stringify(userPrivateKey));
    console.log(JSON.stringify(userPublicKey));

    // Community owner generates a new invitation:
    var invitation = {
        "community": communityKey,
        "invitationId": generateInviteKey()
    };

    var invitationEntity = {
        "type": "invite",
        "signature": null,
        "body": invitation
    }

    //var base64CommunityPublicKey = utoa(JSON.stringify(communityPublicKey));
    //var communityHashArray = new Uint8Array(communityHash);

    var signatureBuffer = await signInvitation(communityKeys.privateKey, stringToUint(invitation));
    var signatureArray = new Uint8Array(signatureBuffer);
    var signature = arrayBufferToBase64(signatureArray);

    // Store the signature on the entity.
    invitationEntity.signature = signature;

    console.log('Send this invite to a user: ', JSON.stringify(invitationEntity));

    // Save the community invitation, used for verification later on.
    //console.log('Community Invitation Key', invitation);
    //console.log('SIGNATURE AS BASE64: ', arrayBufferToBase64(signatureArray));

    // This is the message that will be sent to gateway.
    // var msg = {
    //     "community": communityKey,
    //     "": ""
    // };

    // var invitationMessage = {
    //     type: 'invite',
    //     body: invitation
    // };

    // After invitation is received from the member and sent to the community owner, the owner will verify the signature:
    var valid = await verifyInvitation(communityKeys.publicKey, signatureArray, stringToUint(invitationEntity.body));

    console.log('Invitation is: ' + valid);

    //    console.log(await keysFromCryptoObjectAsHex(communityKeys.privateKey));
    //console.log(await privateKeyFromCryptoObjectAsHex(communityKeys));
    //console.log(await publicKeyFromCryptoObjectAsHex(communityKeys));

    // console.log('---');

    // console.log(await privateKeyFromCryptoObjectAsHex(userKeys));
    // console.log(await publicKeyFromCryptoObjectAsHex(userKeys));


    // debugger;

    // var userPublicKeyBuffer = await exportPrivateKeyFromKeyObject(userKeys.privateKey);
    // var userPublicKey = crypt.arrayBufferToHexString(userPublicKeyBuffer);
    // console.log(userPublicKey);

    // var userPrivateKeyBuffer = await exportPrivateKeyFromKeyObject(userKeys.privateKey);
    // var userPublicKey = crypt.arrayBufferToHexString(userPublicKeyBuffer);
    // console.log(userPublicKey);

    // console.log(communityKeys);
    // console.log(userKeys);

    // var userPublicKeyBuffer = await crypt.arrayBufferToHexString(userKeys.publicKey);
    // var userPrivateKeyBuffer = await crypt.arrayBufferToHexString(userKeys.privateKey);

    // console.log(userPublicKeyBuffer);
    // console.log(userPrivateKeyBuffer);

    return;

    // HEX encoded private key
    console.log('Private User Key:', hex(userPrivateKeyBuffer));

    // HEX encoded public key
    console.log('Public User Key:', hex(userPublicKeyBuffer));

    //console.log('Public User Key:', arrayBufferToHexString(privateUserKeyBuffer));

    //console.log('Public User Key:' , publicUserKey);

    userList.push({

    });


    var randomValues = securePRNG.getRandomValues(new Uint8Array(32));
    var invitationKey = arrayBufferToHexString(randomValues);

    console.log(invitationKey);

    // What is the best balance of security and usability for pass phrase derived keys?
    var passPhrase = generatePassPhrase(10);

    // The pass phrase that a user must remember and can save. In the future, we will add support for encrypting the pass phrase for local storage, similar to how one can protect the private key in PFX files.
    // The logic for encrypting the private key could also be used to "lock" down the ume-app and require users to unlock their private key before continue using the app.
    console.log('passPhrase:', passPhrase);

    // Generate the 256-bit key from the pass phrase. This is a deterministic generation, which ensures that a user can restore their private key on a different device.
    var passPhraseKey = await crypt.keyFromPassphrase(passPhrase, salt);

    console.log('passPhraseKey:', passPhraseKey);

    // Import the pass phrase key and make it non-exportable. If we need it again, we'll have to re-import it.
    window.crypto.subtle.importKey(
        "jwk", //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
        {   //this is an example jwk key, other key types are Uint8Array objects
            kty: "EC",
            crv: "P-256",
            x: "zCQ5BPHPCLZYgdpo1n-x_90P2Ij52d53YVwTh3ZdiMo",
            y: "pDfQTUx0-OiZc5ZuKMcA7v2Q7ZPKsQwzB58bft0JTko",
            ext: true,
        },
        {   //these are the algorithm options
            name: "ECDSA",
            namedCurve: "P-256", //can be "P-256", "P-384", or "P-521"
        },
        false, //whether the key is extractable (i.e. can be used in exportKey)
        ["verify"] //"verify" for public key import, "sign" for private key imports
    )
        .then(function (publicKey) {
            //returns a publicKey (or privateKey if you are importing a private key)
            console.log(publicKey);
        })
        .catch(function (err) {
            console.error(err);
        });

    //var passPhrasePem = await crypt.cryptoPrivateToPem(passPhraseKey);
    //console.log('passPhrasePem:', passPhrasePem);
}

function element(id) {
    return document.getElementById(id);
}

function initializeDatabase() {

    ia = new LokiIndexedAdapter("ume");

    db = new loki('ume.db', {
        adapter: ia,
        autoload: true,
        autoloadCallback: databaseInitialize,
        autosave: true,
        autosaveInterval: 2000
    });

    // var entries = db.getCollection("gateway");
    // //messages = db.getCollection("messages");

    // if (entries === null) {
    //     //entries = db.addCollection("gateway", { indices: ['x'], clone: true });
    //     entries = db.addCollection('gateway');
    // }

    // if (messages === null) {
    //     messages = db.addCollection("messages");
    //     messages.insert({ txt: "i will only insert into this collection during databaseInitialize" });
    // }


}

var gatewayConnected = false;

(async function onStart() {

    // Populate the global ume object. This can obviously crash if anyone else puts this on global.
    window.ume = {
        supported: true,
        storage: {},
        gateways: new Array()
    };

    window.ume.crypto = window.crypto || window.msCrypto;

    if (!window.ume.crypto && !window.ume.crypto.subtle) {
        window.ume.supported = false;
        log('Your browser does not support WebCrypto. You must upgrade or change browser.');
        return;
    }

    if (!window.TextEncoder || !window.TextDecoder) {
        window.ume.supported = false;
        log('Your browser does not support UTF-8 encoding. You must upgrade or change browser.');
        return;
    }

    //const crypt = window.ume.crypto.subtle;

    log('üme v0.0.1');

    initializeDatabase();

    return;

    element('gateway-connect').addEventListener('click', function () {
        if (gatewayConnected) {
            socket.close();
        } else {
            var gatewayUrl = element('gateways').value;
            console.log('connect to: ', gatewayUrl);

            socket = io(gatewayUrl);

            socket.on('connect', function () {
                console.log('Connected to Gateway');
                element('connection-status').innerText = 'Connected';
                gatewayConnected = true;
                // Connect to the correct community room.
                //socket.emit('join', { "community": communityKey });
            });

            socket.on('event', function (data) {
                console.log('Event Received: ' + data);
            });

            socket.on('disconnect', function () {
                element('connection-status').innerText = 'Disconnected';
                console.log('Disconnected from Gateway');
                gatewayConnected = false;
            });
        }
    });

    await simulate();

    //var keyPair2 = await crypt.getKeyPair();
    //var encryptedPrivateKey = await crypt.encryptPrivateKey(keyPair2.privateKey, 'securepassphrase');

    //log(encryptedPrivateKey);

    try {
        // Decrypt PEM Encrypted Private Key
        //var decryptedPrivateKey = await crypt.decryptPrivateKey(encryptedPrivateKey, 'securepassphrase');
        //console.log(decryptedPrivateKey);
        //log(decryptedPrivateKey);

    } catch (err) {
        console.error(err);
    }

    return;

    var userDerivedCommunityKey = await deriveAKey('PASSWORD');

    // log(await deriveAKey('PASSWORD'));
    // log(await deriveAKey('PASSWORD'));
    // log(await deriveAKey('PASSWORD1'));
    // log(await deriveAKey('PASSWORD2'));
    // log(await deriveAKey('PASSWORD3'));

    var communityKey = await generateKeyPair();

    //console.log(communityKey);

    //const communityPublicKeyBuffer = await exportKey(communityKey.publicKey);
    const communityPrivateKeyBuffer = await exportKey(communityKey.privateKey);

    debugger;

    //const communityPublicKey = JSON.stringify(communityPublicKeyBuffer);
    const communityPrivateKey = JSON.stringify(communityPrivateKeyBuffer);

    // var blob = new Blob([communityPublicKey]);
    // var link = document.createElement("a");
    // link.href = URL.createObjectURL(blob);
    // link.download = "ume-community-public-key.json"; // file will have a size of 32 bytes
    // link.textContent = "save the ume community keys";
    // document.body.appendChild(link);

    var blob2 = new Blob([communityPrivateKey]);
    var link2 = document.createElement("a");
    link2.href = URL.createObjectURL(blob2);
    link2.download = "ume-community-private-key.json"; // file will have a size of 32 bytes
    link2.textContent = "save the ume community keys";
    document.body.appendChild(link2);


    //debugger;
    //const communityPrivateKey = await crypto.exportKey('jwk', communityKey.privateKey);

    //log(communityPublicKey);
    //log(communityPrivateKey);





    var message = {
        title: 'Hello',
        content: 'This is my message',
        channel: 'introduction'
    };

    var messageText = JSON.stringify(message);

    const keyPair = await createAndSaveAKeyPair();

    //const publicKey = await window.crypto.subtle.exportKey('raw', keyPair.publicKey);
    const publicKey = await window.crypto.subtle.exportKey('jwk', keyPair.publicKey);

    //var publicKey = JSON.stringify(keyPair.publicKey);
    //console.log(keyPair.publicKey.toString());

    const signature = await sign(messageText, keyPair.privateKey);

    console.log(signature);

    var payload = {
        signature: signature,
        body: messageText
    };

    //const verified = await verify();

    //console.log(key = await window.crypto.subtle.exportKey('jwk', keyPair.publicKey);
    //console.log(publicKey);

    const publicKeyForTransfer = JSON.stringify(publicKey);
    var publicKeyJson = JSON.parse(publicKeyForTransfer);

    const importedKey = await importKey(publicKeyJson);
    //const importedKey = await window.crypto.subtle.importKey('jwk', publicKeyJson, '', false, ['verify']);

    const verified = await verify(importedKey, signature, messageText);

    console.log('VERIFIED:', verified);

    //const hash = await sha256(messageText);
    //console.log(hash);

}());


// (function onStart() {

//     if (window.crypto && !window.crypto.subtle && window.crypto.webkitSubtle) {
//         window.crypto.subtle = window.crypto.webkitSubtle;
//     }

//     if (!window.crypto || !window.crypto.subtle) {
//         alert("Your current browser does not support the Web Cryptography API! Cannot continue.");
//         return;
//     }

//     ia = new LokiIndexedAdapter("ume");

//     db = new loki('ume.db', {
//         adapter: ia,
//         autoload: true,
//         autoloadCallback: databaseInitialize,
//         autosave: true,
//         autosaveInterval: 4000
//     });


//     var buffer = convertStringToArrayBufferView('YOUANDMEØÆÅ');
//     console.log(buffer);

//     var result = convertArrayBufferViewtoString(buffer);
//     console.log(result);

//     // Create the session key.
//     // Encrypt the message with the session key.
//     // Export the session key.
//     // Encrypt the session key with the recipients public key.
//     // Package encrypted session key and encrypted file together.

//     var message = {
//         title: 'Hello',
//         content: 'This is my message',
//         channel: 'introduction'
//     };

//     var messageText = JSON.stringify(message);
//     var buffer = new TextEncoder("utf-8").encode(messageText);

//     createAndSaveAKeyPair().then(() => {

//         console.log('created key pair!');
//         console.log(keyPair);

//         sign(buffer, keyPair.privateKey).then((hash) => {
//             var hex2 = hex(hash);
//             console.log(hex2);
//             console.log('message signature!', hash);
//         });

//     }).catch((err) => {
//         console.error(err);
//     });


//     //createAndSaveAKeyPair();

//     // window.crypto.subtle.generateKey(algorithmIdentifier, extractableFlag, keyUsagesList).
//     //     then((e) => {
//     //         console.log('generated key!!', e);
//     //     }).
//     //     catch((err) => {
//     //         console.error(err);
//     //     });


//     log('onStart');
// })();

