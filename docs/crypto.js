class CryptoUtil {

    constructor() {

    }

}

CryptoUtil.exportPublicKey = async function (key) {
    return await window.crypto.subtle.exportKey('spki', key);
}

CryptoUtil.exportPrivateKey = async function (key) {
    return await window.crypto.subtle.exportKey('pkcs8', key);
}

CryptoUtil.uint8ArrayToHex = function (data, sep) {
    var a, h = '';
    var ch = sep ? sep : '';
    for (var i = 0, len = data.length; i !== len; ++i) {
        a = data[i];
        h += i > 0 ? ch : '';
        h += a < 16 ? '0' : '';
        h += a.toString(16);
    }
    return h;
}

CryptoUtil.hexToUint8Array = function (data) {

    if (!data) {
        return new Uint8Array();
    }

    var a = [];
    for (var i = 0, len = data.length; i < len; i += 2) {
        a.push(parseInt(data.substr(i, 2), 16));
    }

    return new Uint8Array(a);

    // var a, h = '';
    // var ch = sep ? sep : '';
    // for (var i = 0, len = data.length; i !== len; ++i) {
    //     a = data[i];
    //     h += i > 0 ? ch : '';
    //     h += a < 16 ? '0' : '';
    //     h += a.toString(16);
    // }
    // return h;
}

CryptoUtil.stringToArrayBuffer = function (string) {
    var encoder = new TextEncoder("utf-8");
    return encoder.encode(string);
}

CryptoUtil.arrayToHexString = function (byteArray) {
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

CryptoUtil.arrayBufferToHexString = function (arrayBuffer) {
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

CryptoUtil.convertUint8ArrayToText = function (data) {
    var s = '';
    for (var i = 0, len = data.length; i !== len; ++i) {
        s += String.fromCharCode(data[i]);
    }
    return s;
}

CryptoUtil.convertUint8ArrayToBase64 = function (data) {
    var s = CryptoUtil.convertUint8ArrayToText(data);
    return window.btoa(s);
}
