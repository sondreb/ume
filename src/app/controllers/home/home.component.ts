import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../framework';

@Component({
	selector: 'ume-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(public appState: ApplicationState) {
		console.log('HOME!');
		appState.title = '';
	}

	ngOnInit() {
		this.appState.main = true;
	}
}
