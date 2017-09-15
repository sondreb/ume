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