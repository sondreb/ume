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

## Learn more about üme

To learn more about üme, simply start using it and read all the introductions and details available there. There is additionally a [NOTES.md](NOTES.md) document which contains developer notes.

Prototype demo URL:   
[https://sondreb.github.io/ume/](https://sondreb.github.io/ume/)

## Development

To host the app on your local machine, make sure you install Node.js and install this simple http server.
```
npm install watch-http-server -g
```

Navigate to the repo root and run:

```
npm start
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

## License

MIT