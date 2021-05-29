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

let espana=[]
let EEUU=[]
let urlev= "/ev"
let urlmia = "/api/v2/arms-sales-stats?year=2020&month=1"
let palabras =[]
let yabasta=0;


onMount(inicio)
        async function inicio(){
           yabasta++
           if (yabasta>=7){
               espana=[]
               EEUU=[]
            palabras=[]
           }
            await getData()
            delay(2000);
            console.log("Datos Cargados")
            await recarga()
        
        }
        const recarga=()=>{

            loadGraph()
        

        }
        const delay = ms => new Promise(res => setTimeout(res, ms));

        async function  getData(){

//ESPAÑA

    
    let objeto=[]
    const res = await fetch(urlev); 
    if (res.ok) {
        console.log("Ok");
        objeto= await res.json();
        let i;
        for( i=0;i<objeto.length;i++){
                if(espana.includes(objeto[i].province)){

                }else{
                    espana.push(objeto[i].province)
                }
        }
        
    } else {
       
    }
    


//Lo mio

    let megajson=[]
        const res1 = await fetch(urlmia); 
        if (res1.ok) {
            console.log("Ok");
            megajson= await res1.json();
           
            let j;
        for( j=0;j<megajson.length;j++){
                if(EEUU.includes(megajson[j].state)){

                }else{
                    EEUU.push(megajson[j].state)
                }
                
        }
        
        } else {
            
        }
let i;
  for(i=0;i<EEUU.length;i++){
      palabras.push({
        name: EEUU[i].replace("_",""),
        weight: random(1,4)
      })
  }
  for(i=0;i<espana.length;i++){
      palabras.push({
        name: espana[i],
        weight: random(1,4)
      })
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

async function loadGraph(){

    Highcharts.chart('container', {
    accessibility: {
        screenReaderSection: {
            beforeChartFormat: '<h5>{chartTitle}</h5>' +
                '<div>{chartSubtitle}</div>' +
                '<div>{chartLongdesc}</div>' +
                '<div>{viewTableButton}</div>'
        }
    },
    series: [{
        type: 'wordcloud',
        data: palabras,
        name: 'Tamaño Aleatorio'
    }],
    title: {
        text: 'Estados Norteamericanos y Comunidades Autonomas'
    }
});
}


</script>
<main>
    <figure class="highcharts-figure">
        <div id="container"></div>
        <p class="highcharts-description">
            Gráfico que muestra el nombre de los estados estadounidenses y las comunidades autonomas españolas.
            Recarga, Se duplican las palabras! (Al recargarlo 7 veces vuelve al principio)
        </p>
    </figure>
    <Button color="secondary" on:click={pop}>Volver</Button>
    <Button color="secondary" on:click={inicio}>Recarga</Button>
</main>
<svelte:head>
   
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/wordcloud.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
    

</svelte:head>
<style>
  
</style>