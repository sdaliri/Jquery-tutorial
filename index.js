
var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
const path = require("path");

var app = express();

app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb'}));


var router = express.Router();

router.get("/", function(req, res) {
    var file = path.join(__dirname + '/jquery_ajax.html');
    res.sendFile(file);
});

router.get("/get/jsonData", function(req, res) {
    res.set("Content-Type", "application/json");
    res.send({
        result: 0, data: {
            name: "saeed",
            gender: "male"
        }
    });
});

router.post("/post/jsonData", function(req, res) {
    res.set("Content-Type", "application/json");
    var params = req.body;
    if (params.type == "user") {
        res.send({
            result: 0, data: {
                name: "saeed",
                gender: "male"
            }
        });
    }
    else {
        res.send({
            result: -1,
            message: "you should send data"
        });
    }
});


var port = 8080;

var server = http.createServer(app);

server.listen(port);

console.log("server is running on port 8080 ...")
