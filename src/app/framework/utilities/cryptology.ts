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

	// public async performanceTest(mnemonic, passphrase) {

	// 	const startTime2 = new Date();

	// 	for (let i = 0; i < 100; i++) {
	// 		await this.performanceTestInternal(mnemonic, passphrase);
	// 	}

	// 	const endTime2 = new Date();
	// 	const timeDiff2 = endTime2 - startTime2;
	// 	console.log('DIFF2: ' + timeDiff2);
	// }

	// public async performanceTestInternal(mnemonic, passphrase) {

	// 	const buffer = this.stringToArrayBuffer(mnemonic);
	// 	const bufferSalt = this.stringToArrayBuffer('mnemonic' + passphrase);

	// 	// This could be used with async/await pattern, to simplify the code.
	// 	const importedKey = await window.crypto.subtle.importKey(
	// 		'raw',
	// 		buffer,
	// 		{
	// 			name: 'PBKDF2',
	// 		},
	// 		false,
	// 		['deriveKey']
	// 	);

	// 	const derivedKey = await window.crypto.subtle.deriveKey(
	// 		{
	// 			'name': 'PBKDF2',
	// 			salt: bufferSalt,
	// 			iterations: 2048,
	// 			hash: { name: 'SHA-512' },
	// 		},
	// 		importedKey,
	// 		{
	// 			name: 'HMAC',
	// 			hash: 'SHA-512',
	// 			length: 512
	// 		},
	// 		true,
	// 		['sign']
	// 	);

	// 	const exportedKeyHex = window.crypto.subtle.exportKey('raw', derivedKey);

	// 	// .then((exportedKey) => {
	// 	// 	const exportedKeyHex = util.arrayBufferToHexString(exportedKey); // seed == exportedKeyHex - both values should be same.
	// 	// 	const root2 = HDNode.fromSeedHex(exportedKeyHex);
	// 	// });

	// 	// 	.then(function (derivedKey) {
	// 	// 	// derivedKey can be stored to IndexedDB for persistance across browser sessions.
	// 	// 	// This is less secure, but more user friendly, not requiring user to supply their salt (password) on every use.


	// 	// });
	// 	// });
	// }

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
