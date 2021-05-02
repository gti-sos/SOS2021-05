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
    
    let noencontrado = false;

    let sale = {};
    let state;
    let year; 
    let month;
    let arms_soldU;
    let percent_of_peopleU;
    
    let userMsg;
    onMount(getCrime);
    

    async function getCrime(){
        console.log("Buscando crimen...");
        const res = await fetch("/api/v2/arms-sales-stats/"+params.state+"/"+params.year+"/"+params.month);
        
        if (res.status==200){
            console.log("OK!");
            const json= await res.json();
            sale = json ;
            state = sale.state;
            year = sale.year;
            month = sale.month;
            arms_soldU = sale.arms_sold;
            percent_of_peopleU= sale.percent_of_people;
           
            console.log("Crimen recibido.");
        }else{
            noencontrado = true;
            console.log("Error, algo ha ido mal");
        }
    }
    
    async function updateCrime(){
        console.log('Actualizando crimen con '+ JSON.stringify(params.state)+" "+JSON.stringify(params.year));
		const res = await fetch("/api/v2/arms-sales-stats/"+params.state+"/"+params.year+"/"+params.month,{
			method: "PUT",
			body: JSON.stringify({
                state: params.state,
                year: params.year,
                month: params.month,
                arms_sold: arms_soldU ,
                percent_of_people: percent_of_peopleU 
                
            }),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(function(res){
            
            userMsg = "DATO ACTUALIZADO";
		});	
    
    };

    let popactualizar = false;
    const toggleactualizar = () => (popactualizar = !popactualizar);
    const actualiza = () => {updateCrime(); popactualizar = !popactualizar; gomain()};
 
    function gomain() {
    location.href = '#/sales';
    
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
                    
                    <td><input readonly onmousedown="return false;" bind:value="{state}"></td>
                    <td><input readonly onmousedown="return false;" bind:value="{year}"> </td>
                    <td><input readonly onmousedown="return false;" bind:value="{month}"> </td>
                    <td><input bind:value="{arms_soldU}"> </td>
                    <td><input bind:value="{percent_of_peopleU}"> </td>
                    
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
 
    <Modal isOpen={noencontrado} toggle={toggleactualizar} transitionOptions>
        <ModalHeader {toggleactualizar}>Lo sentimos, no se ha encontrado el dato buscado</ModalHeader>
        <ModalFooter>
            
            <Button color="secondary" on:click={pop}>Volver</Button>
        </ModalFooter>
    </Modal>
 
 
 
    </main>
 
 
 <style>
    
     
    
 
     
 </style>