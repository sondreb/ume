import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../framework';

@Component({
	selector: 'app-security-restore',
	templateUrl: './restore.component.html',
	styleUrls: ['./restore.component.scss']
})
export class RestoreComponent implements OnInit {

	constructor(public appState: ApplicationState) {

		this.appState.main = false;
		this.appState.title = 'Restore from pass phrase';
		// this.appState.icon = 'vpn_key';
		this.appState.icon = 'restore';

	}

	ngOnInit() {
	}

}
