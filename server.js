var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = process.env.PORT || 5555;

// Serving up Static files for home page and March Madness separately
app.use('/public', express.static(__dirname + '/public'));
app.use('/MarchMadness', express.static(__dirname + '/MarchMadness'));
///////////


app.get('/', function (req, res) {
    res.sendfile('index.html');
});

//Need to route to highcharts page, NOT WORKING///
var router = express.Router();
router.route('/')
    .get(function(req, res){
    res.send("Highcharts/hcharts.html");
});
//////////////////

server.listen(port, function () {
    console.log("Running on port " + port);
});

var io = require("socket.io")(server);
var async = require("async");

io.on("connection", function (socket) {
    console.log("Connected on " + port);
    socket.on("disconnect", function () {
        console.log("Disconnected from " + port);
    });
    socket.on("error", function (error) {
        console.log(error);
    });
});




