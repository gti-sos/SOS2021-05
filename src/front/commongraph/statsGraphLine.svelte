
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
let state= "Alabama"

   
    let data = [];
    let arraysales = [];
    let arrayattacks = [];
    let arrayhomicides = [];
    onMount(buscar)

    async function getDataSales(state){
        arraysales = [];
        console.log("Fetching data...");
        const res = await fetch("/api/v2/arms-sales-stats?state="+state);
        if(res.status==200 ){
            console.log("Ok.");
            const json = await res.json();
            data = json;
            console.log(`We have received ${data.length} data points.`);
            for(let i=0;i<data.length;i++){
                let aux= data[i].arms_sold.replace(".","")
                arraysales[i]=parseInt(aux,10)
            }
            arraysales=arraysales.reverse()
            console.log(arraysales);
        }else{
            "El estado: "+state+" no se ha encontrado en la Base de datos"    
            lanzamensaje(res.status,res.statusText,"Se ha producido un error al cargar los datoso",mensajeaux2,true)
            console.log("Error!");
        }
    }
    
    async function getDataAttacks(state){
        arrayattacks = [];
        console.log("Fetching data...");
        const res = await fetch("/api/v2/attacks-stats?state="+state.replace("_","-"));
        if(res.ok){
            console.log("Ok.");
            const json = await res.json();
            data = json;
            console.log(`We have received ${data.length} data points.`);
            for(let i=0;i<data.length;i++){
                let aux= data[i].type_of_attack_personal_weapons.replace(".","")
                arrayattacks [i]=parseInt(aux,10)
            }
            arrayattacks= arrayattacks.reverse()
            console.log(arrayattacks );
        }else{
            "El estado: "+state+" no se ha encontrado en la Base de datos"    
            lanzamensaje(res.status,res.statusText,"Se ha producido un error al cargar los datoso",mensajeaux2,true)
            console.log("Error!");
        }
    }
    
    async function getDataHomicides(state){
        arrayhomicides = [];
        console.log("Fetching data...");
        const res = await fetch("/api/v2/homicides-by-firearms?state="+state.replace("_","-"));
        if(res.ok){
            console.log("Ok.");
            const json = await res.json();
            data = json;
            console.log(`We have received ${data.length} data points.`);
            for(let i=0;i<data.length;i++){
                let aux= data[i].homicide_by_firearm.replace(".","")
                arrayhomicides [i]=parseInt(aux,10)
            }
            arrayhomicides= arrayhomicides.reverse()
            console.log(arrayhomicides );
        }else{
             "El estado: "+state+" no se ha encontrado en la Base de datos"    
            lanzamensaje(res.status,res.statusText,"Se ha producido un error al cargar los datoso",mensajeaux2,true)
            console.log("Error!");
        }
    }
    


   function loadGraph(){  
    
    //SERIES PARA LOS ESTADOS
    var seriesaux = [],
    len = arraysales.length / 12,
    i = 0;
   
    let arrayporagno=[]
    let arrayhomicidesarms=[]
    let arrayhomicidesattacks=[]
    for(i;i<len-1;i++){
        let j=0
       
        
         let comienzo=i*12
         let fin=comienzo +12
         let arraytroceada=arraysales.slice(comienzo,fin)
         let a=0;
         
        //ordenamos la array en funcion de como salen los datos del get
             a= arraytroceada[11]+arraytroceada[7]+arraytroceada[6]+arraytroceada[5]+arraytroceada[4]+arraytroceada[3]+
             arraytroceada[2]+arraytroceada[1]+arraytroceada[0]+arraytroceada[10]+arraytroceada[9]+arraytroceada[8]
            
             
            
            arrayporagno.push(arrayattacks[i]/a)
             
            
             arrayhomicidesarms.push(arrayhomicides[i]/a)
             arrayhomicidesattacks.push(arrayhomicides[i]/arrayattacks[i])
         
    }
    
    seriesaux.push(
        
        {
            name: "Ataques/Armas Vendidas",
            data:  arrayporagno,
            visible: true
              
         });
         seriesaux.push({
            name: "Homicidios/Armas Vendidas",
            data:  arrayhomicidesarms,
            visible: true
              
         });

         seriesaux.push({
            name: "Homicidios/Ataques",
            data:  arrayhomicidesattacks,
            visible: false
              
         });
    

    //SERIES PARA LOS ESTADOS
    Highcharts.chart('container', {
        title: {
            text: state
        },
        yAxis: {
            title: {
                text: state
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
    
    if(estados.includes(state)){
        state=state.replace(" ","_")
        console.log(state)
   getDataSales(state)
   getDataAttacks(state)
   getDataHomicides(state)
   await delay(500);
   recarga()
    }else{
        
            lanzamensaje(0,"h","Se ha producido un error al cargar los datos","El estado: "+state+" no corresponde con ningun estado de EEUU"    ,null)
            
    }
   
   
  
   
}
const recarga=()=>{

    loadGraph()
   
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
        El objetivo de este gráfico se centra en interelacionar el % de ataques y de homicidios respecto a la venta de armas. 
        Como podemos comprobar, pese a que un gran número de personas compra armas en EEUU, no existe un gran numero de homicidios/ataques
    </div> 
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
    
</style>