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
    let sex_male;
    let sex_female;
    let sex_unknown;
    let age_range_20_29;
    let age_range_30_39;
    let age_range_other;
    let type_of_attack_personal_weapons;
    let type_of_attack_gun;
    let type_of_attack_knife;
    
    let userMsg;
    onMount(getCrime);
    

    async function getCrime(){
        console.log("Buscando crimen...");
        const res = await fetch("/api/v2/attacks-stats/"+params.state+"/"+params.year);
        
        if (res.status==200){
            console.log("OK!");
            const json= await res.json();
            sale = json ;
            state = sale.state;
            year = sale.year;
	    sex_male = sale.sex_male;
	    sex_female = sale.sex_female;
	    sex_unknown = sale.sex_unknown;
            age_range_20_29 = sale.age_range_20_29;
	    age_range_30_39 = sale.age_range_30_39;
	    age_range_other = sale.age_range_other;
	    type_of_attack_personal_weapons = sale.type_of_attack_personal_weapons;
	    type_of_attack_gun = sale.type_of_attack_gun;
            type_of_attack_knife = sale.type_of_attack_knife;
           
            console.log("Crimen recibido.");
        }else{
            noencontrado = true;
            console.log("Error, algo ha ido mal");
        }
    }
    
    async function updateCrime(){
        console.log('Actualizando crimen con '+ JSON.stringify(params.state)+" "+JSON.stringify(params.year));
		const res = await fetch("/api/v2/attacks-stats/"+params.state+"/"+params.year,{
			method: "PUT",
			body: JSON.stringify({
                state: state,
                year: year,
                sex_male: sex_male,
	    	sex_female: sex_female,
	    	sex_unknown: sex_unknown,
            	age_range_20_29: age_range_20_29,
	   	age_range_30_39: age_range_30_39,
	    	age_range_other: age_range_other,
	    	type_of_attack_personal_weapons: type_of_attack_personal_weapons,
	    	type_of_attack_gun: type_of_attack_gun,
            	type_of_attack_knife: type_of_attack_knife
                
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
                <td><b>Estado</b></td>
               	<td><b>Año</b></td>
              	<td><b>Sexo masculino</b></td>
              	<td><b>Sexo femenino</b></td>
                <td><b>Sexo desconocido</b></td>
		<td><b>Rango de edad 20-29</b></td>
		<td><b>Rango de edad 30-39</b></td>
		<td><b>Otro rango de edad</b></td>
		<td><b>Tipo de ataque Armas personales</b></td>
		<td><b>Tipo de ataque Pistola</b></td>
		<td><b>Tipo de ataque Navaja</b></td>
               
             </tr>
         </thead>
         <tbody>
             
                  <tr>
                    
                    <td><input readonly onmousedown="return false;" bind:value="{state}"></td>
                    <td><input readonly onmousedown="return false;" bind:value="{year}"> </td>
                    <td><input bind:value="{sex_male}"> </td>
		    <td><input bind:value="{sex_female}"> </td>
                    <td><input bind:value="{sex_unknown}"> </td>
		    <td><input bind:value="{age_range_20_29}"> </td>
                    <td><input bind:value="{age_range_30_39}"> </td>
		    <td><input bind:value="{age_range_other}"> </td>
		    <td><input bind:value="{type_of_attack_personal_weapons}"> </td>
                    <td><input bind:value="{type_of_attack_gun}"> </td>
                    <td><input bind:value="{type_of_attack_knife}"> </td>
                    
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