const path = require("path");
const http = require("http")
const express = require("express");
const socketIO = require("socket.io");

const { generateMessage, generateLocationMessage } = require('./utils/message');

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

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
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
