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
  let array2 = [];
  let arrayAux = []; //array que luego metemos en el array

  

 
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
                array2.push(data[i].state);
                array2.push(array[i]);
                arrayAux.push(array2); //el arrayAux se va cargando de arrays
                array2 = [];

            }
            
            //console.log(array);
            //console.log(estados2);
            //console.log(arrayAux);
        }else{
            console.log("Error!");
        }
        
    }
  
  
  
  //highcharts column
   
  
  
    async function loadGraph() {
        Highcharts.chart('container', {
  chart: {
    type: 'columnpyramid'
  },
  title: {
    text: 'Muertos por armas de fuego en el año ' + agno,
  },
  colors: ['#C79D6D', '#B5927B', '#CE9B84', '#B7A58C', '#C7A58C'],
  xAxis: {
    crosshair: true,
    labels: {
      style: {
        fontSize: '14px'
      }
    },
    type: 'category'
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Muertos'
    }
  },
  tooltip: {
  },
  series: [{
    name: 'Nº Muertos',
    colorByPoint: true,
    data: arrayAux,
    showInLegend: false
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
    <script src="https://code.highcharts.com/highcharts-more.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
    
    <figure class="highcharts-figure">
      <div id="container"></div>
      <p class="highcharts-description">
        Gráfica de tipo columna-piramidal que nos muestra el número de fallecidos por armas de fuego en los distintos estados de EE.UU por
        año seleccionado.
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