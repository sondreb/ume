var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8081);

function handler(req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });

    socket.on('publish', function (data) {
        console.log('Publish:');
        console.log(data);
    });

    socket.on('join', function (message) {

        console.log(message);

        socket.join(message.community);
    });

    // TODO: Investigate a solution on how to perform some sort of handshake or acceptance for joining a community room. Perhaps if there are no-one else
    // connected we should always allow a user to join, but if others are online, we could require a verification of the person who is joining, by verifying
    // their public key with one of the other members. Until then, we'll simply have to allow anyone to join any community if they know the ID.
    socket.on('message', function (message) {

        if (message.type === 'join') {
            socket.join(message.community);
        }

        console.log('Message:');
        console.log(message);
    });

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});
