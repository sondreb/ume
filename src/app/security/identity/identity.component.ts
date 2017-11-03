import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../framework';

@Component({
	selector: 'app-security-identity',
	templateUrl: './identity.component.html',
	styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit {

	constructor(public appState: ApplicationState) {

		this.appState.main = false;
		this.appState.title = 'Identity';

	}

	ngOnInit() {
	}

}
