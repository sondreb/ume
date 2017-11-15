import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../framework';

@Component({
	selector: 'ume-chat-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(public appState: ApplicationState) {

		appState.main = false;
		appState.title = 'Chat';
		appState.icon = 'favorite';

	}

	ngOnInit() {
	}

}
