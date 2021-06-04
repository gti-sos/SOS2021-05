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
    horas=[]
	await getData()
    await delay(2000);
    console.log("Datos Cargados")
    await recarga()
   
}
const recarga=()=>{

    loadGraph()
   

}
const delay = ms => new Promise(res => setTimeout(res, ms));


let horas=[];

	async function  getData(){
		

        let megajson=[]
            const res2 = await fetch("http://api.weatherapi.com/v1/forecast.json?key=5edf233a7e82475d8f3234418210306&q=SVQ"); 
            if (res2.ok) {
                console.log("Ok");
                megajson= await res2.json();
                    let i
                    for(i=1;i<megajson.forecast.forecastday[0].day.length;i++){
                        megajson.forecast.forecastday[i]
                    }
                    console.log(megajson.forecast.forecastday)
            } else {
                
            }
    }

async function loadGraph(){

	Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            formatter: function () {
                return this.value + '°';
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: 'Tokyo',
        marker: {
            symbol: 'square'
        },
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
            y: 26.5,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
            }
        }, 23.3, 18.3, 13.9, 9.6]

    }, {
        name: 'London',
        marker: {
            symbol: 'diamond'
        },
        data: [{
            y: 3.9,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
            }
        }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
});
}
</script>

<svelte:head>
   
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>



</svelte:head>
<main>
    <figure class="highcharts-figure">
        <div id="container"></div>
        <p class="highcharts-description">
            This chart shows how symbols and shapes can be used in charts.
            Highcharts includes several common symbol shapes, such as squares,
            circles and triangles, but it is also possible to add your own
            custom symbols. In this chart, custom weather symbols are used on
            data points to highlight that certain temperatures are warm while
            others are cold.
        </p>
    </figure>
    
</main>

<style>

</style>