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
	
    let cargados = false;
    let data = [];

    let isOpen = false;

    let limit =10;
    let ofset =0;
    let pagina = (ofset/10)+1;
    let num_paginas=0;
    let flags ="";
    let filtros_act= false;

    getData();

    let newData = {
            state:"",
            year:"",
            month: "" ,
            arms_sold:"",
            percent_of_people:""
        }
        let databusqueda = {
            state:"",
            year:"",
            month: "" ,
            arms_sold:"",
            percent_of_people:""
        }
        
     //funcion asincrona para cargar (get) los recursos existentes
     async function getNumPaginas() {
            console.log("Fetching homicides resourcers...");
            const res = await fetch(BASE_API_URL);
            let datos=[]
            if(res.ok){
                const json = await res.json();
                datos = json;
                num_paginas=(datos.length/10)+1|0;
                if(datos.length%10==0&&num_paginas!==1){
                    num_paginas--;
                }

            }else{
                console.log("ERROR!");
            }

        }


     async function getData() {
            getNumPaginas()
            console.log(num_paginas)
            console.log("Fetching homicides resourcers...");
          
            const res = await fetch(BASE_API_URL+"?limit="+limit+"&offset="+ofset+flags);
            if(res.ok){
                const json = await res.json();
                data = json;
                console.log(`Received ${data.length} resources`);
                pagina = (ofset/10)+1
            }else{
                console.log("ERROR!");
            }

        }

        async function insertData() { //insertar un recurso en concreto
            console.log("Inserting new resource " + JSON.stringify(newData));
            newData.state=newData.state.replace(" ","_")
            const res = await fetch(BASE_API_URL, {
                method: "POST",
                
                body: JSON.stringify(newData),
                headers: {
                    "Content-Type": "application/json",
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
            if(data.length==1&&num_paginas>1){
                ofset-=10; getData()
            }else{
            
            getData();
            }
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
        &&newData.year.replace(' ', '').length!=0 
        && newData.month.replace(' ', '').length!=0 
        && newData.arms_sold.length!=0 
        && newData.percent_of_people.length!=0 ){

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
    
    function gotoupdate(a,b,c) {
    location.href = '#/sales/'+a+'/'+b+'/'+c;
}
//paginacion

const siguiente= () => {ofset+=10; getData()}
const anterior= () => {ofset-=10; getData()}

//Busqueda especifica



    let popbusqueda = false;
    const cancelarbusqueda = () => (popbusqueda = !popbusqueda);
    const buscar = () => {
        popbusqueda = !popbusqueda
       
        if(databusqueda.state.replace(" ","").length!=0){
            flags= flags+"&state="+databusqueda.state;
        }
        if(databusqueda.year.replace(" ","").length!=0){
            flags= flags+"&year="+databusqueda.year;
        }
        if(databusqueda.month.replace(" ","").length!=0){
            flags= flags+"&month="+databusqueda.month;
        }
        if(databusqueda.arms_sold.replace(" ","").length!=0){
            flags= flags+"&arms_sold="+databusqueda.arms_sold;
        }
        if(databusqueda.percent_of_people.replace(" ","").length!=0){
            flags= flags+"&percent_of_people="+databusqueda.percent_of_people;
        }
        
        filtros_act=true
        getData()
    }

        const quitafiltros =() => {
            flags="";
            filtros_act=false;
            getData();
        }



</script>
  

<!-- svelte-ignore missing-declaration -->
<main>
    <div>
        {#if cargados}  
        <Button style="background-color: #F39C12;" disabled> Cargar datos</Button>
        {:else}
        <Button style="background-color: #F39C12;" on:click={loadStats}> Cargar datos</Button>
        {/if}
        <Button style="background-color: #F08080" on:click={deleteStats}> Eliminar datos</Button>
        <Button style="background-color: #28B463" on:click={toggle1}> Insertar</Button>
        <p></p>
        {#if !filtros_act} 
        <Button style="background-color: #B833FF" on:click={cancelarbusqueda}> Buscar específica </Button>
        {:else}
        <Button style="background-color: #B833FF" on:click={quitafiltros}> Quitar filtros </Button>
        <p style="text-align: rigth; background-color: antiquewhite;">↑(!) Existen filtros activos, para realizar otro filtrado desactivelos primero.</p>
        {/if}


              <!-- Modal para insertar -->
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
                                        <td>Mes</td>
                                        <td><input bind:value="{newData.month}"> </td>
                                       
                                    </tr><tr>
                                        <td>Armas Vendidas</td>
                                        <td><input bind:value="{newData.arms_sold}"> </td>
                                        
                                        
                                    </tr><tr>
                                        <td>Porcentaje de la población</td>
                                        <td><input bind:value="{newData.percent_of_people}"> </td>
                                        
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

            <!-- Modal para la busqueda -->

            <Modal isOpen={popbusqueda} toggle={cancelarbusqueda} transitionOptions>
                <ModalHeader {cancelarbusqueda}>¿Desea hacer una busqueda especifica?</ModalHeader>
                <ModalBody >
                   Por favor introduzca los valores exactos que desea que contengan los objetos filtrados.
                    <tr>
                        <Table >
                            
                            <tbody>
                                
                                   
                                    <tr>
                                        <td>Estado</td>
                                        <td><input bind:value="{databusqueda.state}"></td>
                                        
                                        
                                    </tr><tr>
                                        <td>Año</td>
                                        <td><input bind:value="{databusqueda.year}"> </td>
                                   
                                        
                                    </tr><tr>
                                        <td>Mes</td>
                                        <td><input bind:value="{databusqueda.month}"> </td>
                                       
                                    </tr><tr>
                                        <td>Armas Vendidas</td>
                                        <td><input bind:value="{databusqueda.arms_sold}"> </td>
                                        
                                        
                                    </tr><tr>
                                        <td>Porcentaje de la población</td>
                                        <td><input bind:value="{databusqueda.percent_of_people}"> </td>
                                        
                                    </tr>



                               
                            </tbody>
                        </Table >
                    </tr>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" on:click={buscar}>Buscar</Button>
                    <Button color="secondary" on:click={cancelarbusqueda}
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
        <Table bordered  style="background-color: #F5EEF8 ; width:75% ; text-align: center; ">
        <thead style="background-color: #E8DAEF; color:black">
            <tr>
                <td>Estados</td>
                <td>Año</td>
                <td>Mes</td>
                <td>Armas Vendidas</td>
                <td>Porcentaje de la población</td>
                <td>Acciones</td>
            </tr>
        </thead>
        <tbody>
            {#each data as data}
                <tr>
                    <td><a href="#/sales/{data.state}/{data.year}/{data.month}">{data.state}</a></td>
                    <td>{data.year}</td>
                    <td>{data.month}</td>
                    <td>{data.arms_sold}</td>
                    <td>{data.percent_of_people}</td>
                    <td>
                        <Button style="background-color: #F08080" on:click={() =>deleteData(data.state,data.year,data.month)}> Eliminar</Button>
                        <Button style="background-color: #28B463" on:click={() =>gotoupdate(data.state,data.year,data.month) }> Actualizar</Button>
                    </td>
                  



                </tr>
            {/each}
        </tbody>
    </Table >

        
    <div style="text-align: center; " >
        {#if pagina != 1}
        <Button style="background-color: #7A05B5 " on:click={anterior}>Anterior</Button>
        {/if}
        <Button color="dark" >Pag. Nº: {pagina} / {num_paginas}</Button>    
        {#if num_paginas-pagina!=0 }
         <Button style="background-color: #7A05B5 " on:click={siguiente}>Siguiente</Button>
         {/if}
    </div>


        <Button color="dark" on:click={pop}>Volver</Button>
        
    {:else}
    <br/>
    <p style="text-align: center; background-color: antiquewhite;">Lo sentimos, no existe ningun dato</p>
    
        <Button color="dark" on:click={pop}>Volver</Button>
    {/if}

</main>


<style>
   
    a:hover {
        color:white;
    }

  
   

    
</style>