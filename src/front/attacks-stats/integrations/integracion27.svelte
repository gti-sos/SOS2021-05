<script>

import {
        onMount
    } from "svelte";


    import {pop} from "svelte-spa-router";
    import Button from "sveltestrap/src/Button.svelte";

    let data = [];
    let data2 = [];
    let ano2016 ="";
    let ano2017 ="";
    let ano2018 ="";
    let datos = new Object();
    let suicidiosAcum2016 =0;
    let suicidiosAcum2017 =0;
    let suicidiosAcum2018 =0;
    let ataquesAcum2016 =0;
    let ataquesAcum2017 =0;
    let ataquesAcum2018 =0;
    let datapoints = [];
    let ataquesTotales = [];

    onMount(inicio)
    async function inicio(){
        await cargarDatos();
        await loadGraph();
        
    }

async function loadGraph(){


    window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Suicidios/Ataques"
	},
	axisX:{
		title: "",
		minimum: -0.02,
		maximum: 2.02
	},
	axisY:{
		title:"Porcentaje"
	},
	
	data: [{
		type: "stackedArea100",
		name: "Suicidios",
		showInLegend: "true",
        
		dataPoints: datapoints
	},
	{
		type: "stackedArea100",
		name: "Ataques",
		showInLegend: "true",
		dataPoints: ataquesTotales
	}]
});
chart.render();

}

}

async function cargarDatos(){

    
    console.log("Fetching data...");
    const res = await fetch
    ("http://sos2021-27.herokuapp.com/api/v2/suicide-records");
    
    if(res.ok){
        console.log("Ok.");
        const json = await res.json();
        data = json;
        console.log(data);
    }else{
        console.log("Error!");
    }
    
    for(let i=0;i<data.length;i++){
        if(data[i].year == "2016"){
            suicidiosAcum2016 += Number.parseInt(data[i].suic_total); 
            ano2016 = data[i].year;  
        }
        if(data[i].year == "2017"){
            suicidiosAcum2017 += Number.parseInt(data[i].suic_total);
            ano2017 = data[i].year;    
        }
        if(data[i].year == "2018"){
            suicidiosAcum2018 += Number.parseInt(data[i].suic_total); 
            ano2018 = data[i].year;   
        }
    }
    datos.y = suicidiosAcum2016;
    datos.label = ano2016;
    datapoints.push(datos);
    console.log(suicidiosAcum2016);
    datos={};
    datos.y = suicidiosAcum2017;
    datos.label = ano2017;
    datapoints.push(datos);
    datos={};
    datos.y = suicidiosAcum2018;
    datos.label = ano2018;
    datapoints.push(datos);
    datos={};
    console.log(datapoints);

    const res2 = await fetch("/api/v2/attacks-stats");
        if(res2.ok){
          console.log("Ok.");
          const json = await res2.json();
          data2 = json;
          console.log(data2);
          for(let i=0;i<100;i++){
            if(data2[i].year == "2016"){
                ataquesAcum2016 += Number.parseInt(data2[i].type_of_attack_gun); 
            ano2016 = data2[i].year;  
            }
            if(data2[i].year == "2017"){
                ataquesAcum2017 += Number.parseInt(data2[i].type_of_attack_gun);
                ano2017 = data2[i].year;    
            }
            if(data2[i].year == "2018"){
                ataquesAcum2018 += Number.parseInt(data2[i].type_of_attack_gun); 
                ano2018 = data2[i].year;   
            }
          }
            datos.y = ataquesAcum2016;
            datos.label = ano2016;
            ataquesTotales.push(datos);
            console.log(ataquesAcum2016);
            datos={};
            datos.y = ataquesAcum2017;
            datos.label = ano2017;
            ataquesTotales.push(datos);
            datos={};
            datos.y = ataquesAcum2018;
            datos.label = ano2018;
            ataquesTotales.push(datos);
            datos={};
            console.log(ataquesTotales);
        }
}
    
    
    


</script>

<main>

<div id="chartContainer" style="height: 370px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
<div>   <Button outline style=" background-color:#6C00AF; color:aliceblue" on:click="{pop}"> Volver</Button></div> 

</main>


<style>



</style>