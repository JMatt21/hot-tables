// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Table Data
let tables = [];

// Wait Data
let waiting_list = [];

// Homepage
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });


// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });