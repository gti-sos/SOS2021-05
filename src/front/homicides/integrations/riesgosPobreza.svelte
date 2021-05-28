<script>
  import {pop} from "svelte-spa-router";
  import Button from "sveltestrap/src/Button.svelte";
import {
      onMount
  } from "svelte";

  var myHeaders = new Headers();
       


  var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
};
  

 let data = [];
 let agnosPobreza = [];
 let paisesPobreza = [];

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
      const res1 = await fetch("/poverty-risks");
      if(res1.ok){
        console.log(res1);
        const json = await res1.json();
        data = json;
        console.log(data);
        for(let i=0;i<data.length;i++){
          //console.log(data[i].year);
          paisesPobreza.push(data[i].country);
        }
      }
      console.log(paisesPobreza);
          
  }




  async function loadGraph() {
    var options = {
          series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
          chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
      
  }

</script>


<svelte:head>

  <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>


</svelte:head>


<main>
  <div id="chart">
  </div>

  <p></p>
	<Button outline color="secondary" on:click="{pop}"> Volver</Button>
	<p></p>

</main>

<style>








</style>