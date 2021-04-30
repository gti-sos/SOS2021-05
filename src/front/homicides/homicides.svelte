<script lang="ts">
   
    import {Button, Table, Toast, ToastBody, ToastHeader } from 'sveltestrap';
        const BASE_API_URL = "/api/v2/homicides-by-firearms"; //tiene que llamar a la API para tratar los datos
        
        let cargados = false;
        let data = [];

        let newData = {
            state:"",
            year:"",
            homicide_by_firearm: "" ,
            handgun:"",
            rifle:"",
            shotgun:"",
            type_not_stated: ""

        }

        //funcion asincrona para cargar los datos iniciales (loadInitialData)
        async function loadStats(){
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


       

        //funcion asincrona para borrar todos los recursos
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
        
        
        async function insertData() {
            console.log("Inserting new resource " + JSON.stringify(newData));
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


        
        
       

    </script>
      
    
    <main>
        <div>
            {#if cargados}   <!--  Si ya hemos cargado los datos iniciales--> 
            <Button style="background-color: crimson;" disabled> Cargar datos Iniciales</Button>
            <Button style="background-color: crimson;" on:click={insertData}> Insertar Recurso</Button>
            <td>Año<input bind:value = "{newData.state}"></td>
            <td>Estado<input bind:value = "{newData.year}"></td>
            <td>Homicidios por armas<input bind:value = "{newData.homicide_by_firearm}"></td>
            <td>Armas de mano<input bind:value = "{newData.handgun}"></td>
            <td>Rifle<input bind:value = "{newData.rifle}"></td>
            <td>Tipo no especificado<input bind:value = "{newData.shotgun}"></td>

            {:else}
    
            <Button style="background-color: crimson;" on:click={loadStats}> Cargar Datos Iniciales</Button>
            {/if}
            <Button style="background-color: darkgray" on:click={deleteStats}> Eliminar datos</Button>

            
        </div>
        
      
        {#if data.length != 0}
            <br/>
            <table >
            <thead>
                <tr>
                    <td>State</td>
                    <td>Year</td>
                    <td>Homicide by firearm</td>
                    <td>Handgun</td>
                    <td>Rifle</td>
                    <td>Shotgun</td>

                    
                </tr>
            </thead>
            <tbody>
                {#each data as data}
                    <tr>
                        <td>{data.state}</td>
                        <td>{data.year}</td>
                        <td>{data.homicide_by_firearm}</td>
                        <td>{data.handgun}</td>
                        <td>{data.rifle}</td>
                        <td>{data.shotgun}</td>

                      
    
    
                    </tr>
                {/each}
            </tbody>
        </table >
            <a href="/">Volver</a>
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