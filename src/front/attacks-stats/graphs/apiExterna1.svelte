<script>
    import{
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
    let circuitos = [];
    let distancias = [];

    async function getData(){
        console.log("Fetching data...");
        const res = await fetch("https://v1.formula-1.api-sports.io/circuits", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        if(res.ok){
            console.log("Ok.");
            const json = await res.json();
            data = json;
            console.log(`We have received ${data.length} data circuits.`);
            for(let i=0;i<data.length;i++){
                circuitos.push(data[i].name);
                distancias.push(data[i].length);
            }    
        }else{
            console.log("Error!");
        }
    }

    async function loadGraph(){

    Highcharts.chart('container', {
    title: {
        text: 'Distancia de los circuitos de la Formula 1'
    },
    
    xAxis: {
        categories: circuitos // aqui meter los nombres de los circuitos
    },
    yAxis: {
        title: {
            text: 'Kilómetros'
    }
    },
    series: [{
        type: 'column',
        colorByPoint: true,
        data: distancias, // AQUI METER LAS DISTANCIAS DE LOS CIRCUITOS
        showInLegend: false
    }]
});


    }

</script>

<svelte:head>

    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/highcharts-more.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js" on:load="{loadGraph}"></script>

</svelte:head>


<main>

    <figure class="highcharts-figure">
        <div id="container"></div>
       
    </figure>

</main>

<style>

#container {
    height: 400px; 
}



</style>