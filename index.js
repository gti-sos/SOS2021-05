
var cool = require("cool-ascii-faces")
var express = require("express");
var app = express();
var port = (process.env.PORT || 10000);
var path = require("path");

/*
app.get("/cool", (request, response) => {
	
	response.send(cool());
	console.log("New Request ha llegao");
	
});
*/

app.use("/", express.static( path.join(__dirname ,"./public")));

app.get('/index', (request, response) => {
    response.send(express());
    console.log('New request to /index has arrived, succesfuly');
});


app.listen(port, () => {
	console.log("Server ready listening in port " + port)
})