
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







//Acceso a datos tablas

//IVAN

app.get("/info/homicides-by-firearms", (request,response) => {
	response.send("");
	console.log("New request to /info/homicides-by-firearms has arrived");
});

//MANUEL
app.get("/info/arms-sales-stats", (request,response) => {
	response.send("");
	console.log("New request to /info/arms-sales-stats has arrived");
});


//Jose Antonio
app.get("/info/attacks-stats", (request,response) => {
	response.send("");
	console.log("New request to /info/attacks-stats has arrived");
});














