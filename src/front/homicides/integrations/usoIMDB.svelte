<script>
  import {pop} from "svelte-spa-router";
  import ApexCharts from 'apexcharts';
  import { chart } from "svelte-apexcharts";
   

  import Button from "sveltestrap/src/Button.svelte";
import {
      onMount
  } from "svelte";

  var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", "6ae08866a6msh5aba25d590f3b67p100c5ejsnc933aa2b9bcb");
        myHeaders.append("x-rapidapi-host", "imdb8.p.rapidapi.com");


  var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
};
  

  let data = [];
  let ratings = [];
  let titlesId = [];
  let titles = [];

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
      const res = await fetch("https://imdb8.p.rapidapi.com/title/get-top-rated-tv-shows", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      const res1 = await fetch("https://imdb8.p.rapidapi.com/title/get-top-rated-tv-shows", requestOptions);
      if(res1.ok){
          console.log("Ok.");
          const json = await res1.json();
          data = json;
          for(let i=0;i<10;i++){
            try {
              ratings.push(data[i].chartRating);
              titlesId.push(data[i].id);
            }
            catch(error) {
              console.log("ERROR: " , error);
            }

    
          }

          for(let j=0; j<titlesId.length; j++) {
            titlesId[j] = titlesId[j].replace("/title/" , "").replace("/","");
            const res2 = await fetch("https://imdb8.p.rapidapi.com/title/get-ratings?tconst=" + titlesId[j], requestOptions);
            console.log(res2);
            if(res2.ok) {
              const json = await res2.json();
              data = json;
              
              //console.log(data.title);
              titles.push(data.title);
            }
          }
         
      }else{
          console.log("ERROR!");
      }
          
  }




  async function loadGraph() {
        Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Los 10 shows mejor puntuados en IMDB'
        },
        subtitle: {
        },
        xAxis: {
            categories: titles,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Puntuación',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' score'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '',
            data: ratings,
        }]
    });
  }


</script>


<svelte:head>

  <script src="https://cdn.jsdelivr.net/npm/apexcharts" on:load="{loadGraph}"></script>


</svelte:head>


<main>

  <script src="https://code.highcharts.com/highcharts.js"></script>
  <script src="https://code.highcharts.com/modules/exporting.js"></script>
  <script src="https://code.highcharts.com/modules/export-data.js"></script>
  <script src="https://code.highcharts.com/modules/accessibility.js"></script>
  
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



</style>