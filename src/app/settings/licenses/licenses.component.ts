import { Component, OnInit } from '@angular/core';
import { Response, Http } from '@angular/http';

@Component({
	selector: 'app-licenses',
	templateUrl: './licenses.component.html',
	styleUrls: ['./licenses.component.scss']
})
export class LicensesComponent implements OnInit {

	public version: string;
	public licenses: string;

	constructor(public http: Http) {

	}

	ngOnInit() {
		this.version = (<any> window).ume.version;
		this.http.request('3rdpartylicenses.txt').subscribe(response => this.licenses = response.text());
	}
}
