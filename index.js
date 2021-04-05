
/*
var cool = require("cool-ascii-faces")
app.get("/cool", (request, response) => {
	
	response.send(cool());
	console.log("New Request ha llegao");
	
});
*/


//Para desplegar la app
var express = require("express");
var app = express();
//Puerto por defecto 
var port = (process.env.PORT || 10000);
//Para modificar y definiar las rutas, modulo 'path'
var path = require("path");


app.use("/", express.static( path.join(__dirname ,"./public")));

app.use(express.json());

//Ruta base de acceso a los recursos, bajo la versión 'v1'
var BASE_API_PATH = "/api/v1";

app.get('/index', (request, response) => {
    response.send(express());
    console.log('New request to /index has arrived, succesfuly');
});

//Mensaje por consola que mostrará el servidor cuando se inicie
app.listen(port, () => {
	console.log("Server ready listening in port " + port)
})




//Acceso a recursos ( MILESTONE F04)


// API 'Homicides by firearms' (Iván Martín Jiménez)

var homicides_by_firearms = [];


//GET para cargar (o meter) los datos iniciales (todo en JSON)
//(de modo que cree 2 o más elementos)

app.get(BASE_API_PATH+"/homicides-by-firearms/loadInitialData", (req,res)=>{ 

	var homicides_by_firearms_initial_data = [
		{
			"state":"Alaska",
			"year":"2019",
			"homicide-by-firearm": "70" ,
			"handgun":"17",
			"rifle":"1",
			"shotgun":"6",
			"type-not-stated": "20"
		},
		{
			"state":"Arkansas",
			"year":"2019",
			"homicide-by-firearm": "255" ,
			"handgun":"87",
			"rifle":"10",
			"shotgun":"5",
			"type-not-stated": "74"
		},
		{
			"state":"Idaho",
			"year":"2019",
			"homicide-by-firearm": "23" ,
			"handgun":"9",
			"rifle":"0",
			"shotgun":"0",
			"type-not-stated": "7"
		},
		{
			"state":"West-Virginia",
			"year":"2019",
			"homicide-by-firearm": "69" ,
			"handgun":"24",
			"rifle":"7",
			"shotgun":"2",
			"type-not-stated": "17"
		},
		{
			"state":"Wyoming",
			"year":"2019",
			"homicide-by-firearm": "11" ,
			"handgun":"7",
			"rifle":"0",
			"shotgun":"0",
			"type-not-stated": "2"
		},
		{
			"state":"Montana",
			"year":"2019",
			"homicide-by-firearm": "20" ,
			"handgun":"13",
			"rifle":"1",
			"shotgun":"1",
			"type-not-stated": "2"
		},
		{
			"state":"New-Mexico",
			"year":"2019",
			"homicide-by-firearm": "146" ,
			"handgun":"53",
			"rifle":"1",
			"shotgun":"3",
			"type-not-stated": "43"
		},
		{
			"state":"Alabama",
			"year":"2019",
			"homicide-by-firearm": "3" ,
			"handgun":"3",
			"rifle":"0",
			"shotgun":"0",
			"type-not-stated": "0"
		}
	];

	for(var dataLines in homicides_by_firearms_initial_data){
		homicides_by_firearms.push(homicides_by_firearms_initial_data[dataLines]);
	}

	//Lanzamos el código 200 indicando que se han cargado los datos iniciales de forma satisfactoria
	//(Lo indicamos con el 200 por consola, y con un pequeño html para el usuario de forma gráfica)

	res.status(200).send(`<!DOCTYPE html>
			<html>
				<h1>
					<title>Homicides by firearms</title>
				</h1>
				<body>
					<h3>Initial data loaded successfully</h3>
				</body>
			</html>`);

});



//1)GET a la lista de recursos devuelve una lista con todos los recursos
//(GET para cargar el array completo)

app.get(BASE_API_PATH + "/homicides-by-firearms", (req,res) => {
	res.send(200, JSON.stringify(homicides_by_firearms,null,2));
})



//2)POST  a la lista de recursos (para introducir nuevos arrays de datos)

app.post(BASE_API_PATH+"/homicides-by-firearms", (req,res)=>{
	var data = req.body;
	//"Metemos" en el array de datos para este recurso lo recibido en el POST
	homicides_by_firearms.push(data);
	res.sendStatus(201);
});


//3) GET a un recurso (en concreto), devuelve ese recurso
//En nuestro caso, accedemos a los elementos por estado y año (p ej.)

app.get(BASE_API_PATH+"/homicides-by-firearms/:state/:year", (req,res)=>{ //Cuando llamen a /api/v1/education_expenditures/(pais)
		
	var data = homicides_by_firearms.filter(function(k){ 
		return k.state==String(req.params.state) && k.year==String(req.params.year);
	});
	
	//Respondemos a la petición enviando el recurso, filtrado, y en JSON
	res.status(200).send(JSON.stringify(data,null,2));
});


//4) DELETE a un recurso, borra ese recurso (en concreto)
//En nuestro caso, borramos el recurso por estado y año

app.delete(BASE_API_PATH+"/homicides-by-firearms/:state/:year", function(req, res) { 
	//Si el 'estado' y 'año' coinciden con los recibidos o dados, se elimina ese recurso
	homicides_by_firearms = homicides_by_firearms.filter(function(k){
		if(k.state!==String(req.params.state) || k.year!==(String(req.params.year))) {
			return k;
		}
	});


	res.status(200).send("Recurso eliminado satisfactoriamente");
});


//5) PUT a un recurso (en concreto), actualiza ese recurso
//actualizamos los que coincidan con 'state' y 'year'

app.put(BASE_API_PATH+"/homicides-by-firearms/:state/:year", function(req, res) { 

	for(var k in homicides_by_firearms){
		
		if(homicides_by_firearms[k].state == String(req.params.state) &&
			homicides_by_firearms[k].year == String(req.params.year)){
				var data = req.body;
				homicides_by_firearms[k] = data;
				break;
		}
	}
});




//6)POST a un recurso (en concreto), debe de dar un error de método no permitido 

app.post(BASE_API_PATH+"/homicides-by-firearms/:state/:year", function(req, res) { 

	res.status(405).send("Metodo no permitido"); 
});


//7)PUT a la lista de recursos (completa) debe dar un error de no permitido

app.put(BASE_API_PATH+"/homicides-by-firearms", function(req, res) { 

	res.status(405).send("Metodo no permitido"); 
});

//8)DELETE a la lista de recursos (completa) borra todos los recursos
//En otras palabras, borramos todos los elementos existentes en el array inicial

app.delete(BASE_API_PATH+"/homicides-by-firearms", (req,res)=>{
		
	homicides_by_firearms = []; 
	res.status(200).send("Lista de recursos eliminada satisfactoriamente");

});




// API 'Arms sales stats' (Manuel Sánchez López)

var arms_sales_stats = [];


//GET para cargar (o meter) los datos iniciales (todo en JSON)
//(de modo que cree 2 o más elementos)

app.get(BASE_API_PATH+"/arms-sales-stats/loadInitialData", (req,res)=>{ 

	var arms_sales_stats_initial_data = [
		{
			"state":"Alabama",
			"year":"2019",
			"month": "1" ,
			"arms-sold":"79.332",
			"percent-of-people":"0.01197",
		},
		{
			"state":"Alabama",
			"year":"2019",
			"month": "2" ,
			"arms-sold":"75.336",
			"percent-of-people":"0.01305",
		},
		{
			"state":"Alabama",
			"year":"2019",
			"month": "3" ,
			"arms-sold":"92.652",
			"percent-of-people":"0.01765",
		},
		{
			"state":"Alabama",
			"year":"2019",
			"month": "4" ,
			"arms-sold":"70.748",
			"percent-of-people":"0.01415",
		},
		{
			"state":"Alabama",
			"year":"2019",
			"month": "5" ,
			"arms-sold":"80.519",
			"percent-of-people":"0.01489",
		},
		{
			"state":"Alabama",
			"year":"2019",
			"month": "6" ,
			"arms-sold":"139.873",
			"percent-of-people":"0.02118",
		},
		{
			"state":"Alabama",
			"year":"2019",
			"month": "7" ,
			"arms-sold":"107.490",
			"percent-of-people":"0.01659",
		},
		{
			"state":"Alabama",
			"year":"2019",
			"month": "8" ,
			"arms-sold":"85.347",
			"percent-of-people":"0.01392",
		},
		{
			"state":"Alabama",
			"year":"2019",
			"month": "9" ,
			"arms-sold":"80.478",
			"percent-of-people":"0.0133",
		},
		{
			"state":"Alabama",
			"year":"2018",
			"month": "10" ,
			"arms-sold":"80.934",
			"percent-of-people":"0.0138",
		}

	];

	for(var dataLines in arms_sales_stats_initial_data){
		arms_sales_stats.push(arms_sales_stats_initial_data[dataLines]);
	}

	//Lanzamos el código 200 indicando que se han cargado los datos iniciales de forma satisfactoria
	//(Lo indicamos con el 200 por consola, y con un pequeño html para el usuario de forma gráfica)

	res.status(200).send(`<!DOCTYPE html>
			<html>
				<h1>
					<title>Arms Sales Stats</title>
				</h1>
				<body>
					<h3>Initial data loaded successfully</h3>
				</body>
			</html>`);

});



//1)GET a la lista de recursos devuelve una lista con todos los recursos
//(GET para cargar el array completo)

app.get(BASE_API_PATH + "/arms-sales-stats", (req,res) => {
	res.send(200, JSON.stringify(arms_sales_stats,null,2));
})



//2)POST  a la lista de recursos (para introducir nuevos arrays de datos)

app.post(BASE_API_PATH+"/arms-sales-stats", (req,res)=>{
	var data = req.body;
	//"Metemos" en el array de datos para este recurso lo recibido en el POST
	arms_sales_stats.push(data);
	res.sendStatus(201);
});


//3) GET a un recurso (en concreto), devuelve ese recurso
//En nuestro caso, accedemos a los elementos por estado y año (p ej.)

app.get(BASE_API_PATH+"/arms-sales-stats/:state/:year", (req,res)=>{ //Cuando llamen a /api/v1/education_expenditures/(pais)
		
	var data = arms_sales_stats.filter(function(k){ 
		return k.state==String(req.params.state) && k.year==String(req.params.year);
	});
	
	//Respondemos a la petición enviando el recurso, filtrado, y en JSON
	res.status(200).send(JSON.stringify(data,null,2));
});


//4) DELETE a un recurso, borra ese recurso (en concreto)
//En nuestro caso, borramos el recurso por estado y año

app.delete(BASE_API_PATH+"/arms-sales-stats/:state/:year/:month", function(req, res) { 
	//Si el 'estado' y 'año' coinciden con los recibidos o dados, se elimina ese recurso
	arms_sales_stats = arms_sales_stats.filter(function(k){
		if(k.state!==String(req.params.state) || k.year!==(String(req.params.year)) || k.month!==(String(req.params.month)) ) {
			return k;
		}
	});


	res.status(200).send("Recurso eliminado satisfactoriamente");
});


//5) PUT a un recurso (en concreto), actualiza ese recurso
//actualizamos los que coincidan con 'state' y 'year'





app.put(BASE_API_PATH+"/arms-sales-stats/:state/:year/:month", function(req, res) { 

	/*
	
	for(var k in arms_sales_stats){
		
		if(arms_sales_stats[k].state == String(req.params.state) &&
			arms_sales_stats[k].year == String(req.params.year)){
				var data = req.body;
				arms_sales_stats[k] = data;
				break;
		}
	}
	
	*/
	var esta = false;
	
	arms_sales_stats = arms_sales_stats.filter(function(k){
		if(k.state!==String(req.params.state) || k.year!==(String(req.params.year)) || k.month!==(String(req.params.month)) ) {
			return k;
		}else{
			
			esta = true;
			var data = [{
				
			"state": String(req.params.state),
			"year": String(req.params.year),
			"month": String(req.params.month),
			"arms-sold":"80.934",
			"percent-of-people":"0.0138",
						
			}]
			
			
			
			
			return data;
		}
	});
	
	   if(!esta){
        console.log("El recurso no está");
        return res.sendStatus(404);
      }else{
		  
		  res.status(200).send("Recurso actualizado");
	  }
	
	
});




//6)POST a un recurso (en concreto), debe de dar un error de método no permitido 

app.post(BASE_API_PATH+"/arms-sales-stats/:state/:year", function(req, res) { 

	res.status(405).send("Metodo no permitido"); 
});


//7)PUT a la lista de recursos (completa) debe dar un error de no permitido

app.put(BASE_API_PATH+"/arms-sales-stats", function(req, res) { 

	res.status(405).send("Metodo no permitido"); 
});

//8)DELETE a la lista de recursos (completa) borra todos los recursos
//En otras palabras, borramos todos los elementos existentes en el array inicial

app.delete(BASE_API_PATH+"/arms-sales-stats", (req,res)=>{
		
	arms_sales_stats = []; 
	res.status(200).send("Lista de recursos eliminada satisfactoriamente");

});



// API 'attacks stats' (José Antonio Megías Macías)

var attacks_stats = [];


//GET para cargar (o meter) los datos iniciales (todo en JSON)
//(de modo que cree 2 o más elementos)

app.get(BASE_API_PATH+"/attacks-stats/loadInitialData", (req,res)=>{ 

	var attacks_stats_initial_data = [
		{
			"state":"Alabama",
			"year":"2019",
			"sex-male": "111" ,
			"sex-female":"18",
			"sex-unknown":"14",
			"age-range-20-29":"44",
			"age-range-30-39":"14",
			"age-range-other":"85",
			"type-of-attack-personal-weapons": "38",
			"type-of-attack-gun":"20",
			"type-of-attack-knife":"8"
		},
		{
			"state":"Arkansas",
			"year":"2019",
			"sex-male": "11330" ,
			"sex-female":"3164",
			"sex-unknown":"1565",
			"age-range-20-29":"4168",
			"age-range-30-39":"3384",
			"age-range-other":"8507",
			"type-of-attack-personal-weapons": "3781",
			"type-of-attack-gun":"1985",
			"type-of-attack-knife":"1442"
		},
		{
			"state":"Idaho",
			"year":"2019",
			"sex-male": "3110" ,
			"sex-female":"594",
			"sex-unknown":"54",
			"age-range-20-29":"1083",
			"age-range-30-39":"910",
			"age-range-other":"3585",
			"type-of-attack-personal-weapons": "1908",
			"type-of-attack-gun":"268",
			"type-of-attack-knife":"424"
		},
		{
			"state":"West-virginia",
			"year":"2019",
			"sex-male": "2856" ,
			"sex-female":"766",
			"sex-unknown":"71",
			"age-range-20-29":"1030",
			"age-range-30-39":"944",
			"age-range-other":"1719",
			"type-of-attack-personal-weapons": "1046",
			"type-of-attack-gun":"358",
			"type-of-attack-knife":"361"
		},
		{
			"state":"Wyoming",
			"year":"2019",
			"sex-male": "-" ,
			"sex-female":"-",
			"sex-unknown":"-",
			"age-range-20-29":"-",
			"age-range-30-39":"-",
			"age-range-other":"-",
			"type-of-attack-personal-weapons": "-",
			"type-of-attack-gun":"-",
			"type-of-attack-knife":"-"
		},
		{
			"state":"Montana",
			"year":"2019",
			"sex-male": "2607" ,
			"sex-female":"745",
			"sex-unknown":"62",
			"age-range-20-29":"951",
			"age-range-30-39":"869",
			"age-range-other":"5234",
			"type-of-attack-personal-weapons": "1061",
			"type-of-attack-gun":"193",
			"type-of-attack-knife":"1165"
		},
		{
			"state":"New-Mexico",
			"year":"2019",
			"sex-male": "6736" ,
			"sex-female":"1545",
			"sex-unknown":"826",
			"age-range-20-29":"2623",
			"age-range-30-39":"2128",
			"age-range-other":"4356",
			"type-of-attack-personal-weapons": "2221",
			"type-of-attack-gun":"949",
			"type-of-attack-knife":"1165"
		},
	];

	for(var dataLines in attacks_stats_initial_data){
		attacks_stats.push(attacks_stats_initial_data[dataLines]);
	}

	//Lanzamos el código 200 indicando que se han cargado los datos iniciales de forma satisfactoria
	//(Lo indicamos con el 200 por consola, y con un pequeño html para el usuario de forma gráfica)

	res.status(200).send(`<!DOCTYPE html>
			<html>
				<h1>
					<title>Attacks stats</title>
				</h1>
				<body>
					<h3>Initial data loaded successfully</h3>
				</body>
			</html>`);

});



//1)GET a la lista de recursos devuelve una lista con todos los recursos
//(GET para cargar el array completo)

app.get(BASE_API_PATH + "/attacks-stats", (req,res) => {
	res.send(200, JSON.stringify(attacks_stats,null,2));
})



//2)POST  a la lista de recursos (para introducir nuevos arrays de datos)

app.post(BASE_API_PATH+"/attacks-stats", (req,res)=>{
	var data = req.body;
	//"Metemos" en el array de datos para este recurso lo recibido en el POST
	attacks_stats.push(data);
	res.sendStatus(201);
});


//3) GET a un recurso (en concreto), devuelve ese recurso
//En nuestro caso, accedemos a los elementos por estado y año (p ej.)

app.get(BASE_API_PATH+"/attacks-stats/:state/:year", (req,res)=>{ //Cuando llamen a /api/v1/education_expenditures/(pais)
		
	var data = attacks_stats.filter(function(k){ 
		return k.state==String(req.params.state) && k.year==String(req.params.year);
	});
	
	//Respondemos a la petición enviando el recurso, filtrado, y en JSON
	res.status(200).send(JSON.stringify(data,null,2));
});


//4) DELETE a un recurso, borra ese recurso (en concreto)
//En nuestro caso, borramos el recurso por estado y año

app.delete(BASE_API_PATH+"/attacks-stats/:state/:year", function(req, res) { 
	//Si el 'estado' y 'año' coinciden con los recibidos o dados, se elimina ese recurso
	attacks_stats = attacks_stats.filter(function(k){
		if(k.state!==String(req.params.state) || k.year!==(String(req.params.year))) {
			return k;
		}
	});


	res.status(200).send("Recurso eliminado satisfactoriamente");
});


//5) PUT a un recurso (en concreto), actualiza ese recurso
//actualizamos los que coincidan con 'state' y 'year'

app.put(BASE_API_PATH+"/attacks-stats/:state/:year", function(req, res) { 

	for(var k in attacks_stats){
		
		if(attacks_stats[k].state == String(req.params.state) &&
			attacks_stats[k].year == String(req.params.year)){
				var data = req.body;
				attacks_stats[k] = data;
				break;
		}
	}
});




//6)POST a un recurso (en concreto), debe de dar un error de método no permitido 

app.post(BASE_API_PATH+"/attacks-stats/:state/:year", function(req, res) { 

	res.status(405).send("Metodo no permitido"); 
});


//7)PUT a la lista de recursos (completa) debe dar un error de no permitido

app.put(BASE_API_PATH+"/attacks-stats", function(req, res) { 

	res.status(405).send("Metodo no permitido"); 
});

//8)DELETE a la lista de recursos (completa) borra todos los recursos
//En otras palabras, borramos todos los elementos existentes en el array inicial

app.delete(BASE_API_PATH+"/attacks-stats", (req,res)=>{
		
	attacks_stats = []; 
	res.status(200).send("Lista de recursos eliminada satisfactoriamente");

});



//F03
//Acceso a datos tablas

//IVAN

app.get("/info/homicides-by-firearms", (request,response) => {
	response.send("<html><style>table,td{  width: 50%; text-align: center; border-spacing: 4 ; border: 1.5px solid black}</style><body><table class = default><caption>Homicides by firearms in the United States </caption> <tbody><tr ><td ><strong>state</strong></td><td ><strong>year</strong></td><td ><strong>homicide-by-firearm</strong></td><td ><strong>handgun</strong></td><td><strong>rifle</strong></td><td><strong>shotgun</strong></td><td><strong>type-not-stated</strong></td></tr><tr ><td >Alaska</td><td>2019</td><td>70</td><td>17</td><td>1</td><td>6</td><td>20</td></tr><tr s><td >Arkansas</td><td >2019</td><td>255</td><td >87</td><td >10</td><td >5</td><td >74</td></tr><tr ><td >Idaho</td><td >2019</td><td >23</td><td>9</td><td >0</td><td >0</td><td >7</td></tr><tr ><td >West Virginia</td><td >2019</td><td >69</td><td >24</td><td >7</td><td >2</td><td >17</td></tr><tr ><td >Wyoming</td><td >2019</td><td >11</td><td>7</td><td >0</td><td >0</td><td >2</td></tr><tr><td >Montana</td><td >2019</td><td >20</td><td >13</td><td >1</td><td >1</td><td >1</td></tr><tr ><td >New Mexico</td><td >2019</td><td >146</td><td>53</td><td >1</td><td >3</td><td >43</td></tr><tr><td >Alabama</td><td >2019</td><td >3</td><td >3</td><td >0</td><td >0</td><td >0</td></tr></tbody> </table> </body> </html>");
	console.log("New request to /info/homicides-by-firearms has arrived");
});

//MANUEL
app.get("/info/arms-sales-stats", (request,response) => {
	response.send("<html><style>table,td{  width: 50%; text-align: center; border-spacing: 4 ; border: 1.5px solid black}</style><body><table class = default><caption>Firearms sales in the United States </caption> <tbody><tr ><td ><strong>state</strong></td><td ><strong>year</strong></td><td ><strong>month</strong></td><td ><strong>firearms sold</strong></td><td ><strong>firearms sold/people</strong></td></tr><tr ><td >Alabama</td><td>2019</td><td >1</td><td >79,332</td><td >0.01197</td></tr><tr><td >Alabama</td><td >2019</td><td>2</td><td >75,336</td><td >0.01305</td></tr><tr ><td >Alabama</td><td >2019</td><td >3</td><td>92,652</td><td >0.01765</td></tr><tr ><td >Alabama</td><td >2019</td><td >4</td><td >70,748</td><td >0.01415</td></tr><tr ><td >Alabama</td><td >2019</td><td >5</td><td>80,519</td><td >0.01489</td></tr><tr><td >Alabama</td><td >2019</td><td >6</td><td >139,873</td><td >0.02118</td></tr><tr ><td >Alabama</td><td >2019</td><td >7</td><td>107,49</td><td >0.01659</td></tr><tr><td >Alabama</td><td >2019</td><td >8</td><td >85,347</td><td >0.01392</td></tr><tr ><td>Alabama</td><td >2019</td><td >9</td><td>80,478</td><td >0.0133</td></tr><tr><td >Alabama</td><td >2019</td><td >10</td><td >80,934</td><td >0.0138</td></tr></tbody> </table> </body> </html>");
	console.log("New request to /info/arms-sales-stats has arrived");
});


//Jose Antonio
app.get("/info/attacks-stats", (request,response) => {
	response.send("<html><style>table,td{  width: 50%; text-align: center; border-spacing: 4 ; border: 1.5px solid black}</style><body><table class = default><caption>Firearms sales in the United States </caption> <tbody> <tr> <td >state</td> <td>year</td> <td>sex -male</td> <td>sex -female</td> <td >sex -unknown</td> <td >age range -20-29</td> <td>age range -30-39</td> <td >age range -other</td> <td >type of attack -personal weapons</td> <td >type of attack -gun</td> <td>type of attack -knife</td> </tr> <tr> <td >Alabama</td> <td >2019</td> <td >111</td> <td>18</td> <td >14</td> <td>44</td> <td >14</td> <td >85</td> <td >38</td> <td >20</td> <td >8</td> </tr> <tr> <td>Arkansas</td> <td >2019</td> <td>11330</td> <td>3164</td> <td >1565</td> <td >4168</td> <td >3384</td> <td>8507</td> <td >3781</td> <td >1985</td> <td >1442</td> </tr> <tr> <td >Idaho</td> <td >2019</td> <td >3110</td> <td >594</td> <td >54</td> <td >1083</td> <td>910</td> <td >3585</td> <td >1908</td> <td >268</td> <td >424</td> </tr> <tr> <td >West Virginia</td> <td >2019</td> <td >2856</td> <td >766</td> <td >71</td> <td >1030</td> <td>944</td> <td>1719</td> <td>1046</td> <td>358</td> <td>361</td> </tr> <tr> <td >Wyoming</td> <td >2019</td> <td >-</td> <td>-</td> <td >-</td> <td >-</td> <td >-</td> <td >-</td> <td >-</td> <td >-</td> <td >-</td> </tr> <tr> <td >Montana</td> <td >2019</td> <td >2607</td> <td >745</td> <td>62</td> <td >951</td> <td >869</td> <td >5234</td> <td>1061</td> <td >193</td> <td >281</td> </tr> <tr> <td >New Mexico</td> <td >2019</td> <td >6736</td> <td >1545</td> <td >826</td> <td >2623</td> <td >2128</td> <td >4356</td> <td >2221</td> <td >949</td> <td >1165</td> </tr> </tbody> </table> </table> </body> </html>");
	console.log("New request to /info/attacks-stats has arrived");
});














