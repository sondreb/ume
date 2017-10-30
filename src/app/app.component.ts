import { Component } from '@angular/core';
import { ApplicationState } from './framework/application-state';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public title = 'app';
	watcher: Subscription;
	activeMediaQuery = '';

	public menuOpened = true;

	constructor(public appState: ApplicationState, public media: ObservableMedia) {
		appState.main = true;


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

	public ngOnInit() {
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
