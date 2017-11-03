import { Injectable } from '@angular/core';
import { ApplicationState } from '../application-state';
import { StorageService } from '../storage';
import { TestBed, async, getTestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ApplicationStateMock } from '../application-state.spec';
import { HDNode, Transaction } from 'bitcoinjs-lib';

const bip39 = require('bip39');

describe('Utilities: Cryptology', () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [
				{ provide: ApplicationState, useClass: ApplicationStateMock }, // AppStateMock sets persist to false by default.
				StorageService
			],
		});

		const testbed = getTestBed();
		// storage = testbed.get(StorageService);
	}));

	it('generate passphrase and verify length', () => {
		const phrase = bip39.generateMnemonic();
		expect(phrase.trim().split(/\s+/g).length).toBeGreaterThanOrEqual(12);
		console.log(phrase);
	});
});
