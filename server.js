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
let tables = [
    {
        customerName: 'Eric Andre',
        customerPhone: '555-555-5555',
        customerEmail: 'Eric@Andre.Show',
        customerID: '123-test-456'
    },
    {
        customerName: 'Jacob Nelson',
        customerPhone: '555-555-5555',
        customerEmail: 'jacob@nelson.Show',
        customerID: '364-test-745'
    }
];

// Wait Data
let waiting_list = [
    {
        customerName: 'Hannibal Burress',
        customerPhone: '555-555-5555',
        customerEmail: 'Im@hannibal.yeahyeah',
        customerID: '000-test-789'
    }
];

// Homepage
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});
app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});
// API's
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});
app.get("/api/waitlist", function (req, res) {
    return res.json(waiting_list);
});

// POST
app.post("/api/tables", function (req, res) {
    let new_group = req.body;

    // new_group.routeName = new_group.name.replace(/\s+/g, "").toLowerCase();

    console.log(new_group);
    if (tables.length >= 5) {
        waiting_list.push(new_group);
        res.json(false);
        
    } else {
        tables.push(new_group);
        res.json(true);
    }
    
});

// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});