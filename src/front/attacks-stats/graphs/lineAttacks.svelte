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
    
    
    let agno= 2019
    let estados=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Kansas","Kentucky","Louisiana","Lowa","Maine","Maryland","Massachusetts",
"Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
"South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]	
  
  
   
    let data = [];
    let array = [];
    onMount(buscar)

    async function getData(){
        console.log("Fetching data...");
        const res = await fetch("/api/v2/attacks-stats");
        if(res.ok){
            console.log("Ok.");
            const json = await res.json();
            data = json;
            console.log(`We have received ${data.length} data points.`);
            for(let i=0;i<data.length;i++){
                let aux= data[i].type_of_attack_personal_weapons.replace(".","")
                array[i]=parseInt(aux,10)
            }
            
            console.log(array);
        }else{
            console.log("Error!");
        }
    }   
   
     function datos() {
        
        getData()
        
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
        let comienzo=i*10
         let fin=comienzo +10
        let arraytroceada=array.slice(comienzo,fin)
        const arrayoredenada=[]
        //ordenamos la array en funcion de como salen los datos del get
        arrayoredenada[0]=arraytroceada[0]
        arrayoredenada[1]=arraytroceada[1]
        arrayoredenada[2]=arraytroceada[2]
        arrayoredenada[3]=arraytroceada[3]
        arrayoredenada[4]=arraytroceada[4]
        arrayoredenada[5]=arraytroceada[5]
        arrayoredenada[6]=arraytroceada[6]
        arrayoredenada[7]=arraytroceada[7]
        arrayoredenada[8]=arraytroceada[8]
        arrayoredenada[9]=arraytroceada[9]
        


       seriesaux.push({
        name: estados[i],
        data: arrayoredenada,
        visible: getVisibilidad(estados[i])
    });

    }

    //SERIES PARA LOS ESTADOS
    Highcharts.chart('container', {

title: {

    text: 'Ataques por armas personales 2010-2019'
},

yAxis: {
    title: {
        text: 'Tipo de ataque: armas personales'
    }
},

xAxis: {
    accessibility: {
        rangeDescription: 'Range: 2010 to 2019'
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
   
   getData(agno)
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
        
    </div>

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