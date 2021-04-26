<script>
    import {
        onMount
    } from "svelte";

    
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
    <table >
        <thead>
            <tr>
                <td>State</td>
                <td>Year</td>
                <td>Sex male</td>
                <td>Sex female</td>
                <td>Sex unknown</td>
				<td>Age range 20-29</td>
				<td>Age range 30-39</td>
				<td>Age range other</td>
				<td>Type of attack personal weapons</td>
				<td>Type of attack gun</td>
				<td>Type of attack knife</td>
                
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
    </table >

    

</main>