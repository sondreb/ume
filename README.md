# ume

Community Collaboration without centralized storage

"ume" (You & Me)


**ume** is a collaborative app that runs in your web browser and all content is stored on your local browser storage using IndexedDB. There are no central server hosting the content, it is all hosted on every individual web browser.

**ume** will automatically synchronize data across all active users.

**ume** allows users to be anonymous, and post messages using only a unique identifier. You can edit a profile if you want to, to add a nickname or real name, and additional contact information.

## Disclaimer

Any operations on the file system is prone to problems. Using **ume** is done under
no warranty. Make sure you take backups before using **ume**. The developers gives no guarantee that information created and published using **ume** won't be lost for any reason. While great care is taken to avoid problems, you are using the app under your own risk.

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





## License
    
MIT © [Sondre Bjellås](http://sondreb.com)