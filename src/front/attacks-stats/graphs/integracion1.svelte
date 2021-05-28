<script>

const QuickChart = require('quickchart-js');

const myChart = new QuickChart(); 
myChart.setConfig({ 
    tipo : 'barra', 
    datos : {"etiquetas" : [ 'Hola mundo' , 'Barra de Foo'] , "conjuntos de datos" : [{ "etiqueta" : 'Foo', "datos" : [ 1,2]}]} , 
});

consola.log(myChart.getUrl());

</script>

<main>


</main>


<style>


</style>