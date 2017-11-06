import { Component, OnInit } from '@angular/core';
import { ApplicationState, Community, StorageService, Guid } from '../../framework';

@Component({
	selector: 'ume-communities-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class CreateCommunityComponent implements OnInit {

	public model: Community;
	public icons: string[];

	constructor(public appState: ApplicationState, public storage: StorageService) {

		appState.main = false;
		appState.title = 'Create community';
		appState.icon = 'hot_tub';

		const model = new Community();
		model.id = Guid.newGuid().toString();

		this.model = model;

		this.icons = ['accessible', 'android'];
	}

	ngOnInit() {
	}

	public onSubmit() {
		console.log(this.model);
		this.storage.put(this.model);
	}
}
