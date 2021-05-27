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
      
        
		
async function inicio(){
   
	await getData()
    delay(2000);
   recarga()
   
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
    var data = data;

Highcharts.chart('container', {

    chart: {
        type: 'dumbbell',
        inverted: true
    },

    legend: {
        enabled: false
    },

    subtitle: {
        text: '1960 vs 2018'
    },

    title: {
        text: 'Change in Life Expectancy'
    },

    tooltip: {
        shared: true
    },

    xAxis: {
        type: 'category'
    },

    yAxis: {
        title: {
            text: 'Life Expectancy (years)'
        }
    },

    series: [{
        name: 'Life expectancy change',
        data: data
    }]

});
	
	
}
</script>

<svelte:head>
    <script src="https://code.highcharts.com/highcharts.src.js" on:load="{inicio}"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>

</svelte:head>
<main>
    <figure class="highcharts-figure">
        <div id="container"></div>
        <p class="highcharts-description">
            Dumbbell charts are variants of columnrange charts, where a
            low and a high value is given for each data point. The points
            are visualized as markers with a line between them, resembling
            a dumbbell.
        </p>
    </figure>
    
</main>

<style>

</style>