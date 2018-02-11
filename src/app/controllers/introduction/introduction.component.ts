import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../framework';

@Component({
	selector: 'ume-introduction',
	templateUrl: './introduction.component.html',
	styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

	constructor(public appState: ApplicationState) {
		this.appState.main = false;
		this.appState.title = 'Introduction';
	}

	ngOnInit() {
	}

}
