import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../framework';

@Component({
	selector: 'ume-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	public version: string;

	constructor(public appState: ApplicationState) {
		this.appState.title = 'About';
	}

	ngOnInit() {
		this.version = (<any> window).ume.version;
	}
}
