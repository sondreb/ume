import { Injectable } from '@angular/core';

declare var TextEncoder: any;
declare var TextDecoder: any;

@Injectable()
export class Conversions {

	convertStringToArrayBuffer(str) {
		const bytes = new TextEncoder().encode(str);
		return bytes;
	}

	convertArrayBufferToString(buffer) {
		const text = new TextDecoder('utf-8').decode(buffer);
		return text;
	}

	convertArrayBufferToBase64(buffer) {
		const arr = Array.prototype.slice.call(new Uint8Array(buffer)); // Create a normal array

		const arr1 = arr.map(function (item) {
			return String.fromCharCode(item);    // Convert
		});

		return window.btoa(arr1.join(''));   // Form a string
	}

	convertArrayToBase64(buffer) {
		let binary = '';
		const len = buffer.byteLength;
		for (let i = 0; i < len; i++) {
			binary += String.fromCharCode(buffer[i]);
		}
		return window.btoa(binary);
	}
}
