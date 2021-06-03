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

  let stats = ['Handgun', 'Rifle', 'Shotgun', 'Type not stated'];
  let agno = 2015;
  let state = "Alaska";
  let estados2 = [];
  let data = [];
  let array = [];
  let handgun = [];
  let type = [];
  let rifle = [];
  let shotgun = [];

  

  

 
  const delay = ms => new Promise(res => setTimeout(res, ms));

  
  
  //necesito un array con las muertes de cada uno de los estados en estados
  
    async function getData(agno, state){
        estados2 = [];
        handgun = [];
        rifle = [];
        shotgun = [];
        type = [];
        array = [];
        const res = await fetch("/api/v2/homicides-by-firearms?year="+agno+"&state="+state);
        if(res.ok){
            const json = await res.json();
            data = json;
            for(let i=0;i<data.length;i++){
                
                let aux1 = data[i].handgun.replace(".","")
                handgun[i]=parseInt(aux1,10);

                let aux2 = data[i].type_not_stated.replace(".","")
                type[i]=parseInt(aux2,10);

                let aux3 = data[i].rifle.replace(".","")
                rifle[i]=parseInt(aux3,10);

                let aux4 = data[i].shotgun.replace(".","")
                shotgun[i]=parseInt(aux4,10);
                
            }
            
          
            array.push(handgun[0]);
            array.push(rifle[0]);
            array.push(shotgun[0]);
            array.push(type[0]);




        }else{
            console.log("Error!");
        }
        
    }
  
  
  
  
   
  
  
    async function loadGraph() {
        var options = {
          series: array,
          chart: {
          width: 380,
          type: 'pie',
        },
        labels: stats,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
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
   
   getData(agno, state);
   await delay(500);
   loadGraph();
   
  
   
}
const recarga=()=>{

    loadGraph()
   
}


  </script>
  
  
  <svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

  </svelte:head>
  
  
  <main>

    <div id="chart">
    </div>


      <Button outline color="secondary" on:click="{pop}"> Volver</Button>
      <Button color="secondary" on:click={busqueda}>Cambiar año y estado</Button>
      <p></p>

      <Modal isOpen={b} toggle={busqueda} transitionOptions>
        <ModalHeader {busqueda}>¿Desea cambiar el año y el estado?</ModalHeader>
        <ModalBody >
            <p>Introduzaca el año del que quiera obtener los datos.</p>
                    <div style="text-align: center;" >
                        <input type="number" min="2010" max="2020" bind:value="{agno}">
                        <input type="string" bind:value="{state}">

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