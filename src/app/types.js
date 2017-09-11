class Identity {
    constructor() {
        this.publicKey = null;
        this.privateKey = null;
        this.publicKeyFingerprint = null;

        this.signingKey = null;
        this.verifyKey = null;
        this.verifyKeyFingerprint = null;
    }

    get id() {
        return arrayToHexString(this.publicKeyFingerprint);
    }
}