import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../framework';

@Component({
	selector: 'ume-communities',
	templateUrl: './communities.component.html',
	styleUrls: ['./communities.component.css']
})
export class CommunitiesComponent implements OnInit {

	constructor(public appState: ApplicationState) {

		appState.main = false;
		appState.title = 'Communities';
		appState.icon = 'hot_tub';

	}

	ngOnInit() {
	}

}
