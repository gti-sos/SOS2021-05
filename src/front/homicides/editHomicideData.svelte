<script>
    import {onMount} from "svelte";
	import Table from "sveltestrap/src/Table.svelte";
    import Button from "sveltestrap/src/Button.svelte";
    import {pop} from "svelte-spa-router";
    export let params = {};
    
    
    let crime = {};
    let state;
    let year; 
    let homicide_by_firearmU;
    let handgunU;
    let rifleU;
    let shotgunU;
    let type_not_statedU;
    let cr_theftcountU;
    let userMsg;
    onMount(getCrime);


    async function getCrime(){
        console.log("Buscando crimen...");
        const res = await fetch("/api/v2/homicides-by-firearms/"+params.state+"/"+params.year);
        if (res.ok){
            console.log("OK!");
            const json= await res.json();
            crime = json ;
            state = crime.state;
            year = crime.year;
            homicide_by_firearm = crime.homicide_by_firearm;
            handgun = crime.handgun;
            rifle = crime.rifle;
            shotgun = crime.shotgun;
            type_not_stated = crime.type_not_stated;
            console.log("Crimen recibido.");
        }else{
            console.log("Error, algo ha ido mal");
        }
    }
    
    async function updateCrime(){
        console.log('Actualizando crimen con '+ JSON.stringify(params.state)+" "+JSON.stringify(params.year));
		const res = await fetch("/api/v2/homicides-by-firearms"+params.state+"/"+params.year,{
			method: "PUT",
			body: JSON.stringify({
                state: state,
                year: year,
                cr_rate: homicide_by_firearmU,
                cr_saferate: handgunU,
                cr_homicrate: rifleU,
                cr_homicount: shotgunU,
                cr_theftrate: type_not_statedU,
            }),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(function(res){
            
            userMsg = "DATO ACTUALIZADO";
		});	
    
    };
</script>
<main>
    <h2>Editando crimen para el país {params.country} y el año {params.year} {#if userMsg}<p style= "color:orange">{userMsg}</p>{/if}</h2>
    {#await crime};

    {:then crime}
    <table>
        <thead>
            <td>State</td>
            <td>Year</td>
            <td>Homicides by firearm</td>
            <td>Handgun</td>
            <td>Rifle</td>
            <td>Shotgun</td>
            <td>type_not_stated</td>
        </thead>
        <tbody>
            <td>{state}</td>
                <td>{year}</td>
                <td><input bind:value="{homicide_by_firearmU}"></td>
                <td><input bind:value="{handgunU}"></td>
                <td><input bind:value="{rifleU}"></td>
                <td><input bind:value="{shotgunU}"></td>
                <td><input bind:value="{type_not_statedU}"></td>
                <td> <Button outline  color="primary" on:click={updateCrime}>Actualizar</Button> </td>
        </tbody>
    </table>
    {/await}
    <Button outline color="secondary" on:click="{pop}">Volver</Button>
</main>