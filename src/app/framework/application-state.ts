import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationState {
	public title: string;
	public main = true;
	public sidenav = false;
	public ismobile: boolean;
	public backUrl: string;
	public persist = true;
	public icon: string;
	public authenticated = false;

	constructor() {

	}

	public toggleNavigation() {
		this.sidenav = !this.sidenav;
	}
}
