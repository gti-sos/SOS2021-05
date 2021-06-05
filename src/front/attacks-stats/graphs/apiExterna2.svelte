<script>
    import {pop} from "svelte-spa-router";
    import Button from "sveltestrap/src/Button.svelte";

    import {
        onMount
    } from "svelte";
	
    let data = [];
    let dataResponse = [];
    let jugYpun = [];
    let puntosPorJugador = [];

    onMount(inicio)
    
    async function inicio(){
       
        await cargarDatos();
 
        await loadGraph();
        
    }
    
    async function cargarDatos(){

        console.log("Fetching data...");
            const res = await fetch
                ("https://tennis-live-data.p.rapidapi.com/rankings/ATP",
                    {
                        method: "GET",
                        headers: {
                            "x-rapidapi-key": "d844b2e36dmshafab9f06def7c79p1eededjsn479dd1ab14d9",
                            "x-rapidapi-host": "tennis-live-data.p.rapidapi.com"
                        }
                    });

            if(res.ok){
                console.log("Ok.");
                const json = await res.json();
                data = json;
                console.log(data);
                dataResponse = data.results.rankings;
                console.log(dataResponse.length); // 250 TENISTAS
                for(let i=0;i<10;i++){
                    jugYpun.push(dataResponse[i].full_name);
                    jugYpun.push(dataResponse[i].ranking_points)
                    puntosPorJugador.push(jugYpun);
                    jugYpun=[];
                    
                }
                puntosPorJugador.reverse();
                console.log(puntosPorJugador);
                
            }else{
                console.log("ERROR!");
            }

    }
 

    async function loadGraph(){
        
        Highcharts.chart('container', {
        chart: {
            type: 'pyramid3d',
            options3d: {
                enabled: true,
                alpha: 10,
                depth: 50,
                viewDistance: 50
            }
        },
        title: {
            text: 'Ranking de los 10 mejores tenistas del mundo'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    allowOverlap: true,
                    x: 10,
                    y: -5
                },
                width: '60%',
                height: '80%',
                center: ['50%', '45%']
            }
        },
        series: [{
            name: 'Unique users',
            data: puntosPorJugador

        }]
        });

    }           

</script>

<svelte:head>
    
</svelte:head>

<main>

    <script src="https://code.highcharts.com/highcharts.js" on:load={loadGraph}></script>
    <script src="https://code.highcharts.com/highcharts-3d.js"></script>
    <script src="https://code.highcharts.com/modules/cylinder.js"></script>
    <script src="https://code.highcharts.com/modules/funnel3d.js"></script>
    <script src="https://code.highcharts.com/modules/pyramid3d.js"></script>
    

    <div>   <Button outline style=" background-color:#6C00AF; color:aliceblue" on:click="{pop}"> Volver</Button></div> 

</main>


<style>



</style>