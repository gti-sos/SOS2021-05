<script>
    import {pop} from "svelte-spa-router";
    import Button from "sveltestrap/src/Button.svelte";

    let data = [];
    let data2 = [];
    let datos = new Object();
    let datapoints = [];
    let ataquesTotales = 0;

    
    
async function loadGraph(){

    window.onload = function() {

var chart = new CanvasJS.Chart("chartContainer", {
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	exportEnabled: true,
	animationEnabled: true,
	title: {
		text: "Nacimientos en los países de Europa/Ataques en Estados Unidos"
	},
	data: [{
		type: "pie",
		startAngle: 15,
		toolTipContent: "<b>{label}</b>: {y}",
		showInLegend: "true",
		legendText: "{label}",
		indexLabelFontSize: 10,
		indexLabel: "{label} - {y}",
		dataPoints: datapoints
	}]
});
chart.render();

}

console.log("Fetching data...");
        const res = await fetch
            ("http://sos2021-01.herokuapp.com/api/v2/natality-stats");

        if(res.ok){
          console.log("Ok.");
          const json = await res.json();
          data = json;
          console.log(data);
        }else{
            console.log("Error!");
        }

        for(let i=0;i<data.length;i++){
            if(data[i].date == "2019"){
                datos.y = data[i].born;
                datos.label = data[i].country;
                datapoints.push(datos);
                datos={};
            }
            
        }
        console.log(datapoints);
        const res2 = await fetch("/api/v2/attacks-stats");
        if(res2.ok){
          console.log("Ok.");
          const json = await res2.json();
          data2 = json;
          console.log(data2);
          for(let i=0;i<data2.length;i++){
                if(data2[i].year == "2019"){
                    ataquesTotales += Number.parseInt(data2[i].sex_male);
                }
            }
            datos.y = ataquesTotales;
            datos.label = "states united";
            datapoints.push(datos);
        console.log(ataquesTotales);
        console.log(datapoints);
        }else{
            console.log("Error!");
        }

}



</script>



<main>
    <div id="chartContainer" style="height: 370px; width: 100%;"></div>
    <script src="https://canvasjs.com/assets/script/canvasjs.min.js" on:load="{loadGraph}"></script>
    <div>   <Button outline style=" background-color:#6C00AF; color:aliceblue" on:click="{pop}"> Volver</Button></div> 

</main>


<style>



</style>