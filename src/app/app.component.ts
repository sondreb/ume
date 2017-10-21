import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public title = 'app';

	public menuOpened = false;

	constructor() { }

	public onMenu(open: boolean = true) {

		console.log('onMenu!', open);

		this.menuOpened = open;
	}
}
