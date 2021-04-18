 module.exports.register = (app, BASE_API_PATH) => {
	 
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

        res.status(200).send("Initial data loaded succesfully!");

    });



    //1)GET a la lista de recursos devuelve una lista con todos los recursos
    //(GET para cargar el array completo)

    app.get(BASE_API_PATH + "/homicides-by-firearms", (req,res) => {
        res.send(200, JSON.stringify(homicides_by_firearms,null,2));
    })



    //2)POST  a la lista de recursos (para introducir nuevos arrays de datos)

    app.post(BASE_API_PATH+"/homicides-by-firearms", (req,res)=>{
        var data = req.body;
        
        var esta =false;
        var bodyok= true;
        
        for(var k in homicides_by_firearms){
            
            if(homicides_by_firearms[k].state == String(req.body.state) &&
                homicides_by_firearms[k].year == String(req.body.year)){
                
                esta=true;
                
                var cantidadDeClaves = Object.keys(data).length;
                if(cantidadDeClaves!=5){
                    body = false;
                }
                
                
            }
        }
        
        if(!esta && bodyok){
            homicides_by_firearms.push(data);
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

    app.get(BASE_API_PATH+"/homicides-by-firearms/:state/:year", (req,res)=>{ 
            
        var esta =false;
        for(var k in homicides_by_firearms){
            
            if(homicides_by_firearms[k].state == String(req.params.state) &&
                homicides_by_firearms[k].year == String(req.params.year)){
                
                esta=true;
                    
            }
        }
        var data = homicides_by_firearms.filter(function(k){ 
            
            return k.state==String(req.params.state) && k.year==String(req.params.year);
        });
	
        //Respondemos a la petición enviando el recurso, filtrado, y en JSON
        if(esta){
            res.status(200).send(JSON.stringify(data,null,2));
        }else{
            res.status(404).send("No hemos encontrado el recurso solicitado");
        }
	
    });


    //4) DELETE a un recurso, borra ese recurso (en concreto)
    //En nuestro caso, borramos el recurso por estado y año

    app.delete(BASE_API_PATH+"/homicides-by-firearms/:state/:year", function(req, res) { 
        //Si el 'estado' y 'año' coinciden con los recibidos o dados, se elimina ese recurso
	var esta= false;
	homicides_by_firearms = homicides_by_firearms.filter(function(k){
		
		if(k.state!=String(req.params.state) || k.year!=(String(req.params.year))) {
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

    app.put(BASE_API_PATH+"/homicides-by-firearms/:state/:year", function(req,res) { 

        var esta = false;
        for(var k in homicides_by_firearms){
            
            if(homicides_by_firearms[k].state == String(req.params.state) &&
                homicides_by_firearms[k].year == String(req.params.year)){
                esta=true;
                    var data = req.body;
                    homicides_by_firearms[k] = data;
                    break;
            }
        }
        if(!esta){
            res.status(404).send("Recurso no encontrado");
        }else{
        res.status(200).send("Actualización realizada correctamente");
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



    
}
	 