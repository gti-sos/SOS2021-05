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

    
    const BASE_API_URL = "/api/v2/attacks-stats"; //tiene que llamar a la API para tratar los datos
	
    let cargados = false;
    let data = [];

    let isOpen = false;

    getData();

    let newData = {
            state:"",
            year:"",
            sex_male: "",
            sex_female:"",
	    sex_unknown:"",
	    age_range_20_29:"",
	    age_range_30_39:"",
	    age_range_other:"",
	    type_of_attack_personal_weapons:"",
	    type_of_attack_gun:"",
            type_of_attack_knife:""
        }

     //funcion asincrona para cargar (get) los recursos existentes
     async function getData() {
            console.log("Fetching homicides resourcers...");
            const res = await fetch(BASE_API_URL);
            if(res.ok){
                const json = await res.json();
                data = json;
                console.log(`Received ${data.length} resources`);

            }else{
                console.log("ERROR!");
            }

        }

        async function insertData() { //insertar un recurso en concreto
            console.log("Inserting new resource " + JSON.stringify(newData));
            
            const res = await fetch(BASE_API_URL, {
                method: "POST",
                body: JSON.stringify(newData),
                headers: {
                    "Content-Type": "application/json"

                }
            }
            ).then( (res) => {
                getData();
            })
            
        }



        async function deleteData( a, b, c) { //elimina un recurso en concreto
            
            console.log("Deleting resource " + JSON.stringify(data));
            const res = await fetch(BASE_API_URL+"/"+a+"/"+b+"/"+c, {
                method: "DELETE",
              
            })
            getData();
        }

        async function loadStats(){
        deleteStats();
        console.log("Loading data...");
        const carga =  await fetch(BASE_API_URL + "/loadInitialData");
        cargados = true;
        if (carga.ok){
            console.log("Ok.");
            const res = await fetch(BASE_API_URL);
            if(res.ok){
                console.log("Ok. Obtaining data...")
                const json = await res.json();
                data = json;
                console.log('Received ${data.length} life stats.');
            }else{
                console.log("Error, there is no data.")
            }
        }else{
            console.log("Error loading data.");
        }
    }
   
    async function deleteStats() {
		console.log("Deleting life stats...");
        cargados=false;
		const res = await fetch(BASE_API_URL, {
			method: "DELETE"
		}).then(function (res) {
			if (res.ok){
				console.log("Ok.");
                data = [];
			} else if (res.status==404){ //no data found
                console.log("No data found");
			} else  { 
				console.log("Error deleting DB stats");
			}
			
		});
	}

     //Insert
    let open1 = false;
    const toggle1 = () => (open1 = !open1);
    const toggle1P = () => {
        open1 = !open1;
        console.log("Imprimo: "+newData.state.length)
        if(newData.state.replace(' ', '').length!=0 
        && newData.year.replace(' ', '').length!=0
        && newData.sex_male.length!=0 
	&& newData.sex_female.length!=0
	&& newData.sex_unknown.length!=0
	&& newData.age_range_20_29.length!=0
	&& newData.age_range_30_39.length!=0
	&& newData.age_range_other.length!=0
	&& newData.type_of_attack_personal_weapons.length!=0
	&& newData.type_of_attack_gun.length!=0
        && newData.type_of_attack_knife.length!=0 ){

        insertData()
        getData();
        }
        else{

            console.log("Nada añadido")
            popinsert=true;
        }

    };

    let popinsert = false;
    const togglepop = () => (popinsert = !popinsert);
    const togglepopok = () => {
        popinsert = !popinsert;
        open1=true}
    
    

</script>
  

<!-- svelte-ignore missing-declaration -->
<main>
    <div>
        {#if cargados}  
        <Button style="background-color: crimson;" disabled> Cargar datos</Button>
        {:else}
        <Button style="background-color: crimson;" on:click={loadStats}> Cargar datos</Button>
        {/if}
        <Button style="background-color: darkgray" on:click={deleteStats}> Eliminar datos</Button>
        <Button style="background-color: darkgray" on:click={toggle1}> Insertar</Button>

       
            <div id="modal">
            <Modal isOpen={open1} toggle={toggle1} transitionOptions>
                <ModalHeader {toggle1}>¿Quieres insertar un nuevo dato?</ModalHeader>
                <ModalBody >
                    Por favor, rellene el formulario. Todos los campos tienen que tener un valor. De lo contrario no se añadirá nada.
                    <tr>
                        <Table >
                            
                            <tbody>
                                
                                   
                                    <tr>
                                        <td>Estado</td>
                                        <td><input bind:value="{newData.state}"></td>
                                        
                                        
                                    </tr><tr>
                                        <td>Año</td>
                                        <td><input bind:value="{newData.year}"> </td>
                                   
                                        
                                    </tr><tr>
                                        <td>Sexo masculino</td>
                                        <td><input bind:value="{newData.sex_male}"> </td>
                                       
                                    </tr><tr>
                                        <td>Sexo femenino</td>
                                        <td><input bind:value="{newData.sex_female}"> </td>
                                        
                                        
                                    </tr><tr>
                                        <td>Sexo desconocido</td>
                                        <td><input bind:value="{newData.sex_unknown}"> </td>

				    </tr><tr>
                                        <td>Rango de edad 20-29</td>
                                        <td><input bind:value="{newData.age_range_20_29}"> </td>

				    </tr><tr>
                                        <td>Rango de edad 30-39</td>
                                        <td><input bind:value="{newData.age_range_30_39}"> </td>

				    </tr><tr>
                                        <td>Otro rango de edad</td>
                                        <td><input bind:value="{newData.age_range_other}"> </td>

				    </tr><tr>
                                        <td>Tipo de ataque Armas personales</td>
                                        <td><input bind:value="{newData.type_of_attack_personal_weapons}"> </td>
                                     

				    </tr><tr>
                                        <td>Tipo de ataque Pistola</td>
                                        <td><input bind:value="{newData.type_of_attack_gun}"> </td>
                                    

				     </tr><tr>
                                        <td>Tipo de ataque Navaja</td>
                                        <td><input bind:value="{newData.type_of_attack_knife}"> </td>
                                        
                                    </tr>



                               
                            </tbody>
                        </Table >
                    </tr>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" on:click={toggle1P}>Insertar</Button>
                    <Button color="secondary" on:click={toggle1}
                        >Cancelar</Button
                    >
                </ModalFooter>
            </Modal>


            <Modal isOpen={popinsert} toggle={togglepop} transitionOptions>
                <ModalHeader {togglepop}>Se ha producido un error</ModalHeader>
                <ModalBody >
                    No se ha podido insertar el dato. El Nombre, Año o Mes no tiene un formato correcto o hay un campo vacio.
                   
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" on:click={togglepopok}>Probaré de nuevo!</Button>
                    <Button color="secondary" on:click={togglepop}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>


    </div>
    
  
    {#if data.length != 0}
        <br/>
        <Table bordered>
        <thead>
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
            {#each data as data}
                <tr>
                    <td>{data.state}</td>
                    <td>{data.year}</td>
                    <td>{data.sex_male}</td>
                    <td>{data.sex_female}</td>
                    <td>{data.sex_unknown}</td>
                    <td>{data.age_range_20_29}</td>
		    <td>{data.age_range_30_39}</td>
		    <td>{data.age_range_other}</td>
		    <td>{data.type_of_attack_personal_weapons}</td>
		    <td>{data.type_of_attack_gun}</td>
		    <td>{data.type_of_attack_knife}</td>
                    
		    <td>
                        
                        <Button style="background-color: darkgray" on:click={() =>deleteData(data.state,data.year)}> Eliminar</Button>
                        <Button style="background-color: darkgray" on:click={deleteStats}> Actualizar</Button>
                    </td>
                  



                </tr>
            {/each}
        </tbody>
    </Table >
        <a href="/#/info">Volver</a>
    {:else}
    <br/>
    <p style="text-align: center; background-color: antiquewhite;"> Para ver los datos pulse el botón.</p>
    <a href="/#/info">Volver</a>
    {/if}

</main>


<style>
    a {
        font-size: 18px;
        background-color:rgb(103, 131, 72);
        color: white;
        border-radius: 6px;
        border: 1px solid grey;
        padding:4px;
    }
    a:hover {
        color:white;
    }

  
   

    
</style>