import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationState, Identity, StorageService, Guid } from '../../framework';
import { AppDatabase } from '../../storage';
// const bip39 = require('bip39');
import * as bip39 from 'bip39';

declare var saveAs: Function;

@Component({
	selector: 'ume-security-generate',
	templateUrl: './generate.component.html',
	styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

	public model: Identity;
	public icons: string[];
	public mnemonic: string;

	constructor(public appState: ApplicationState, public storage: StorageService, public router: Router, public db: AppDatabase) {

		appState.main = false;
		appState.title = 'New user';
		appState.icon = 'hot_tub';

		const model = new Identity();
		model.id = Guid.newGuid().toString();

		this.model = model;

		this.icons = ['accessible', 'android'];
	}

	ngOnInit() {
	}

	public saveFile(content, filename) {
		const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
		saveAs(blob, filename);
	}

	public onSave() {
		this.saveFile(this.mnemonic, 'pass-phrase.key');
	}

	public onLaunch() {
		this.appState.authenticated = true;
		this.router.navigateByUrl('/');
	}

	public onGenerate() {
		this.mnemonic = bip39.generateMnemonic();

		// var text = document.getElementById('community-private-key').value;
	}

	public onSubmit() {

		this.onGenerate();

		// console.log(this.model);

		// this.db.identities.put(this.model);

		// // this.storage.put(this.model);

		// this.router.navigateByUrl('security/identities/' + this.model.id);
	}
}
