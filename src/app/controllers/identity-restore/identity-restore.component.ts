import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../framework';

@Component({
	selector: 'ume-identity-restore',
	templateUrl: './identity-restore.component.html',
	styleUrls: ['./identity-restore.component.scss']
})
export class IdentityRestoreComponent implements OnInit {

	constructor(public appState: ApplicationState) {

		this.appState.main = false;
		this.appState.title = 'Restore from pass phrase';
		// this.appState.icon = 'vpn_key';
		this.appState.icon = 'restore';

	}

	ngOnInit() {
	}

}
