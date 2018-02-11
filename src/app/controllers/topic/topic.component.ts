import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../framework';

@Component({
	selector: 'ume-topic',
	templateUrl: './topic.component.html',
	styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

	constructor(public appState: ApplicationState) {

		appState.main = false;
		appState.title = 'Topic';
		appState.icon = 'favorite';

	}

	ngOnInit() {
	}

}
