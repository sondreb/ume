import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../framework';
import { AppDatabase } from '../../storage';

@Component({
	selector: 'ume-wipe',
	templateUrl: './wipe.component.html',
	styleUrls: ['./wipe.component.css']
})
export class WipeComponent implements OnInit {

	constructor(public appState: ApplicationState, public db: AppDatabase) {

		this.appState.main = false;
		this.appState.title = 'Clear Device';
		this.appState.icon = 'delete_forever';

	}

	ngOnInit() {
	}

	public wipeDevice() {
		console.log('Attempting to delete IndexeDB database...');

		this.db.delete().then(() => {
			console.log('Database successfully deleted');
		}).catch((err) => {
			console.error('Could not delete database');
		}).finally(() => {
			// Do what should be done next...

			// We'll clean up the Dexie db as well.
			indexedDB.deleteDatabase('__dbnames');

			// Force a reload.
			window.location.reload(true);
		});

		// console.log('Database deleted.');
	}

}
