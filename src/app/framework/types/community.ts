export class Community {
	public name: string;
	public id: string;
	public description: string;
	public publicKey;
	public publicKeyFingerprint;
	public privateKey;
	public passPhrase;
	public passPhraseKey;
	public passPhraseCipher;
	public gateway;
	public type = 'Community';
}
