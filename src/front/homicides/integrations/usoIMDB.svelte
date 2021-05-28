<script>
    var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", "6ae08866a6msh5aba25d590f3b67p100c5ejsnc933aa2b9bcb");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    } 
	import {pop} from "svelte-spa-router";
    import Button from "sveltestrap/src/Button.svelte";
    import { chart } from "svelte-apexcharts";
	import {
        onMount
    } from "svelte";
    
	
    let Inglaterra = [];
    let EEUU = [];
		let Espana =[];
		let Calcio =[];
		let InglaterraGraph = [];
		let EspanaGraph = [];
		let EEUUGraph = [];
		let CalcioGraph = [];
		let datosJuntos =[];

    let data = []; //array que nos sirve para meter todo el grueso de elementos cuando vamos haciendo get a todos los años
    
             
		onMount(inicio)


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

 
  
    

  



}


async function loadGraph(){
 
  var options = {
    chart: {
      type: "bar",
    },
    series: [
      {
        name: "sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [2015, 2016, 2017, 2018, 2019, 2020],
    },
  };
  var chart = new ApexCharts(document.querySelector("#chart"), options);

  chart.render();

}



</script>


<svelte:head>

  <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    
</svelte:head>


<main>

	<figure class="highcharts-figure">
		<div id="container"></div>
	</figure>
	

	<p></p>
	<Button outline color="secondary" on:click="{pop}"> Volver</Button>
	<p></p>

</main>

<style>
	main {
		text-align: center;
	}
  
</style>