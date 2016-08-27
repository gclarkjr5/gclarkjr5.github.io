var express = require("express");
var app = express();
var http = require("http");
var server = http.createServer(app);
var port = process.env.PORT || 8888;

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
})

app.use(express.static("public"));
//
app.get('/HomiData', function (req, res) {
    res.sendfile("R/Homicide Stats/Rdata.json")
});


//var homiRouter = express.Router();
//

//
//
////How to use a router defined by homiRouter above
//homiRouter.route("/")
//    .get(function (req, res) {
//        res.send("Data boi");
//    });
//
//homiRouter.route("/single")
//    .get(function (req, res) {
//        res.send("Data single bull");
//    });
///////////////////////////////////


