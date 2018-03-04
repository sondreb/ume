import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { ApplicationState, Identity, StorageService, Guid, EqualValidator, InputValidators } from '../../framework';
import { ErrorStateMatcher } from '@angular/material/core';
import { AppDatabase } from '../../storage';
// const bip39 = require('bip39');
import * as bip39 from 'bip39';

declare var saveAs: Function;
declare var TextEncoder: any;
import { Cryptology } from '../../framework/utilities/cryptology';
import { HDNode } from 'bitcoinjs-lib';

/** Error when invalid control is dirty, touched, or submitted. */
// export class PasswordErrorStateMatcher implements ErrorStateMatcher {
// 	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {

// 		const passwordCtrl = (<any> control.parent.controls).password as FormControl;
// 		const confirmPasswordCtrl = (<any> control.parent.controls).password as FormControl;

// 		// Only validate when touched and dirty.
// 		if (passwordCtrl.touched && passwordCtrl.dirty && confirmPasswordCtrl.dirty && confirmPasswordCtrl.touched) {
// 			debugger;
// 			return ((<any> control.parent.controls).password.value !== (<any> control.parent.controls).confirmPassword.value);
// 		}

// 		return false;
// 	}
// }


@Component({
	selector: 'ume-identity-generate',
	templateUrl: './identity-generate.component.html',
	styleUrls: ['./identity-generate.component.scss']
})
export class IdentityGenerateComponent implements OnInit {

	// public model: Identity;
	public icons: string[];
	public mnemonic: string;
	public password1 = '';
	public password2 = '';
	public cryptology: Cryptology;
	// public form: any;

	// dateFormatted: new FormControl(this.forecast.dateFormatted, { validators: Validators.required, asyncValidators: [this.forecastValidators.existingDateValidator(this.forecast.dateFormatted)], updateOn: 'blur' }),

	public form = new FormGroup({
		password: new FormControl('', { updateOn: 'blur', validators: InputValidators.equal('confirmPassword', true) }),
		confirmPassword: new FormControl('', { updateOn: 'blur', validators: InputValidators.equal('password', false) })
	});

	// firstFormGroup: FormGroup;
	// secondFormGroup: FormGroup;
	// thirdFormGroup: FormGroup;

	// new FormControl(value, {updateOn: 'blur', asyncValidators: [myValidator]})
	// public matcher = new PasswordErrorStateMatcher();

	constructor(public appState: ApplicationState, public storage: StorageService, public router: Router, public db: AppDatabase, private fb: FormBuilder) {
		appState.main = false;
		appState.title = 'New user';
		appState.icon = 'hot_tub';

		this.cryptology = new Cryptology();

		// const model = new Identity();
		// model.id = 1;
		// model.id = Guid.newGuid().toString();

		// this.model = model;

		this.icons = ['accessible', 'android'];

		// this.form = this.fb.group({
		// 	password: ['', InputValidators.equal('confirmPassword')],
		// 	confirmPassword: ['', InputValidators.equal('password')]
		// });

		console.log(this.form);

		this.onGenerate();
	}

	ngOnInit() {
		// this.firstFormGroup = this.fb.group({
		// 	firstCtrl: ['']
		// });
		// this.secondFormGroup = this.fb.group({
		// 	secondCtrl: ['']
		// });
		// this.thirdFormGroup = this.fb.group({
		// 	secondCtrl: ['']
		// });
	}

	public saveFile(content, filename) {
		const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
		saveAs(blob, filename);
	}

	public onSave() {

		// TODO: Show form input error.
		if (this.password1 !== this.password2) {
			return;
		}

		this.saveFile(this.mnemonic, 'pass-phrase.key');
	}

	public async onLaunch() {
		// TODO: Show form input error.
		if (this.password1 !== this.password2) {
			return;
		}

		// Store the private key using WebCrypto, making it impossible for any code running in the app from reading the actual key value.

		await this.savePrivateKey(() => {
			// this.appState.authenticated = true;
			this.appState.sidenav = true;
			this.router.navigateByUrl('/');
		});
	}

	public stringToArrayBuffer(string) {
		const encoder = new TextEncoder('utf-8');
		return encoder.encode(string);
	}

	private async savePrivateKey(callback) {

		// TODO: Show form input error.
		if (this.password1 !== this.password2) {
			return;
		}

		const bufferSalt = this.stringToArrayBuffer('mnemonic' + this.password1);
		const buffer = this.stringToArrayBuffer(this.mnemonic);

		const cryptoKey = await window.crypto.subtle.importKey(
			'raw',
			buffer,
			{
				name: 'PBKDF2',
			},
			false,
			['deriveKey', 'deriveBits']
		);

		console.log(cryptoKey);

		// importedKey can be stored to IndexedDB for persistence across browser sessions.
		// To improve security, only the imported key could be persisted and user would be required to enter the salt (password) on every restart.
		const derivedKey = await window.crypto.subtle.deriveKey(
			{
				'name': 'PBKDF2',
				salt: bufferSalt,
				iterations: 2048,
				hash: { name: 'SHA-512' },
			},
			cryptoKey,
			{
				name: 'HMAC',
				hash: 'SHA-512',
				length: 512
			},
			true,
			['sign']
		);

		// Root Seed
		// Master Chain Code
		// Master Private Key
		// https://bitcoin.org/en/developer-guide#hierarchical-deterministic-key-creation
		// https://bitcoin.org/en/developer-guide#hardened-keys
		// https://raw.githubusercontent.com/bitcoin/bips/master/bip-0032/derivation.png

		// derivedKey can be stored to IndexedDB for persistance across browser sessions.
		// This is less secure, but more user friendly, not requiring user to supply their salt (password) on every use.
		const exportedKey = await window.crypto.subtle.exportKey('raw', derivedKey);
		const exportedKeyHex = this.cryptology.arrayBufferToHexString(exportedKey); // seed == exportedKeyHex - both values should be same.

		const root = HDNode.fromSeedHex(exportedKeyHex);

		console.log(root);

		// .deriveHardened(0).derive(0).derive(1)

		// Using 42 as the purpose-path for üme, since BIP44 introduced the usage of 44, future BIPs will likely use 44+.
		const account0 = root.derivePath('m/42\'/0\'/0\'');

		// Get the "address" (public key) of the root account.
		const address0 = account0.getAddress();

		// const xpubString = account0.neutered().toBase58();
		// const key0 = account0.derivePath('0/0').keyPair;
		// const key0FromXpub = account0.neutered().derivePath('0/0').keyPair;
		// const address0 = key0.getAddress();
		// const address0FromXpub = key0FromXpub.getAddress();

		// console.log('address0: ', address0);
		const identifier = this.cryptology.shortHash(address0);
		console.log('identifier: ', identifier);

		// const publicKeyHex = this.cryptology.arrayBufferToHexString(key0.getPublicKeyBuffer());
		// console.log(publicKeyHex);

		// $("#derived_public_key_hex").val(Crypto.util.bytesToHex(result.eckey.pub.getEncoded(true)));

		// const hexAddress = this.cryptology.arrayToHexString(address0);
		// console.log('Hex address: ' + hexAddress);

		// 15a3JRVLot7dVgBqa1GcXwC7wx3yf4dw1P
		// console.log(address0FromXpub);
		// 15a3JRVLot7dVgBqa1GcXwC7wx3yf4dw1P
		// console.log(address0 === address0FromXpub);
		// true
		// console.log(key0.toWIF());
		// KyLVo6gfg5QnPnk4j4bF15RTVey2aJBBbwwfPbPMBjY3rqiRz9Qa
		// console.log(key0FromXpub.toWIF());
		// Error: Missing private key
		//     at ECPair.toWIF (/home/linux/node_modules/bitcoinjs-lib/src/ecpair.js:122:22)

		await this.db.transaction('rw', this.db.identity, async () => {

			const identity = new Identity();
			identity.id = 1;

			identity.label = 'Master Identity';

			// Mnemonic Key, non-exportable
			identity.key = cryptoKey;

			// Root Seed, exportable
			identity.seed = derivedKey;

			// Master Node
			identity.root = root;

			// Wallet/Account
			identity.account = account0;

			// Private/Public key pair for this account / instance.
			// identity.address = address0;

			identity.address = address0;

			// Hashed public key (shortened)
			identity.identifier = identifier;

			// identity.signingKey = root;

			this.db.identity.put(identity);

		});

		this.appState.authenticated = true;

		callback();
	}

	public onGenerate() {
		this.mnemonic = bip39.generateMnemonic();

		// var text = document.getElementById('community-private-key').value;
	}

	public onPrint() {
		window.print();
	}

	public onSubmit() {

		console.log('FORM SUBMIT');
		this.onGenerate();

		// console.log(this.model);

		// this.db.identities.put(this.model);

		// // this.storage.put(this.model);

		// this.router.navigateByUrl('security/identities/' + this.model.id);
	}
}
