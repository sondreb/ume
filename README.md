# ume

Community Collaboration without centralized storage and end-to-end-encrypted communication.

"ume" (YouMe)

**ume** is a collaborative app that runs in your web browser and all content is stored on your local browser storage using IndexedDB. There are no central server hosting the content, it is all hosted on every individual web browser.

**ume** will automatically synchronize data across all active users.

**ume** allows users to be anonymous, and post messages using only a unique identifier. You can edit a profile if you want to, to add a nickname or real name, and additional contact information.

## Disclaimer

Any operations on the file system is prone to problems. Using **ume** is done under
no warranty. Make sure you take backups before using **ume**. The developers gives no guarantee that information created and published using **ume** won't be lost for any reason. While great care is taken to avoid problems, you are using the app under your own risk.

If you loose your private keys, you won't be able to manage your existing content and you need a new invitation to gain access to the community. Keep your keys safe on preferably external storage (USB stick).

## Security

- The app and gateway does not at any time retrieve your IP address or any unique device IDs. Before though of rouge gateway hosts, which could do IP-logging. Use gateways you trust.

- The gateway receives no messages that it can decrypt in any way. The gateway have no capability to read any metadata from messages.

- All content is stored in clear-text and unencrypted within the web browser. If your device is stolen, the community information can be read from the device.

- All content in a community can at any time be exported to a text-based format (JSON) by anyone with access to the community.

- Users can stay entirely anonymous with only a unique identifier as their "nickname". Membership to different communities, will give different unique identifiers and different set of public/private keys.

- The web browser is notoriously **not a very secure** and safe environment. The possibility of XSS (Cross-Side-Scripting) attacks and other forms of attacks on **ume**, could leak information and your private keys. There are no way around this, as long as the app is built to run within the web browser without any plugins and installations.

- If you need privacy and safety of information on a device or computer that can be **lost or stolen**, do not rely on **ume**. If you still use **ume** and want better security, ensure you are using disk encryption on your harddrive.

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


## Developer Instructions

To host the app on your local machine, make sure you install Node.js and install this simple http server.
```
npm install http-server -g
```

Navigate to the repo root, then src/app and run this command:

```
http-server -c-1
```

This will host the app on localhost:8080.

Open another shell and navigate to src/gateway and run:

```
npm install
```

And then run:

```
node index.js
```

This will host the Web Socket (socket.io) endpoint on localhost:8081.

## Questions and Answers

Q: Will there be an **ume** app for mobile devices?   
A: No, the app only supports running in the web browser.

Q: Are the content and security keys stored safely in the web browser?   
A: No, there are few options to store local information in an encrypted and secure manner when only relying on the web browser. Developing a Cordova and/or Electron container could enable more secure local storage.

Q: Can I use **ume** to share sensitive and secret information?   
A: While the app has been built for security and privacy as the main reasons for existing, you should not rely on **ume** for sensitive and secret information. This is an open source project with limited resources available for security review and monitoring of potential hacks, exploits, etc.


## License
    
MIT © [Sondre Bjellås](http://sondreb.com)   
MIT © [darkwire.io](https://github.com/seripap/darkwire.io)