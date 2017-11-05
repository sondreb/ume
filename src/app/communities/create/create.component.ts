import { Component, OnInit } from '@angular/core';
import { ApplicationState, Community } from '../../framework';

@Component({
	selector: 'ume-communities-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class CreateCommunityComponent implements OnInit {

	public model: Community;
	public icons: string[];

	constructor(public appState: ApplicationState) {

		appState.main = false;
		appState.title = 'Create community';
		appState.icon = 'hot_tub';

		const model = new Community();

		this.model = model;

		this.icons = ['accessible', 'android'];
	}

	ngOnInit() {
	}

	public onSubmit() {
		console.log(this.model);
	}

}
