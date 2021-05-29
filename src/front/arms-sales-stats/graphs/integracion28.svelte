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
    
  
    let miseries=[]
    let urlarmas = "/api/v2/arms-sales-stats?state="
        let agno =2020
        let estados=["California", "Texas","Florida","New_York", "Illinois"]
    
    onMount(inicio)
    
    async function inicio(){

        await getData()
        loadGraph()
        miseries=[] 
    }
           
    
    async function  getData(){

        const res = await fetch("/videogames?country=EEUU"); 
		let data=[]
        if (res.ok) {
			console.log("Ok");
            let resvg=[]
            resvg = await res.json();
            
            let i
            for(i=0;i<resvg.length;i++){

                data.push({
                    name: resvg[i].game,
                    value: resvg[i]["sold-unit"]/1000000
                })

                  
            }
           
		} else {
			console.log("Error al cargar API externa");
        }

            miseries.push({
                name: 'Videojuegos Vendidos en EEUU',
                data: data
            })


        //LO MIO   
        let j;
        let armas=[]
       for(j=0;j<estados.length;j++){

        let megajson=[]
            const res2 = await fetch(urlarmas+estados[j]+"&year="+agno); 
            if (res2.ok) {
                console.log("Ok");
                megajson= await res2.json();
                let suma=0
                let i;
                for(i=0;i<megajson.length;i++){
                    let numero = parseInt(megajson[i].arms_sold.replace(".",""),10) 
                       suma=suma+numero
                    //megajson[i]
                }
               
                armas.push({
                    name: estados[j],
                    value:suma/1000000
                })
            } else {
                
            }

       }
       
       miseries.push({
                name: 'Armas vendidas en los 5 estados mas habitados en '+agno,
                data: armas
            })

       

        
    }
    
    async function loadGraph(){
    
        Highcharts.chart('container', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: 'Videojuegos vendidos en EEUU y armas vendidas en sus 5 Estados mas poblados en 2020'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value} Millones de Unidades vendidas'
    },
    plotOptions: {
        packedbubble: {
            minSize: '20%',
            maxSize: '100%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: miseries
});

      
    }
    
    
    </script>
    <main>
      
        <figure class="highcharts-figure">
            <div id="container"></div>
            <p class="highcharts-description">
                
            </p>
        </figure>
        
        <Button color="secondary" on:click={pop}>Volver</Button>
        <Button color="secondary" on:click={inicio}>Recarga</Button>
    </main>
    <svelte:head>
       
        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/highcharts-more.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>
    
    </svelte:head>
    <style>
      
    </style>