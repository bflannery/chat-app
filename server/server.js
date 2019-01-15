const path = require("path");
const http = require("http")
const express = require("express");
const socketIO = require("socket.io");

const publicPath  = path.join(__dirname, "../public");

// Set port
const port = process.env.PORT || 3000
const currentDateTime = new Date().getTime();

// Initialize Express app
var app = express();

// Initialize HTTP server
var server = http.createServer(app);

// Initialie Web Socket server
var io = socketIO(server)


io.on('connection', (socket) => {
  console.log('New user connected');


  socket.emit('newMessage', {
    from: 'Admin',
    text: 'Welcome to the chat app!',
    createdAt: currentDateTime
  });

  socket.broadcast.emit('newMessage', {
    from: 'Admin',
    text: 'New user joined!',
    createdAt: currentDateTime
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);

    io.emit('newMessage', {
      ...newMessage,
      createdAt: currentDateTime
    })
  socket.broadcast.emit('newMessage', {
    ...newMessage,
    createdAt: currentDateTime
  });
});


  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.use(express.static(publicPath));

// Initialize server to listen to and print current port
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = { app };
