<script>
    import {pop} from "svelte-spa-router";
    import ApexCharts from 'apexcharts';
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

  let stats = ['Armas de mano', 'Rifles', 'Escopetas', 'Tipo no indicado'];
  let agno = 2015;
  let state = "Alaska";
  let estados2 = [];
  let data = [];
  let array = [];
  let handgun = [];
  let type = [];
  let rifle = [];
  let shotgun = [];

  



  
  
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
  
  
  
  
   
  
  //apex pie
    async function loadGraph() {
       
        var options = {
          title: {
            text: 'Homicidios en ' + state + ' en el año ' + agno,
          },
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
              position: 'right'
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
  // await delay(500);
   loadGraph();
}



  </script>
  
  
  <svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

  </svelte:head>
  
  
  <main>

    <div id="chart" style = "margin:auto, margin-left: 20px;">
    </div>

    <p>Gráfica de tipo "tarta" de ApexCharts, que nos muestra el porcentaje de homicidios llevados a cabo por armas de fuego personales,
      por rifles de asalto, por escopetas, y por aquellos homicidios llevados a cabo por un tipo de arma de fuego no específicado.
    </p>
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
  
  /*.chart {
    margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  }*/
  
  
  </style>