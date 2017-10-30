import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../framework/application-state';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(public appState: ApplicationState) { }

	ngOnInit() {
		this.appState.main = true;
	}
}
