import { Component, OnInit } from '@angular/core';
import { ApplicationState, LocalStorageService } from '../../framework';

@Component({
	selector: 'ume-network',
	templateUrl: './network.component.html',
	styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {

	constructor(public appState: ApplicationState, public storage: LocalStorageService) { }

	ngOnInit() {
		this.appState.main = false;
		this.appState.title = 'Network';
		this.storage.set('test', 'test');
		this.storage.set('test2', 'test2');

		const test = this.storage.get('test');


		this.storage.set('test', null);
	}
}
