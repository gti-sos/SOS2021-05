var Datastore = require("nedb");
var db = new Datastore({ filename: "arms-sales-statsAPI/arms-sales-stats.db", autoload: true });


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
			"arms_sold":"79.332",
			"percent_of_people":"0.01197",
		},
		{
			"state":"Alabama",
			"year":"2019",
			"month": "2" ,
			"arms_sold":"75.336",
			"percent_of_people":"0.01305",
		},
		{
			"state":"Alabama",
			"year":"2019",
			"month": "3" ,
			"arms_sold":"92.652",
			"percent_of_people":"0.01765",
		},
		{
			"state":"Alabama",
			"year":"2019",
			"month": "4" ,
			"arms_sold":"70.748",
			"percent_of_people":"0.01415",
		},
		{
			"state":"Alabama",
			"year":"2019",
			"month": "5" ,
			"arms_sold":"80.519",
			"percent_of_people":"0.01489",
		},
		{
			"state":"Alabama",
			"year":"2019",
			"month": "6" ,
			"arms-sold":"139.873",
			"percent_of_people":"0.02118",
		},
		{
			"state":"Alabama",
			"year":"2019",
			"month": "7" ,
			"arms_sold":"107.490",
			"percent_of_people":"0.01659",
		},
		{
			"state":"Alabama",
			"year":"2019",
			"month": "8" ,
			"arms_sold":"85.347",
			"percent_of_people":"0.01392",
		},
		{
			"state":"Alabama",
			"year":"2019",
			"month": "9" ,
			"arms_sold":"80.478",
			"percent_of_people":"0.0133",
		},
		{
			"state":"Alabama",
			"year":"2018",
			"month": "10" ,
			"arms_sold":"80.934",
			"percent_of_people":"0.0138",
		}

	];

	
	db.insert(arms_sales_stats_initial_data);
	
	//Lanzamos el código 200 indicando que se han cargado los datos iniciales de forma satisfactoria
	//(Lo indicamos con el 200 por consola, y con un pequeño html para el usuario de forma gráfica)

	res.status(200).send("Initial data loaded succesfully!");

});



//1)GET a la lista de recursos devuelve una lista con todos los recursos
//(GET para cargar el array completo)

app.get(BASE_API_PATH + "/arms-sales-stats", (req,res) => {
	res.send(200, db.getAllData());
})



//2)POST  a la lista de recursos (para introducir nuevos arrays de datos)

app.post(BASE_API_PATH+"/arms-sales-stats", (req,res)=>{
	
	var data = req.body;
	
	var esta =false;
	var bodyok= true;
	
	db.find({state:String(req.body.state), year:String(req.body.year), month:String(req.body.month)  }, function(err, record) {
    	
		
		if (record.length!=0) {
       	 esta=true;
			
			res.status(409).send("Error. Ya Existe un recurso con el mismo Estado, Año y Mes");
    
		}else{
			
			// -----------------Comprueba body------------------------ 
				var cantidadDeClaves = Object.keys(data).length;
			
				if(cantidadDeClaves!=5){
					bodyok = false;
				}
	
		
				var aux = Object.keys(data);
	
				if(aux[0]!="state"|| aux[1]!= "year" || aux[2]!= "month"|| aux[3]!= "arms_sold" || aux[4] != "percent_of_people"){
					bodyok =false;
				}
			// ------------------------------------------------------- 
			
			if( bodyok){
		
				db.insert(data);
				//"Metemos" en el array de datos para este recurso lo recibido en el POST
				res.status(201).send("Recurso añadido satisfactoriamente");
		
			}else if(!bodyok){
			 
				res.status(400).send("Error. El formato del body es Erroneo");
			}
			
			}
		
    
	
	});
	

	
	
});


//3) GET a un recurso (en concreto), devuelve ese recurso
//En nuestro caso, accedemos a los elementos por estado y año (p ej.)

app.get(BASE_API_PATH+"/arms-sales-stats/:state/:year", (req,res)=>{ 
		
		
	db.find({state:String(req.params.state), year:String(req.params.year)  }, function(err, record) {
		
		console.log(record);
		
		if (record.length==0) {
       	
			res.status(404).send("No hemos encontrado el recurso");
    
		}else{
			
			res.status(200).send(record);
		}
		
		});
	
	
});


//4) DELETE a un recurso, borra ese recurso (en concreto)
//En nuestro caso, borramos el recurso por estado y año

app.delete(BASE_API_PATH+"/arms-sales-stats/:state/:year/:month", function(req, res) { 
	//Si el 'estado' y 'año' coinciden con los recibidos o dados, se elimina ese recurso
	
	
	db.remove({state:String(req.params.state), year:String(req.params.year), month:String(req.params.month)},{},(err, numEvictionsRemoved)=>{
			
		console.log(err);
		
		if(err!=null){
				console.error("ERROR deleting DB evictions in DELETE: "+err);
				res.sendStatus(500);
			}else{
				if(numEvictionsRemoved==0){
					res.status(404).send("No hemos encontrado el recurso");
				}else{
					res.status(200).send("Recurso eliminado satisfactoriamente :D");
				}
			}
		})
	
});


//5) PUT a un recurso (en concreto), actualiza ese recurso
//actualizamos los que coincidan con 'state' y 'year'


app.put(BASE_API_PATH+"/arms-sales-stats/:state/:year/:month", function(req,res) { 

	var data = req.body;
	
	var esta = false;
	var bodyok = true;
	
	var aux = Object.keys(data);
	
		if(aux[0]!="state"|| aux[1]!= "year" || aux[2]!= "month"|| aux[3]!= "arms_sold" || aux[4] != "percent_of_people"){
			bodyok =false;
		}
	
	db.find({state:String(req.params.state), year:String(req.params.year),month: String(req.params.month)  }, function(err, record) {
		
		console.log(record);
		if(err!=null){
				console.error("ERROR deleting DB evictions in DELETE: "+err);
				res.sendStatus(500);
		}else{
			
			
			if (record.length==0) {
       	
				res.status(404).send("No hemos encontrado el recurso");
    
			}else{
			
				if(!bodyok){
					
					 res.status(400).send("Error. El formato del body es Erroneo");
					
				}else{
					
					db.update({state:String(req.params.state), year:String(req.params.year)}, 
							  {state:String(req.params.state), year:String(req.params.year),month: record.month, arms_sold: record.arms_sold , 
							   percent_of_people:record.percent_of_people}, {}, function (err, numReplaced) {
										
						if(err) {
							console.error(err);
							res.status(500).send("Error en la base de datos");
						}else{
							res.status(200).send(String(req.params.state)+" "+String(req.params.year)+" Ha sido actualizado exitosamente");
							
						}
								
					
					});
					
				}
				
				
				
				
				
			}
			
			
		}
		
		
		});
	
	
	
	
	/*
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
	*/
	
	
	
	
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
		
	db.remove({}, { multi: true }, function(err, numDeleted) {
     console.log('Deleted', numDeleted, 'user(s)');
}); 
	res.status(200).send("Lista de recursos eliminada satisfactoriamente");

});
	 
	 
 }