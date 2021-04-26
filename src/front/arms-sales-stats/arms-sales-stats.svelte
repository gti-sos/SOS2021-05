<script>
    import {
        onMount
    } from "svelte";
    import UncontrolledAlert from "sveltestrap/src/UncontrolledAlert.svelte";
    let open = false;
    let data = [];
    let error = null;
    // Carga
    let open1 = false;
    const toggle1 = () => (open1 = !open1);
    const toggle1P = () => {
    open1 = !open1;
    getStats();
    };
    // Borrado
    let open2 = false;
    const toggle2 = () => (open2 = !open2);
    const toggle2P = () => {
    open2 = !open2;
    deleteStats();
    };
    // getStats() comprueba si recibe los objetos JSON, si no los carga con /loadInitialData y luego los pide
    async function getData() {
        const res = await fetch("/api/v2/arms-sales-stats");
        const json = await res.json();
        data = json;
        console.log(`We have received ${data.length} elements`);
    }
    async function getStats() {
        const res = await fetch("/api/v2/arms-sales-stats");
        if(res.length==0) {
            getData()
            error = 0
        } else {
            error = 409
            const aux = await fetch("/api/v2/arms-sales-stats/loadInitialData")
            if (aux.ok) {
                getData()
            } else {
                error = 409
                getData
            }
        }
    }
    // Borrado de datos
    async function deleteStats() {
        const res = await fetch("/api/v2/arms-sales-stats", {
        method: "DELETE",
        }).then(function (res) {
        if (res.ok) {
            console.log("OK");
            data = [];
            error = 0;
        } else if (res.status = 404) {
            error = 404;
            console.log("ERROR Data not found in database");
        } else {
            error = 1000;
            console.log("ERROR");
        }
    });
  }
    //document.getElementById ("delmhdata").addEventListener ("click", deleteStats);
</script>


<main>
<button id="loadmhdata" type="button" class="btn btn-info" on:click={toggle1P}>Cargar datos</button>
    <button id="delmhdata" type="button" class="btn btn-danger" on:click={toggle2P}>Borrar datos</button>
    <table >
        <thead>
            <tr>
                <td>State</td>
                <td>Year</td>
                <td>Month</td>
                <td>Arms Sold</td>
                <td>Percent of People</td>
                
            </tr>
        </thead>
        <tbody>
            {#each data as data}
                <tr>
                    <td>{data.state}</td>
                    <td>{data.year}</td>
                    <td>{data.month}</td>
                    <td>{data.arms_sold}</td>
                    <td>{data.percent_of_people}</td>
                  


                </tr>
            {/each}
        </tbody>
    </table >

 <!-- Alerts -->
 <div>
 {#if error === 0}
 <UncontrolledAlert  color="success" >
     Operación realizada correctamente.
   
 </UncontrolledAlert>
{/if}

{#if error === 409}
 <UncontrolledAlert  color="warning" >
     Los datos ya se encuentran cargados.
   
 </UncontrolledAlert>
{:else if error === 404}
 <UncontrolledAlert  color="danger">
     No se encuentra en la base de datos.
   
 </UncontrolledAlert>
{:else if error ===1000}
 <UncontrolledAlert  color="danger" >
  Error desconocido.
 </UncontrolledAlert>
{/if}
</div>
</main>






<style>

table, tr, td {
  border: 1px solid black;


}

</style>