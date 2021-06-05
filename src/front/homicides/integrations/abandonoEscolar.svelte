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
  
  
    onMount(inicio)
  
  let data = [];
  let paises = []; //paises disponibles en los datos de la API externa
  let agnos = []; //años disponibles en los datos de la API externa
  let abandonos = []; //abandonos totales en los años que haya
  let homicides = []; //array con tantos datos como paises haya en la api externa, cada dato representando las muertes en ese año
  let uniqueAgnos = [];

  
  async function inicio(){
   
  await getData()
  delay(29);
  loadGraph();
   
  }
 
  const delay = ms => new Promise(res => setTimeout(res, ms));

  
  //la api externa nos da datos de abandono escolar en distintos países en distintos años
  //Podría pillar el total de abandono escolar en los años x y z y el total de homicidios por armas de fuego en los
  //años x y z, easy money baby
  
  
    async function getData(){

        const res1 = await fetch("http://sos2021-24.herokuapp.com/api/v2/children-out-school"); //poner aqui la proxy
        //Para la api externa
        if(res1.ok) {
            const json = await res1.json();
            data = json;
            for(let i=0;i<data.length;i++){
                //paises.push(data[i].country);
                agnos.push(data[i].year);
            }
        }


        /*let uniquePaises = paises.filter((c, index) => {//esto es para quitar duplicados de la lista de países
            return paises.indexOf(c) === index;
         });*/
        uniqueAgnos = agnos.filter((c, index) => {//esto es para quitar duplicados de la lista de años
        return agnos.indexOf(c) === index;
        });
        uniqueAgnos.sort(); //ordenamos los años
        //variables auxiliares que mas tarde se igualan a las globales
        let abandonosAux = new Array(uniqueAgnos.length).fill(0);; //esto tendrá tantos datos como año, un dato de abandono por año
        let homicidesAux = new Array (uniqueAgnos.length).fill(0);
        //le metemos 0

        //busco los datos para los años en concreto y los voy acumulando, acumulo tanto los abandonos como homicidios

        for(let p=0; p<uniqueAgnos.length; p++) {
          const res2 = await fetch("http://sos2021-24.herokuapp.com/api/v2/children-out-school?year=" + uniqueAgnos[p]); 
          const res3 = await fetch("/api/v2/homicides-by-firearms?year=" + uniqueAgnos[p]); 

          if(res2.ok) {
              const json = await res2.json();
              data = json;
              abandonosAux[p] = 0;
              for(let i=0;i<data.length;i++){//meto todos los resultados del año x en su abandono para ese año x
                  let suma = abandonosAux[p] + parseInt(data[i].children_out_school_total, 10);
                  abandonosAux.splice(p, 1, suma);//elimina 1 elemento y mete otro nuevo, que no es más que lo que había mas lo nuevo
                  //antes tenia el 0, y claro, eso no eliminaba el elemento "desactualizado", por eso se acumulaban hasta 24
              }
          }
          if(res3.ok) {
              const json = await res3.json();
              data = json;
              homicidesAux[p] = 0;
              for(let i=0;i<data.length;i++){//meto todos los resultados del año x en su abandono para ese año x
                  let suma = homicidesAux[p] + parseInt(data[i].homicide_by_firearm, 10);
                  homicidesAux.splice(p, 1, suma);//elimina 1 elemento y mete otro nuevo, que no es más que lo que había mas lo nuevo
              }
          }
          
        }
        console.log(uniqueAgnos);
        console.log(abandonosAux);
        console.log(homicidesAux);
        homicides = homicidesAux;
        abandonos = abandonosAux;
        agnos = uniqueAgnos;

    }
  
  
  
  
   
  
    //apex area
    async function loadGraph() {
       
        var options = {
        chart: {
          height: 280,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        series: [
          {
            name: "Abandonos Escolares",
            data: abandonos,
          },
          {
            name: "Muertos por armas de fuego",
            data: homicides,
          }
        ],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
          }
        },
        xaxis: {
          categories: agnos,
        }
      }

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
    
    <p id="txtG">El gráfico nos muestra una representación del total de abandonos escolares (tomando los principales países), en comparación
      con el número de muertos por armas de fuego en Estados Unidos en los mismos años
    </p>
  
    <p></p>
      <Button outline color="secondary" on:click="{pop}"> Volver</Button>
      <p></p>
  
  </main>
  





  <style>
  
 
  
  
  </style>