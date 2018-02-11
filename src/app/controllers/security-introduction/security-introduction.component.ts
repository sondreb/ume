import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../framework';

@Component({
	selector: 'ume-security-introduction',
	templateUrl: './security-introduction.component.html',
	styleUrls: ['./security-introduction.component.css']
})
export class SecurityIntroductionComponent implements OnInit {

	constructor(public appState: ApplicationState) {
		this.appState.main = false;
		this.appState.title = 'Security brief';
	}

	ngOnInit() {
	}

}
