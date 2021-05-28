<script>
    import {pop} from "svelte-spa-router";
    import ApexCharts from 'apexcharts';
  
    import Button from "sveltestrap/src/Button.svelte";
  import {
        onMount
    } from "svelte";
  
    var myHeaders = new Headers();
          myHeaders.append("x-rapidapi-key", "6ae08866a6msh5aba25d590f3b67p100c5ejsnc933aa2b9bcb");
          myHeaders.append("x-rapidapi-host", "imdb8.p.rapidapi.com");
  
  
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
  };
    
  
    let data = [];
    let ratings = [];
    let titlesId = [];
    let options = [];
  
    onMount(loadGraph)
  
  
  
  
  async function inicio(){
        
        await getData()
            delay(29);
        recarga()
        
 }
  const recarga=()=>{
  
    loadGraph()
   
  }
  const delay = ms => new Promise(res => setTimeout(res, ms));
  
  
  
    async function loadGraph() {
        Highcharts.chart('container', {
        title: {
            text: 'Capacidad de los circuitos de la Formula 1'
        },
        
        xAxis: {
            categories: circuitos // aqui meter los nombres de los circuitos
        },
        yAxis: {
            title: {
                text: 'Capacidad'
        }
        },
        series: [{
            type: 'column',
            colorByPoint: true,
            data: capacidades, // AQUI METER LAS CAPACIDADES DE LOS CIRCUITOS
            showInLegend: false
        }]
        });

    }


  
  
  </script>
  
  <svelte:head>
      
    <script src="https://code.highcharts.com/highcharts.js" on:load="{loadGraph}"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
  
  
  </svelte:head>
  
  
  <main>
  
   
  
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

    <div>   <Button outline style=" background-color:#6C00AF; color:aliceblue" on:click="{pop}"> Volver</Button></div> 
  
    <figure class="highcharts-figure">
        <div id="container"></div>
       
    </figure>
  
  </main>
  
  <style>
  
  #container {
    height: 400px; 
  }
  
  
  
  </style>