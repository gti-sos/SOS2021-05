var Datastore = require("nedb");
var db = new Datastore({ filename: "attacks-statsAPI/attacks-stats.db", autoload: true });


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
			"sex_male": "111" ,
			"sex_female":"18",
			"sex_unknown":"14",
			"age_range_20_29":"44",
			"age_range_30_39":"14",
			"age_range_other":"85",
			"type_of_attack_personal_weapons": "38",
			"type_of_attack_gun":"20",
			"type_of_attack_knife":"8"
		},
		{
			"state":"Arkansas",
			"year":"2019",
			"sex_male": "11330" ,
			"sex_female":"3164",
			"sex_unknown":"1565",
			"age_range_20_29":"4168",
			"age_range_30_39":"3384",
			"age_range_other":"8507",
			"type_of-attack_personal_weapons": "3781",
			"type_of_attack_gun":"1985",
			"type_of_attack_knife":"1442"
		},
		{
			"state":"Idaho",
			"year":"2019",
			"sex_male": "3110" ,
			"sex_female":"594",
			"sex_unknown":"54",
			"age_range_20_29":"1083",
			"age_range30_39":"910",
			"age_range_other":"3585",
			"type_of_attack_personal_weapons": "1908",
			"type_of_attack_gun":"268",
			"type_of_attack_knife":"424"
		},
		{
			"state":"West-virginia",
			"year":"2019",
			"sex_male": "2856" ,
			"sex_female":"766",
			"sex_unknown":"71",
			"age_range_20_29":"1030",
			"age_range_30_39":"944",
			"age_range_other":"1719",
			"type_of_attack_personal_weapons": "1046",
			"type_of_attack_gun":"358",
			"type_of_attack_knife":"361"
		},
		{
			"state":"Wyoming",
			"year":"2019",
			"sex_male": "-" ,
			"sex_female":"-",
			"sex_unknown":"-",
			"age_range_20-29":"-",
			"age_range_30-39":"-",
			"age_range_other":"-",
			"type_of_attack_personal_weapons": "-",
			"type_of_attack_gun":"-",
			"type_of_attack_knife":"-"
		},
		{
			"state":"Montana",
			"year":"2019",
			"sex_male": "2607" ,
			"sex_female":"745",
			"sex_unknown":"62",
			"age_range_20_29":"951",
			"age_range_30_39":"869",
			"age_range_other":"5234",
			"type_of_attack_personal_weapons": "1061",
			"type_of_attack_gun":"193",
			"type_of_attack_knife":"1165"
		},
		{
			"state":"New-Mexico",
			"year":"2019",
			"sex_male": "6736" ,
			"sex_female":"1545",
			"sex_unknown":"826",
			"age_range_20_29":"2623",
			"age_range_30_39":"2128",
			"age_range_other":"4356",
			"type_of_attack_personal_weapons": "2221",
			"type_of_attack_gun":"949",
			"type_of_attack_knife":"1165"
		},
	];

	db.insert(attacks_stats_initial_data);

	//Lanzamos el código 200 indicando que se han cargado los datos iniciales de forma satisfactoria
	//(Lo indicamos con el 200 por consola, y con un pequeño html para el usuario de forma gráfica)

	res.status(200).send("Initial data loaded succesfully!");

});



//1)GET a la lista de recursos devuelve una lista con todos los recursos
//(GET para cargar el array completo)

app.get(BASE_API_PATH + "/attacks-stats", (req,res) => {
	res.send(200, db.getAllData());
})



//2)POST  a la lista de recursos (para introducir nuevos arrays de datos)

app.post(BASE_API_PATH+"/attacks-stats", (req,res)=>{
	
	var data = req.body;
	
	var esta = false;
	var bodyok = true;
	
	db.find({state:String(req.body.state), year:String(req.body.year) }, function(err, record) {
    	
			if (record.length!=0) {
       	 			esta=true;
			
				res.status(409).send("Error. Ya Existe un recurso con el mismo Estado y Año");
    
			}else{
			
			// -----------------Comprueba body------------------------ 
				var cantidadDeClaves = Object.keys(data).length;
			
				if(cantidadDeClaves!=11){
					bodyok = false;
				}
	
		
				var aux = Object.keys(data);
	
				if(aux[0]!="state"|| aux[1]!= "year" || aux[2]!= "sex_male"|| aux[3]!= "sex_female" || aux[4] != "sex_unknown" || aux[5] != "age_range_20_29" || aux[6] != "age_range_30_39" || aux[7] != "age_range_other" || aux[8] != "type_of_attack_personal_weapons" || aux[9] != "type_of_attack_gun" || aux[10] != "type_of_attack_knife"){
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

app.get(BASE_API_PATH+"/attacks-stats/:state/:year", (req,res)=>{ //Cuando llamen a /api/v1/attacks-stats/
	
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

app.delete(BASE_API_PATH+"/attacks-stats/:state/:year", function(req, res) { 
	//Si el 'estado' y 'año' coinciden con los recibidos o dados, se elimina ese recurso
	
	db.remove({state:String(req.params.state), year:String(req.params.year)},{},(err, numEvictionsRemoved)=>{
			
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

app.put(BASE_API_PATH+"/attacks-stats/:state/:year", function(req, res) { 

	var data = req.body;
	
	var esta = false;
	var bodyok = true;
	
	var aux = Object.keys(data);
	
		if(aux[0]!="state"|| aux[1]!= "year" || aux[2]!= "sex_male"|| aux[3]!= "sex_female" || aux[4] != "sex_unknown" || aux[5] != "age_range_20_29" || aux[6] != "age_range_30_39" || aux[7] != "age_range_other" || aux[8] != "type_of_attack_personal_weapons" || aux[9] != "type_of_attack_gun" || aux[10] != "type_of_attack_knife"){
			bodyok =false;
		}
	
	
	db.find({state:String(req.params.state), year:String(req.params.year) }, function(err, record) {
		
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
					
					if(String(req.params.state) !=  req.body.state || String(req.params.year) !=  req.body.year  ){
					   
						
						res.status(409).send("Conflicto. Los identificadores de State y Year deben ser iguales");
						
					   }else{
					   
						   
						   db.update({state:String(req.params.state), year:String(req.params.year)}, 
							  {state:String(req.params.state), year:String(req.params.year), sex_male: req.body.sex_male, sex_female:req.body.sex_female, sex_unknown:req.body.sex_unknown, age_range_20_29:req.body.age_range_20_29, age_range_30_39:req.body.age_range_30_39, age_range_other:req.body.age_range_other, type_of_attack_personal_weapons:req.body.type_of_attack_personal_weapons, type_of_attack_gun:req.body.type_of_attack_gun, type_of_attack_knife:req.body.type_of_attack_knife}, {}, function (err, numReplaced) {
										
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
			
		}
		
		
		});

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
		
	db.remove({}, { multi: true }, function(err, numDeleted) {
     console.log('Deleted', numDeleted, 'user(s)');
}); 
	res.status(200).send("Lista de recursos eliminada satisfactoriamente");

});
}