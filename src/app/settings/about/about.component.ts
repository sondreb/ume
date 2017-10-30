import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../framework/application-state';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	public version: string;

	constructor(public appState: ApplicationState) {

		//this.appState.title = 'About üme';

	}

	ngOnInit() {
		this.version = (<any> window).ume.version;
	}
}
