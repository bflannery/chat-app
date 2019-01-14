const path = require("path");
const express = require("express");

const publicPath  = path.join(__dirname, "../public");

// Initialize Express
var app = express();

const port = process.env.PORT || 3000

app.use(express.static(publicPath));

// Initialize app to listen to and print current port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = { app };
