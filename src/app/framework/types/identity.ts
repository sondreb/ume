import { Cryptology } from '../utilities/cryptology';
import { ECPair, HDNode } from 'bitcoinjs-lib';

export class Identity {

	private cryptology: Cryptology;

	constructor() {
		this.cryptology = new Cryptology();
	}

	// public publicKey;
	// public privateKey;
	// public masterKey;
	// public publicKeyFingerprint;
	// public signingKey;
	// public verifyKey;
	// public verifyKeyFingerprint;
	public id: number;
	public type = 'Identity';
	public label: string;

	public key: CryptoKey;
	public seed: CryptoKey;

	public root: HDNode;
	public account: HDNode;
	// public pair: ECPair;

	public address: string;
	public identifier: string;

	// get id() {
	// 	return this.cryptology.uint8ArrayToHex(this.publicKeyFingerprint);
	// }

	// get displayName() {
	// 	return this.cryptology.uint8ArrayToHex(this.publicKeyFingerprint);
	// }
}
