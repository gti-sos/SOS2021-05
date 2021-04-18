
 module.exports.register = (app, BASE_API_PATH) => {
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

	res.status(200).send("Initial data loaded succesfully!");

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

	var esta = false;
	for(var k in attacks_stats){
		
		if(attacks_stats[k].state == String(req.params.state) &&
			attacks_stats[k].year == String(req.params.year)){
				esta =true;
				var data = req.body;
				attacks_stats[k] = data;
				break;
		}
	}
	
	if(!esta){
		res.status(404).send("No hemos encontrado el recurso");
	}else{
	res.status(200).send("Actualización realizada correctamente");
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
 }