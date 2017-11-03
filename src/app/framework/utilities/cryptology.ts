import { Conversions } from './conversions';

declare var TextEncoder: any;
declare var TextDecoder: any;
declare var Uint8Array: any;

export class Cryptology {

	constructor() {

	}

	public async exportPublicKey(key) {
		return await window.crypto.subtle.exportKey('spki', key);
	}

	public async exportPrivateKey(key) {
		return await window.crypto.subtle.exportKey('pkcs8', key);
	}

	public async uint8ArrayToHex(data, sep = '') {
		let a, h = '';
		const ch = sep ? sep : '';
		for (let i = 0, len = data.length; i !== len; ++i) {
			a = data[i];
			h += i > 0 ? ch : '';
			h += a < 16 ? '0' : '';
			h += a.toString(16);
		}
		return h;
	}

	public hexToUint8Array(data) {

		if (!data) {
			return new Uint8Array();
		}

		const a = [];
		for (let i = 0, len = data.length; i < len; i += 2) {
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

	public stringToArrayBuffer(string) {
		const encoder = new TextEncoder('utf-8');
		return encoder.encode(string);
	}

	public arrayToHexString(byteArray) {
		let hexString = '';
		let nextHexByte;

		for (let i = 0; i < byteArray.byteLength; i++) {
			nextHexByte = byteArray[i].toString(16);  // Integer to base 16
			if (nextHexByte.length < 2) {
				nextHexByte = '0' + nextHexByte;     // Otherwise 10 becomes just a instead of 0a
			}
			hexString += nextHexByte;
		}
		return hexString;
	}

	public arrayBufferToHexString(arrayBuffer) {
		const byteArray = new Uint8Array(arrayBuffer);
		let hexString = '';
		let nextHexByte;

		for (let i = 0; i < byteArray.byteLength; i++) {
			nextHexByte = byteArray[i].toString(16);  // Integer to base 16
			if (nextHexByte.length < 2) {
				nextHexByte = '0' + nextHexByte;     // Otherwise 10 becomes just a instead of 0a
			}
			hexString += nextHexByte;
		}
		return hexString;
	}

	public convertUint8ArrayToText(data) {
		let s = '';
		for (let i = 0, len = data.length; i !== len; ++i) {
			s += String.fromCharCode(data[i]);
		}
		return s;
	}

	public convertUint8ArrayToBase64(data) {
		const s = this.convertUint8ArrayToText(data);
		return window.btoa(s);
	}
}
