import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	public version: string;

	constructor() { }

	ngOnInit() {
		this.version = (<any> window).ume.version;
	}
}
