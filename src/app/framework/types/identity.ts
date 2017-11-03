import { Cryptology } from '../utilities/cryptology';

export class Identity {

	private cryptology: Cryptology;

	constructor() {
		this.cryptology = new Cryptology();
	}

	public publicKey;
	public privateKey;
	public publicKeyFingerprint;
	public signingKey;
	public verifyKey;
	public verifyKeyFingerprint;
	public type = 'Identity';

	get id() {
		return this.cryptology.uint8ArrayToHex(this.publicKeyFingerprint);
	}

	get displayName() {
		return this.cryptology.uint8ArrayToHex(this.publicKeyFingerprint);
	}
}
