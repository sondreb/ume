import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../framework';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(public appState: ApplicationState) {

		console.log('HGOME!');

	 }

	ngOnInit() {
		this.appState.main = true;
	}
}
