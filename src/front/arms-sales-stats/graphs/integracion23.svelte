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
    
    import "_my-chartist-settings.scss";        
    import "chartist/dist/scss/chartist.scss";
import { create_bidirectional_transition } from "svelte/internal";
        let state = "Texas"
        let agno= 2020
        let last= 2020
        let estados=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
"Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
"South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]	
        let urlmh= "/mh"
        let urlarmas = "/api/v2/arms-sales-stats?state="+state+"&year="
        let resmh=[];
        let habitantes=0;
        let bipolaridad=0;
        let esquizofrenia=0;
        let depresion=0;
        let armas=0;

async function inicio(){
   
   await getData()
   delay(2000);
  recarga()
  
}
const recarga=()=>{

   loadGraph()
  
}
const delay = ms => new Promise(res => setTimeout(res, ms));



   
    async function getData(){
    
            
        const res = await fetch(urlmh+ "?country=USA&year="+agno); 
		if (res.ok) {
			console.log("Ok");
            resmh = await res.json();
            console.log(resmh[0])
            habitantes=parseFloat(resmh[0].population.replace(",",""),10)*1000
            depresion=parseFloat(resmh[0].depression.replace(",",""),10)*1000
            bipolaridad=parseFloat(resmh[0].bipolar.replace(",",""),10)*1000
            esquizofrenia=parseFloat(resmh[0].schizophrenia.replace(",",""),10)*1000
		} else {
			console.log("Error al cargar API externa");
            
        }

        //Lo mio

        let megajson=[]
            const res2 = await fetch(urlarmas+agno); 
            if (res2.ok) {
                console.log("Ok");
                megajson= await res2.json();
           
                let i=0
                let suma=0;
                
                for(i=0;i<megajson.length;i++){
                    let numero = parseInt(megajson[i].arms_sold.replace(".",""),10) 
                       suma=suma+numero
                    //megajson[i]
                }
                armas = suma;
            } else {
                
            }

        
        
    }
	
    async function loadGraph(){
        console.log(bipolaridad/habitantes)
        let aux= parseInt(armas *(bipolaridad/habitantes),10)
        console.log(armas)
        new Chartist.Pie('.ct-chart1', {
                        
            series: [ ,aux,armas-aux]
            }, {
            donut: true,
            donutWidth: 60,
            donutSolid: true,
            startAngle: 270,
            total: armas*2,
            showLabel: true
        });
        let aux2= parseInt(armas *(depresion/habitantes),10)
        new Chartist.Pie('.ct-chart2', {
                        
                        series: [ ,aux2,armas-aux2]
                        }, {
                        donut: true,
                        donutWidth: 60,
                        donutSolid: true,
                        startAngle: 270,
                        total: armas*2,
                        showLabel: true
                    });
        let aux3=parseInt( armas *(esquizofrenia/habitantes),10)
        new Chartist.Pie('.ct-chart3', {
                        
                        series: [ ,aux3,armas-aux3]
                        }, {
                        donut: true,
                        donutWidth: 60,
                        donutSolid: true,
                        startAngle: 270,
                        total: armas*2,
                        showLabel: true
                    });

                    let aux4= parseInt(armas *((esquizofrenia+depresion+bipolaridad)/habitantes),10)
        new Chartist.Pie('.ct-chart4', {
                        
                        series: [ ,aux4,armas-aux4]
                        }, {
                        donut: true,
                        donutWidth: 60,
                        donutSolid: true,
                        startAngle: 270,
                        total: armas*2,
                        showLabel: true
                    });

    }


//Alerta y nusquedas
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
<main>

 
 
             <div>
                <Card  class="mb-3">
                    <CardHeader style="background-color: #C7EFF3;">
                        <CardTitle><h5>Estudio sobre el porcentaje estimado de personas en {state} con Esquizofrénia, Bipolaridad o 
                            Depresión en el año {agno}
                        </h5></CardTitle>
                    </CardHeader>
                    <CardBody style="background-color: #F0FEFF; 
                    justify-content: center;
                    align-items: center;">
                        Gracias a la API proporcionada por mi compañero Eduardo perteneciente al grupo 23 puedo obtener unos datos muy utiles 
                        sobre el porcentaje personas en EEUU que tienen enfermedades mentales.

                        Este estudio tratara de representar gráficamente que porcentaje de personas (Dado un Estado y un Año) padecen alguna de estas tres
                        enfermedades mentales respecto del numero de personas que han comprado un arma. Comencemos:

                        <h5>Datos iniciales</h5>
                        Estos datos han sido obtenidos desde la API de mi compañero y la ultima columna desde mi API
                        <div>
                            <Table bordered  style="background-color: #F5EEF8 ; width:75% ; text-align: center; ">
                                <thead style="background-color: #E8DAEF; color:black">
                                    <tr>
                                        <td>Año</td>
                                        <td>Poblacion EEUU</td>
                                        <td>Pacientes con Bipolaridad</td>
                                        <td>% de Bipolaridad</td>
                                        <td>Pacientes con Depresión</td>
                                        <td>% de Depresión</td>
                                        <td>Pacientes con Esquizofrenia</td>
                                        <td>% de Esquizofrenia</td>
                                        <td style="background-color: #DCB9ED">Armas vendidas en {state}</td>
                                        
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                         <tr>
                                           
                                           <td>{agno}</td>
                                           <td>{habitantes} </td>
                                           <td> {bipolaridad}</td>
                                           <td> {bipolaridad/habitantes}</td>
                                           <td>{depresion}</td>
                                           <td> {depresion/habitantes}</td>
                                           <td> {esquizofrenia}</td>
                                           <td>{esquizofrenia/habitantes}</td>
                                           <td style="background-color: #E8DAEF">{armas}</td>
                                           
                                       </tr>
                                    
                                </tbody>
                            </Table >
                        </div>

                        

                        <h5  style="text-align: left;"> Personas con Bipolaridad residentes en {state} que compraron un arma en {agno}</h5>
                        <div  style="width:50% " class="ct-chart1 ct-perfect-fourth" ></div>

                        <h5  style="text-align: left;">Personas con Depresion residentes en {state} que compraron un arma en {agno}</h5>
                        <div  style="width:50%" class="ct-chart2 ct-perfect-fourth" ></div>

                        <h5  style="text-align: left;">Personas con Esquizofrenia residentes en {state} que compraron un arma en {agno}</h5>
                        <div style="width:50%" class="ct-chart3 ct-perfect-fourth" ></div>

                        <h5  style="text-align: left;">Personas con alguna enfermedad mental residentes en {state} que compraron un arma en {agno}</h5>
                        <div style="width:50%" class="ct-chart4 ct-perfect-fourth" ></div>
                    </CardBody>
                    <CardFooter style="background-color: #C7EFF3;">
                        
                        <Button color="secondary" on:click={pop}>Volver</Button>
                       
                        <Button color="secondary" on:click={busqueda}>Cambiar Estado y/o Año</Button>
                        
                        </CardFooter>
                    </Card>
             </div>
        
   

    <Modal isOpen={b} toggle={busqueda} transitionOptions>
        <ModalHeader {busqueda}>¿Desea cambiar el Estado y el Año?</ModalHeader>
        <ModalBody >
            <p>Seleccione el estado y año de los que quiera obtener los datos.</p>
                    <div style="text-align: center;" >
                        <input type="text"  bind:value="{state}">   

                    </div>
                    <p> </p>
                    <div style="text-align: center;" >
                        <input type="text"  bind:value="{agno}">   
                        
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

<svelte:head>

   
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
    <script src="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js" on:load="{inicio}"></script>
</svelte:head>
<style>
     main {
       background-color: #ffffff;
      text-align: center;
      
    }
    div{
        display: flex;
  justify-content: center;
    }
</style>