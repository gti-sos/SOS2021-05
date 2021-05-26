<script>
    import { pop }from "svelte-spa-router";
    import { Button } from "sveltestrap";
    import Dygraph from 'dygraphs';
    //Uso API grupo 11
    const BASE_API_PATH = "/api/v2/homicides-by-firearms";
    const BASE_ANXIETY_API_PATH = "/anxiety-stats/api/v2"
    var anxietyStats = [];
    var homicidesData = [];
    var errorMsg = "";
    console.log("Cargando página...");

    //GET a mis datos
   
    async function getData(){
        console.log("Fetching data...");
        const res = await fetch("/api/v2/homicides-by-firearms");
        if(res.ok){
            console.log("Ok.");
            const json = await res.json();
            homicidesData = json;
            console.log(`We have received ${data.length} data points.`);
            console.log(array);
        }else{
            console.log("Error!");
        }
    }   
   

    async function getAnxietyStats() {
      console.log("Fetching anxiety data...");
      const res = await fetch(BASE_ANXIETY_API_PATH + "/anxiety_stats");
      console.log(res);
      if (res.ok) {
        const json = await res.json();
        anxietyStats = json;
        console.log(`We have received ${anxietyStats.length} anxiety-stats.`);
        console.log("Ok");
      } else {
        errorMsg = "Error recuperando datos de ansiedad";
        console.log("ERROR!" + errorMsg);
      }
    }

    async function loadGraph() {
      //await getAnxietyStats();
      console.log("Inicio getStats");
      await getStats();
      console.log('Datos homicidios recibidos para pintar el grafo:');
      console.log(homicidesData);
      console.log('Datos ansiedad recibidos para pintar el grafo:');
      console.log(anxietyStats);
      let arrayDatos = [];
      for (let index = 0; index < alcoholData.length; index++) {
        let separa = homicidesData[index].ageRange.split('-'); 
        let parseo = parseInt(separa[1]);
        arrayDatos.push([parseo,homicidesData[index].alcoholPrematureDeath,0/*anxietyStats[index].DATOQUEQUIERO*/]);
        
      } // Etiqueta (Valorx) Numero asociado al rango de edad, Dato grafica muertes , Dato grafica ansiedad
      console.log("Array de datos para el grafo:");
      console.log(arrayDatos);
      new Dygraph(document.getElementById("grafo1"),arrayDatos,
      { 
              labels:["RangoEdad","Muertes","Ansiedad"],
              legend: 'always',
              title: 'Muertes prematuras y ansiedad España 2017',
              titleHeight: 32,
              ylabel: 'Valor',
              xlabel: 'Rango de edad'
    
            });
    };
</script>
  
  <svelte:head>
    <script src="//cdnjs.cloudflare.com/ajax/libs/dygraph/2.1.0/dygraph.min.js" on:load={loadGraph}></script>
  </svelte:head>
  
  <main>
    <div>
      <h2>Integración API SOS anxiety-stats</h2>
    </div>
    {#if errorMsg}
      <p>{errorMsg}</p>
    {:else}
    <style>.dygraph-legend { text-align: right; background: none; }
        #grafo1 .dygraph-label { font-family: Georgia, Verdana, serif; }
        #grafo1 .dygraph-title { font-size: 20px; text-shadow: gray 2px 2px 2px; }
        #grafo1 .dygraph-ylabel { font-size: 18px; text-shadow: gray -2px 2px 2px; margin: 0px 0px 0px 90px }
        #grafo1 .dygraph-xlabel { font-size: 18px; text-shadow: gray -2px 2px 2px; margin: 20px 0px 0px 0px }
        .chart { border: 1px hidden black; margin: 50px 5px 5px 400px; padding: 2px; }
    </style>
    <div  id="grafo1" class="chart" style="width:600px; height:300px;"></div>
    <br>
    <br>
    <h6>Gráfico en dónde se muestra las muertes prematuras por consumo de alcohol en correlación con la ansiedad</h6>
    {/if}
    <Button outline color="secondary" on:click="{pop}">Atrás</Button>
  </main>
  
  <style>
    main {
      text-align: center;
      padding: 1em;
      margin: 0 auto;
    }
    div {
      margin-bottom: 15px;
    }
  </style>