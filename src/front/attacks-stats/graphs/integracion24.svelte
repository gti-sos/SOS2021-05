<script>
  import {pop} from "svelte-spa-router";
  import Button from "sveltestrap/src/Button.svelte";
  import {
        onMount
    } from "svelte";

  let data = [];
  let data2 = [];
  let infectadosAcum2011 = 0;
  let infectadosAcum2012 = 0;
  let infectadosAcum2013 = 0;
  let infectadosAcum2014 = 0;
  let infectadosAcum2015 = 0;
  let infectadosAcum2016 = 0;
  let infectadosAcum2017 = 0;
  let infectadosAcum2018 = 0;

  let totalInfectados = [];

  let viviendoVIHAcum2011 = 0;
  let viviendoVIHAcum2012 = 0;
  let viviendoVIHAcum2013 = 0;
  let viviendoVIHAcum2014 = 0;
  let viviendoVIHAcum2015 = 0;
  let viviendoVIHAcum2016 = 0;
  let viviendoVIHAcum2017 = 0;
  let viviendoVIHAcum2018 = 0;

  let totalViviendoVIH = [];

  let ataquesAcum2011 = 0;
  let ataquesAcum2012 = 0;
  let ataquesAcum2013 = 0;
  let ataquesAcum2014 = 0;
  let ataquesAcum2015 = 0;
  let ataquesAcum2016 = 0;
  let ataquesAcum2017 = 0;
  let ataquesAcum2018 = 0;

  let totalAtaques = [];

  onMount(inicio)
    async function inicio(){
        await cargarDatos();
        await loadGraph();
        
    }

  async function cargarDatos(){

    console.log("Fetching data...");
        const res = await fetch
            ("https://sos2021-24.herokuapp.com/api/v2/children-with-hiv");

        if(res.ok){
          console.log("Ok.");
          const json = await res.json();
          data = json;
          console.log(data);
          for(let i=0;i<data.length;i++){
            if(data[i].year == 2011){
              infectadosAcum2011 = infectadosAcum2011 + data[i].total_infected; 
              viviendoVIHAcum2011 = viviendoVIHAcum2011 + data[i].living_with;
            }
            if(data[i].year == 2012){
              infectadosAcum2012 = infectadosAcum2012 + data[i].total_infected;
              viviendoVIHAcum2012 = viviendoVIHAcum2012 + data[i].living_with; 
            }
            if(data[i].year == 2013){
              infectadosAcum2013 = infectadosAcum2013 + data[i].total_infected;
              viviendoVIHAcum2013 = viviendoVIHAcum2013 + data[i].living_with; 
            }
            if(data[i].year == 2014){
              infectadosAcum2014 = infectadosAcum2014 + data[i].total_infected;
              viviendoVIHAcum2014 = viviendoVIHAcum2014 + data[i].living_with; 
            }
            if(data[i].year == 2015){
              infectadosAcum2015 = infectadosAcum2015 + data[i].total_infected;
              viviendoVIHAcum2015 = viviendoVIHAcum2015 + data[i].living_with; 
            }
            if(data[i].year == 2016){
              infectadosAcum2016 = infectadosAcum2016 + data[i].total_infected; 
              viviendoVIHAcum2016 = viviendoVIHAcum2016 + data[i].living_with;
            }
            if(data[i].year == 2017){
              infectadosAcum2017 = infectadosAcum2017 + data[i].total_infected; 
              viviendoVIHAcum2017 = viviendoVIHAcum2017 + data[i].living_with;
            }
            if(data[i].year == 2018){
              infectadosAcum2018 = infectadosAcum2018 + data[i].total_infected;
              viviendoVIHAcum2018 = viviendoVIHAcum2018 + data[i].living_with; 
            }

           
          }
          totalInfectados.push(infectadosAcum2011);
          totalInfectados.push(infectadosAcum2012);
          totalInfectados.push(infectadosAcum2013);
          totalInfectados.push(infectadosAcum2014);
          totalInfectados.push(infectadosAcum2015);
          totalInfectados.push(infectadosAcum2016);
          totalInfectados.push(infectadosAcum2017);
          totalInfectados.push(infectadosAcum2018);

          totalViviendoVIH.push(viviendoVIHAcum2011);
          totalViviendoVIH.push(viviendoVIHAcum2012);
          totalViviendoVIH.push(viviendoVIHAcum2013);
          totalViviendoVIH.push(viviendoVIHAcum2014);
          totalViviendoVIH.push(viviendoVIHAcum2015);
          totalViviendoVIH.push(viviendoVIHAcum2016);
          totalViviendoVIH.push(viviendoVIHAcum2017);
          totalViviendoVIH.push(viviendoVIHAcum2018);
          
        }else{
          console.log("Error!");
        }

        const res2 = await fetch("/api/v2/attacks-stats");
        if(res2.ok){
          console.log("Ok.");
          const json = await res2.json();
          data2 = json;
          console.log(data2);
          for(let i=0;i<data.length;i++){
            if(data2[i].year == "2011"){
              ataquesAcum2011 = ataquesAcum2011 + Number.parseInt(data2[i].type_of_attack_personal_weapons);
            }
            if(data2[i].year == "2012"){
              ataquesAcum2012 = ataquesAcum2012 + Number.parseInt(data2[i].type_of_attack_personal_weapons);
            }
            if(data2[i].year == "2013"){
              ataquesAcum2013 = ataquesAcum2013 + Number.parseInt(data2[i].type_of_attack_personal_weapons);
            }
            if(data2[i].year == "2014"){
              ataquesAcum2014 = ataquesAcum2014 + Number.parseInt(data2[i].type_of_attack_personal_weapons);
            }
            if(data2[i].year == "2015"){
              ataquesAcum2015 = ataquesAcum2015 + Number.parseInt(data2[i].type_of_attack_personal_weapons);
            }
            if(data2[i].year == "2016"){
              ataquesAcum2016 = ataquesAcum2016 + Number.parseInt(data2[i].type_of_attack_personal_weapons);
            }
            if(data2[i].year == "2017"){
              ataquesAcum2017 = ataquesAcum2017 + Number.parseInt(data2[i].type_of_attack_personal_weapons);
            }
            if(data2[i].year == "2018"){
              ataquesAcum2018 = ataquesAcum2018 + Number.parseInt(data2[i].type_of_attack_personal_weapons);
            }    
          }
          totalAtaques.push(ataquesAcum2011);
          totalAtaques.push(ataquesAcum2012);
          totalAtaques.push(ataquesAcum2013);
          totalAtaques.push(ataquesAcum2014);
          totalAtaques.push(ataquesAcum2015);
          totalAtaques.push(ataquesAcum2016);
          totalAtaques.push(ataquesAcum2017);
          totalAtaques.push(ataquesAcum2018);

        }else{
          console.log("Error!");
        }

  }

async function loadGraph(){

  Highcharts.chart('container', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Ataques vs Infectados con VIH vs Viviendo con VIH',
        align: 'center'
    },
    xAxis: [{
        categories: ['2011', '2012', '2013', '2014', '2015', '2016',
            '2017', '2018'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        title: {
            text: 'Viviendo con VIH',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        opposite: true

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Ataques por armas personales',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        }

    }, { // Tertiary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Infectados por VIH',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 0,
        verticalAlign: 'top',
        y: -20,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Ataques',
        type: 'column',
        yAxis: 1,
        data: totalAtaques,
        tooltip: {
            valueSuffix: ''
        }

    }, {
        name: 'Infectados',
        type: 'spline',
        yAxis: 2,
        data: totalInfectados,
        marker: {
            enabled: false
        },
        dashStyle: 'shortdot',
        tooltip: {
            valueSuffix: ''
        }

    }, {
        name: 'Viviendo con VIH',
        type: 'spline',
        data: totalViviendoVIH,
        tooltip: {
            valueSuffix: ''
        }
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    floating: false,
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    x: 0,
                    y: 0
                },
                yAxis: [{
                    labels: {
                        align: 'right',
                        x: 0,
                        y: -6
                    },
                    showLastLabel: false
                }, {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -6
                    },
                    showLastLabel: false
                }, {
                    visible: false
                }]
            }
        }]
    }
});

}


  
      
    </script>
    
<main>

  <script src="https://code.highcharts.com/highcharts.js" on:load="{loadGraph}"></script>
  <div>   <Button outline style=" background-color:#6C00AF; color:aliceblue" on:click="{pop}"> Volver</Button></div> 

<figure class="highcharts-figure">
    <div id="container"></div>
    <p class="highcharts-description">
        
    </p>
</figure>


</main>


<style>

#container {
    height: 400px; 
}

.highcharts-figure, .highcharts-data-table table {
    min-width: 310px; 
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