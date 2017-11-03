import { Injectable } from '@angular/core';
import { ApplicationState } from './application-state';
import { StorageService } from './storage';
import { TestBed, async, getTestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ApplicationStateMock } from './application-state.spec';

describe('Service: Storage', () => {
	let storage: StorageService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [
				{ provide: ApplicationState, useClass: ApplicationStateMock }, // AppStateMock sets persist to false by default.
				StorageService
			],
		});

		const testbed = getTestBed();
		storage = testbed.get(StorageService);
	}));

	it('should set and get value', () => {
		storage.set('test01', 'value01');
		expect(storage.get('test01')).toEqual('value01');
	});

});
