import { Cryptology } from '../utilities/cryptology';

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

	// get id() {
	// 	return this.cryptology.uint8ArrayToHex(this.publicKeyFingerprint);
	// }

	// get displayName() {
	// 	return this.cryptology.uint8ArrayToHex(this.publicKeyFingerprint);
	// }
}
