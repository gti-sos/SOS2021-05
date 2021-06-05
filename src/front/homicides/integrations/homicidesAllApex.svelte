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
  
  
  
  //highcharts column
   
  
  
    async function loadGraph() {
        var options = {
          series: [{
          name: 'Muertos',
          data: array,
        }],
          chart: {
          type: 'bar',
          height: 410,
          animations: {
            enabled: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '100%',
        
          },
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          colors: ["#fff"],
          width: 0.2
        },
        labels: Array.apply(null, {length: 39}).map(function(el, index){
          return index + 1;
        }),
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false
          },
          title: {
            text: 'Estados',
          },
        },
        grid: {
          position: 'back'
        },
        title: {
          text: 'Muertos por armas de fuego por estados en el año ' + agno,
          align: 'right',
          offsetY: 30
        },
        fill: {
          type: 'image',
          opacity: 0.87,
          image: {
            src: ['/mediaHomicides/usa-flag.jpg'],
            width: 466,
            height: 406
          }
        },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
      
      
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

    <div id = "chart"></div>

    
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        
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