import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationState {
	public title: string;
	public main = true;
	public sidenav = true;
	public ismobile: boolean;
	public backUrl: string;
	public persist = true;
	public icon: string;

	constructor() {

	}

	public toggleNavigation() {
		this.sidenav = !this.sidenav;
	}
}
