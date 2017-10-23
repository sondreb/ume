import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public quota: string;
	public usage: string;
	private interval: any;

	constructor() { }

	ngOnInit() {

		// Calculate storage every 10 seconds.
		this.interval = setInterval(() => {
			this.updateUsedSpace();
		}, 10000);

		// Trigger an initial check.
		setTimeout(() => {
			this.updateUsedSpace();
		});
	}

	private updateUsedSpace() {
		const self = this;
		const nav = (<any>window.navigator);

		if (nav.storage) {
			nav.storage.estimate().then((data) => {
				self.quota = (data.quota / 1024 / 1024).toFixed(2);
				self.usage = (data.usage / 1024 / 1024).toFixed(2);
			});
		}
	}
}
