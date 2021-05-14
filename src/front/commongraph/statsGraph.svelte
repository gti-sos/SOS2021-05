<script>
    import {
        onMount
    } from "svelte";
 
    let data = [];
    let array = [];
    const BASE_API_URL = "/api/v2/arms-sales-stats"; //tiene que llamar a la API para tratar los datos
    async function getData(){
        console.log("Fetching data...");
        const res = await fetch(BASE_API_URL+"?state=Alabama&year=2020");
        if(res.ok){
            console.log("Ok.");
            const json = await res.json();
            data = json;
            for(let i=0;i<data.length;i++){
                array[i]=data[i].arms_sold.replace(".","").replace("\"","")
            }
            console.log(array);
            console.log(`We have received ${data.length} data points.`);
        }else{
            console.log("Error!");
        }
    }   
    
    onMount(getData);
  async function loadGraph(){  
    Highcharts.chart('container', {
        title: {
            text: 'Alabama'
        },
        yAxis: {
            title: {
                text: 'Armas Vendidas'
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
        series: [{
            name: 'Line',

            data: [1,1,2,2,3,3,3]
        }],
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
</script>


<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js" on:load="{loadGraph}"></script>
</svelte:head>

<main>
    <figure class="highcharts-figure">
        <div id="container"></div>
        <p class="highcharts-description">
            Basic line chart showing trends in a dataset. This chart includes the
            <code>series-label</code> module, which adds a label to each line for
            enhanced readability.
        </p>
    </figure>  
</main>