<script>
	import {pop} from "svelte-spa-router";
    import Button from "sveltestrap/src/Button.svelte";
	import {
        onMount
    } from "svelte";

        
		onMount(inicio)
 async function inicio(){
    eibar=[]
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

let eibar=[]




	async function  getData(){
		

        let megajson=[]
            const res2 = await fetch("http://api.weatherapi.com/v1/forecast.json?key=5edf233a7e82475d8f3234418210306&q=SVQ"); 
            if (res2.ok) {
                console.log("Ok");
                megajson= await res2.json();
                    let horas= megajson.forecast.forecastday[0].hour
                    let i
                    for(i=0;i<horas.length;i++){
                        let aux= horas[i].time.split(" ")
                       
                       
                        eibar.push({

                            name: aux[1],
                             low: horas[i].temp_c

                        })
                    }
                    console.log(megajson.forecast.forecastday[0].hour)
                    console.log(eibar)

            } else {
                
            }
    }

async function loadGraph(){

   
    Highcharts.chart('container', {

chart: {
    type: 'lollipop'
},

accessibility: {
    point: {
        valueDescriptionFormat: '{index}. {xDescription}, {point.y}.'
    }
},

legend: {
    enabled: false
},

subtitle: {
    text: ' '
},

title: {
    text: 'Previsión Temperaturas sevilla'
},

tooltip: {
    shared: true
},

xAxis: {
    type: 'category'
},

yAxis: {
    title: {
        text: 'Temperatura'
    }
},

series: [{
    name: 'Temperatura',
    data: eibar
}]

});
}
</script>

<svelte:head>


    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/highcharts-more.js"></script>
    <script src="https://code.highcharts.com/modules/dumbbell.js"></script>
    <script src="https://code.highcharts.com/modules/lollipop.js"></script>



</svelte:head>
<main style="text-align: center;">
   
    <figure class="highcharts-figure">
        <div id="container"></div>
        <p class="highcharts-description">
            Previsión Temperatura Sevilla.
        </p>
    </figure>
    <Button color="secondary" on:click={pop}>Volver</Button>
    <Button color="secondary" on:click={inicio}>Recarga</Button>
</main>

<style>

</style>