
<svelte:head>
    <script src="https://code.highcharts.com/highcharts.src.js" on:load="{loadGraph}"></script>
  
       
</svelte:head>

<script>
    
    
    import {
        onMount
    } from "svelte";
    
    
    let agno= 2019
    let estados=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
"Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
"South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]	
  
    onMount(getData(agno))
    let data = [];
    let array = [];

    async function getData(agno){
        console.log("Fetching data...");
        const res = await fetch("/api/v2/arms-sales-stats?year="+agno);
        if(res.ok){
            console.log("Ok.");
            const json = await res.json();
            data = json;
            console.log(`We have received ${data.length} data points.`);
            for(let i=0;i<data.length;i++){
                let aux= data[i].arms_sold.replace(".","")
                array[i]=parseInt(aux,10)
            }
            
            console.log(array);
        }else{
            console.log("Error!");
        }
    }   
    
    function getVisibilidad( n) {
        
        return n.includes("Alab")||n.includes("Main")||n.includes("Idaho");
    }

  async function loadGraph(){  
    
    //SERIES PARA LOS ESTADOS
    var seriesaux = [],
    len = estados.length,
    i = 0;
   
    for(i;i<len;i++){
        let comienzo=i*12
         let fin=comienzo +12
        let arraytroceada=array.slice(comienzo,fin)
        const arrayoredenada=[]
        //ordenamos la array en funcion de como salen los datos del get
        arrayoredenada[0]=arraytroceada[11]
        arrayoredenada[1]=arraytroceada[7]
        arrayoredenada[2]=arraytroceada[6]
        arrayoredenada[3]=arraytroceada[5]
        arrayoredenada[4]=arraytroceada[4]
        arrayoredenada[5]=arraytroceada[3]
        arrayoredenada[6]=arraytroceada[2]
        arrayoredenada[7]=arraytroceada[1]
        arrayoredenada[8]=arraytroceada[0]
        arrayoredenada[9]=arraytroceada[10]
        arrayoredenada[10]=arraytroceada[9]
        arrayoredenada[11]=arraytroceada[8]
        
        
       seriesaux.push({
        name: estados[i],
        data:   arrayoredenada,
        visible: getVisibilidad(estados[i])
    });

    }

    //SERIES PARA LOS ESTADOS
    Highcharts.chart('container', {
        title: {
            text: 'Venta de armas en '+ agno
        },
        yAxis: {
            title: {
                text: 'Armas vendidas'
            }
        },
        xAxis: {
            accessibility: {
                rangeDescription: 'Month'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 1
            }
        },
        series: seriesaux,
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });
  }


  function gotable() {
    location.href = '#/sales';
}
function gomain() {
    location.href = '#/info';
}

</script>


<main>
    
    <figure class="highcharts-figure">
        <div id="container"></div>
        <p class="highcharts-description">
           
        </p>
    </figure>  
  
</main>