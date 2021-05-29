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
  
 let intAux = 0;//total de muertos por armas en 2015
 let totalPersonasRiesgo = 0; //total de personas en riesgo en 2015
 let data = [];
 let data2 = [];
 let data3 = [];
 let paisesPobreza = []; //tendre x paises que tendrán los x datos de personas en riesgos para 2015
 let peopleRisk = []; //x datos de los x paises de personas en riesgos en 2015

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
      if(res1.ok){//cojo todos los países
        const json = await res1.json();
        data = json;
        for(let i=0;i<data.length;i++){
          paisesPobreza.push(data[i].country);
        }
      }


      for(let k=0; k<paisesPobreza.length; k++) {//luego por cada país, busco su dato correspondiente al nombre del país y el año 2015

        const res2 = await fetch("/poverty-risks/" + paisesPobreza[k] + "/2015");
        if(res2.status == 200){
          const json = await res2.json();
          data2= json;
          peopleRisk.push(data2.people_in_risk_of_poverty);
          totalPersonasRiesgo = totalPersonasRiesgo + parseInt(data2.people_in_risk_of_poverty, 10);
        
       }else{
         paisesPobreza.splice(k,1);
         console.log("Accediendo a un país que no cuenta con datos para el año 2015");
       }
      }


      const res3 = await fetch("/api/v2/homicides-by-firearms?year=2015");
      if(res3.ok){//cojo el total de homicidios en USA en 2015
        const json = await res3.json();
        data3 = json;
        for(let r=0;r<data3.length;r++){
          intAux = intAux + parseInt(data3[r].homicide_by_firearm, 10);
        }
      }
      
    let uniquePaises = paisesPobreza.filter((c, index) => {
      return paisesPobreza.indexOf(c) === index;
    });
    let uniquePeople = peopleRisk.filter((c, index) => {
      return peopleRisk.indexOf(c) === index;
    });

      //console.log(intAux);
      //console.log(uniquePaises);
      //console.log(uniquePeople);

          
  }


//Lo unico que puedo relacionar aqui son los riesgos de pobreza en 2015 en los paises esos que pone el endpoint, 
//con el numero de homicidios totales en 2015 en USA.

 


  async function loadGraph() {
   
    var options = {
          series: [
          {
            data: [
              {
                x: "Personas en riesgo de pobreza en " + paisesPobreza[0],
                y: peopleRisk[0],
              },
              {
                x: "Personas en riesgo de pobreza en " + paisesPobreza[1],
                y: peopleRisk[1],
              },
              {
                x:"Personas en riesgo de pobreza en " +  paisesPobreza[2],
                y: peopleRisk[2]
              },
              {
                x: "Personas en riesgo de pobreza en " + paisesPobreza[3],
                y: peopleRisk[3],
              },
              {
                x: "Personas en riesgo de pobreza en " + paisesPobreza[4],
                y: peopleRisk[4]
              },
              {
                x: 'Muertos por armas de fuego en 2015 en USA',
                y: intAux
              },
              {
                x: "Personas en riesgo de pobreza en " + paisesPobreza[5],
                y: peopleRisk[5]
              },
            ]
          }
        ],
          legend: {
          show: false
        },
        chart: {
          height: 350,
          type: 'treemap'
        },
        title: {
          text: 'Mapa distribuido que representa las personas en riesgo de pobreza en algunos de los países más importantes, frente a muertos por armas de fuego en USA en el mismo año (2015)',
          align: 'center'
        },
        colors: [
          '#3B93A5',
          '#F7B844',
          '#ADD8C7',
          '#EC3C65',
          '#CDD7B6',
          '#C1F666',
          '#D43F97',
          '#1E5D8C',
          '#421243',
          '#7F94B0',
          '#EF6537',
          '#C0ADDB'
        ],
        plotOptions: {
          treemap: {
            distributed: true,
            enableShades: false
          }
        }
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