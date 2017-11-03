import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../framework';

@Component({
	selector: 'app-communities-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(public appState: ApplicationState) {

		appState.main = false;
		appState.title = 'Communities';
		appState.icon = 'hot_tub';

	}

	ngOnInit() {
	}

}
