import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationState, Identity, StorageService, Guid } from '../../framework';
import { AppDatabase } from '../../storage';

@Component({
	selector: 'ume-identities-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class CreateIdentityComponent implements OnInit {

	public model: Identity;
	public icons: string[];

	constructor(public appState: ApplicationState, public storage: StorageService, public router: Router, public db: AppDatabase) {

		appState.main = false;
		appState.title = 'Create identity';
		appState.icon = 'hot_tub';

		const model = new Identity();
		model.id = Guid.newGuid().toString();

		this.model = model;

		this.icons = ['accessible', 'android'];
	}

	ngOnInit() {
	}

	public onSubmit() {
		console.log(this.model);

		this.db.identities.put(this.model);

		// this.storage.put(this.model);

		this.router.navigateByUrl('security/identities/' + this.model.id);
	}
}
