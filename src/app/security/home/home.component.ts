import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../framework';

@Component({
	selector: 'app-security-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(public appState: ApplicationState) {

		this.appState.main = false;
		this.appState.title = 'Security';

	}

	ngOnInit() {
	}

}
