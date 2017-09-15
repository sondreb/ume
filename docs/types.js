class Identity {
    constructor() {
        this.publicKey = null;
        this.privateKey = null;
        this.publicKeyFingerprint = null;

        this.signingKey = null;
        this.verifyKey = null;
        this.verifyKeyFingerprint = null;

        this._type = 'Identity';
    }

    get id() {
        return arrayToHexString(this.publicKeyFingerprint);
    }
}

class Gateway {
    constructor() {
        this.name = null;
        this.url = null;
        this._type = 'Gateway';
    }
}


class Community {
    constructor() {
        this.name = null;
        this.id = null;
        this.description = null;
        this.publicKey = null;
        this.publicKeyFingerprint = null;
        this.privateKey = null;
        this.passPhrase = null;
        this.passPhraseKey = null;
        this.passPhraseCipher = null;
        this.gateway = null;
        this._type = 'Community';
    }
}
