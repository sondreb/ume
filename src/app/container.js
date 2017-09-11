/// <reference path="./app.js"/>

class Container {

    // Should we consider adding random length of random data in the start and end of messages, or is the IV/data suppled for encryption enough to avoid
    // attacks? Using a JSON structure means the first value will always be { and last will always be }. Something to consider for the future.


    // CONTAINER > MESSAGE > CONTENT

    // The container holds the community ID and the encrypted message. Message is encrypted with community public key.
    // The message contains unique ID of the community member who published the message. This is used to decrypt the message content.

    // CONTAINER
    //          COMMUNITY ID
    //          MESSAGE (Encrypted with community public key)

    // MESSAGE
    //          COMMUNITY ID
    //          USER ID (hash derived from user public key, used to query local storage of keys)
    //          TYPE = "INVITE", "POST", "KEY"
    //          CONTENT (Encrypted with user's public key (AES))

    // CONTENT
    //          COMMUNITY ID
    //          CONTENT ID (Unique identifier, used for edits and replacements)
    //          USER ID (hash derived from user public key)
    //          SIGNATURE
    //          BODY
    //              TOPIC
    //

    // CONTAINER ENTITIES are stored in an event log on each device, but not every type.
    // NOT PERSISTED: type = "invite" are not stored in history.


    // TODO: Investigate if this is secure enough? Since we require a broadcast of these messages, it is harder to do encryption with session keys derived from the public/private pair.
    // We additionally want (and need to) keep a copy of the encrypted messages (or containers) so they can be re-sent to other users on the network.

    constructor(message) {
        this.message = message;
        this.community = message.community;
    }

    async encrypt() {

        if (!this.community) {
            throw new Error('Cannot encrypt the container without a community id specified');
        }

        debugger;

        var communityEntity = window.ume.storage.communities.findOne({ 'id': this.community });

        var decodedPublicKey = atob(communityEntity.publicKey);
        console.log(decodedPublicKey);

        var communityPublicKeyArray = JSON.parse(decodedPublicKey);
        console.log(communityPublicKeyArray);

        var communityPublicKey = await importJwkFromKeyObject(communityPublicKeyArray, true);
        console.log(communityPublicKey);

        // Turn the message into a JSON string.
        var message = JSON.stringify(this.message);

        // Encrypt the message using the user's public key.
        var encryptedMessage = await encryptContent(communityPublicKey, message, null);

        return encryptedMessage;

        // Encrypt the container with the community public key.

        // First encrypt the message content.
        //this.message.encrypt();

        // Grab the community public key based on the communityId on this instance and encrypt the container.





    }

    decrypt() {

    }

}

/** Message type which is encrypted with community public key. */
class Message {
    constructor(content) {

        /** The content is encrypted with a user's public key */
        this.content = content;

        this.community = content.community;

        this.user = content.user;

        /** Type on the message is used to know if this is an invite, post or something else. If it is an invite, we won't be attempting to decrypt unless we know the current user is owner of the community. */
        this.type = content.type;
    }

    encrypt() {

        if (!this.user) {
            throw new Error('Cannot encrypt the message without a user id specified.');
        }

    }

    decrypt() {

    }
}

class Content {
    constructor() {
        this.community = null;
        this.user = null;
        this.id = null;
        this.signature = null;
        this.body = null;
        this.type = null;
    }

    /** Allows a content object to be wrapped inside a message and container. The result is not encrypted, must call encrypt on the results before transfering on the network. */
    static wrap(content) {
        var message = new Message(content);
        var container = new Container(message);
        return container;
    }
}