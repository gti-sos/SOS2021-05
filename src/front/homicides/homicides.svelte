<script>
    import {
        onMount
    } from "svelte";

    
    let data = [];
    async function getGames(){
        
        console.log("Fetching data ...");
        const res = await fetch("./api/v2/homicides-by-firearms");
        
        if(res.ok){
            console.log("Ok.");
            const json = await res.json();
            data = json;
            
        }else{
            console.log("Error!");
        }
    }
    onMount(getGames);
</script>

<main>
    <table >
        <thead>
            <tr>
                <td>State</td>
                <td>Year</td>
                <td>Homicides by firearms</td>
                <td>Handgun</td>
                <td>Rifle</td>
                <td>Shotgun</td>
                <td>Type not stated</td>

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
                    <td>{data.type_not_stated}</td>


                </tr>
            {/each}
        </tbody>
    </table >

    

</main>
<style>

    table, tr, td {
      border: 1px solid black;
  
    }
    
    </style>