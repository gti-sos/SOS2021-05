<script>
    import {pop} from "svelte-spa-router";
    import Button from "sveltestrap/src/Button.svelte";
	
    let data = [];
    let dataResponse = [];
    let jugYpun = [];
    let puntosPorJugador = [];

async function loadGraph(){
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
                console.log(puntosPorJugador);
            }
            
            
        }else{
            console.log("ERROR!");
        }
        

        Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Ranking de los 10 mejores tenistas del mundo'
    },
    subtitle: {
        text: 'Información mundial del tenis: <a href="https://es.wikipedia.org/wiki/Asociaci%C3%B3n_de_Tenistas_Profesionales">Wikipedia</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Puntuación'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Actualmente: <b>{point.y:.0f} points</b>'
    },
    series: [{
        name: 'Population',
        data: puntosPorJugador,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.0f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});

}

</script>

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