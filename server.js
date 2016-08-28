var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = process.env.PORT || 5555;

server.listen(port, function(){
    console.log("Running on port " + port);
});

var io = require("socket.io")(server);

io.on("connection", function(socket){
    console.log("Connected on " + port);
    socket.on("disconnect", function(){
        console.log("Disconnected from " + port);
    });
    socket.on("error", function(error){
        console.log(error);
    });
});

app.get('/', function(req, res){
    res.sendfile('index.html');
});