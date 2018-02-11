import { Component, OnInit, OnDestroy, } from '@angular/core';
import { ApplicationState, StorageService, Identity } from '../../framework';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'ume-identity',
	templateUrl: './identity.component.html',
	styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit, OnDestroy {

	private subscription: any;

	constructor(public appState: ApplicationState, public storage: StorageService, public route: ActivatedRoute) {

		this.appState.main = false;
		this.appState.title = 'Identity';

		this.subscription = this.route.params.subscribe(params => {

			console.log(params);

			if (params.id) {
				// this.storage.get()
			}

		});

	}

	public ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	ngOnInit() {
	}

}
