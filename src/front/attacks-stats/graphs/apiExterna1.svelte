<script>
    import {pop} from "svelte-spa-router";
    import Button from "sveltestrap/src/Button.svelte";
	import {
        onMount
    } from "svelte";

    var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", "dfccd1d46ee28260bd279bcd449f0ad0");
        myHeaders.append("x-rapidapi-host", "v1.formula-1.api-sports.io");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
};
    let data = [];
    let dataResponse = [];
    let circuitos = []; // AQUI METEMOS LOS NOMBRES DE LOS CIRCUITOS
    let capacidades = []; // AQUI METEMOS LAS CAPACIDADES DE LOS CIRCUITOS

    onMount(inicio)
async function inicio(){
   
	await getData()
    delay(29);
   recarga()
   
}
const recarga=()=>{

    loadGraph()
   
}
const delay = ms => new Promise(res => setTimeout(res, ms));




    async function getData(){
        console.log("Fetching data...");
        const res = await fetch("https://v1.formula-1.api-sports.io/circuits", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        const res1 = await fetch("https://v1.formula-1.api-sports.io/circuits", requestOptions);
        if(res1.ok){
            console.log("Ok.");
            const json = await res1.json();
            data = json;
            dataResponse = data.response;
            console.log(data.response);
            console.log(JSON.stringify(data,null,2));
            for(let i=0;i<dataResponse.length;i++){
                circuitos.push(dataResponse[i].name);
                
                capacidades.push(dataResponse[i].capacity);
                
            }
            console.log(circuitos);
            console.log(capacidades);
        }else{
            console.log("ERROR!");
        }
            
    }

    async function loadGraph(){

    Highcharts.chart('container', {
    title: {
        text: 'Capacidad de los circuitos de la Formula 1'
    },
    
    xAxis: {
        categories: circuitos // aqui meter los nombres de los circuitos
    },
    yAxis: {
        title: {
            text: 'Capacidad'
    }
    },
    series: [{
        type: 'column',
        colorByPoint: true,
        data: capacidades, // AQUI METER LAS CAPACIDADES DE LOS CIRCUITOS
        showInLegend: false
    }]
});


    }

</script>

<svelte:head>

  


</svelte:head>


<main>

    <script src="https://code.highcharts.com/highcharts.js" on:load="{loadGraph}"></script>

    <div>   <Button outline style=" background-color:#6C00AF; color:aliceblue" on:click="{pop}"> Volver</Button></div> 

    <figure class="highcharts-figure">
        <div id="container"></div>
       
    </figure>

</main>

<style>

#container {
    height: 400px; 
}



</style>