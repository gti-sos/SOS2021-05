var Datastore = require("nedb");
var db = new Datastore({ filename: "./src/back/homicidesAPI/v2/homicides.db", autoload: true });

 
 module.exports.register = (app, BASE_API_PATH) => {
	 
	 var homicides_by_firearms = [];
	 
	 //GET para cargar (o meter) los datos iniciales (todo en JSON)
    //(de modo que cree 2 o más elementos)

    app.get(BASE_API_PATH+"/homicides-by-firearms/loadInitialData", (req,res)=>{ 

        var homicides_by_firearms_initial_data = [

            		// ----------------- AÑO 2019 ----------------------------------------------

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
                "state":"Idaho",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Iowa",
                "year":"2019",
                "homicide_by_firearm": "36" ,
                "handgun":"21",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "15"
            },
            {
                "state":"Illinois",
                "year":"2019",
                "homicide_by_firearm": "648" ,
                "handgun":"564",
                "rifle":"7",
                "shotgun":"4",
                "type_not_stated": "73"
            },
            {
                "state":"Indiana",
                "year":"2019",
                "homicide_by_firearm": "10437" ,
                "handgun":"6385",
                "rifle":"398",
                "shotgun":"364",
                "type_not_stated": "3290"
            },
            {
                "state":"Kansas",
                "year":"2019",
                "homicide_by_firearm": "56" ,
                "handgun":"37",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "17"
            },
            {
                "state":"Kentucky",
                "year":"2019",
                "homicide_by_firearm": "175" ,
                "handgun":"101",
                "rifle":"9",
                "shotgun":"7",
                "type_not_stated": "58"
            },
            {
                "state":"Louisiana",
                "year":"2019",
                "homicide_by_firearm": "56" ,
                "handgun":"200",
                "rifle":"24",
                "shotgun":"4",
                "type_not_stated": "205"
            },
            {
                "state":"Massachusetts",
                "year":"2019",
                "homicide_by_firearm": "72" ,
                "handgun":"38",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Maryland",
                "year":"2019",
                "homicide_by_firearm": "56" ,
                "handgun":"414",
                "rifle":"3",
                "shotgun":"13",
                "type_not_stated": "43"
            },
            {
                "state":"Maine",
                "year":"2019",
                "homicide_by_firearm": "13" ,
                "handgun":"6",
                "rifle":"0",
                "shotgun":"3",
                "type_not_stated": "4"
            },
            {
                "state":"Michigan",
                "year":"2019",
                "homicide_by_firearm": "379" ,
                "handgun":"172",
                "rifle":"13",
                "shotgun":"5",
                "type_not_stated": "189"
            },
            
            {
                "state":"Minnesota",
                "year":"2019",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Missouri",
                "year":"2019",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Mississippi",
                "year":"2019",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
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
                "state":"Nebraska",
                "year":"2019",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Carolina",
                "year":"2019",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Dakota",
                "year":"2019",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Hampshire",
                "year":"2019",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Jersey",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
           
            {
                "state":"New-Mexico",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Nevada",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"New-York",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Ohio",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oklahoma",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oregon",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Pennsylvania",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Rhode-Island",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Carolina",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Dakota",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Tennessee",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Texas",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Utah",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Virginia",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Vermont",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Washington",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wisconsin",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"West-Virginia",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wyoming",
                "year":"2019",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            

            //-----2018------------------------------------
            {
                "state":"Alabama",
                "year":"2018",
                "homicide_by_firearm": "3" ,
                "handgun":"3",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
                    
            {
                "state":"Alaska",
                "year":"2018",
                "homicide_by_firearm": "70" ,
                "handgun":"17",
                "rifle":"1",
                "shotgun":"6",
                "type_not_stated": "20"
            },
            {
                "state":"Arkansas",
                "year":"2018",
                "homicide_by_firearm": "255" ,
                "handgun":"87",
                "rifle":"10",
                "shotgun":"5",
                "type_not_stated": "74"
            },

            {
                "state":"Arizona",
                "year":"2018",
                "homicide_by_firearm": "253" ,
                "handgun":"170",
                "rifle":"6",
                "shotgun":"10",
                "type_not_stated": "47"
            },

            {
                "state":"California",
                "year":"2018",
                "homicide_by_firearm": "991" ,
                "handgun":"762",
                "rifle":"64",
                "shotgun":"34",
                "type_not_stated": "319"
            },
            {
                "state":"Colorado",
                "year":"2018",
                "homicide_by_firearm": "138" ,
                "handgun":"84",
                "rifle":"7",
                "shotgun":"5",
                "type_not_stated": "42"
            },
            {
                "state":"Connecticut",
                "year":"2018",
                "homicide_by_firearm": "170" ,
                "handgun":"15",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Delaware",
                "year":"2018",
                "homicide_by_firearm": "41" ,
                "handgun":"13",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "27"
            },
        
            {
                "state":"Florida",
                "year":"2018",
                "homicide_by_firearm": "1" ,
                "handgun":"1",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Georgia",
                "year":"2018",
                "homicide_by_firearm": "372" ,
                "handgun":"309",
                "rifle":"14",
                "shotgun":"3",
                "type_not_stated": "46"
            },
            {
                "state":"Hawaii",
                "year":"2018",
                "homicide_by_firearm": "9" ,
                "handgun":"5",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "4"
            },
          
            {
                "state":"Idaho",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Iowa",
                "year":"2018",
                "homicide_by_firearm": "36" ,
                "handgun":"21",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "15"
            },
            {
                "state":"Illinois",
                "year":"2018",
                "homicide_by_firearm": "648" ,
                "handgun":"564",
                "rifle":"7",
                "shotgun":"4",
                "type_not_stated": "73"
            },
            {
                "state":"Indiana",
                "year":"2018",
                "homicide_by_firearm": "10437" ,
                "handgun":"6385",
                "rifle":"398",
                "shotgun":"364",
                "type_not_stated": "3290"
            },
            {
                "state":"Kansas",
                "year":"2018",
                "homicide_by_firearm": "56" ,
                "handgun":"37",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "17"
            },
            {
                "state":"Kentucky",
                "year":"2018",
                "homicide_by_firearm": "175" ,
                "handgun":"101",
                "rifle":"9",
                "shotgun":"7",
                "type_not_stated": "58"
            },
            {
                "state":"Louisiana",
                "year":"2018",
                "homicide_by_firearm": "56" ,
                "handgun":"200",
                "rifle":"24",
                "shotgun":"4",
                "type_not_stated": "205"
            },
            {
                "state":"Massachusetts",
                "year":"2018",
                "homicide_by_firearm": "72" ,
                "handgun":"38",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Maryland",
                "year":"2018",
                "homicide_by_firearm": "56" ,
                "handgun":"414",
                "rifle":"3",
                "shotgun":"13",
                "type_not_stated": "43"
            },
            {
                "state":"Maine",
                "year":"2018",
                "homicide_by_firearm": "13" ,
                "handgun":"6",
                "rifle":"0",
                "shotgun":"3",
                "type_not_stated": "4"
            },
            {
                "state":"Michigan",
                "year":"2018",
                "homicide_by_firearm": "379" ,
                "handgun":"172",
                "rifle":"13",
                "shotgun":"5",
                "type_not_stated": "189"
            },
            
            {
                "state":"Minnesota",
                "year":"2018",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Missouri",
                "year":"2018",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Mississippi",
                "year":"2018",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Montana",
                "year":"2018",
                "homicide_by_firearm": "20" ,
                "handgun":"13",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "2"
            },
            {
                "state":"Nebraska",
                "year":"2018",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Carolina",
                "year":"2018",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Dakota",
                "year":"2018",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Hampshire",
                "year":"2018",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Jersey",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
           
            {
                "state":"New-Mexico",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Nevada",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"New-York",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Ohio",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oklahoma",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oregon",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Pennsylvania",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Rhode-Island",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Carolina",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Dakota",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Tennessee",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Texas",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Utah",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Virginia",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Vermont",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Washington",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wisconsin",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"West-Virginia",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wyoming",
                "year":"2018",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },


            //2017-----

            {
                "state":"Alabama",
                "year":"2017",
                "homicide_by_firearm": "3" ,
                "handgun":"3",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
                    
            {
                "state":"Alaska",
                "year":"2017",
                "homicide_by_firearm": "70" ,
                "handgun":"17",
                "rifle":"1",
                "shotgun":"6",
                "type_not_stated": "20"
            },
            {
                "state":"Arkansas",
                "year":"2017",
                "homicide_by_firearm": "255" ,
                "handgun":"87",
                "rifle":"10",
                "shotgun":"5",
                "type_not_stated": "74"
            },

            {
                "state":"Arizona",
                "year":"2017",
                "homicide_by_firearm": "253" ,
                "handgun":"170",
                "rifle":"6",
                "shotgun":"10",
                "type_not_stated": "47"
            },

            {
                "state":"California",
                "year":"2017",
                "homicide_by_firearm": "991" ,
                "handgun":"762",
                "rifle":"64",
                "shotgun":"34",
                "type_not_stated": "319"
            },
            {
                "state":"Colorado",
                "year":"2017",
                "homicide_by_firearm": "138" ,
                "handgun":"84",
                "rifle":"7",
                "shotgun":"5",
                "type_not_stated": "42"
            },
            {
                "state":"Connecticut",
                "year":"2017",
                "homicide_by_firearm": "170" ,
                "handgun":"15",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Delaware",
                "year":"2017",
                "homicide_by_firearm": "41" ,
                "handgun":"13",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "27"
            },
        
            {
                "state":"Florida",
                "year":"2017",
                "homicide_by_firearm": "1" ,
                "handgun":"1",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Georgia",
                "year":"2017",
                "homicide_by_firearm": "372" ,
                "handgun":"309",
                "rifle":"14",
                "shotgun":"3",
                "type_not_stated": "46"
            },
            {
                "state":"Hawaii",
                "year":"2017",
                "homicide_by_firearm": "9" ,
                "handgun":"5",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "4"
            },
          
            {
                "state":"Idaho",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Iowa",
                "year":"2017",
                "homicide_by_firearm": "36" ,
                "handgun":"21",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "15"
            },
            {
                "state":"Illinois",
                "year":"2017",
                "homicide_by_firearm": "648" ,
                "handgun":"564",
                "rifle":"7",
                "shotgun":"4",
                "type_not_stated": "73"
            },
            {
                "state":"Indiana",
                "year":"2017",
                "homicide_by_firearm": "10437" ,
                "handgun":"6385",
                "rifle":"398",
                "shotgun":"364",
                "type_not_stated": "3290"
            },
            {
                "state":"Kansas",
                "year":"2017",
                "homicide_by_firearm": "56" ,
                "handgun":"37",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "17"
            },
            {
                "state":"Kentucky",
                "year":"2017",
                "homicide_by_firearm": "175" ,
                "handgun":"101",
                "rifle":"9",
                "shotgun":"7",
                "type_not_stated": "58"
            },
            {
                "state":"Louisiana",
                "year":"2017",
                "homicide_by_firearm": "56" ,
                "handgun":"200",
                "rifle":"24",
                "shotgun":"4",
                "type_not_stated": "205"
            },
            {
                "state":"Massachusetts",
                "year":"2017",
                "homicide_by_firearm": "72" ,
                "handgun":"38",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Maryland",
                "year":"2017",
                "homicide_by_firearm": "56" ,
                "handgun":"414",
                "rifle":"3",
                "shotgun":"13",
                "type_not_stated": "43"
            },
            {
                "state":"Maine",
                "year":"2017",
                "homicide_by_firearm": "13" ,
                "handgun":"6",
                "rifle":"0",
                "shotgun":"3",
                "type_not_stated": "4"
            },
            {
                "state":"Michigan",
                "year":"2017",
                "homicide_by_firearm": "379" ,
                "handgun":"172",
                "rifle":"13",
                "shotgun":"5",
                "type_not_stated": "189"
            },
            
            {
                "state":"Minnesota",
                "year":"2017",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Missouri",
                "year":"2017",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Mississippi",
                "year":"2017",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Montana",
                "year":"2017",
                "homicide_by_firearm": "20" ,
                "handgun":"13",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "2"
            },
            {
                "state":"Nebraska",
                "year":"2017",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Carolina",
                "year":"2017",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Dakota",
                "year":"2017",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Hampshire",
                "year":"2017",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Jersey",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
           
            {
                "state":"New-Mexico",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Nevada",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"New-York",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Ohio",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oklahoma",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oregon",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Pennsylvania",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Rhode-Island",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Carolina",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Dakota",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Tennessee",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Texas",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Utah",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Virginia",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Vermont",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Washington",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wisconsin",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"West-Virginia",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wyoming",
                "year":"2017",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },

            //2016-----------------------------------------------
            {
                "state":"Alabama",
                "year":"2016",
                "homicide_by_firearm": "3" ,
                "handgun":"3",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
                    
            {
                "state":"Alaska",
                "year":"2016",
                "homicide_by_firearm": "70" ,
                "handgun":"17",
                "rifle":"1",
                "shotgun":"6",
                "type_not_stated": "20"
            },
            {
                "state":"Arkansas",
                "year":"2016",
                "homicide_by_firearm": "255" ,
                "handgun":"87",
                "rifle":"10",
                "shotgun":"5",
                "type_not_stated": "74"
            },

            {
                "state":"Arizona",
                "year":"2016",
                "homicide_by_firearm": "253" ,
                "handgun":"170",
                "rifle":"6",
                "shotgun":"10",
                "type_not_stated": "47"
            },

            {
                "state":"California",
                "year":"2016",
                "homicide_by_firearm": "991" ,
                "handgun":"762",
                "rifle":"64",
                "shotgun":"34",
                "type_not_stated": "319"
            },
            {
                "state":"Colorado",
                "year":"2016",
                "homicide_by_firearm": "138" ,
                "handgun":"84",
                "rifle":"7",
                "shotgun":"5",
                "type_not_stated": "42"
            },
            {
                "state":"Connecticut",
                "year":"2016",
                "homicide_by_firearm": "170" ,
                "handgun":"15",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Delaware",
                "year":"2016",
                "homicide_by_firearm": "41" ,
                "handgun":"13",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "27"
            },
        
            {
                "state":"Florida",
                "year":"2016",
                "homicide_by_firearm": "1" ,
                "handgun":"1",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Georgia",
                "year":"2016",
                "homicide_by_firearm": "372" ,
                "handgun":"309",
                "rifle":"14",
                "shotgun":"3",
                "type_not_stated": "46"
            },
            {
                "state":"Hawaii",
                "year":"2016",
                "homicide_by_firearm": "9" ,
                "handgun":"5",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "4"
            },
          
            {
                "state":"Idaho",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Iowa",
                "year":"2016",
                "homicide_by_firearm": "36" ,
                "handgun":"21",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "15"
            },
            {
                "state":"Illinois",
                "year":"2016",
                "homicide_by_firearm": "648" ,
                "handgun":"564",
                "rifle":"7",
                "shotgun":"4",
                "type_not_stated": "73"
            },
            {
                "state":"Indiana",
                "year":"2016",
                "homicide_by_firearm": "10437" ,
                "handgun":"6385",
                "rifle":"398",
                "shotgun":"364",
                "type_not_stated": "3290"
            },
            {
                "state":"Kansas",
                "year":"2016",
                "homicide_by_firearm": "56" ,
                "handgun":"37",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "17"
            },
            {
                "state":"Kentucky",
                "year":"2016",
                "homicide_by_firearm": "175" ,
                "handgun":"101",
                "rifle":"9",
                "shotgun":"7",
                "type_not_stated": "58"
            },
            {
                "state":"Louisiana",
                "year":"2016",
                "homicide_by_firearm": "56" ,
                "handgun":"200",
                "rifle":"24",
                "shotgun":"4",
                "type_not_stated": "205"
            },
            {
                "state":"Massachusetts",
                "year":"2016",
                "homicide_by_firearm": "72" ,
                "handgun":"38",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Maryland",
                "year":"2016",
                "homicide_by_firearm": "56" ,
                "handgun":"414",
                "rifle":"3",
                "shotgun":"13",
                "type_not_stated": "43"
            },
            {
                "state":"Maine",
                "year":"2016",
                "homicide_by_firearm": "13" ,
                "handgun":"6",
                "rifle":"0",
                "shotgun":"3",
                "type_not_stated": "4"
            },
            {
                "state":"Michigan",
                "year":"2016",
                "homicide_by_firearm": "379" ,
                "handgun":"172",
                "rifle":"13",
                "shotgun":"5",
                "type_not_stated": "189"
            },
            
            {
                "state":"Minnesota",
                "year":"2016",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Missouri",
                "year":"2016",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Mississippi",
                "year":"2016",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Montana",
                "year":"2016",
                "homicide_by_firearm": "20" ,
                "handgun":"13",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "2"
            },
            {
                "state":"Nebraska",
                "year":"2016",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Carolina",
                "year":"2016",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Dakota",
                "year":"2016",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Hampshire",
                "year":"2016",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Jersey",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
           
            {
                "state":"New-Mexico",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Nevada",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"New-York",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Ohio",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oklahoma",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oregon",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Pennsylvania",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Rhode-Island",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Carolina",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Dakota",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Tennessee",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Texas",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Utah",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Virginia",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Vermont",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Washington",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wisconsin",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"West-Virginia",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wyoming",
                "year":"2016",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },

            //2015-------------------------
            {
                "state":"Alabama",
                "year":"2015",
                "homicide_by_firearm": "3" ,
                "handgun":"3",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
                    
            {
                "state":"Alaska",
                "year":"2015",
                "homicide_by_firearm": "70" ,
                "handgun":"17",
                "rifle":"1",
                "shotgun":"6",
                "type_not_stated": "20"
            },
            {
                "state":"Arkansas",
                "year":"2015",
                "homicide_by_firearm": "255" ,
                "handgun":"87",
                "rifle":"10",
                "shotgun":"5",
                "type_not_stated": "74"
            },

            {
                "state":"Arizona",
                "year":"2015",
                "homicide_by_firearm": "253" ,
                "handgun":"170",
                "rifle":"6",
                "shotgun":"10",
                "type_not_stated": "47"
            },

            {
                "state":"California",
                "year":"2015",
                "homicide_by_firearm": "991" ,
                "handgun":"762",
                "rifle":"64",
                "shotgun":"34",
                "type_not_stated": "319"
            },
            {
                "state":"Colorado",
                "year":"2015",
                "homicide_by_firearm": "138" ,
                "handgun":"84",
                "rifle":"7",
                "shotgun":"5",
                "type_not_stated": "42"
            },
            {
                "state":"Connecticut",
                "year":"2015",
                "homicide_by_firearm": "170" ,
                "handgun":"15",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Delaware",
                "year":"2015",
                "homicide_by_firearm": "41" ,
                "handgun":"13",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "27"
            },
        
            {
                "state":"Florida",
                "year":"2015",
                "homicide_by_firearm": "1" ,
                "handgun":"1",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Georgia",
                "year":"2015",
                "homicide_by_firearm": "372" ,
                "handgun":"309",
                "rifle":"14",
                "shotgun":"3",
                "type_not_stated": "46"
            },
            {
                "state":"Hawaii",
                "year":"2015",
                "homicide_by_firearm": "9" ,
                "handgun":"5",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "4"
            },
          
            {
                "state":"Idaho",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Iowa",
                "year":"2015",
                "homicide_by_firearm": "36" ,
                "handgun":"21",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "15"
            },
            {
                "state":"Illinois",
                "year":"2015",
                "homicide_by_firearm": "648" ,
                "handgun":"564",
                "rifle":"7",
                "shotgun":"4",
                "type_not_stated": "73"
            },
            {
                "state":"Indiana",
                "year":"2015",
                "homicide_by_firearm": "10437" ,
                "handgun":"6385",
                "rifle":"398",
                "shotgun":"364",
                "type_not_stated": "3290"
            },
            {
                "state":"Kansas",
                "year":"2015",
                "homicide_by_firearm": "56" ,
                "handgun":"37",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "17"
            },
            {
                "state":"Kentucky",
                "year":"2015",
                "homicide_by_firearm": "175" ,
                "handgun":"101",
                "rifle":"9",
                "shotgun":"7",
                "type_not_stated": "58"
            },
            {
                "state":"Louisiana",
                "year":"2015",
                "homicide_by_firearm": "56" ,
                "handgun":"200",
                "rifle":"24",
                "shotgun":"4",
                "type_not_stated": "205"
            },
            {
                "state":"Massachusetts",
                "year":"2015",
                "homicide_by_firearm": "72" ,
                "handgun":"38",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Maryland",
                "year":"2015",
                "homicide_by_firearm": "56" ,
                "handgun":"414",
                "rifle":"3",
                "shotgun":"13",
                "type_not_stated": "43"
            },
            {
                "state":"Maine",
                "year":"2015",
                "homicide_by_firearm": "13" ,
                "handgun":"6",
                "rifle":"0",
                "shotgun":"3",
                "type_not_stated": "4"
            },
            {
                "state":"Michigan",
                "year":"2015",
                "homicide_by_firearm": "379" ,
                "handgun":"172",
                "rifle":"13",
                "shotgun":"5",
                "type_not_stated": "189"
            },
            
            {
                "state":"Minnesota",
                "year":"2015",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Missouri",
                "year":"2015",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Mississippi",
                "year":"2015",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Montana",
                "year":"2015",
                "homicide_by_firearm": "20" ,
                "handgun":"13",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "2"
            },
            {
                "state":"Nebraska",
                "year":"2015",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Carolina",
                "year":"2015",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Dakota",
                "year":"2015",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Hampshire",
                "year":"2015",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Jersey",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
           
            {
                "state":"New-Mexico",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Nevada",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"New-York",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Ohio",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oklahoma",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oregon",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Pennsylvania",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Rhode-Island",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Carolina",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Dakota",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Tennessee",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Texas",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Utah",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Virginia",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Vermont",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Washington",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wisconsin",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"West-Virginia",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wyoming",
                "year":"2015",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },


            //2014----------------------

            {
                "state":"Alabama",
                "year":"2014",
                "homicide_by_firearm": "3" ,
                "handgun":"3",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
                    
            {
                "state":"Alaska",
                "year":"2014",
                "homicide_by_firearm": "70" ,
                "handgun":"17",
                "rifle":"1",
                "shotgun":"6",
                "type_not_stated": "20"
            },
            {
                "state":"Arkansas",
                "year":"2014",
                "homicide_by_firearm": "255" ,
                "handgun":"87",
                "rifle":"10",
                "shotgun":"5",
                "type_not_stated": "74"
            },

            {
                "state":"Arizona",
                "year":"2014",
                "homicide_by_firearm": "253" ,
                "handgun":"170",
                "rifle":"6",
                "shotgun":"10",
                "type_not_stated": "47"
            },

            {
                "state":"California",
                "year":"2014",
                "homicide_by_firearm": "991" ,
                "handgun":"762",
                "rifle":"64",
                "shotgun":"34",
                "type_not_stated": "319"
            },
            {
                "state":"Colorado",
                "year":"2014",
                "homicide_by_firearm": "138" ,
                "handgun":"84",
                "rifle":"7",
                "shotgun":"5",
                "type_not_stated": "42"
            },
            {
                "state":"Connecticut",
                "year":"2014",
                "homicide_by_firearm": "170" ,
                "handgun":"15",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Delaware",
                "year":"2014",
                "homicide_by_firearm": "41" ,
                "handgun":"13",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "27"
            },
        
            {
                "state":"Florida",
                "year":"2014",
                "homicide_by_firearm": "1" ,
                "handgun":"1",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Georgia",
                "year":"2014",
                "homicide_by_firearm": "372" ,
                "handgun":"309",
                "rifle":"14",
                "shotgun":"3",
                "type_not_stated": "46"
            },
            {
                "state":"Hawaii",
                "year":"2014",
                "homicide_by_firearm": "9" ,
                "handgun":"5",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "4"
            },
          
            {
                "state":"Idaho",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Iowa",
                "year":"2014",
                "homicide_by_firearm": "36" ,
                "handgun":"21",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "15"
            },
            {
                "state":"Illinois",
                "year":"2014",
                "homicide_by_firearm": "648" ,
                "handgun":"564",
                "rifle":"7",
                "shotgun":"4",
                "type_not_stated": "73"
            },
            {
                "state":"Indiana",
                "year":"2014",
                "homicide_by_firearm": "10437" ,
                "handgun":"6385",
                "rifle":"398",
                "shotgun":"364",
                "type_not_stated": "3290"
            },
            {
                "state":"Kansas",
                "year":"2014",
                "homicide_by_firearm": "56" ,
                "handgun":"37",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "17"
            },
            {
                "state":"Kentucky",
                "year":"2014",
                "homicide_by_firearm": "175" ,
                "handgun":"101",
                "rifle":"9",
                "shotgun":"7",
                "type_not_stated": "58"
            },
            {
                "state":"Louisiana",
                "year":"2014",
                "homicide_by_firearm": "56" ,
                "handgun":"200",
                "rifle":"24",
                "shotgun":"4",
                "type_not_stated": "205"
            },
            {
                "state":"Massachusetts",
                "year":"2014",
                "homicide_by_firearm": "72" ,
                "handgun":"38",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Maryland",
                "year":"2014",
                "homicide_by_firearm": "56" ,
                "handgun":"414",
                "rifle":"3",
                "shotgun":"13",
                "type_not_stated": "43"
            },
            {
                "state":"Maine",
                "year":"2014",
                "homicide_by_firearm": "13" ,
                "handgun":"6",
                "rifle":"0",
                "shotgun":"3",
                "type_not_stated": "4"
            },
            {
                "state":"Michigan",
                "year":"2014",
                "homicide_by_firearm": "379" ,
                "handgun":"172",
                "rifle":"13",
                "shotgun":"5",
                "type_not_stated": "189"
            },
            
            {
                "state":"Minnesota",
                "year":"2014",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Missouri",
                "year":"2014",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Mississippi",
                "year":"2014",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Montana",
                "year":"2014",
                "homicide_by_firearm": "20" ,
                "handgun":"13",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "2"
            },
            {
                "state":"Nebraska",
                "year":"2014",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Carolina",
                "year":"2014",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Dakota",
                "year":"2014",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Hampshire",
                "year":"2014",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Jersey",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
           
            {
                "state":"New-Mexico",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Nevada",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"New-York",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Ohio",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oklahoma",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oregon",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Pennsylvania",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Rhode-Island",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Carolina",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Dakota",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Tennessee",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Texas",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Utah",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Virginia",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Vermont",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Washington",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wisconsin",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"West-Virginia",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wyoming",
                "year":"2014",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },

            //---------2013-----------

            {
                "state":"Alabama",
                "year":"2013",
                "homicide_by_firearm": "3" ,
                "handgun":"3",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
                    
            {
                "state":"Alaska",
                "year":"2013",
                "homicide_by_firearm": "70" ,
                "handgun":"17",
                "rifle":"1",
                "shotgun":"6",
                "type_not_stated": "20"
            },
            {
                "state":"Arkansas",
                "year":"2013",
                "homicide_by_firearm": "255" ,
                "handgun":"87",
                "rifle":"10",
                "shotgun":"5",
                "type_not_stated": "74"
            },

            {
                "state":"Arizona",
                "year":"2013",
                "homicide_by_firearm": "253" ,
                "handgun":"170",
                "rifle":"6",
                "shotgun":"10",
                "type_not_stated": "47"
            },

            {
                "state":"California",
                "year":"2013",
                "homicide_by_firearm": "991" ,
                "handgun":"762",
                "rifle":"64",
                "shotgun":"34",
                "type_not_stated": "319"
            },
            {
                "state":"Colorado",
                "year":"2013",
                "homicide_by_firearm": "138" ,
                "handgun":"84",
                "rifle":"7",
                "shotgun":"5",
                "type_not_stated": "42"
            },
            {
                "state":"Connecticut",
                "year":"2013",
                "homicide_by_firearm": "170" ,
                "handgun":"15",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Delaware",
                "year":"2013",
                "homicide_by_firearm": "41" ,
                "handgun":"13",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "27"
            },
        
            {
                "state":"Florida",
                "year":"2013",
                "homicide_by_firearm": "1" ,
                "handgun":"1",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Georgia",
                "year":"2013",
                "homicide_by_firearm": "372" ,
                "handgun":"309",
                "rifle":"14",
                "shotgun":"3",
                "type_not_stated": "46"
            },
            {
                "state":"Hawaii",
                "year":"2013",
                "homicide_by_firearm": "9" ,
                "handgun":"5",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "4"
            },
          
            {
                "state":"Idaho",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Iowa",
                "year":"2013",
                "homicide_by_firearm": "36" ,
                "handgun":"21",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "15"
            },
            {
                "state":"Illinois",
                "year":"2013",
                "homicide_by_firearm": "648" ,
                "handgun":"564",
                "rifle":"7",
                "shotgun":"4",
                "type_not_stated": "73"
            },
            {
                "state":"Indiana",
                "year":"2013",
                "homicide_by_firearm": "10437" ,
                "handgun":"6385",
                "rifle":"398",
                "shotgun":"364",
                "type_not_stated": "3290"
            },
            {
                "state":"Kansas",
                "year":"2013",
                "homicide_by_firearm": "56" ,
                "handgun":"37",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "17"
            },
            {
                "state":"Kentucky",
                "year":"2013",
                "homicide_by_firearm": "175" ,
                "handgun":"101",
                "rifle":"9",
                "shotgun":"7",
                "type_not_stated": "58"
            },
            {
                "state":"Louisiana",
                "year":"2013",
                "homicide_by_firearm": "56" ,
                "handgun":"200",
                "rifle":"24",
                "shotgun":"4",
                "type_not_stated": "205"
            },
            {
                "state":"Massachusetts",
                "year":"2013",
                "homicide_by_firearm": "72" ,
                "handgun":"38",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Maryland",
                "year":"2013",
                "homicide_by_firearm": "56" ,
                "handgun":"414",
                "rifle":"3",
                "shotgun":"13",
                "type_not_stated": "43"
            },
            {
                "state":"Maine",
                "year":"2013",
                "homicide_by_firearm": "13" ,
                "handgun":"6",
                "rifle":"0",
                "shotgun":"3",
                "type_not_stated": "4"
            },
            {
                "state":"Michigan",
                "year":"2013",
                "homicide_by_firearm": "379" ,
                "handgun":"172",
                "rifle":"13",
                "shotgun":"5",
                "type_not_stated": "189"
            },
            
            {
                "state":"Minnesota",
                "year":"2013",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Missouri",
                "year":"2013",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Mississippi",
                "year":"2013",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Montana",
                "year":"2013",
                "homicide_by_firearm": "20" ,
                "handgun":"13",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "2"
            },
            {
                "state":"Nebraska",
                "year":"2013",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Carolina",
                "year":"2013",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Dakota",
                "year":"2013",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Hampshire",
                "year":"2013",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Jersey",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
           
            {
                "state":"New-Mexico",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Nevada",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"New-York",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Ohio",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oklahoma",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oregon",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Pennsylvania",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Rhode-Island",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Carolina",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Dakota",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Tennessee",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Texas",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Utah",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Virginia",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Vermont",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Washington",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wisconsin",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"West-Virginia",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wyoming",
                "year":"2013",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },

            //---------2012

            {
                "state":"Alabama",
                "year":"2012",
                "homicide_by_firearm": "3" ,
                "handgun":"3",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
                    
            {
                "state":"Alaska",
                "year":"2012",
                "homicide_by_firearm": "70" ,
                "handgun":"17",
                "rifle":"1",
                "shotgun":"6",
                "type_not_stated": "20"
            },
            {
                "state":"Arkansas",
                "year":"2012",
                "homicide_by_firearm": "255" ,
                "handgun":"87",
                "rifle":"10",
                "shotgun":"5",
                "type_not_stated": "74"
            },

            {
                "state":"Arizona",
                "year":"2012",
                "homicide_by_firearm": "253" ,
                "handgun":"170",
                "rifle":"6",
                "shotgun":"10",
                "type_not_stated": "47"
            },

            {
                "state":"California",
                "year":"2012",
                "homicide_by_firearm": "991" ,
                "handgun":"762",
                "rifle":"64",
                "shotgun":"34",
                "type_not_stated": "319"
            },
            {
                "state":"Colorado",
                "year":"2012",
                "homicide_by_firearm": "138" ,
                "handgun":"84",
                "rifle":"7",
                "shotgun":"5",
                "type_not_stated": "42"
            },
            {
                "state":"Connecticut",
                "year":"2012",
                "homicide_by_firearm": "170" ,
                "handgun":"15",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Delaware",
                "year":"2012",
                "homicide_by_firearm": "41" ,
                "handgun":"13",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "27"
            },
        
            {
                "state":"Florida",
                "year":"2012",
                "homicide_by_firearm": "1" ,
                "handgun":"1",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Georgia",
                "year":"2012",
                "homicide_by_firearm": "372" ,
                "handgun":"309",
                "rifle":"14",
                "shotgun":"3",
                "type_not_stated": "46"
            },
            {
                "state":"Hawaii",
                "year":"2012",
                "homicide_by_firearm": "9" ,
                "handgun":"5",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "4"
            },
          
            {
                "state":"Idaho",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Iowa",
                "year":"2012",
                "homicide_by_firearm": "36" ,
                "handgun":"21",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "15"
            },
            {
                "state":"Illinois",
                "year":"2012",
                "homicide_by_firearm": "648" ,
                "handgun":"564",
                "rifle":"7",
                "shotgun":"4",
                "type_not_stated": "73"
            },
            {
                "state":"Indiana",
                "year":"2012",
                "homicide_by_firearm": "10437" ,
                "handgun":"6385",
                "rifle":"398",
                "shotgun":"364",
                "type_not_stated": "3290"
            },
            {
                "state":"Kansas",
                "year":"2012",
                "homicide_by_firearm": "56" ,
                "handgun":"37",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "17"
            },
            {
                "state":"Kentucky",
                "year":"2012",
                "homicide_by_firearm": "175" ,
                "handgun":"101",
                "rifle":"9",
                "shotgun":"7",
                "type_not_stated": "58"
            },
            {
                "state":"Louisiana",
                "year":"2012",
                "homicide_by_firearm": "56" ,
                "handgun":"200",
                "rifle":"24",
                "shotgun":"4",
                "type_not_stated": "205"
            },
            {
                "state":"Massachusetts",
                "year":"2012",
                "homicide_by_firearm": "72" ,
                "handgun":"38",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Maryland",
                "year":"2012",
                "homicide_by_firearm": "56" ,
                "handgun":"414",
                "rifle":"3",
                "shotgun":"13",
                "type_not_stated": "43"
            },
            {
                "state":"Maine",
                "year":"2012",
                "homicide_by_firearm": "13" ,
                "handgun":"6",
                "rifle":"0",
                "shotgun":"3",
                "type_not_stated": "4"
            },
            {
                "state":"Michigan",
                "year":"2012",
                "homicide_by_firearm": "379" ,
                "handgun":"172",
                "rifle":"13",
                "shotgun":"5",
                "type_not_stated": "189"
            },
            
            {
                "state":"Minnesota",
                "year":"2012",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Missouri",
                "year":"2012",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Mississippi",
                "year":"2012",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Montana",
                "year":"2012",
                "homicide_by_firearm": "20" ,
                "handgun":"13",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "2"
            },
            {
                "state":"Nebraska",
                "year":"2012",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Carolina",
                "year":"2012",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Dakota",
                "year":"2012",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Hampshire",
                "year":"2012",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Jersey",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
           
            {
                "state":"New-Mexico",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Nevada",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"New-York",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Ohio",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oklahoma",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oregon",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Pennsylvania",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Rhode-Island",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Carolina",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Dakota",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Tennessee",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Texas",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Utah",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Virginia",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Vermont",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Washington",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wisconsin",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"West-Virginia",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wyoming",
                "year":"2012",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },

            //----------2011---------------

            {
                "state":"Alabama",
                "year":"2011",
                "homicide_by_firearm": "3" ,
                "handgun":"3",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
                    
            {
                "state":"Alaska",
                "year":"2011",
                "homicide_by_firearm": "70" ,
                "handgun":"17",
                "rifle":"1",
                "shotgun":"6",
                "type_not_stated": "20"
            },
            {
                "state":"Arkansas",
                "year":"2011",
                "homicide_by_firearm": "255" ,
                "handgun":"87",
                "rifle":"10",
                "shotgun":"5",
                "type_not_stated": "74"
            },

            {
                "state":"Arizona",
                "year":"2011",
                "homicide_by_firearm": "253" ,
                "handgun":"170",
                "rifle":"6",
                "shotgun":"10",
                "type_not_stated": "47"
            },

            {
                "state":"California",
                "year":"2011",
                "homicide_by_firearm": "991" ,
                "handgun":"762",
                "rifle":"64",
                "shotgun":"34",
                "type_not_stated": "319"
            },
            {
                "state":"Colorado",
                "year":"2011",
                "homicide_by_firearm": "138" ,
                "handgun":"84",
                "rifle":"7",
                "shotgun":"5",
                "type_not_stated": "42"
            },
            {
                "state":"Connecticut",
                "year":"2011",
                "homicide_by_firearm": "170" ,
                "handgun":"15",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Delaware",
                "year":"2011",
                "homicide_by_firearm": "41" ,
                "handgun":"13",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "27"
            },
        
            {
                "state":"Florida",
                "year":"2011",
                "homicide_by_firearm": "1" ,
                "handgun":"1",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Georgia",
                "year":"2011",
                "homicide_by_firearm": "372" ,
                "handgun":"309",
                "rifle":"14",
                "shotgun":"3",
                "type_not_stated": "46"
            },
            {
                "state":"Hawaii",
                "year":"2011",
                "homicide_by_firearm": "9" ,
                "handgun":"5",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "4"
            },
          
            {
                "state":"Idaho",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Iowa",
                "year":"2011",
                "homicide_by_firearm": "36" ,
                "handgun":"21",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "15"
            },
            {
                "state":"Illinois",
                "year":"2011",
                "homicide_by_firearm": "648" ,
                "handgun":"564",
                "rifle":"7",
                "shotgun":"4",
                "type_not_stated": "73"
            },
            {
                "state":"Indiana",
                "year":"2011",
                "homicide_by_firearm": "10437" ,
                "handgun":"6385",
                "rifle":"398",
                "shotgun":"364",
                "type_not_stated": "3290"
            },
            {
                "state":"Kansas",
                "year":"2011",
                "homicide_by_firearm": "56" ,
                "handgun":"37",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "17"
            },
            {
                "state":"Kentucky",
                "year":"2011",
                "homicide_by_firearm": "175" ,
                "handgun":"101",
                "rifle":"9",
                "shotgun":"7",
                "type_not_stated": "58"
            },
            {
                "state":"Louisiana",
                "year":"2011",
                "homicide_by_firearm": "56" ,
                "handgun":"200",
                "rifle":"24",
                "shotgun":"4",
                "type_not_stated": "205"
            },
            {
                "state":"Massachusetts",
                "year":"2011",
                "homicide_by_firearm": "72" ,
                "handgun":"38",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Maryland",
                "year":"2011",
                "homicide_by_firearm": "56" ,
                "handgun":"414",
                "rifle":"3",
                "shotgun":"13",
                "type_not_stated": "43"
            },
            {
                "state":"Maine",
                "year":"2011",
                "homicide_by_firearm": "13" ,
                "handgun":"6",
                "rifle":"0",
                "shotgun":"3",
                "type_not_stated": "4"
            },
            {
                "state":"Michigan",
                "year":"2011",
                "homicide_by_firearm": "379" ,
                "handgun":"172",
                "rifle":"13",
                "shotgun":"5",
                "type_not_stated": "189"
            },
            
            {
                "state":"Minnesota",
                "year":"2011",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Missouri",
                "year":"2011",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Mississippi",
                "year":"2011",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Montana",
                "year":"2011",
                "homicide_by_firearm": "20" ,
                "handgun":"13",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "2"
            },
            {
                "state":"Nebraska",
                "year":"2011",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Carolina",
                "year":"2011",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Dakota",
                "year":"2011",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Hampshire",
                "year":"2011",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Jersey",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
           
            {
                "state":"New-Mexico",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Nevada",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"New-York",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Ohio",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oklahoma",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oregon",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Pennsylvania",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Rhode-Island",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Carolina",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Dakota",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Tennessee",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Texas",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Utah",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Virginia",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Vermont",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Washington",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wisconsin",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"West-Virginia",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wyoming",
                "year":"2011",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },

            //-------2010-------------

            {
                "state":"Alabama",
                "year":"2010",
                "homicide_by_firearm": "3" ,
                "handgun":"3",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
                    
            {
                "state":"Alaska",
                "year":"2010",
                "homicide_by_firearm": "70" ,
                "handgun":"17",
                "rifle":"1",
                "shotgun":"6",
                "type_not_stated": "20"
            },
            {
                "state":"Arkansas",
                "year":"2010",
                "homicide_by_firearm": "255" ,
                "handgun":"87",
                "rifle":"10",
                "shotgun":"5",
                "type_not_stated": "74"
            },

            {
                "state":"Arizona",
                "year":"2010",
                "homicide_by_firearm": "253" ,
                "handgun":"170",
                "rifle":"6",
                "shotgun":"10",
                "type_not_stated": "47"
            },

            {
                "state":"California",
                "year":"2010",
                "homicide_by_firearm": "991" ,
                "handgun":"762",
                "rifle":"64",
                "shotgun":"34",
                "type_not_stated": "319"
            },
            {
                "state":"Colorado",
                "year":"2010",
                "homicide_by_firearm": "138" ,
                "handgun":"84",
                "rifle":"7",
                "shotgun":"5",
                "type_not_stated": "42"
            },
            {
                "state":"Connecticut",
                "year":"2010",
                "homicide_by_firearm": "170" ,
                "handgun":"15",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Delaware",
                "year":"2010",
                "homicide_by_firearm": "41" ,
                "handgun":"13",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "27"
            },
        
            {
                "state":"Florida",
                "year":"2010",
                "homicide_by_firearm": "1" ,
                "handgun":"1",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Georgia",
                "year":"2010",
                "homicide_by_firearm": "372" ,
                "handgun":"309",
                "rifle":"14",
                "shotgun":"3",
                "type_not_stated": "46"
            },
            {
                "state":"Hawaii",
                "year":"2010",
                "homicide_by_firearm": "9" ,
                "handgun":"5",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "4"
            },
          
            {
                "state":"Idaho",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Iowa",
                "year":"2010",
                "homicide_by_firearm": "36" ,
                "handgun":"21",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "15"
            },
            {
                "state":"Illinois",
                "year":"2010",
                "homicide_by_firearm": "648" ,
                "handgun":"564",
                "rifle":"7",
                "shotgun":"4",
                "type_not_stated": "73"
            },
            {
                "state":"Indiana",
                "year":"2010",
                "homicide_by_firearm": "10437" ,
                "handgun":"6385",
                "rifle":"398",
                "shotgun":"364",
                "type_not_stated": "3290"
            },
            {
                "state":"Kansas",
                "year":"2010",
                "homicide_by_firearm": "56" ,
                "handgun":"37",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "17"
            },
            {
                "state":"Kentucky",
                "year":"2010",
                "homicide_by_firearm": "175" ,
                "handgun":"101",
                "rifle":"9",
                "shotgun":"7",
                "type_not_stated": "58"
            },
            {
                "state":"Louisiana",
                "year":"2010",
                "homicide_by_firearm": "56" ,
                "handgun":"200",
                "rifle":"24",
                "shotgun":"4",
                "type_not_stated": "205"
            },
            {
                "state":"Massachusetts",
                "year":"2010",
                "homicide_by_firearm": "72" ,
                "handgun":"38",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "53"
            },
            {
                "state":"Maryland",
                "year":"2010",
                "homicide_by_firearm": "56" ,
                "handgun":"414",
                "rifle":"3",
                "shotgun":"13",
                "type_not_stated": "43"
            },
            {
                "state":"Maine",
                "year":"2010",
                "homicide_by_firearm": "13" ,
                "handgun":"6",
                "rifle":"0",
                "shotgun":"3",
                "type_not_stated": "4"
            },
            {
                "state":"Michigan",
                "year":"2010",
                "homicide_by_firearm": "379" ,
                "handgun":"172",
                "rifle":"13",
                "shotgun":"5",
                "type_not_stated": "189"
            },
            
            {
                "state":"Minnesota",
                "year":"2010",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Missouri",
                "year":"2010",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Mississippi",
                "year":"2010",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"Montana",
                "year":"2010",
                "homicide_by_firearm": "20" ,
                "handgun":"13",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "2"
            },
            {
                "state":"Nebraska",
                "year":"2010",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Carolina",
                "year":"2010",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"North-Dakota",
                "year":"2010",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Hampshire",
                "year":"2010",
                "homicide_by_firearm": "79" ,
                "handgun":"61",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
            {
                "state":"New-Jersey",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
           
            {
                "state":"New-Mexico",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Nevada",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"New-York",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Ohio",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oklahoma",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Oregon",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Pennsylvania",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Rhode-Island",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Carolina",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"South-Dakota",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Tennessee",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Texas",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Utah",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Virginia",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Vermont",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Washington",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wisconsin",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"West-Virginia",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Wyoming",
                "year":"2010",
                "homicide_by_firearm": "0" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },

            //----------------------------------

            {
                "state":"Alabama",
                "year":"2016",
                "homicide_by_firearm": "2" ,
                "handgun":"2",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            
            {
                "state":"Idaho",
                "year":"2018",
                "homicide_by_firearm": "23" ,
                "handgun":"9",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "7"
            },
            {
                "state":"Idaho",
                "year":"2017",
                "homicide_by_firearm": "22" ,
                "handgun":"16",
                "rifle":"6",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Idaho",
                "year":"2016",
                "homicide_by_firearm": "19" ,
                "handgun":"14",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "3"
            },
            {
                "state":"Idaho",
                "year":"2015",
                "homicide_by_firearm": "20" ,
                "handgun":"15",
                "rifle":"3",
                "shotgun":"0",
                "type_not_stated": "2"
            },
            {
                "state":"Idaho",
                "year":"2014",
                "homicide_by_firearm": "12" ,
                "handgun":"8",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "3"
            },
            {
                "state":"Idaho",
                "year":"2013",
                "homicide_by_firearm": "23" ,
                "handgun":"10",
                "rifle":"1",
                "shotgun":"0",
                "type_not_stated": "2"
            },
            {
                "state":"Idaho",
                "year":"2012",
                "homicide_by_firearm": "15" ,
                "handgun":"10",
                "rifle":"1",
                "shotgun":"2",
                "type_not_stated": "2"
            },
            {
                "state":"Idaho",
                "year":"2011",
                "homicide_by_firearm": "14" ,
                "handgun":"12",
                "rifle":"1",
                "shotgun":"0",
                "type_not_stated": "1"
            },
            {
                "state":"Idaho",
                "year":"2010",
                "homicide_by_firearm": "17" ,
                "handgun":"12",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "5"
            },
            {
                "state":"West_Virginia",
                "year":"2019",
                "homicide_by_firearm": "69" ,
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
                "state":"New_Mexico",
                "year":"2019",
                "homicide_by_firearm": "146" ,
                "handgun":"53",
                "rifle":"1",
                "shotgun":"3",
                "type_not_stated": "43"
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
                "state":"Maine",
                "year":"2018",
                "homicide_by_firearm": "7" ,
                "handgun":"6",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "1"
            },
            {
                "state":"Maine",
                "year":"2017",
                "homicide_by_firearm": "12" ,
                "handgun":"4",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "8"
            },
            {
                "state":"Maine",
                "year":"2016",
                "homicide_by_firearm": "15" ,
                "handgun":"6",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "8"
            },
            {
                "state":"Maine",
                "year":"2015",
                "homicide_by_firearm": "12" ,
                "handgun":"11",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "1"
            },
            {
                "state":"Maine",
                "year":"2014",
                "homicide_by_firearm": "3" ,
                "handgun":"2",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "0"
            },
            {
                "state":"Maine",
                "year":"2013",
                "homicide_by_firearm": "11" ,
                "handgun":"3",
                "rifle":"2",
                "shotgun":"1",
                "type_not_stated": "5"
            },
            {
                "state":"Maine",
                "year":"2012",
                "homicide_by_firearm": "10" ,
                "handgun":"4",
                "rifle":"1",
                "shotgun":"0",
                "type_not_stated": "5"
            },
            {
                "state":"Maine",
                "year":"2011",
                "homicide_by_firearm": "9" ,
                "handgun":"2",
                "rifle":"1",
                "shotgun":"1",
                "type_not_stated": "5"
            },
            {
                "state":"Maine",
                "year":"2010",
                "homicide_by_firearm": "11" ,
                "handgun":"4",
                "rifle":"2",
                "shotgun":"1",
                "type_not_stated": "4"
            },
        
            {
                "state":"Alabama",
                "year":"2017",
                "homicide_by_firearm": "2" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "1"
            },
            {
                "state":"Alabama",
                "year":"2016",
                "homicide_by_firearm": "2" ,
                "handgun":"0",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "1"
            },
            {
                "state":"Alabama",
                "year":"2015",
                "homicide_by_firearm": "2" ,
                "handgun":"1",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "0"
            },
            {
                "state":"Alabama",
                "year":"2014",
                "homicide_by_firearm": "1" ,
                "handgun":"1",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "0"
            },
            {
                "state":"Alabama",
                "year":"2013",
                "homicide_by_firearm": "3" ,
                "handgun":"1",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "3"
            },
            {
                "state":"Alabama",
                "year":"2012",
                "homicide_by_firearm": "3" ,
                "handgun":"1",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "1"
            },
            {
                "state":"Alabama",
                "year":"2011",
                "homicide_by_firearm": "9" ,
                "handgun":"3",
                "rifle":"0",
                "shotgun":"1",
                "type_not_stated": "6"
            },
            {
                "state":"Alabama",
                "year":"2010",
                "homicide_by_firearm": "21" ,
                "handgun":"3",
                "rifle":"0",
                "shotgun":"0",
                "type_not_stated": "18"
            },
        
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
