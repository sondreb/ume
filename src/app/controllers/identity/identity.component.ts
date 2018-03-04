import { Component, OnInit, OnDestroy, } from '@angular/core';
import { ApplicationState, StorageService, Identity } from '../../framework';
import { ActivatedRoute } from '@angular/router';
import { HDNode, Transaction, ECPair, networks } from 'bitcoinjs-lib';
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

@Component({
	selector: 'ume-identity',
	templateUrl: './identity.component.html',
	styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit, OnDestroy {
	private subscription: any;

	public identity: Identity;

	constructor(public appState: ApplicationState, public storage: StorageService, public route: ActivatedRoute) {
		this.appState.main = false;
		this.appState.title = 'Identity';

		this.subscription = this.route.params.subscribe(params => {

			console.log(params);

			if (params.id) {
				// this.storage.get()
			}

		});
	}

	public ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	ngOnInit() {
		if (this.appState.identity) {
			console.log(this.appState.identity);

			this.identity = this.appState.identity;

			// importedKey can be stored to IndexedDB for persistence across browser sessions.
			// To improve security, only the imported key could be persisted and user would be required to enter the salt (password) on every restart.
			// window.crypto.subtle.deriveKey(
			// 	{
			// 		'name': 'PBKDF2',
			// 		salt: bufferSalt,
			// 		iterations: 2048,
			// 		hash: { name: 'SHA-512' },
			// 	},
			// 	importedKey,
			// 	{
			// 		name: 'HMAC',
			// 		hash: 'SHA-512',
			// 		length: 512
			// 	},
			// 	true,
			// 	['sign']
			// )
			// 	.then(function (derivedKey) {
			// 		// derivedKey can be stored to IndexedDB for persistance across browser sessions.
			// 		// This is less secure, but more user friendly, not requiring user to supply their salt (password) on every use.
			// 		window.crypto.subtle.exportKey('raw', derivedKey).then((exportedKey) => {
			// 			const exportedKeyHex = arrayBufferToHexString(exportedKey); // seed == exportedKeyHex - both values should be same.
			// 			const root2 = HDNode.fromSeedHex(exportedKeyHex);
			// 		});

			// 	});

		}
	}
}
