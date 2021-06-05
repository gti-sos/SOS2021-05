<script>
	import {pop} from "svelte-spa-router";
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
        onMount
    } from "svelte";
    
	
       
             
		onMount(inicio)
async function inicio(){
   
	await getData()
    await delay(1000);
   recarga()
   
}
const recarga=()=>{

    loadGraph()
   
}
const delay = ms => new Promise(res => setTimeout(res, ms));

let agno= 2019
let state="Connecticut"
    let estados=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
"Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
"South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]	
  

   
    let data = [];
    let array = [];
    let arrayoredenada=[]

async function getData(){
        console.log("Fetching data...");
        const res = await fetch("/api/v2/arms-sales-stats?year="+agno+"&state="+state);
        if(res.ok){
            console.log("Ok.");
            const json = await res.json();
            data = json;
            console.log(`We have received ${data.length} data points.`);
            for(let i=0;i<data.length;i++){
                let aux= data[i].arms_sold.replace(".","")
                array[i]=parseInt(aux,10)
            }
            

            let arraytroceada=array
        
        //ordenamos la array en funcion de como salen los datos del get
        arrayoredenada[0]=arraytroceada[11]
        arrayoredenada[1]=arraytroceada[7]
        arrayoredenada[2]=arraytroceada[6]
        arrayoredenada[3]=arraytroceada[5]
        arrayoredenada[4]=arraytroceada[4]
        arrayoredenada[5]=arraytroceada[3]
        arrayoredenada[6]=arraytroceada[2]
        arrayoredenada[7]=arraytroceada[1]
        arrayoredenada[8]=arraytroceada[0]
        arrayoredenada[9]=arraytroceada[10]
        arrayoredenada[10]=arraytroceada[9]
        arrayoredenada[11]=arraytroceada[8]

            console.log( arrayoredenada);
        }else{
            console.log("Error!");
        }
    } 



async function loadGraph(){
    const chart = Highcharts.chart('container', {
    title: {
        text: '  '
    },
    subtitle: {
        text: ' '
    },
    xAxis: {
        categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    },
    yAxis: {
        text: 'Armas vendidas',
    },
    series: [{
        type: 'column',
        colorByPoint: true,
        name: 'Armas vendidas',
        data: arrayoredenada,
        showInLegend: false
    }]
});

document.getElementById('plain').addEventListener('click', () => {
    chart.update({
        chart: {
            inverted: false,
            polar: false
        },
        subtitle: {
            text: 'Plain'
        }
    });
});

document.getElementById('inverted').addEventListener('click', () => {
    chart.update({
        chart: {
            inverted: true,
            polar: false
        },
        subtitle: {
            text: 'Inverted'
        }
    });
});

document.getElementById('polar').addEventListener('click', () => {
    chart.update({
        chart: {
            inverted: false,
            polar: true
        },
        subtitle: {
            text: 'Polar'
        }
    });
});



}

let b=false;
const busqueda=()=>{
    b=!b;
}
async function buscar(){
    b=!b;
   
    if(estados.includes(state)){
        state=state.replace(" ","_")
        
        if(agno<=2020 && agno>=2010){
            await inicio()
        }else{
            lanzamensaje(0,"h","Se ha producido un error al cargar los datos","El año: "+agno+" debe estar entre 2010 y 2020"    ,null)
        }
        
    }else{
        
            lanzamensaje(0,"h","Se ha producido un error al cargar los datos","El estado: "+state+" no corresponde con ningun estado de EEUU"    ,null)
            
    }

}


let rescodigo=0;
let mensaje= "";
let resstatus="";
let mensajeespecifico="";
let error=false;
let alerta=false;
const lanzamensaje=(rc,rs,m,me,err)=>{

    rescodigo=rc;
    resstatus=rs;
    mensaje=m;
    mensajeespecifico=me;
    error=err;//booleano
  
    alerta=true;
}
const togglealerta=()=>{
    alerta=!alerta;
}
</script>

<svelte:head>
  
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/highcharts-more.js"></script>
    
</svelte:head>
<main>
    <div>
        <Card  class="mb-3">
            <CardHeader style="background-color: #C7EFF3;">
                <CardTitle><h5>
                    Armas vendidas en {state.replace("_"," ")} en {agno}
                </h5></CardTitle>
            </CardHeader>
            <CardBody style="background-color: #F0FEFF; 
            justify-content: center;
            align-items: center;">

    <figure class="highcharts-figure">
        <div id="container"></div>
        <p class="highcharts-description">
           
        </p>
    
        <button id="plain">Plain</button>
        <button id="inverted">Inverted</button>
        
    </figure>
    </CardBody>
         <CardFooter style="background-color: #C7EFF3;">
              <Button outline color="secondary" on:click="{pop}"> Volver</Button>
              <Button color="secondary" on:click={busqueda}>Cambiar Estado y/o Año</Button>
                     
                        
         </CardFooter>
                    </Card>
             </div>
    
	<p></p>

	<p></p>


    <Modal isOpen={b} toggle={busqueda} transitionOptions>
        <ModalHeader {busqueda}>¿Desea cambiar el Estado y el Año?</ModalHeader>
        <ModalBody >
            <p>Seleccione el estado y año de los que quiera obtener los datos.</p>
                    <div style="text-align: center;" >
                        <input type="text"  bind:value="{state}">   

                    </div>
                    <p> </p>
                    <div style="text-align: center;" >
                        <input   type="number" min="2010" max="2020" bind:value="{agno}">   
                        
                    </div>
           
        </ModalBody>
        <ModalFooter>
            <Button color="primary" on:click={buscar}>Vamos allá!</Button>
            <Button color="secondary" on:click={busqueda}>Cancelar</Button>
        </ModalFooter>
    </Modal>
    <Modal isOpen={alerta} toggle={togglealerta} transitionOptions>
        <ModalHeader toggle={togglealerta} style="text-align: center;">{mensaje}
        
            
        </ModalHeader>
        <ModalBody style="text-align: center;">
            {#if error!=null}
                {#if error}
                Tras realizar la operación hemos obtenido un codigo de error:
                <p></p>
                <a href="https://docs.google.com/presentation/d/1i79Yihxsynbjtar05xFXLXHChqEbsO44oaxg8mXWL6g/edit#slide=id.g10ecd5ec32_1_14"> 
                    {rescodigo} ({resstatus}).
                </a>
                <p>Causa posible:</p>
                 
                <p>{mensajeespecifico}</p>
                
                {/if}
            {:else}
            <p>{mensajeespecifico}</p>
            {/if}

            <div>
                <p></p>
            <Button color="secondary" on:click={togglealerta}>Volver</Button>
        </div>
        </ModalBody>
        
    </Modal>
</main>

<style>
	main {
		text-align: center;
	}
  
   


</style>