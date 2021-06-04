<script>
     import {pop} from "svelte-spa-router";
    import Button from "sveltestrap/src/Button.svelte";
    import {
        onMount
    } from "svelte";

    let data = [];
    let ataques2017 =[];
    let ataques2018 =[];
    let ataques2019 =[];
    let ataqueEstado =[];


    onMount(inicio)
    async function inicio(){
        await cargarDatos();
        await loadGraph();
        
    }

async function cargarDatos(){
    const res = await fetch("/api/v2/attacks-stats");
        if(res.ok){
          console.log("Ok.");
          const json = await res.json();
          data = json;
          console.log(data);
          for(let i=0;i<data.length;i++){
            if(data[i].year == "2017"){
                ataqueEstado.push(data[i].state);
                ataqueEstado.push(Number.parseInt(data[i].type_of_attack_personal_weapons));
                ataques2017.push(ataqueEstado);
                ataqueEstado=[];
            }
            if(data[i].year == "2018"){
                ataqueEstado.push(data[i].state);
                ataqueEstado.push(Number.parseInt(data[i].type_of_attack_personal_weapons));
                ataques2018.push(ataqueEstado);
                ataqueEstado=[];
            }
            if(data[i].year == "2019"){
                ataqueEstado.push(data[i].state);
                ataqueEstado.push(Number.parseInt(data[i].type_of_attack_personal_weapons));
                ataques2019.push(ataqueEstado);
                ataqueEstado=[];
            }
          }
          console.log(ataques2017);
        }else{
            console.log("Error al cargar los datos");
        }
}

async function loadGraph(){

    Highcharts.chart('container', {
    chart: {
        type: 'area',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 30,
            depth: 200
        }
    },
    title: {
        text: "Ataques en los diferentes estados de EEUU"
    },
    yAxis: {
        title: {
            text: 'Núemero de ataques',
            x: -40
        },
        labels: {
            format: '{value:,.0f}'
        },
        gridLineDashStyle: 'Dash'
    },
    xAxis: [{
        visible: false
    }, {
        visible: false
    }, {
        visible: false
    }],
    plotOptions: {
        area: {
            depth: 100,
            marker: {
                enabled: false
            },
            states: {
                inactive: {
                    enabled: false
                }
            }
        }
    },
    tooltip: {
        valueSuffix: ' ataques'
    },
    series: [{
        name: "Ataques por armas personales 2017",
        lineColor: 'rgb(180,90,50)',
        color: 'rgb(200,110,50)',
        fillColor: 'rgb(200,110,50)',
        data: ataques2017
    }, {
        xAxis: 1,
        lineColor: 'rgb(120,160,180)',
        color: 'rgb(140,180,200)',
        fillColor: 'rgb(140,180,200)',
        name: "Ataques por armas personales 2018",
        data: ataques2018
    }, {
        xAxis: 2,
        lineColor: 'rgb(200, 190, 140)',
        color: 'rgb(200, 190, 140)',
        fillColor: 'rgb(230, 220, 180)',
        name: "Ataques por armas personales 2019",
        data: ataques2019
    }]
});


}


</script>

<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"on:load={loadGraph}></script>
    <script src="https://code.highcharts.com/highcharts-3d.js"on:load="{loadGraph}"></script>
</svelte:head>

<main>
    
    <div id="container"></div>

    <div>   <Button outline style=" background-color:#6C00AF; color:aliceblue" on:click="{pop}"> Volver</Button></div>

</main>



<style>

#container {
    height: 400px; 
    min-width: 310px; 
    max-width: 800px;
    margin: 0 auto;
}

</style>