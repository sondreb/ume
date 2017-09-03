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


## Random Noise
The app should generated random data noise that is indistinguishable from real messages. This to improve security a bit by obscuring the traffic and making traffic analysis more difficult.


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

Q: Why is ume built without jQUery or Angular?

A: For security reasons, ume should always attempt to rely on as few third party libraries as possible.

## Questions and Answers

Q: Will there be an **ume** app for mobile devices?   
A: No, the app only supports running in the web browser.

Q: Are the content and security keys stored safely in the web browser?   
A: No, there are few options to store local information in an encrypted and secure manner when only relying on the web browser. Developing a Cordova and/or Electron container could enable more secure local storage.

Q: Can I use **ume** to share sensitive and secret information?   
A: While the app has been built for security and privacy as the main reasons for existing, you should not rely on **ume** for sensitive and secret information. This is an open source project with limited resources available for security review and monitoring of potential hacks, exploits, etc.


# Alternative Services

darkwire.io is a web socket based chat with end-to-end encryption:   
https://darkwire.io/

Crypho is an end-to-end-encrypted messaging and file sharing.    
https://www.crypho.com/

Crypho relies on centralized server storage of public keys, and does not support anonymous usage. These are two primary factors for building **ume**, namely avoiding centeralized infrastructure and allowing users to decide how much details they want to share with others.

# References

https://github.com/diafygi/webcrypto-examples


