import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../framework/application-state';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

	constructor(public appState: ApplicationState) {
		appState.main = false;
		appState.title = 'Settings';
	}

	ngOnInit() {
	}

}
