<script>
	import {pop} from "svelte-spa-router";
    import Button from "sveltestrap/src/Button.svelte";
	import {
        onMount
    } from "svelte";
import { element } from "svelte/internal";
    
	
        let Bug = [];
        let data =[];

        const url = "http://acnhapi.com/v1/bugs";
      
        
		onMount(inicio)
 async function inicio(){
   
	await getData()
    delay(2000);
    console.log("Datos Cargados")
    await recarga()
   
}
const recarga=()=>{

    loadGraph()
   

}
const delay = ms => new Promise(res => setTimeout(res, ms));



	async function  getData(){
		let i=1;
        for(i=1;i<80;i++){

            const res = await fetch(url+"/"+i); 
		if (res.ok) {
			console.log("Ok");
            Bug = await res.json();
            let meses =(Bug.availability["month-array-northern"])

            var min = meses[0];
            var max = meses[0];

            for (var j = 0; j < meses.length ; j++) {
                if (meses[j] < min) {
                    
                    min = meses[j];
                }
                if (meses[j] > max) {
                    
                    max = meses[j];
                }
            }

            data.push({

                name: Bug.name["name-EUes"],
                low: min,
                high: max
                
            })
		} else {
			console.log("Error al cargar API externa "+ i);
        }
    }
            
        console.log(data)
        


    }

async function loadGraph(){
  
Highcharts.chart('container', {

    chart: {
        type: 'dumbbell',
        inverted: true
    },

    legend: {
        enabled: false
    },

    subtitle: {
        text: 'New Horizons'
    },

    title: {
        text: 'Insectos Animal Crossing '
    },

    tooltip: {
        shared: true
    },

    xAxis: {
        type: 'category'
    },

    yAxis: {
        title: {
            text: 'Meses en los que aparece'
        }
    },

    series: [{
        name: 'Insectos',
        data: data
    }]

});
	
	
}
</script>

<svelte:head>
   




</svelte:head>
<main>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/highcharts-more.js"></script>
    <script src="https://code.highcharts.com/modules/dumbbell.js"></script>
      
    <div>   <Button outline style=" background-color:#6C00AF; color:aliceblue" on:click="{pop}"> Volver</Button></div>   

    <figure class="highcharts-figure">
        <div id="container"></div>
        <p class="highcharts-description">
            Dumbbell charts are variants of columnrange charts, where a
            low and a high value is given for each data point. The points
            are visualized as markers with a line between them, resembling
            a dumbbell.
        </p>
    </figure>
    <div>   <Button outline style=" background-color:#6C00AF; color:aliceblue" on:click="{loadGraph}">Recargar</Button></div>   

</main>

<style>

</style>