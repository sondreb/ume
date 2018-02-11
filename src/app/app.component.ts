import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApplicationState, StorageService } from './framework';
import { Identity } from './framework/types';
import { Subscription } from 'rxjs/Subscription';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { AppDatabase } from './storage';

@Component({
	selector: 'ume-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	public title = 'app';
	watcher: Subscription;
	activeMediaQuery = '';

	public menuOpened = true;
	public statusIcon = '';
	public statusText = '';
	// private subscription;

	constructor(public appState: ApplicationState, public media: ObservableMedia, public storage: StorageService, public db: AppDatabase) {
		appState.main = true;

		this.statusIcon = 'info_outline';
		this.statusText = 'Loading database...';

		// this.subscription = $media.subscribe((change:MediaChange) => {
		// 	this.isOpen = (change.mqAlias !== 'xs');
		// 	this.mediaChange = change;
		// });

		// db.transaction('rw', db.identities, async () => {

		// 	const identity1 = new Identity();
		// 	// identity1.displayName = 'TEST';
		// 	identity1.id = '124';
		// 	identity1.label = 'My Identity';

		// 	db.identities.put(identity1);

		// }).then(result => {
		// 	console.log('Identity inserted!');
		// 	console.log(result);
		// });

		// During development, we'll delete the database on each reload. Uncomment this part as needed during development.
		// storage.deleteDatabase().then(() => {

		// storage.initialize().then((db) => {

		// 	console.log('Database Initialized', db);

		// 	// Simple hard-coded timeout to verify UI operate correctly.
		// 	setTimeout(() => {
		// 		this.statusIcon = 'info';
		// 		this.statusText = 'Database loaded. Connecting to network...';
		// 	}, 1000);

		// 	this.storage.getAll('Identity').then(identities => {
		// 		console.log(identities.result);
		// 	});


		// });

		// });

		// Initial load on mobile devices, we'll hide the menu.

		// this.watcher = media.subscribe((change: MediaChange) => {
		// 	this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
		// 	if (change.mqAlias === 'xs') {
		// 		this.loadMobileContent();
		// 	}
		// });
	}

	public loadMobileContent() {
		// Do something special since the viewport is currently
		// using mobile display sizes
	}

	public async ngOnInit() {

		const result = await this.db.open();
		console.log('Dexie:', result);

		setTimeout(() => {
			this.statusIcon = 'info';
			this.statusText = 'Database loaded. Connecting to network...';
		}, 1000);

		// Get the identity, if it exists.
		const identity = await this.db.identity.get(1);

		if (identity) {
			this.appState.authenticated = true;
		}

		// .then(result => {

		// });

		this.appState.ismobile = (this.media.isActive('xs'));

		this.watcher = this.media.subscribe((change: MediaChange) => {

			this.appState.ismobile = (change.mqAlias === 'xs');

			// Enforce the sidenav when not on mobile.
			if (!this.appState.ismobile) {
				this.appState.sidenav = true;
			}
		});

		if (this.appState.ismobile) {
			this.appState.sidenav = false;
		}
	}

	public ngOnDestroy() {
		// this.subscription.unsubscribe();
		this.watcher.unsubscribe();
	}

	public onMenu(open: boolean = true) {
		console.log('onMenu!', open);
		this.menuOpened = open;
	}

	public onBackdrop() {
		this.appState.sidenav = !this.appState.sidenav;
	}
}
