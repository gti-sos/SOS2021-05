
var cool = require("cool-ascii-faces")
var express = require("express");
var app = express();
var port = 10002;

app.get("/cool", (request, response) => {
	
	response.send(cool());
	console.log("New Request ha llegao");
	
});

app.listen(port, () => {
	console.log("Server ready listening in port " + port)
})