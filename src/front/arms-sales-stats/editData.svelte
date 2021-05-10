<script>
      import {onMount} from "svelte";
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
    export let params = {};
    
    
   onMount(getCrime);
    

    let sale = {};
    let state;
    let year; 
    let month;
    let arms_soldU;
    let percent_of_peopleU;
    
 
    

    

    async function getCrime(){
        console.log("Buscando crimen...");
        const res = await fetch("/api/v2/arms-sales-stats/"+params.state+"/"+params.year+"/"+params.month);

        switch(res.status){
        case 200:
            console.log("OK!");
            const json= await res.json();
            sale = json ;
            state = sale.state;
            year = sale.year;
            month = sale.month;
            arms_soldU = sale.arms_sold;
            percent_of_peopleU= sale.percent_of_people;

            let mensajeaux= "El dato: "+params.state+"/"+params.year+"/"+params.month+" se encuentra en la Base de Datos"    
            lanzamensaje(res.status,res.statusText,"Se ha encontrado el recurso buscado",mensajeaux,null)
            
           
            console.log("Crimen recibido.");
        break;

        case 404:
            let mensajeaux2= "El dato: "+params.state+"/"+params.year+"/"+params.month+" no se ha encontrado en la Base de datos"    
            lanzamensaje(res.status,res.statusText,"Se ha producido un error al buscar el elemento",mensajeaux2,true)
            console.log("Error, algo ha ido mal");
        break;

        default:
            lanzamensaje(res.status,res.statusText,"Se ha producido un error al buscar el elemento","Vaya... Algo ha salido mal. Probablemente la Base de Datos haya tenido un problema. Vuelva a intentarlo mas adelante",true)
        break;
        }
       


    }
    
    async function updateCrime(){
        console.log('Actualizando crimen con '+ JSON.stringify(params.state)+" "+JSON.stringify(params.year));
		const res = await fetch("/api/v2/arms-sales-stats/"+state+"/"+year+"/"+month,{
			method: "PUT",
			body: JSON.stringify({
                state: state,
                year: year,
                month: month,
                arms_sold: arms_soldU ,
                percent_of_people: percent_of_peopleU 
                
				
            }),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(function(res){
           
            switch(res.status){

            case 200:
                botontomain=true;
                let mensajeaux= "El dato: "+params.state+"/"+params.year+"/"+params.month+" ha sido actualizado correctamente"    
            lanzamensaje(res.status,res.statusText,"Actualización exitosa",mensajeaux,null)
            break;
            case 400:

            break;
            case 404:
                let mensajeaux2= "El dato: "+params.state+"/"+params.year+"/"+params.month+" no se ha encontrado en la Base de datos"    
                lanzamensaje(res.status,res.statusText,"Se ha producido un error al Actualizar",mensajeaux2,true)
                
            break;
            case 409:
            let mensajeaux3= "El dato: "+params.state+"/"+params.year+"/"+params.month+" ha solicitado actualizar el Estado, Año o Mes. Se ha denegado la actualización para velar por la integridad de la información"    
                lanzamensaje(res.status,res.statusText,"Se ha producido un error al Actualizar",mensajeaux3,true)
            break;
            default:
            lanzamensaje(res.status,res.statusText,"Se ha producido un error al buscar el elemento","Vaya... Algo ha salido mal. Probablemente la Base de Datos haya tenido un problema. Vuelva a intentarlo mas adelante",true)
       
            break;


            }
		});	

        

       
    
    };

    let popactualizar = false;
    const toggleactualizar = () => (popactualizar = !popactualizar);
    const actualiza = () => {updateCrime(); popactualizar = !popactualizar};
 
   


    function gomain() {
    location.href = '#/sales';
}

  let botontomain=false;


    //Modal alerta
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
      <Table bordered  style="background-color: #F5EEF8 ; width:75% ; text-align: center; ">
         <thead style="background-color: #E8DAEF; color:black">
             <tr>
                 <td>Estado</td>
                 <td>Año</td>
                 <td>Mes</td>
                 <td>Armas Vendidas</td>
                 <td>Porcentaje de la población</td>
               
             </tr>
         </thead>
         <tbody>
             
                  <tr>
                    
                    <td><input  readonly onmousedown="return false;" bind:value="{state}"></td>
                    <td><input type="number" readonly onmousedown="return false;" bind:value="{year}"> </td>
                    <td><input type="number" readonly onmousedown="return false;" bind:value="{month}"> </td>
                    <td><input type="number" bind:value="{arms_soldU}"> </td>
                    <td><input type="number" bind:value="{percent_of_peopleU}"> </td>
                    
                </tr>
             
         </tbody>
     </Table >
     <Button style="background-color: #28B463" on:click={toggleactualizar}> Actualizar</Button>
     <Button style="background-color: darkgray" on:click={pop}> Cancelar</Button>
 
     <Modal isOpen={popactualizar} toggle={toggleactualizar} transitionOptions>
        <ModalHeader {toggleactualizar}>¿Desea actualizar este dato?</ModalHeader>
        <ModalBody >
               Por favor pulse el botón "Actualizar" para confirmar la acción.       
        </ModalBody>
        <ModalFooter>
            <Button color="primary" on:click={actualiza}>Actualizar</Button>
            <Button color="secondary" on:click={toggleactualizar}>Cancelar</Button>
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
            <p>Causa:</p>
             
            <p>{mensajeespecifico}</p>
            
            {/if}
        {:else}
        <p>{mensajeespecifico}</p>
        {/if}

        <div>
            <p></p>
        <Button color="secondary" on:click={togglealerta}>Volver</Button>
        {#if botontomain}
        <Button color="secondary" on:click={gomain}>Volver a la tabla</Button>
        {/if}
    </div>
    </ModalBody>
    
</Modal>
 
 
    </main>
 
 
 <style>
      
 </style>