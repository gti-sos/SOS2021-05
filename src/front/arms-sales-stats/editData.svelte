<script lang="ts">
   
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
 
     
     const BASE_API_URL = "/api/v2/arms-sales-stats"; //tiene que llamar a la API para tratar los datos
     
        
 
     let newData = {
             state:"",
             year:"",
             month: "" ,
             arms_sold:"",
             percent_of_people:""
         }
 
      //funcion asincrona para cargar (get) los recursos existentes
    
 
     
 
      //Insert
     
     
 
 </script>
   
 

 <main>
     
         <Table bordered  style="background-color: #F5EEF8 ; width:75% ; text-align: center; ">
         <thead style="background-color: #E8DAEF; color:black">
             <tr>
                 <td>Estados</td>
                 <td>Año</td>
                 <td>Mes</td>
                 <td>Armas Vendidas</td>
                 <td>Porcentaje de la población</td>
               
             </tr>
         </thead>
         <tbody>
             
                  <tr>
                    
                    <td><input bind:value="{newData.state}"></td>
                    <td><input bind:value="{newData.year}"> </td>
                    <td><input bind:value="{newData.month}"> </td>
                    <td><input bind:value="{newData.arms_sold}"> </td>
                    <td><input bind:value="{newData.percent_of_people}"> </td>
                    
                </tr>
             
         </tbody>
     </Table >
     <Button style="background-color: #28B463" on:click={pop}> Actualizar</Button>
     <Button style="background-color: #28B463" on:click={pop}> Cancelar</Button>
 
 </main>
 
 
 <style>
    
     
    
 
     
 </style>