import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public title = 'app';

	public menuOpened = true;

	constructor() { }

	public ngOnInit() {

	}

	public onMenu(open: boolean = true) {
		console.log('onMenu!', open);
		this.menuOpened = open;
	}
}
