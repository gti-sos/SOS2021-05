<script>
    import {pop} from "svelte-spa-router";
    import Button from "sveltestrap/src/Button.svelte";
  import {
        onMount
    } from "svelte";
  
    var myHeaders = new Headers();
         
  
  
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
  };
  
  
    onMount(inicio)
  
 let estados=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Kansas","Kentucky","Louisiana","Lowa","Maine","Maryland","Massachusetts",
    "Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
    "South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];


  let test = ["kkkk", 80000, "dddd", 200202];
  test.push( 'Website visits', 15654,
            'Downloads', 4064);
  let agno = 2019;
  let data = [];
  
  async function inicio(){
    await getData()
    delay(29);
    loadGraph();
  }


 
  const delay = ms => new Promise(res => setTimeout(res, ms));

  
  
  //necesito un array con las muertes de cada uno de los estados en estados
  
    async function getData(agno){

        const res1 = await fetch("/api/v2/homicides-by-firearms?year=" + agno); 
        if(res1.ok) {
            const json = await res1.json();
            data = json;
            for(let i=0;i<data.length;i++){
                
            }
        }


        
    }
  
  
  
  
   
  
  
    async function loadGraph() {
             Highcharts.chart('container', {
            chart: {
                renderTo: 'container',
                type: 'column'
            },
            title: {
                text: 'Restaurants Complaints'
            },
            tooltip: {
                shared: true
            },
            xAxis: {
                categories: estados,
                crosshair: true
            },
            yAxis: [{
                title: {
                text: ''
                }
            }, {
                title: {
                text: ''
                },
                minPadding: 0,
                maxPadding: 0,
                max: 100,
                min: 0,
                opposite: true,
                labels: {
                format: "{value}%"
                }
            }],
            series: [{
                type: 'pareto',
                name: 'Pareto',
                yAxis: 1,
                zIndex: 10,
                baseSeries: 1,
                tooltip: {
                valueDecimals: 2,
                valueSuffix: '%'
                }
            }, {
                name: 'Complaints',
                type: 'column',
                zIndex: 2,
                data: [755, 222, 151, 86, 72, 51, 36, 10]
            }]
            });
     }
  
    
  </script>
  
  
  <svelte:head>
  
    <script src="https://code.highcharts.com/highcharts.src.js" on:load="{loadGraph}"></script>
  </svelte:head>
  
  
  <main>

    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/pareto.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>

    <figure class="highcharts-figure">
    <div id="container"></div>
    <p class="highcharts-description">
        A Pareto Chart is a chart type based on the Pareto principle, commonly
        used to maximize business efficiency. Highcharts can calculate the
        Pareto line automatically based on a series, as shown in this chart.
    </p>
    </figure>
        
    <p></p>
      <Button outline color="secondary" on:click="{pop}"> Volver</Button>
      <p></p>
  
  </main>
  





  <style>
  
 
  
  
  </style>