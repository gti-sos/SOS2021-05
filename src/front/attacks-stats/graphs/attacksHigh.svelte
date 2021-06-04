<script>
    import {pop} from "svelte-spa-router";
    import Button from "sveltestrap/src/Button.svelte";
    import {
        onMount
    } from "svelte";

    let data = [];
    let objeto = new Object();
    let datapoints = [];

    onMount(inicio)
    async function inicio(){
        await cargarDatos1();
        await loadGraph1();
        
    }
    async function recarga(){
        await loadGraph1();
    }

    async function cargarDatos1(){
        const res = await fetch("/api/v2/attacks-stats");
        if(res.ok){
          console.log("Ok.");
          const json = await res.json();
          data = json;
          console.log(data);
          for(let i=0;i<data.length;i++){
              if(data[i].year == "2019"){
                  objeto.x = Number.parseInt(data[i].type_of_attack_personal_weapons);
                  objeto.y = Number.parseInt(data[i].type_of_attack_gun);
                  objeto.z = Number.parseInt(data[i].type_of_attack_knife);
                  objeto.label = data[i].state;
                  datapoints.push(objeto);
                objeto = {};
              }
              
          }
          console.log(datapoints);
        }else{
            console.log("Error, no se han cargado los datos");
        }
    }
   
        async function loadGraph1(){
            console.log("Grafico cargando");
            window.onload = function () {

            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                title:{
                    text: "Ataques por armas personales, pistola y navaja"
                },
                axisX: {
                    title:"Ataques por armas personales",
                    maximum: 12000,
                    minimum: -1
                },
                axisY:{
                    title: "Ataques por pistola",
                    gridColor: "lightgrey",
                    tickColor: "lightgrey",
                    lineThickness: 0,
                    valueFormatString:"#####",
                    interval: 3000
                },
                data: [{        
                    type: "bubble",
                    markerType: "triangle",
                    toolTipContent: "<b>{label}</b><br/><b>Armas personales:</b> {x}<br/><b>Pistola:</b> {y}<br/> <b>Navaja:</b>{z}",
                    dataPoints: datapoints
                }]
            });
            chart.render();

            }
            console.log("Grafico cargado con exito");
    }
</script>

<svelte:head>
  
</svelte:head>

<main> 
    <div id="chartContainer" style="height: 370px; width: 100%;"></div>
    <script type="text/javascript" src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
    <div style="margin-top:16px;color:dimgrey;font-size:9px;font-family: Verdana, Arial, Helvetica, sans-serif;text-decoration:none;">Source: <a href="https://canvasjs.com/javascript-charts/bubble-chart-data-marker/" target="_blank" title="JavaScript Bubble Charts with Custom Markers ">https://canvasjs.com/javascript-charts/bubble-chart-data-marker/</a></div>
    <div>   <Button outline style=" background-color:#6C00AF; color:aliceblue" on:click="{pop}"> Volver</Button></div><Button color="secondary" on:click={recarga}>Recarga</Button> 
    
</main>

<style>


</style>