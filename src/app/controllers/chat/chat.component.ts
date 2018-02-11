import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../framework';

@Component({
	selector: 'ume-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
	constructor(public appState: ApplicationState) {
		appState.main = false;
		appState.title = 'Chat';
		appState.icon = 'favorite';
	}

	ngOnInit() { }
}
