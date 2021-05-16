
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
    
    
    
    let estados=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
"Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
"South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]	
let state= estados[0]

   
    let data = [];
    let array = [];
    onMount(buscar)

    async function getDataSales(state){
        console.log("Fetching data...");
        const res = await fetch("/api/v2/arms-sales-stats?state="+state);
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
   
  

    function getVisibilidad(n) {
        
        return true
    }

   function loadGraph(){  
    
    //SERIES PARA LOS ESTADOS
    var seriesaux = [],
    len = array.length / 12,
    i = 0;
   
    let arrayporagno=[]
    for(i;i<len;i++){
        let j=0
       
        
         let comienzo=i*12
         let fin=comienzo +12
         let arraytroceada=array.slice(comienzo,fin)
         let a=0;
         
        //ordenamos la array en funcion de como salen los datos del get
             a= arraytroceada[11]+arraytroceada[7]+arraytroceada[6]+arraytroceada[5]+arraytroceada[4]+arraytroceada[3]+
             arraytroceada[2]+arraytroceada[1]+arraytroceada[0]+arraytroceada[10]+arraytroceada[9]+arraytroceada[8]
            
             arrayporagno.push(a)
         
    }
    seriesaux.push({
            name: state,
            data:  arrayporagno,
            visible: getVisibilidad(estados[i])
              
         });
    
    

    //SERIES PARA LOS ESTADOS
    Highcharts.chart('container', {
        title: {
            text: 'Venta de armas '
        },
        yAxis: {
            title: {
                text: 'Armas vendidas'
            }
        },
        xAxis: {
            accessibility: {
                rangeDescription: 'Month'
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
                pointStart: 2010
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
   
   getDataSales(state)
   await delay(500);
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
        <Button color="secondary" on:click={busqueda}>Cambiar año</Button>
    </div>

    <Modal isOpen={b} toggle={busqueda} transitionOptions>
        <ModalHeader {busqueda}>¿Desea cambiar el año?</ModalHeader>
        <ModalBody >
            <p>Introduzaca el año del que quiera obtener los datos.</p>
                    <div style="text-align: center;" >
                        <input type="number" min="2010" max="2020" bind:value="{state}">
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