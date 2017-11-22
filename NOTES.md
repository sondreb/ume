# System Flows

## Invitation Flow

1. User generates new community invite key (open or private)
2. Invite key is distributed to user(s) through other means, such as email, sms, IM.
3. Receivers of community invites navigates to any hosted version of **ume** and fills out the invitation key.
4. User receives a new public and private key pair. Keys can be stored as files on local disk drive, and/or be persisted in the web browser.

## Message (Publish) Flow
1. User creates a new content to publish to a community.
2. The content is encrypted with the user's private key.
3. The content is added to a message, that contains the unique community ID.
4. Message is sent to gateway and forwarded to all users of the community which is currently using the app.


## State Management Flow

Each node (user) in the network needs to keep track of what messages they have received, and be able to push messages that are requested by participating nodes (users).

Flow:
USER1 and USER3 has the same 99 of 100 messages available. Each message have a unique hash or identifier that identifies them. Those messages have already been verified to decrypt properly and be signed properly.

USER2 has 10 of 100 messages available, including the message (new) that is missing from USER1.

USER2 connects to a gateway and upon connecting, announces what hashes the user has.

For future scaling perspective: One SHA256 hash is 32-bytes (64-byte HEX), so 1000 messages should equal 3.2 kB. 3.2 million hashes equals only 3.2 MB.

Now the question of orchestration begins:

Should all (USER1 and USER3) connected nodes, send a copy of their additional copies that USER2 is missing? Meaning that USER2 would have do receive the whole message twice, and then decrypt and validate the message twice. This calculation requirement increase N exponent (message * nodes). With a large community, this would greatly increase the bandwidth and CPU usage and requirement.

Another solution could be that USER1 iterates through all connected nodes, establishes exchange keys and transfers both it's own extra messages, and receives it's own missing messages. This would be beneficial in two ways: Additional layer of encryption, ensuring that the same cipher is never transfered to the gateway, even when it's the actual same encrypted (cipher) message being transfered. The keys generated and exchange can be discarded when a node moves on to the next node. Second, the amount of processing would increase a bit (additional encrypt and decrypt), but bandwidth reduced.

A third option, and one that can be combined with the second solution, is for a new node to announce itself and then receive list of hashes from all nodes. Then doing a distinct sort, connect to the nodes that has messages available (random selection somehow?) and sync those across. If one of the nodes goes down during an sync, a re-calculation of node selection can be made by the newly connected node.


## Pass Phrase (BIP39) Restore

The private keys seed for a user is a BIP39 derived pass phrase. This is used to generate distinct private keys for every single identity, that belongs to different communities. 


## Random Noise
The app could/should generated random data noise that is indistinguishable from real messages. This to improve security a bit by obscuring the traffic and making traffic analysis more difficult.


## Public Key Distribution Flow

## Questions:

How do we verify the invitation key?   
What meta-data should be contain within an invitation key?   
Should the community ID be derived from invitation key non-reversible hash?  

# Community Data

- Each community need a collection of public keys for all members of the community.
- Public keys should be synced across all valid members of a community.

## Message Flow

1. User writes a new entry and choose the publish action.
2. The entry is signed with the creators private key, this ensures integrity of the content and ensures nobody else can modify or unpublish it.
3. The entry is stored locally in the browser, entry is flagged with a symbol indicating it has not been synced yet.
4. Entry is sent to a user selected gateway. For additional privacy, gateways can be automatically selected or user selected, ensuring that users are in control of where their connections are hooked up to.

## Community Invitation

To join a community, you will need an invitation from the community owner. The invite key, will allow you to generate your own private key and identifier. If you want to, you can stay entirely private and only be recognized with your identifier, which is a randomly generated unique key.

Only you, or the community owner, is allowed to unpublish your content. Other users can hide other users' posts, either individual post or all entries from a user.

## Community Owner

The community owner can transfer ownership of entries. The history of ownership changes are stored in each entry.

If someone loose their private key, the community owner can transfer ownership of all entries from one user, to another.

## Development Notes and Ideas

For all app dialogs, developer discussions and documentation, the standard (International System of Units, SI) for bits and bytes are used. Meaning that 1 kilobyte (kB) is 1000 bytes.

For security reasons, üme was initially planned to be built on a custom javascript library for UI. This framework was extracted from the repo and made into a library named [v.js](https://github.com/sondreb/v.js). Due to limited developer resources and time available for initial üme release, a decision to build on [Angular](https://angular.io/) was made. In the future, consider replacing Angular, with v.js or another library.

[Angular Material](https://material.angular.io/) is additionally used for quicker initial release.

üme should always attempt to rely on as few third party libraries as possible.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Questions and Answers

Q: Will there be an **ume** app for mobile devices?   
A: No, the app only supports running in the web browser.

Q: Are the content and security keys stored safely in the web browser?   
A: No, there are few options to store local information in an encrypted and secure manner when only relying on the web browser. Developing a Cordova and/or Electron container could enable more secure local storage.

Q: Can I use **ume** to share sensitive and secret information?   
A: While the app has been built for security and privacy as the main reasons for existing, you should not rely on **ume** for sensitive and secret information. This is an open source project with limited resources available for security review and monitoring of potential hacks, exploits, etc.

# Algorithms

Here is a decent description of some of the algorithms in WebCrypto, published by the WebKit team:

* AES-CFB: CFB stands for cipher feedback. Unlike CBC, CFB does not require the plain text be padded to the block size of the cipher.
* AES-CTR: CTR stands for counter mode. CTR is best known for its parallelizability on both encryption and decryption.
* AES-GCM: GCM stands for Galois/Counter Mode. GCM is an authenticated encryption algorithm designed to provide both data authenticity (integrity) and confidentiality.
* ECDH: ECDH stands for Elliptic Curve Diffie–Hellman. Elliptic curve cryptography (ECC) is an approach to public-key cryptography based on the algebraic structure of elliptic curves over finite fields. ECC requires smaller keys compared to RSA to provide equivalent security. ECDH is one among many ECC schemes. It allows two parties each of whom owns an ECC key pair to establish a shared secret over an insecure channel.
* ECDSA: ECDSA stands for Elliptic Curve Digital Signature Algorithm. It is another ECC scheme.
* HKDF: HKDF stands for HMAC-based Key Derivation Function. It transforms secrets into key, allowing to combine additional non-secret inputs when needed.
* PBKDF2：PBKDF2 stands for Password-Based Key Derivation Function 2. It takes a password or a passphrase along with a salt value to derive a cryptographic symmetric key.
* RSA-PSS: PSS stands for Probabilistic Signature Scheme. It is an improved digital signature algorithm for RSA.

https://webkit.org/blog/7790/update-on-web-cryptography/

https://webkit.org/demos/webcrypto/ecdh.html

https://www.boxcryptor.com/en/blog/post/building-an-app-with-webcrypto-in-2016/

# Alternative Services

darkwire.io is a web socket based chat with end-to-end encryption:   
https://darkwire.io/

Crypho is an end-to-end-encrypted messaging and file sharing.    
https://www.crypho.com/

Crypho relies on centralized server storage of public keys, and does not support anonymous usage. These are two primary factors for building **ume**, namely avoiding centeralized infrastructure and allowing users to decide how much details they want to share with others.

# References

https://github.com/diafygi/webcrypto-examples
https://webcryptoapiex.github.io/secretnote/
https://material.io/guidelines/style/color.html#color-color-palette
