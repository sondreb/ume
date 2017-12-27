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
	selector: 'ume-security-generate',
	templateUrl: './generate.component.html',
	styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

	public model: Identity;
	public icons: string[];
	public mnemonic: string;
	public password1 = '';
	public password2 = '';
	// public form: any;

	// dateFormatted: new FormControl(this.forecast.dateFormatted, { validators: Validators.required, asyncValidators: [this.forecastValidators.existingDateValidator(this.forecast.dateFormatted)], updateOn: 'blur' }),

	public form = new FormGroup({
		password: new FormControl('', { updateOn: 'blur', validators: InputValidators.equal('confirmPassword', true) }),
		confirmPassword: new FormControl('', { updateOn: 'blur', validators: InputValidators.equal('password', false) })
	});

	// new FormControl(value, {updateOn: 'blur', asyncValidators: [myValidator]})
	// public matcher = new PasswordErrorStateMatcher();

	constructor(public appState: ApplicationState, public storage: StorageService, public router: Router, public db: AppDatabase) {
		appState.main = false;
		appState.title = 'New user';
		appState.icon = 'hot_tub';

		const model = new Identity();
		model.id = Guid.newGuid().toString();

		this.model = model;

		this.icons = ['accessible', 'android'];

		// this.form = this.fb.group({
		// 	password: ['', InputValidators.equal('confirmPassword')],
		// 	confirmPassword: ['', InputValidators.equal('password')]
		// });

		console.log(this.form);
	}

	ngOnInit() {
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

		await this.savePrivateKey();

		// this.appState.authenticated = true;
		// this.router.navigateByUrl('/');
	}

	public stringToArrayBuffer(string) {
		const encoder = new TextEncoder('utf-8');
		return encoder.encode(string);
	}

	private async savePrivateKey() {

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
	}

	public onGenerate() {
		this.mnemonic = bip39.generateMnemonic();

		// var text = document.getElementById('community-private-key').value;
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
