<script>
    import {
        Nav,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
        NavItem,
        NavLink,
        Button,
        Table,
        UncontrolledAlert,
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardSubtitle,
        CardText,
        CardTitle,
    } from "sveltestrap";
    import {pop} from "svelte-spa-router";
  import {
        onMount
    } from "svelte";
  
    var myHeaders = new Headers();
          myHeaders.append("x-rapidapi-key", "0433185753mshd6661ebf6e8f7f3p1f140ajsnb7b0ae10f983");
          myHeaders.append("x-rapidapi-host", "coinranking1.p.rapidapi.com");
          myHeaders.append("useQueryString", true);
  
  
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
  };
    
   
    let data = [];

    let coins2 = [];
    let prices = [];
    let activos = [];

  
 onMount(inicio)
  
  
  
  
  async function inicio(){
        
        await getData()
        delay(29);
        loadGraph();
        
  }
 
  
  
  

    async function getData(){
        console.log()
        console.log("Fetching data...");
        const res = await fetch("https://coinranking1.p.rapidapi.com/coins", requestOptions);

        if(res.ok){
            console.log("Ok.");
            const json = await res.json();
            data = json;
           // console.log(data.coins);
            for(let i=0;i<10;i++){ //solo las diez monedas mas importantes
                coins2.push(data.data.coins[i].name);
                prices.push(data.data.coins[i].price);  
                activos.push(data.data.coins[i].volume);   
 
            }
        
           

        }else{
            console.log("ERROR!");
        }
            
    }
  
  
  
  //highcharts treemap
    async function loadGraph() {
       
        var options = {
          series: [{
          data: activos,
        }],
          chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function(chart, w, e) {
            }
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: coins2,
          labels: {
            style: {
              fontSize: '12px'
            }
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
      
    }

    
    let b=false;
const busqueda=()=>{
    b=!b;
}
async function buscar(){
    b=!b;
   
   await getData(player)
   await delay(500);
   await loadGraph();
   
  
   
}


 
const delay = ms => new Promise(res => setTimeout(res, ms));

  
  </script>
  
  
  <svelte:head>
  
  
  </svelte:head>
  
  
  <main>
    
        
    
    <div id = "chart"></div>
    <p>Gráfica que muestra el volumen (medida de la cantidad de criptomoneda que se negoció en las últimas 24 horas) de las 10 
        principales criptomonedas</p>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    
    <p></p>
            <Button outline color="secondary" on:click="{pop}"> Volver</Button>
    <p></p>
  </main>
  
  <style>

 

  
  
  </style>