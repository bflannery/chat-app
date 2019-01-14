const path = require("path");
const http = require("http")
const express = require("express");
const socketIO = require("socket.io");

const publicPath  = path.join(__dirname, "../public");
const port = process.env.PORT || 3000

// Initialize Express app
var app = express();

// Initialize HTTP server
var server = http.createServer(app);

// Initialie Web Socket server
var io = socketIO(server)


io.on('connection', (socket) => {
  console.log('New user connected');

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
