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
    await delay(29);
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
    chart: {
        type: 'cylinder',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    title: {
        text: 'Capacidad de los circuitos de la Formula 1'
    },
    plotOptions: {
        series: {
            depth: 30,
            colorByPoint: true
        }
    },
    xAxis: {
        categories: circuitos // aqui meter los nombres de los circuitos
    },
    series: [{
        data: capacidades,
        name: 'Capacidad',
        showInLegend: false
    }]
});


    }

</script>

<svelte:head>

  


</svelte:head>


<main>

    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/highcharts-3d.js"></script>
    <script src="https://code.highcharts.com/modules/cylinder.js" on:load="{loadGraph}"></script>

    <div>   <Button outline style=" background-color:#6C00AF; color:aliceblue" on:click="{pop}"> Volver</Button></div> 

    <figure class="highcharts-figure">
        <div id="container"></div>
       
    </figure>

</main>

<style>

#container {
    height: 600px; 
}

.highcharts-figure, .highcharts-data-table table {
    min-width: 400px; 
    max-width: 800px;
    margin: 1em auto;
}

.highcharts-data-table table {
    font-family: Verdana, sans-serif;
    border-collapse: collapse;
    border: 1px solid #EBEBEB;
    margin: 10px auto;
    text-align: center;
    width: 100%;
    max-width: 500px;
}
.highcharts-data-table caption {
    padding: 1em 0;
    font-size: 1.2em;
    color: #555;
}
.highcharts-data-table th {
	font-weight: 600;
    padding: 0.5em;
}
.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
    padding: 0.5em;
}
.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
}
.highcharts-data-table tr:hover {
    background: #f1f7ff;
}



</style>