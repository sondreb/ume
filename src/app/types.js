class Profile {
    constructor() {
        this.id = null; // ID should be he publicKeyFingerprint from Identity.
        this.nickname = null;
        this.name = null;
        this.email = null;
        this.phone = null;
        this.location = null;
        this._type = 'Profile';
    }
}

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
        return CryptoUtil.uint8ArrayToHex(this.publicKeyFingerprint);
    }

    get displayName() {
        return CryptoUtil.uint8ArrayToHex(this.publicKeyFingerprint);
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
