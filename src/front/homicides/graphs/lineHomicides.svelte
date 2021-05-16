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
     
    import {
       pop
    } from "svelte-spa-router";
    import {
        onMount
    } from "svelte";
    
    
    let estado = "Alabama";
    let estados=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
"Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
"South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]	
  
   
    let data = [];
    let array = [];
    onMount(buscar)

    async function getData(estado){
        console.log("Fetching data...");
        const res = await fetch("/api/v2/homicides-by-firearms?state="+estado);
        if(res.ok){
            console.log("Ok.");
            const json = await res.json();
            data = json;
            console.log(`We have received ${data.length} data points.`);
            for(let i=0;i<data.length;i++){
                let aux= data[i].arms_sold.replace(".","")
                array[i]=parseInt(aux,10)
            }
            
            console.log(array);
        }else{
            console.log("Error!");
        }
    }   
   
     function datos() {
        
        getData(estado)
        
    }

    function getVisibilidad(n) {
        
        return n.includes("Alab")||n.includes("Main")||n.includes("Idaho");
    }

   function loadGraph(){  
    
    //SERIES PARA LOS ESTADOS
    var seriesaux = [],
    len = estados.length,
    i = 0;
   
    for(i;i<len;i++){
        let comienzo=2019;
        let fin=2017;
        let arraytroceada=array.slice(comienzo,fin); //divide el array, de modo que cada trozo corresponde a un estado
        const arrayoredenada=[]
        //ordenamos la array en funcion de como salen los datos del get
        //aqui manu tiene 12 porque son los meses

        
        
       seriesaux.push({
        name: estados[i],
        data:   arrayoredenada,
        visible: getVisibilidad(estados[i])
    });

    }

    //SERIES PARA LOS ESTADOS
    Highcharts.chart('container', {
        title: {
            text: 'Homicidios por armas de fuego en '+ estado
        },
        yAxis: {
            title: {
                text: 'Homicidios'
            }
        },
        xAxis: {
            accessibility: {
                rangeDescription: 'Año'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 1
            }
        },
        series: seriesaux,
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });
  }

  let b=false;
const busqueda=()=>{
    b=!b;
}
async function buscar(){
    b=!b;
   
   getData(estado)
   await delay(200);
   recarga()
   
  
   
}
const recarga=()=>{

    loadGraph()
   
}
 
const delay = ms => new Promise(res => setTimeout(res, ms));
</script>

<svelte:head>
    
    <script src="https://code.highcharts.com/highcharts.src.js" on:load="{loadGraph}"></script>
    
    
       
</svelte:head>

<main>
    
    <figure class="highcharts-figure">
        <div id="container"></div>
        
    </figure>  
    <div>
        <Button color="secondary" on:click={pop}>Volver</Button>
        <Button color="secondary" on:click={busqueda}>Cambiar Estado</Button>
    </div>

    <Modal isOpen={b} toggle={busqueda} transitionOptions>
        <ModalHeader {busqueda}>¿Desea cambiar el año?</ModalHeader>
        <ModalBody >
            <p>Introduzaca el año del que quiera obtener los datos.</p>
                    <div style="text-align: center;" >
                        <input type="string" min="Alabama" max="Wyoming" bind:value="{estado}">
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