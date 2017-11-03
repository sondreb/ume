import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../framework';

@Component({
	selector: 'app-security-introduction',
	templateUrl: './introduction.component.html',
	styleUrls: ['./introduction.component.css']
})
export class SecurityIntroductionComponent implements OnInit {

	constructor(public appState: ApplicationState) {
		this.appState.main = false;
		this.appState.title = 'Security brief';
	}

	ngOnInit() {
	}

}
