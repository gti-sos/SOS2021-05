<script>
  import {pop} from "svelte-spa-router";
  import Button from "sveltestrap/src/Button.svelte";
import {
      onMount
  } from "svelte";

  var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", "a282db27a6mshcd8db7cc3c89e60p11aee7jsn6069240f3501");
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
  let totalRates = [];

  onMount(inicio)




async function inicio(){
 
    await getData()
    delay(25);
    recarga()
 
}
const recarga=()=>{

  loadGraph()
 
}
const delay = ms => new Promise(res => setTimeout(res, ms));




  async function getData(){
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
            if(res2.ok) {
              const json = await res2.json();
              data = json;
              titles.push(data.title);
              totalRates.push(data.ratingCount);

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
      text: 'Top 10 shows con mejor puntuación en IMDB'
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
          text: 'Número de veces puntuado',
          align: 'high'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
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
      name: 'Rating',
      data: ratings,
  }, {
      name: 'Rating Count',
      data: totalRates,
  }]
  });
  }

</script>


<svelte:head>



</svelte:head>


<main>

  <script src="https://code.highcharts.com/highcharts.js"></script>
  <script src="https://code.highcharts.com/modules/exporting.js"></script>
  <script src="https://code.highcharts.com/modules/export-data.js"></script>
  <script src="https://code.highcharts.com/modules/accessibility.js"></script>
  
  <figure class="highcharts-figure">
      <div id="container"></div>
      <p class="highcharts-description">
          Gráfica que nos muestra los 10 shows (películas y series) mejor puntuadas en IMDB, así como el 
          número total de veces que se ha puntuado cada uno.
      </p>
  </figure>

  <p></p>
	<Button outline color="secondary" on:click="{pop}"> Volver</Button>
	<p></p>

</main>

<style>



#container {
    height: 400px;
}




</style>