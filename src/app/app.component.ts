import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApplicationState, StorageService } from './framework';
import { Identity } from './framework/types';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
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

	constructor(public appState: ApplicationState, public media: ObservableMedia, public storage: StorageService, public db: AppDatabase) {
		appState.main = true;

		this.statusIcon = 'info_outline';
		this.statusText = 'Loading database...';

		db.open().then(result => {
			console.log('Dexie:', result);

			setTimeout(() => {
				this.statusIcon = 'info';
				this.statusText = 'Database loaded. Connecting to network...';
			}, 1000);

		});

		db.transaction('rw', db.identities, async () => {

			const identity1 = new Identity();
			// identity1.displayName = 'TEST';
			identity1.id = '124';
			identity1.label = 'My Identity';

			db.identities.put(identity1);

		}).then(result => {
			console.log('Identity inserted!');
			console.log(result);
		});

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
		this.appState.ismobile = (this.media.isActive('xs'));

		this.watcher = this.media.subscribe((change: MediaChange) => {
			this.appState.ismobile = (change.mqAlias === 'xs');
		});

		if (this.appState.ismobile) {
			this.appState.sidenav = false;
		}


	}

	public ngOnDestroy() {
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
