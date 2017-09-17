class CryptoUtil {


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
