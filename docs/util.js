class Util {
    constructor() {

    }

    convertStringToArrayBuffer(str) {
        var bytes = new TextEncoder().encode(str);
        return bytes;
    }

    convertArrayBufferToString(buffer) {
        var text = new TextDecoder('utf-8').decode(buffer);
        return text;
    }

    convertArrayBufferToBase64(buffer) {
        var arr = Array.prototype.slice.call(new Uint8Array(buffer)); //Create a normal array        

        var arr1 = arr.map(function (item) {
            return String.fromCharCode(item);    //Convert
        });

        return window.btoa(arr1.join(''));   //Form a string
    }

    convertArrayToBase64(buffer) {
        var binary = '';
        var len = buffer.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(buffer[i]);
        }
        return window.btoa(binary);
    }

}

// For now, we'll make a global reference to the util class.
window.util = new Util();
