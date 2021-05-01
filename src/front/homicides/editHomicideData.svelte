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
  let homicide_by_firearm;
  let handgun;
  let rifle;
  let shotgun;
  let type_not_stated;
  
  let userMsg;
  onMount(getCrime);
  

  async function getCrime(){
      console.log("Buscando crimen...");
      const res = await fetch("/api/v2/homicides-by-firearms/"+params.state+"/"+params.year);
      
      if (res.status==200){
          console.log("OK!");
          const json= await res.json();
          sale = json ;
          state = sale.state;
          year = sale.year;
          homicide_by_firearm = sale.homicide_by_firearm;
          handgun = sale.handgun;
          rifle = sale.rifle;
          shotgun = sale.rifle;
          type_not_stated = sale.type_not_stated;
         
          console.log("Crimen recibido.");
      }else{
          noencontrado = true;
          console.log("Error, algo ha ido mal");
      }
  }
  
  async function updateCrime(){
      console.log('Actualizando crimen con '+ JSON.stringify(params.state)+" "+JSON.stringify(params.year));
      const res = await fetch("/api/v2/homicides-by-firearms/"+params.state+"/"+params.year,{
          method: "PUT",
          body: JSON.stringify({
              state: state,
              year: year,
              homicide_by_firearm: homicide_by_firearm,
              handgun: handgun,
              rifle: rifle,
              shotgun: shotgun,
              type_not_stated: type_not_stated          
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
  const actualiza = () => {updateCrime(); popactualizar = !popactualizar};

  
  
</script>
 


<main>
    <Table bordered  style="background-color: #F5EEF8 ; width:75% ; text-align: center; ">
       <thead style="background-color: #E8DAEF; color:black">
           <tr>
               <td>Estado</td>
               <td>Año</td>
               <td>Homicidios por armas</td>
               <td>Armas de mano</td>
               <td>Rifles (armas largas)</td>
               <td>Escopetas</td>
               <td>Tipo no indicado</td> 
           </tr>
       </thead>
       <tbody>
           
                <tr>
                  
                  <td><input readonly onmousedown="return false;" bind:value="{state}"></td>
                  <td><input readonly onmousedown="return false;" bind:value="{year}"> </td>
                  <td><input bind:value="{homicide_by_firearm}"> </td>
                  <td><input bind:value="{handgun}"> </td>
                  <td><input bind:value="{rifle}"> </td>
                  <td><input bind:value="{shotgun}"> </td>
                  <td><input bind:value="{type_not_stated}"> </td>
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