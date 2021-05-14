
<svelte:head>
    <script src="https://code.highcharts.com/highcharts.src.js" on:load="{loadGraph}"></script>
       
</svelte:head>

<script>
    import {
        onMount
    } from "svelte";
 
    let data = [];
    let array = [];
    async function getData(){
        console.log("Fetching data...");
        const res = await fetch("/api/v2/arms-sales-stats?state=Alabama&year=2020");
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
    onMount(getData)
  async function loadGraph(){  
    Highcharts.chart('container', {
        title: {
            text: 'My data'
        },
        yAxis: {
            title: {
                text: 'Quantity'
            }
        },
        xAxis: {
            accessibility: {
                rangeDescription: 'Year'
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
            name: 'Installation',
            data: array
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