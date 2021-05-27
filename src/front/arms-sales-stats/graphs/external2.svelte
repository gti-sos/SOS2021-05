<script>
	import {pop} from "svelte-spa-router";
    import Button from "sveltestrap/src/Button.svelte";
	import {
        onMount
    } from "svelte";
    
    import "_my-chartist-settings.scss";        
    import "chartist/dist/scss/chartist.scss";
import { create_bidirectional_transition } from "svelte/internal";

        const url = "https://covid19-api.com/country/code?code=US&format=json";
        const url2 = "https://covid19-api.com/country/code?code=ES&format=json";
		const url3 = "https://covid19-api.com/country/code?code=IT&format=json";
		const url4 = "https://covid19-api.com/country/code?code=IN&format=json";
        const url5 = "https://covid19-api.com/country/code?code=BR&format=json";
        const url6 = "https://covid19-api.com/country/code?code=FR&format=json";
        const url7 = "https://covid19-api.com/country/code?code=AR&format=json";

        let EEUU = [];
        let Spain = [];
        let Italia = [];
        let India = [];
        let Brasil = [];
        let Francia = [];
        let Argentina = [];

        let casos =[];
        let recovered =[];
        let criticos =[];
        let muertes =[];

async function inicio(){
   
   await getData()
   delay(2000);
  recarga()
  
}
const recarga=()=>{

   loadGraph()
  
}
const delay = ms => new Promise(res => setTimeout(res, ms));



   
    async function getData(){
    
            
        const res = await fetch(url); 
		if (res.ok) {
			console.log("Ok");
            EEUU = await res.json();
            console.log(EEUU[0]);
		} else {
			console.log("Error al cargar API externa");
        }
        const res1 = await fetch(url2); 
		if (res1.ok) {
			console.log("Peticion realizada");
            Spain = await res1.json();
            console.log(Spain[0]);
		} else {
			console.log("Error al cargar API externa");
        }
        const res2 = await fetch(url3); 
		if (res2.ok) {
			console.log("Peticion realizada");
            Italia = await res2.json();
            console.log(Italia[0]);
		} else {
			console.log("Error al cargar API externa");
        }

        const res3 = await fetch(url4); 
		if (res3.ok) {
			console.log("Peticion realizada");
            India = await res3.json();
            console.log(India[0]);
		} else {
			console.log("Error al cargar API externa");
        }

        const res4 = await fetch(url5); 
		if (res4.ok) {
			console.log("Peticion realizada");
            Brasil = await res4.json();
            console.log(Brasil[0]);
		} else {
			console.log("Error al cargar API externa");
        }

        const res5 = await fetch(url6); 
		if (res5.ok) {
			console.log("Peticion realizada");
            Francia = await res5.json();
            console.log(Francia[0]);
		} else {
			console.log("Error al cargar API externa");
        }

        const res6 = await fetch(url7); 
		if (res6.ok) {
			console.log("Peticion realizada");
            Argentina = await res6.json();
            console.log(Argentina[0]);
		} else {
			console.log("Error al cargar API externa");
        }


        //Creacion de arrays 

        
        
        //Cargar casos totales
        casos.push(EEUU[0].confirmed)
        casos.push(Spain[0].confirmed)
        casos.push(Italia[0].confirmed)
        casos.push(India[0].confirmed)
        casos.push(Brasil[0].confirmed)
        casos.push(Francia[0].confirmed)
        casos.push(Argentina[0].confirmed)

        //Cargar casos totales
        recovered.push(EEUU[0].recovered)
        recovered.push(Spain[0].recovered)
        recovered.push(Italia[0].recovered)
        recovered.push(India[0].recovered)
        recovered.push(Brasil[0].recovered)
        recovered.push(Francia[0].recovered)
        recovered.push(Argentina[0].recovered)

         //Cargar casos totales
         muertes.push(EEUU[0].deaths)
        muertes.push(Spain[0].deaths)
        muertes.push(Italia[0].deaths)
        muertes.push(India[0].deaths)
        muertes.push(Brasil[0].deaths)
        muertes.push(Francia[0].deaths)
        muertes.push(Argentina[0].deaths)

        
        console.log(muertes)
    }
	
    async function loadGraph(){
        let anchoa=criticos;
    var data = {
  labels: ['EEUU', 'España', 'Italia', 'India', 'Brasil', 'Francia', 'Argentina'],
    series: [
    casos,
    recovered,
    muertes
    

    
    
  ]
};

var options = {
  seriesBarDistance: 15
};

var responsiveOptions = [
  ['screen and (min-width: 641px) and (max-width: 1024px)', {
    seriesBarDistance: 10,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value;
      }
    }
  }],
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

new Chartist.Bar('.ct-chart', data, options, responsiveOptions);

    }
</script>

<svelte:head>

   
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
    <script src="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js" on:load="{inicio}"></script>
</svelte:head>

<main style=" background-color:#FFE4E4 ;" >

    <h5 id = "titulo" class = "titulo" >
        Estadísticas Covid en el mundo.
    </h5>
             
           <div>   <Button outline style=" background-color:#6C00AF; color:aliceblue" on:click="{pop}"> Volver</Button></div>   
    <div id = "todo" class = "todo">
       
        <div   id = "chart" class = "chart">
            <div class="ct-chart ct-perfect-fourth" ></div>
        </div>
        <p style="font-size: 120%;">La tabla muestra en ROJO oscuro el numero de muertes. El ROJO CLARO muestra el nº de personas recuperadas. En AMARILLO los decesos</p>
    </div>

    <div id = "muestra" class = "muestra">
       
        
        
        
    </div>
  
      
</main>

<style>
    
	    div#chart { 
        padding-left: 4%;
        padding-right: 4%;
        padding-top: 2%;
         border: 4px solid rgb(27, 27, 27);
         background-color: #FFEFD2;
         width: 60%;
         border-radius: 10px;

         
         }


         div#todo { 
            padding-left: 10%;
            padding-top: 3%;
            padding-bottom: 10%;
         }

         h5#titulo{
            width: 28%;
            border-radius: 6px;
            border: 3px solid rgb(27, 27, 27);
         background-color: #FFEFD2;
           font-size: 200%;

         }

</style>