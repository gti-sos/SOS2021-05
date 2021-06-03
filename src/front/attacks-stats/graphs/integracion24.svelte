<script>
  import {pop} from "svelte-spa-router";
  import Button from "sveltestrap/src/Button.svelte";

  let data = [];
  let data2 = [];
  let totalInfectadosSpain = [];
  let totalAtaquesAlabama = [];

async function loadGraph(){

  console.log("Fetching data...");
        const res = await fetch
            ("https://sos2021-24.herokuapp.com/api/v2/children-with-hiv");

        if(res.ok){
          console.log("Ok.");
          const json = await res.json();
          data = json;
          console.log(data);
          for(let i=0;i<data.length;i++){
            if(data[i].country == "Spain" && data[i].year == "2016"){
              totalInfectadosSpain.push(data[i].total_infected);
            }
            if(data[i].country == "Spain" && data[i].year == "2017"){
              totalInfectadosSpain.push(data[i].total_infected);
            }
            if(data[i].country == "Spain" && data[i].year == "2018"){
              totalInfectadosSpain.push(data[i].total_infected);
            }
           
          }
          console.log(totalInfectadosSpain);
        }else{
          console.log("Error!");
        }

        const res2 = await fetch("/api/v2/attacks-stats");
        if(res2.ok){
          console.log("Ok.");
          const json = await res2.json();
          data2 = json;
          console.log(data2);
          for(let i=0;i<10;i++){
            if(data2[i].year == "2016"){
              totalAtaquesAlabama.push(Number.parseInt(data2[i].type_of_attack_personal_weapons));
            }
            if(data2[i].year == "2017"){
              totalAtaquesAlabama.push(Number.parseInt(data2[i].type_of_attack_personal_weapons));
            }
            if(data2[i].year == "2018"){
              totalAtaquesAlabama.push(Number.parseInt(data2[i].type_of_attack_personal_weapons));
            }
          }
          console.log(totalAtaquesAlabama);
        }else{
          console.log("Error!");
        }







  Highcharts.chart('container', {
    
    chart: {
      type: 'column'
    },

    title: {
      text: 'Comparación entre Infectados de VIH y Ataques por armas personales'
    },
    
    subtitle: {
      text: 'España/Alabama'
    },
    
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
    },
    
    xAxis: {
      categories: ['2016', '2017', '2018'],
      labels: {
        x: -10
      }
    },
    
    yAxis: {
      allowDecimals: false,
      title: {
        text: 'Cantidades'
      }
    },
    
    series: [{
      name: 'Infectados de VIH',
      data: totalInfectadosSpain
    }, {
      name: 'Ataques por armas personales',
      data: totalAtaquesAlabama
    }],
    
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal'
          },
          yAxis: {
            labels: {
              align: 'left',
              x: 0,
                    y: -5
                  },
                  title: {
                    text: null
                  }
                },
                subtitle: {
                  text: null
                },
                credits: {
                enabled: false
              }
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

#button-bar {
    min-width: 310px;
    max-width: 800px;
    margin: 0 auto;
}


</style>