 module.exports.register = (app, BASE_API_PATH) => {
	 
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

	res.status(200).send("Initial data loaded succesfully!");

});



//1)GET a la lista de recursos devuelve una lista con todos los recursos
//(GET para cargar el array completo)

app.get(BASE_API_PATH + "/arms-sales-stats", (req,res) => {
	res.send(200, JSON.stringify(arms_sales_stats,null,2));
})



//2)POST  a la lista de recursos (para introducir nuevos arrays de datos)

app.post(BASE_API_PATH+"/arms-sales-stats", (req,res)=>{
	
	var data = req.body;
	
	var esta =false;
	var bodyok= true;
	
	for(var k in arms_sales_stats){
		
		if(arms_sales_stats[k].state == String(req.body.state) &&
			arms_sales_stats[k].year == String(req.body.year)&&
			arms_sales_stats[k].month == String(req.body.month)){
			
			esta=true;
			
			
			
			
		}
		
		
	}
	
	var cantidadDeClaves = Object.keys(data).length;
			
		if(cantidadDeClaves!=5){
				bodyok = false;
			}
	
		
	
		var aux = Object.keys(data);
	
		if(aux[0]!="state"|| aux[1]!= "year" || aux[2]!= "month"|| aux[3]!= "arms-sold" || aux[4] != "percent-of-people"){
			bodyok =false;
		}
	
	
	
	if(!esta && bodyok){
		arms_sales_stats.push(data);
		//"Metemos" en el array de datos para este recurso lo recibido en el POST
		res.status(201).send("Recurso añadido satisfactoriamente");
		
	}else if(!esta && !bodyok){
			 
		res.status(400).send("Error. El formato del body es Erroneo");
	}
	
	else{
		res.status(409).send("Error. Ya Existe un recurso con el mismo Estado, Año y Mes");
	}
	
});


//3) GET a un recurso (en concreto), devuelve ese recurso
//En nuestro caso, accedemos a los elementos por estado y año (p ej.)

app.get(BASE_API_PATH+"/arms-sales-stats/:state/:year", (req,res)=>{ 
		
	var esta =false;
	for(var k in arms_sales_stats){
		
		if(arms_sales_stats[k].state == String(req.params.state) &&
			arms_sales_stats[k].year == String(req.params.year)){
			
			esta=true;
				
		}
	}
	var data = arms_sales_stats.filter(function(k){ 
		
		return k.state==String(req.params.state) && k.year==String(req.params.year);
	});
	
	//Respondemos a la petición enviando el recurso, filtrado, y en JSON
	if(esta){
		res.status(200).send(JSON.stringify(data,null,2));
	}else{
		res.status(404).send("No hemos encontrado el recurso");
	}
	
});


//4) DELETE a un recurso, borra ese recurso (en concreto)
//En nuestro caso, borramos el recurso por estado y año

app.delete(BASE_API_PATH+"/arms-sales-stats/:state/:year/:month", function(req, res) { 
	//Si el 'estado' y 'año' coinciden con los recibidos o dados, se elimina ese recurso
	var esta= false;
	arms_sales_stats = arms_sales_stats.filter(function(k){
		
		if(k.state!=String(req.params.state) || k.year!=(String(req.params.year)) || k.month!=(String(req.params.month)) ) {
			return k;
		}else{
			esta=true;
		}
	});
	
	if(esta){
		res.status(200).send("Recurso eliminado satisfactoriamente");
	}else{
		res.status(404).send("No hemos encontrado el recurso, por lo tanto no se ha eliminado nada");
	}

	
});


//5) PUT a un recurso (en concreto), actualiza ese recurso
//actualizamos los que coincidan con 'state' y 'year'


app.put(BASE_API_PATH+"/arms-sales-stats/:state/:year/:month", function(req,res) { 

	var data = req.body;
	
	var esta = false;
	var bodyok = true;
	
	var aux = Object.keys(data);
	
		if(aux[0]!="state"|| aux[1]!= "year" || aux[2]!= "month"|| aux[3]!= "arms-sold" || aux[4] != "percent-of-people"){
			bodyok =false;
		}
	
	
	for(var k in arms_sales_stats){
		
		if(arms_sales_stats[k].state == String(req.params.state) &&
			arms_sales_stats[k].year == String(req.params.year)&&
			arms_sales_stats[k].month == String(req.params.month)){
			
			esta=true;
			
				if(bodyok){
					
					var data = req.body;
					arms_sales_stats[k] = data;
					
				}
				break;
		}
		
		
		
		
	}
	
	if(esta&& bodyok){
		
		res.status(200).send("Actualización realizada correctamente");
		
	}else if(esta && !bodyok){
			 
			 res.status(400).send("Error. El formato del body es Erroneo");
			 
			 }
	else{
	
		res.status(404).send("No hemos encontrado el recurso");
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
	 
	 
 }