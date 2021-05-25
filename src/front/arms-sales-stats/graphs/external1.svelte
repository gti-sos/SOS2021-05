<script>
	import {pop} from "svelte-spa-router";
    import Button from "sveltestrap/src/Button.svelte";
	import {
        onMount
    } from "svelte";
    
	
        let Inglaterra = [];
        let EEUU = [];
		let Espana =[];
		let Calcio =[];
		let InglaterraGraph = [];
		let EspanaGraph = [];
		let EEUUGraph = [];
		let CalcioGraph = [];
		let datosJuntos =[];

        const url = "https://api.soccersapi.com/v2.2/teams/?user=manu261998&token=a9f536a1942307ef15395e4a89922ee1&t=list&country_id=124";
        const url2 = "https://api.soccersapi.com/v2.2/teams/?user=manu261998&token=a9f536a1942307ef15395e4a89922ee1&t=list&country_id=3";
		const url3 = "https://api.soccersapi.com/v2.2/teams/?user=manu261998&token=a9f536a1942307ef15395e4a89922ee1&t=list&country_id=5";
		const url4 = "https://api.soccersapi.com/v2.2/teams/?user=manu261998&token=a9f536a1942307ef15395e4a89922ee1&t=list&country_id=6";
             
		onMount(inicio)
async function inicio(){
   
	await getData()
    delay(2000);
   recarga()
   
}
const recarga=()=>{

    loadGraph()
   
}
const delay = ms => new Promise(res => setTimeout(res, ms));



	async function  getData(){
		
        const res = await fetch(url); 
		if (res.ok) {
			console.log("Ok");
            EEUU = await res.json();
            
		} else {
			console.log("Error al cargar API externa");
        }

        const res2 = await fetch(url2); 
		if (res2.ok) {
			console.log("Ok");
            Inglaterra = await res2.json();
            
		} else {
			console.log("Error al cargar API externa");
        }
		const res3 = await fetch(url3); 
		if (res3.ok) {
			console.log("Ok");
            Espana = await res3.json();
            
		} else {
			console.log("Error al cargar API externa");
        }
		const res4 = await fetch(url4); 
		if (res4.ok) {
			console.log("Ok");
            Calcio= await res4.json();
            
		} else {
			console.log("Error al cargar API externa");
        }

       
        
  
    let i = 0;
	
    
    for(i;i<20;i++){
        
       InglaterraGraph.push({
        name:Inglaterra.data[i].name,
        value:  10,
        
    	});

		EEUUGraph.push({

		name: EEUU.data[i].name,
		value:  10,

		});

		EspanaGraph.push({

		name: Espana.data[i].name,
		value:  10,

		});

		CalcioGraph.push({

		name: Calcio.data[i].name,
		value:  10,

		});
    }
	
	

	
   
		

    
	
	
	
		datosJuntos = 
        [
            {
                name: "Inglaterra",
                data: InglaterraGraph
            },
            {
                name: "Estados Unidos",
                data: EEUUGraph
            },
			{
                name: "España",
                data: EspanaGraph
            },
			{
                name: "Italia",
                data: CalcioGraph
            }
        ];

		console.log(datosJuntos)
}



async function loadGraph(){
 
	Highcharts.chart('container', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: 'Equipos de futbol en el mundo'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}</b> '
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
    series: datosJuntos  
});
	
}
</script>

<svelte:head>
    <script src="http://code.highcharts.com/highcharts.js" ></script>
	<script src="https://code.highcharts.com/highcharts-more.js"></script>>


    
</svelte:head>
<main>
	<figure class="highcharts-figure">
		<div id="container"></div>
	</figure>
	

	<p></p>
	<Button outline color="secondary" on:click="{pop}"> Volver</Button>
	<p></p>

</main>

<style>
	main {
		text-align: center;
	}
  
</style>