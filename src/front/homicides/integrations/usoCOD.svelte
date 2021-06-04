<script>
    import {
        Nav,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
        NavItem,
        NavLink,
        Button,
        Table,
        UncontrolledAlert,
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardSubtitle,
        CardText,
        CardTitle,
    } from "sveltestrap";
    import {pop} from "svelte-spa-router";
  import {
        onMount
    } from "svelte";
  
    var myHeaders = new Headers();
          myHeaders.append("x-rapidapi-key", "6ae08866a6msh5aba25d590f3b67p100c5ejsnc933aa2b9bcb");
          myHeaders.append("x-rapidapi-host", "call-of-duty-modern-warfare.p.rapidapi.com");
          myHeaders.append("useQueryString", true);
  
  
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
  };
    
   
    let dataFromPlayer = [];
    let statsFromPlayer = [];
    let player = "Amartin743";

  
 onMount(inicio)
  
  
  
  
  async function inicio(){
        
        await getData(player)
        delay(29);
        loadGraph();
        
  }
 
  
  
  

    async function getData(player){
        console.log(player)
        console.log("Fetching data...");
        const res = await fetch("https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches/" + player +"/psn", requestOptions);
        statsFromPlayer = [];

        if(res.ok){
            console.log("Ok.");
            const json = await res.json();
            dataFromPlayer = json;
            statsFromPlayer.push(dataFromPlayer.summary.all.kills);
            statsFromPlayer.push(dataFromPlayer.summary.all.headshots);
            statsFromPlayer.push(dataFromPlayer.summary.all.assists);
            statsFromPlayer.push(dataFromPlayer.summary.all.killsPerGame);
            statsFromPlayer.push(dataFromPlayer.summary.all.scorePerMinute);
            statsFromPlayer.push(dataFromPlayer.summary.all.scorePerMinute);
            //console.log(statsFromPlayer)

        }else{
            console.log("ERROR!");
        }
            
    }
  
  
  
  
    async function loadGraph() {
       
        console.log(statsFromPlayer)
        Highcharts.chart('container', {
        series: [{
            type: "treemap",
            layoutAlgorithm: 'stripes',
            alternateStartingDirection: true,
            levels: [{
                level: 1,
                layoutAlgorithm: 'sliceAndDice',
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    verticalAlign: 'top',
                    style: {
                        fontSize: '15px',
                        fontWeight: 'bold'
                    }
                }
            }],
            data: [{
                id: 'Kills',
                name: 'Kills',
                color: "#EC2500"
            }, {
                id: 'Headshots',
                name: 'Headshots',
                color: "#EC2500"
            }, {
                id: 'Assists',
                name: 'Assists',
                color: '#FF3355'
            },{
                id: 'Kills Per Game',
                name: 'Kills Per Game',
                color: '#FF3355'
            },{
                id: 'Score Per Minute',
                name: 'Kills Per Minute',
                color: '#FF3355'
            },{
                name: 'Kills',
                parent: 'A',
                value: statsFromPlayer[0],
            }, {
                name: 'Headshots',
                parent: 'B',
                value: statsFromPlayer[1],
            }, {
                name: 'Assists',
                parent: 'C',
                value: statsFromPlayer[2],
            }, {
                name: 'Kills Per Game',
                parent: 'D',
                value: statsFromPlayer[3],
            },{
                name: 'Score Per Minute',
                parent: 'E',
                value: statsFromPlayer[4],
            }]
        }],
        title: {
            text: 'Estadísticas de Warzone de ' + player
        }
    });
    }

    
    let b=false;
const busqueda=()=>{
    b=!b;
}
async function buscar(){
    b=!b;
   
   await getData(player)
   await delay(500);
   await loadGraph();
   
  
   
}


 
const delay = ms => new Promise(res => setTimeout(res, ms));

  
  </script>
  
  
  <svelte:head>
  
  
  </svelte:head>
  
  
  <main>
    
        <figure class="highcharts-figure">
            <div id="container"></div>
            
        </figure>  
        <div>
            <Button color="secondary" on:click={busqueda}>Cambiar Jugador</Button>
        </div>

        <Modal isOpen={b} toggle={busqueda} transitionOptions>
            <ModalHeader {busqueda}>Cambia de jugador</ModalHeader>
            <ModalBody >
                <p>Introduzaca el id de PSN del jugador</p>
                        <div style="text-align: center;" >
                            <input type="string" bind:value="{player}">
                        </div>
            
            </ModalBody>
            <ModalFooter>
                <Button color="primary" on:click={buscar}>Vamos allá!</Button>
            </ModalFooter>
        </Modal>


        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/modules/treemap.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>
        
        <figure class="highcharts-figure">
            <div id="container"></div>
            <p class="highcharts-description">
               Esta gráfica nos muestra las principales estadísticas de jugadores de COD Warzone en PlayStation.
               (Avertencia: La herramienta sólo funcionará con perfiles públicos de PSN)
            </p>
        </figure>

        <p></p>
	         <Button outline color="secondary" on:click="{pop}"> Volver</Button>
	    <p></p>
  </main>
  
  <style>

 

  
  
  </style>