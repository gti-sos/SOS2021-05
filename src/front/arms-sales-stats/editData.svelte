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
    

    let noencontrado = false;

    let sale = {};
    let state;
    let year; 
    let month;
    let arms_soldU;
    let percent_of_peopleU;
    
    let userMsg;
    

    //Error code
    let geterrorcode=0;
    let geterror="";

    let puterrorcode=0;
    let puterror="";
    

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
        }else if(res.status==404){
            noencontrado = true;
            console.log("Error, algo ha ido mal");
        }else{
            geterrorcode=res.status;
            geterror= res.statusText;
            errorGet = true;
            
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
           
            if(res.status==200){
             ok=true;
        
            }else{
             puterrorcode=res.status;
             puterror= res.statusText;
             errorPut = true;
            }
            
            userMsg = "DATO ACTUALIZADO";
		});	

        

       
    
    };

    let popactualizar = false;
    const toggleactualizar = () => (popactualizar = !popactualizar);
    const actualiza = () => {updateCrime(); popactualizar = !popactualizar};
 
   


    function gomain() {
    location.href = '#/sales';
}

  //Modal para errorGet
  let errorGet = false;
    const toggleerrorGet = () => (errorGet = !errorGet);

    //Modal para errorPut
  let errorPut = false;
    const toggleerrorPut = () => (errorPut = !errorPut);

    //Modal Actualizacion ok
    let ok = false;
    const toggleok = () => (ok = !ok);
    const toggleback = () => (gomain());
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
        <ModalHeader {toggleactualizar}>Lo sentimos, no se ha encontrado una entrada con los datos:
        </ModalHeader>

    <ModalBody >

        <Table >
            <tbody>
                  <tr>
                          <td>Estado</td>
                          <td>{params.state}</td>
                        </tr><tr>
                          <td>Año</td>
                          <td>{params.year}</td>
                       </tr><tr>
                          <td>Mes</td>
                          <td>{params.month}</td>
            
              </tbody>
          </Table >

     </ModalBody>

        <ModalFooter>
            
            <Button color="secondary" on:click={pop}>Volver</Button>
        </ModalFooter>
    </Modal>

    <Modal isOpen={errorGet} toggle={toggleerrorGet} transitionOptions>
        <ModalHeader {toggleerrorGet}>Lo sentimos, ha habido un fallo en la consulta con codigo de error= {geterrorcode}: {geterror} </ModalHeader>
        <ModalFooter>
            
            <Button color="secondary" on:click={toggleerrorGet}>Volver</Button>
        </ModalFooter>
    </Modal>

    <Modal isOpen={errorPut} toggle={toggleerrorPut} transitionOptions>
        <ModalHeader {toggleerrorPut}>Lo sentimos, ha habido un fallo en la consulta con codigo de error= {puterrorcode}: {puterror} </ModalHeader>
        <ModalFooter>
            
            <Button color="secondary" on:click={toggleerrorPut}>Volver</Button>
        </ModalFooter>
    </Modal>
 
    <Modal isOpen={ok} toggle={toggleok} transitionOptions>
        <ModalHeader toggle={toggleok} style="text-align: center;">La Actualización se ha realizado satisfactoriamente. 
        
            <div>
                <p></p>
            <Button color="secondary" on:click={toggleback}>Volver a la tabla</Button>
        </div>
        </ModalHeader>
    </Modal>
 
 
    </main>
 
 
 <style>
    
     
    
 
     
 </style>