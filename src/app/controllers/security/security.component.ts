import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../framework';

@Component({
	selector: 'ume-security',
	templateUrl: './security.component.html',
	styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

	constructor(public appState: ApplicationState) {

		this.appState.main = false;
		this.appState.title = 'Security';

	}

	ngOnInit() {
	}

}
