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
import { element } from "svelte/internal";
    
let armas =[]
let ql =[]
let estados=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
"Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
"South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]	
let state="Maine"
let urlarmas = "/api/v2/arms-sales-stats?state="+state+"&year="
let urlql = "/ql/united%20states/"

	
//BASE
        onMount(inicio)
        async function inicio(){
           armas =[]
             ql =[]
            await getData()
            delay(2000);
            console.log("Datos Cargados")
            await recarga()
        
        }
        const recarga=()=>{

            loadGraph()
        

        }


        const delay = ms => new Promise(res => setTimeout(res, ms));
//FBASE

async function  getData(){

    //Lucia
    for (let i = 2012; i < 2021; i++) {
        
        let objeto=[]
        const res = await fetch(urlql+i); 
		if (res.ok) {
			console.log("Ok");
            objeto= await res.json();
            ql.push(objeto.quality_life_index)
            
		} else {
			ql.push(null)
        }
        
    }
    
    //Lo mio
    for (let i = 2012; i < 2021; i++) {
        let megajson=[]
            const res = await fetch(urlarmas+i); 
            if (res.ok) {
                console.log("Ok");
                megajson= await res.json();
           
                let i=0
                let suma=0;
                
                for(i=0;i<megajson.length;i++){
                    let numero = parseInt(megajson[i].arms_sold.replace(".",""),10) 
                       suma=suma+numero
                    //megajson[i]
                    
                }
                armas.push(suma)
            } else {
                
            }
    }
        console.log(armas)  
    console.log(ql)
}

async function loadGraph(){
 
    Highcharts.chart('container', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Armas vendidas en: '+state+' junto al Índice de calidad de vida estimado en EEUU'
    },
    subtitle: {
        text: 'Integración con el grupo 1 utilizando Proxy'
    },
    xAxis: [{
        categories: ['2012', '2013', '2014', '2015', '2016', '2017',
            '2018', '2019', '2020'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Indice Calidad de vida',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Armas vendidas en '+state,
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} Armas',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Armas vendidas en '+ state,
        type: 'column',
        yAxis: 1,
        data: armas,
        tooltip: {
            valueSuffix: ' armas'
        }

    }, {
        name: 'Indice Calidad de Vida general en EEUU',
        type: 'spline',
        data: ql,
        tooltip: {
            valueSuffix: ' puntos'
        }
    }]
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
        urlarmas = "/api/v2/arms-sales-stats?state="+state+"&year="
        console.log(state)
        inicio()
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
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>



</svelte:head>
<main>
    <figure class="highcharts-figure">
        <div id="container"></div>
        <p class="highcharts-description">
            
        </p>
    </figure>
    
    <div>
        <Button color="secondary" on:click={pop}>Volver</Button>
        <Button color="secondary" on:click={busqueda}>Cambiar Estado</Button>
    </div>

    <Modal isOpen={b} toggle={busqueda} transitionOptions>
        <ModalHeader {busqueda}>¿Desea cambiar el Estado?</ModalHeader>
        <ModalBody >
            <p>Seleccione el estado del que quiera obtener los datos.</p>
                    <div style="text-align: center;" >
                        <input type="text"  bind:value="{state}">   
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


#container {
    height: 400px;
}



</style>