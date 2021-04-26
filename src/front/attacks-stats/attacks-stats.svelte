<script>
    import {
        onMount
    } from "svelte";

    import {Table} from "sveltestrap/src/Table.svelte";
	
    let data = [];
    async function getGames(){
        
        console.log("Fetching data ...");
        const res = await fetch("./api/v2/attacks-stats");
        
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
    <Table bordered>
        <thead>
            <tr>
                <td><b>State</b></td>
                <td><b>Year</b></td>
                <td><b>Sex male</b></td>
                <td><b>Sex female</b></td>
                <td><b>Sex unknown</b></td>
				<td><b>Age range 20-29</b></td>
				<td><b>Age range 30-39</b></td>
				<td><b>Age range other</b></td>
				<td><b>Type of attack personal weapons</b></td>
				<td><b>Type of attack gun</b></td>
				<td><b>Type of attack knife</b></td>

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

                </tr>
            {/each}
        </tbody>
    </Table>

    

</main>