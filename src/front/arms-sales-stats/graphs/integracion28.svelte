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
    let general=[]
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
       

       function getZ(x){
            if (x>5 && x<=10) {
               return 75
            }else if(x>10){
                
                return 100
                
            }else{
                return 50
            }
       }

    let i
    for(i=0;i<armas.length;i++){

        general.push(

            {
             name: "Armas vendidas en: "+armas[i].name,
              y: armas[i].value,
             z: getZ(armas[i].value)
            }

        )
    }
    for(i=0;i<data.length;i++){

        general.push(

    {
     name: data[i].name,
      y: data[i].value,
     z: getZ(data[i].value)
    }

)
}
    console.log(general)
       

        
    }
    
    async function loadGraph(){Highcharts.chart('container', {
    chart: {
        type: 'variablepie'
    },
    title: {
        text: 'Comparación de ventas de Videojuegos en EEUU y Armas vendidas en sus 5 estados más habitados'
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            'Unidades vendidas : <b>{point.y}</b> millones <br/>' 
    },
    series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'countries',
        data: general
    }]
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
        <script src="https://code.highcharts.com/modules/variable-pie.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>
        <script src="https://code.highcharts.com/modules/export-data.js"></script>
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>
    
    </svelte:head>
    <style>
      
    </style>