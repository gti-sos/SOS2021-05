
<script>
    import {
        onMount
    } from "svelte";

    
    let data = [];
    async function getGames(){
        
        console.log("Fetching data ...");
        const res = await fetch("./api/v2/arms-sales-stats");
        
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

  

</main>
<style>

table, tr, td {
  border: 1px solid black;

}

</style>