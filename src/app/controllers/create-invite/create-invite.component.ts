import { Component, OnInit } from '@angular/core';
import { ApplicationState, Community, StorageService, Guid } from '../../framework';

@Component({
	selector: 'ume-create-invite',
	templateUrl: './create-invite.component.html',
	styleUrls: ['./create-invite.component.scss']
})
export class CreateInviteComponent implements OnInit {

	public model: Community;
	public icons: string[];

	constructor(public appState: ApplicationState, public storage: StorageService) {

		appState.main = false;
		appState.title = 'Create invite';
		appState.icon = 'vpn_key';

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
