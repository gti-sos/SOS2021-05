<script>
    import {pop} from "svelte-spa-router";
    import Button from "sveltestrap/src/Button.svelte";
  import {
        onMount
    } from "svelte";

    import {
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
    } from "sveltestrap";
         

  
  onMount(buscar);

  let agno = 2019;
  let estados2 = [];
  let data = [];
  let array = [];//array donde se guardan los muertos de todos los estados en un año x
  let auxHandgun = [];
  

  

 
  const delay = ms => new Promise(res => setTimeout(res, ms));

  
  
  //necesito un array con las muertes de cada uno de los estados en estados
  
    async function getData(agno){
        estados2 = [];
        console.log("/api/v2/homicides-by-firearms?year=" + agno);
        const res = await fetch("/api/v2/homicides-by-firearms?year="+agno);
        if(res.ok){
            const json = await res.json();
            data = json;
            for(let i=0;i<data.length;i++){
                let aux= data[i].homicide_by_firearm.replace(".","")
                array[i]=parseInt(aux,10)
                estados2.push(data[i].state);
                auxHandgun.push(data[i].auxHandgun);
            }
            
            console.log(array);
            console.log(estados2);
        }else{
            console.log("Error!");
        }
        
    }
  
  
  
  
   
  
  
    async function loadGraph() {
             Highcharts.chart('container', {
            chart: {
                renderTo: 'container',
                type: 'column'
            },
            title: {
                text: 'Homicidios en el año ' + agno,
            },
            tooltip: {
                shared: true
            },
            xAxis: {
                categories: estados2,
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
                name: 'Homicidios',
                type: 'column',
                zIndex: 2,
                data: array,
            }]
            });
     }
  
    

 
let b=false;
const busqueda=()=>{
    b=!b;
}
async function buscar(){
    b=!b;
   
   getData(agno)
   await delay(500);
   loadGraph();
   
  
   
}
const recarga=()=>{

    loadGraph()
   
}


  </script>
  
  
  <svelte:head>
  
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
        Gráfica que nos muestra el número de homicidios en cada estado en el año seleccionado, comparando los datos con
        un diagrama de Pareto que se genera en base a los datos arrojados por la API. Comúnmente, Pareto describe el fenómeno estadístico por el que en cualquier 
        población que contribuye a un efecto común, es una proporción pequeña la que contribuye a la mayor parte del efecto.
    </p>
    </figure>
        
    <p></p>
      <Button outline color="secondary" on:click="{pop}"> Volver</Button>
      <Button color="secondary" on:click={busqueda}>Cambiar año</Button>
      <p></p>

      <Modal isOpen={b} toggle={busqueda} transitionOptions>
        <ModalHeader {busqueda}>¿Desea cambiar el año?</ModalHeader>
        <ModalBody >
            <p>Introduzaca el año del que quiera obtener los datos.</p>
                    <div style="text-align: center;" >
                        <input type="number" min="2010" max="2020" bind:value="{agno}">
                    </div>
           
        </ModalBody>
        <ModalFooter>
            <Button color="primary" on:click={buscar}>Vamos allá!</Button>
            <Button color="secondary" on:click={busqueda}>Cancelar</Button>
        </ModalFooter>
    </Modal>
  
  </main>
  





  <style>
  
 
  
  
  </style>