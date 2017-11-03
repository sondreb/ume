import { Injectable } from '@angular/core';
import { ApplicationState } from './application-state';

@Injectable()
export class ApplicationStateMock {
	public title: string;
	public main = true;
	public sidenav = true;
	public ismobile: boolean;
	public backUrl: string;
	public persist = false;
	public icon: string;

	constructor() {

	}

	public toggleNavigation() {
		this.sidenav = !this.sidenav;
	}
}

describe('Service: ApplicationState', () => {
	let service: ApplicationState;

	beforeEach(() => {
		service = new ApplicationState();
	});

	it('appState default values', () => {
		expect(service.main).toEqual(true);
		expect(service.sidenav).toEqual(true);
		expect(service.persist).toEqual(true);
	});

});
