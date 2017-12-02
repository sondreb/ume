import { Injectable } from '@angular/core';
import { ApplicationState } from '../application-state';
import { LocalStorageService } from '../local-storage';
import { TestBed, async, getTestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ApplicationStateMock } from '../application-state.spec';
import { HDNode, Transaction, ECPair } from 'bitcoinjs-lib';

const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

describe('Utilities: Cryptology', () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [
				{ provide: ApplicationState, useClass: ApplicationStateMock }, // AppStateMock sets persist to false by default.
				LocalStorageService
			],
		});

		const testbed = getTestBed();
		// storage = testbed.get(StorageService);
	}));

	it('generate mnemonic and verify length', () => {




		// ECPair.fromWIF

		// const mnemonic = bip39.generateMnemonic();
		// expect(mnemonic.trim().split(/\s+/g).length).toBeGreaterThanOrEqual(12);

		// According to BIP39 specification, when user does not specify a password/passphrase, an empty string should be used.
		// const seed = bip39.mnemonicToSeedHex(mnemonic, '');
		// expect(seed).toBeDefined();
	});

	it('generate mnemonic and verify length', () => {
		const mnemonic = bip39.generateMnemonic();
		expect(mnemonic.trim().split(/\s+/g).length).toBeGreaterThanOrEqual(12);

		// According to BIP39 specification, when user does not specify a password/passphrase, an empty string should be used.
		const seed = bip39.mnemonicToSeedHex(mnemonic, '');
		expect(seed).toBeDefined();

		const node1 = HDNode.fromSeedHex(seed);
		console.log(node1.toBase58());

		const node2 = node1.derive(0);
		console.log(node2.toBase58());

		const node3 = node1.derive(0);
		console.log(node3.toBase58());

		const node4 = node1.derive(1);
		console.log(node4.toBase58());
	});

	it('generate mnemonic with passphrase', () => {

		const mnemonic = bip39.generateMnemonic();
		const passphrase = 'My Pass Phrase';

		const seed = bip39.mnemonicToSeedHex(mnemonic, passphrase);
		expect(seed).toBeDefined();

		// expect(phrase.trim().split(/\s+/g).length).toBeGreaterThanOrEqual(12);
		// console.log(phrase);
	});

	it('perform deterministic validation of mnemonic and passphrase', () => {

		const mnemonic = 'situate bid venue strategy chase bird split pact spatial romance mobile furnace';
		const passphrase = 'My Pass Phrase';

		const seed = bip39.mnemonicToSeedHex(mnemonic, passphrase);
		expect(seed).toEqual('7cb0e9ffc485a593563ef7e68dc3bd70661ca5911b99bd45198a9ce7a44813499972aca893c1b3214ac5cafb727388d2329530b44aa2380b569761419b535f9a');

		// expect(phrase.trim().split(/\s+/g).length).toBeGreaterThanOrEqual(12);
		// console.log(phrase);
	});

	it('validate that validation works properly', () => {

		const mnemonicOk = 'situate bid venue strategy chase bird split pact spatial romance mobile furnace';
		const mnemonicInvalid = 'world bid venue strategy chase bird split pact spatial romance mobile furnace';

		expect(bip39.validateMnemonic(mnemonicOk)).toBeTruthy();
		expect(bip39.validateMnemonic(mnemonicInvalid)).toBeFalsy();

		// expect(phrase.trim().split(/\s+/g).length).toBeGreaterThanOrEqual(12);
		// console.log(phrase);
	});

	it('there and back again', () => {

		const mnemonic = 'situate bid venue strategy chase bird split pact spatial romance mobile furnace';

		const entropy = bip39.mnemonicToEntropy(mnemonic);
		expect(entropy).toEqual('c9a2c3c9eb626a2d348cf5d0977239af');

		expect(bip39.entropyToMnemonic(entropy)).toEqual(mnemonic);

		// console.log(entropy);

		//

		// expect(bip39.validateMnemonic(mnemonicOk)).toBeTruthy();
		// expect(bip39.validateMnemonic(mnemonicInvalid)).toBeFalsy();

		// expect(phrase.trim().split(/\s+/g).length).toBeGreaterThanOrEqual(12);
		// console.log(phrase);
	});
});
