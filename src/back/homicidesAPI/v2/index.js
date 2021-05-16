var Datastore = require("nedb");
var db = new Datastore({ filename: "./src/back/homicidesAPI/v2/homicides.db", autoload: true });

 
 module.exports.register = (app, BASE_API_PATH) => {
	 
	 var homicides_by_firearms = [];
	 
	 //GET para cargar (o meter) los datos iniciales (todo en JSON)
    //(de modo que cree 2 o más elementos)

    app.get(BASE_API_PATH+"/homicides-by-firearms/loadInitialData", (req,res)=>{ 

        var homicides_by_firearms_initial_data = [
            {
                "state":"Alaska",
                "year":"2019",
                "homicide_by_firearm": "70" ,
                "handgun":"17",
                "rifle":"1",
                "shotgun":"6",
                "type_not_stated": "20"
            },
            {
                "state":"Arkansas",
                "year":"2019",
                "homicide_by_firearm": "255" ,
                "handgun":"87",
                "rifle":"10",
                "shotgun":"5",
                "type_not_stated": "74"
            },
            {
                "state":"Idaho",
                "year":"2019",
                "homicide_by_firearm": "23" ,
                "handgun":"9",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "7"
            },
            {
                "state":"West_Virginia",
                "year":"2019",
                "homicide:by_firearm": "69" ,
                "handgun":"24",
                "rifle":"7",
                "shotgun":"2",
                "type_not_stated": "17"
            },
            {
                "state":"Wyoming",
                "year":"2019",
                "homicide_by_firearm": "11" ,
                "handgun":"7",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "2"
            },
            {
                "state":"Montana",
                "year":"2019",
                "homicide_by_firearm": "20" ,
                "handgun":"13",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "2"
            },
            {
                "state":"New_Mexico",
                "year":"2019",
                "homicide_by_firearm": "146" ,
                "handgun":"53",
                "rifle":"1",
                "shotgun":"3",
                "type_not_stated": "43"
            },
            {
                "state":"Alabama",
                "year":"2019",
                "homicide_by_firearm": "3" ,
                "handgun":"3",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Arizona",
                "year":"2019",
                "homicide_by_firearm": "253" ,
                "handgun":"170",
                "rifle":"6",
                "shotgun":"10",
                "type_not_stated": "47"
            },
            {
                "state":"California",
                "year":"2019",
                "homicide_by_firearm": "991" ,
                "handgun":"762",
                "rifle":"64",
                "shotgun":"34",
                "type_not_stated": "319"
            },
            {
                "state":"Colorado",
                "year":"2019",
                "homicide_by_firearm": "138" ,
                "handgun":"84",
                "rifle":"7",
                "shotgun":"5",
                "type_not_stated": "42"
            },
            {
                "state":"Connecticut",
                "year":"2019",
                "homicide_by_firearm": "170" ,
                "handgun":"15",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Columbia",
                "year":"2019",
                "homicide_by_firearm": "136" ,
                "handgun":"52",
                "rifle":"0",
                "shotgun":"2",
                "type_not_stated": "84"
            },
            {
                "state":"Delaware",
                "year":"2019",
                "homicide_by_firearm": "41" ,
                "handgun":"13",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "27"
            },
            {
                "state":"Florida",
                "year":"2019",
                "homicide_by_firearm": "1" ,
                "handgun":"1",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Georgia",
                "year":"2019",
                "homicide_by_firearm": "372" ,
                "handgun":"309",
                "rifle":"14",
                "shotgun":"3",
                "type_not_stated": "46"
            },
            {
                "state":"Hawaii",
                "year":"2019",
                "homicide_by_firearm": "9" ,
                "handgun":"5",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "4"
            },
            {
                "state":"Iowa",
                "year":"2019",
                "homicide_by_firearm": "36" ,
                "handgun":"21",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "15"
            }
        ];

        db.insert(homicides_by_firearms_initial_data);

        //Lanzamos el código 200 indicando que se han cargado los datos iniciales de forma satisfactoria
        //(Lo indicamos con el 200 por consola, y con un pequeño html para el usuario de forma gráfica)

        res.status(200).send("Initial data loaded succesfully!");

    });



    //1)GET a la lista de recursos devuelve una lista con todos los recursos
    //(GET para cargar el array completo)

   

    app.get(BASE_API_PATH + "/homicides-by-firearms", (req,res) => {
        
        let query = {};
            let offset = 0;
            let limit = Number.MAX_SAFE_INTEGER;

            // Pagination
            if (req.query.limit) {
                limit = parseInt(req.query.limit);
                delete req.query.limit;
            }

            if (req.query.offset) {
                offset = parseInt(req.query.offset);
                delete req.query.offset;
            }

            // Search
            if (req.query.state) query["state"] = req.query.state;
            if (req.query.year) query["year"] = req.query.year;
            if (req.query.homicide_by_firearm) query["homicide_by_firearm"] = req.query.homicide_by_firearm;
            if (req.query.handgun) query["handgun"] =req.query.handgun;
            if (req.query.rifle) query["rifle"] = req.query.rifle;
            if (req.query.shotgun) query["shotgun"] = req.query.shotgun;
            if (req.query.type_not_stated) query["type_not_stated"] = req.query.type_not_stated;


        
        db.find(query).sort({ state: 1, year: -1 }).skip(offset).limit(limit).exec(function (err, resources) {
                if (err) {
                    console.error(DATABASE_ERR_MSSG + err);
                    res.sendStatus(500);
                } else {
                    if (resources.length != 0) {
                    
                        var aux = resources.map((c)=>{
                    return {state: c.state,year:c.year, homicide_by_firearm: c.homicide_by_firearm,handgun: c.handgun, rifle:c.rifle, shotgun: c.shotgun, type_not_stated: c.type_not_stated  }
                
                        res.status(200).send(aux);
                        
                        
                        });

                        // res.status(200).send(JSON.stringify(resourcesToSend, null, 2));
                        res.status(200).send(aux);
                    } else {
                        var array = [];
                        res.status(200).send(array);
                    }

                }

            });
        });



    app.post(BASE_API_PATH+"/homicides-by-firearms", (req,res)=>{
	
        var data = req.body;
        
        var esta =false;
        var bodyok= true;
        
        db.find({state:String(req.body.state), year:String(req.body.year) }, function(err, record) {
            
            
            if (record.length!=0) {
                esta=true;
                
                res.status(409).send("Error. Ya Existe un recurso con el mismo Estado y Año.");
        
            }else{
                
                // -----------------Comprueba body------------------------ 
                    var cantidadDeClaves = Object.keys(data).length;
                
                    if(cantidadDeClaves!=7){
                        bodyok = false;
                    }
        
            
                    var aux = Object.keys(data);
        
                    if(aux[0]!="state"|| aux[1]!= "year" || aux[2]!= "homicide_by_firearm"|| aux[3]!= "handgun" || aux[4] != "rifle" || aux[5] != "shotgun" || aux[6] != "type_not_stated"){
                        bodyok =false;
                    }
                // ------------------------------------------------------- 
                
                if(bodyok){
            
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
    //En nuestro caso, accedemos a los elementos por estado y año (p ej)

    app.get(BASE_API_PATH+"/homicides-by-firearms/:state/:year", (req,res)=>{ 
		
		
        db.find({state:String(req.params.state), year:String(req.params.year)  }, function(err, record) {
            
            console.log(record);
            
            if (record.length==0) {
               
                res.status(404).send("No hemos encontrado el recurso");
        
            }else{
                
			var aux = record.map((c)=>{
				return {state: c.state,year:c.year, homicide_by_firearm: c.homicide_by_firearm,handgun: c.handgun, rifle:c.rifle, shotgun: c.shotgun, type_not_stated: c.type_not_stated }
			});
            if (aux.length == 1) {
                res.status(200).send(aux[0]);
            }else{
                res.status(200).send(aux);
            }

            }
            
            });
        
        
    });
    

    //4) DELETE a un recurso, borra ese recurso (en concreto)
    //En nuestro caso, borramos el recurso por estado y año

    app.delete(BASE_API_PATH+"/homicides-by-firearms/:state/:year", function(req, res) { 
        //Si el 'estado' y 'año' coinciden con los recibidos o dados, se elimina ese recurso
        
        
        db.remove({state:String(req.params.state), year:String(req.params.year)},{},(err, numEvictionsRemoved)=>{
                
            console.log(err);
            
            if(err!=null){
                    console.error("ERROR: "+err);
                    res.sendStatus(500);
                }else{
                    if(numEvictionsRemoved==0){
                        res.status(404).send("No hemos encontrado el recurso");
                    }else{
                        res.status(200).send("Recurso eliminado satisfactoriamente");
                    }
                }
            })
        
    });


    //5) PUT a un recurso (en concreto), actualiza ese recurso
    //actualizamos los que coincidan con 'state' y 'year'

    app.put(BASE_API_PATH+"/homicides-by-firearms/:state/:year", function(req,res) { 

        var data = req.body;
        
        var esta = false;
        var bodyok = true;
        
        var aux = Object.keys(data);
        
            if(aux[0]!="state"|| aux[1]!= "year" || aux[2]!= "homicide_by_firearm"|| aux[3]!= "handgun" || aux[4] != "rifle" || aux[5] != "shotgun" || aux[6] != "type_not_stated"){
                bodyok =false;
            }
        
        db.find({state:String(req.params.state), year:String(req.params.year)  }, function(err, record) {
            
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
                                  {state:String(req.params.state), year:String(req.params.year),homicide_by_firearm: req.body.homicide_by_firearm, handgun: req.body.handgun, 
                                    rifle: req.body.rifle, shotgun: req.body.shotgun, type_not_stated: req.body.type_not_stated}, {}, function (err, numReplaced) {
                                            
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
		
        db.remove({}, { multi: true }, function(err, numDeleted) {
         console.log('Deleted', numDeleted, 'user(s)');
    }); 
        res.status(200).send("Lista de recursos eliminada satisfactoriamente");
    
    });
         
         
     



    
}
