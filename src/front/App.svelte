<script>
	//IMPORTS COMUNES
	import Router from 'svelte-spa-router'; //modulo svelte para SPA
	import Home from "./Home.svelte";
	import Graph from "./commongraph/statsGraph.svelte";
	import Videos from "./Videos.svelte";

	//IMPORTS HOMICIDES
	import Homicides from "./homicides/homicides.svelte";
	import EditHomicides from "./homicides/editHomicideData.svelte";
	import GraphsIndex from "./homicides/indexGraficas.svelte";
	import GraphHomicidesLine from "./homicides/lineHomicides.svelte";
	import Pobreza from "./homicides/integrations/riesgosPobreza.svelte";
	import Children from "./homicides/integrations/abandonoEscolar.svelte";
	import imdb from "./homicides/integrations/usoIMDB.svelte";
	import cod from "./homicides/integrations/usoCOD.svelte";
	import all from "./homicides/integrations/homicidesAll.svelte";


	//Aqui hago 2 imports uno para cada API externa
	


	//IMPORTS SALES
	import Sales from "./arms-sales-stats/arms-sales-stats.svelte";
	import EditSale from "./arms-sales-stats/editData.svelte";
	import GraphsArms from "./arms-sales-stats/graphs/indexgraficas.svelte";
	import GraphLineArms from "./arms-sales-stats/graphs/lineArms.svelte";
	import GraphExternal1Arms from "./arms-sales-stats/graphs/external1.svelte";
	import GraphExternal2Arms from "./arms-sales-stats/graphs/external2.svelte";
	import GraphExternal3Arms from "./arms-sales-stats/graphs/external3.svelte";
	import  GraphIntegration01 from "./arms-sales-stats/graphs/integracion01.svelte";
	import  GraphIntegration01b from "./arms-sales-stats/graphs/integracion01b.svelte";
	import  GraphIntegration23 from "./arms-sales-stats/graphs/integracion23.svelte";
	import  GraphIntegration30 from "./arms-sales-stats/graphs/integracion30.svelte";
	import  GraphIntegration28 from "./arms-sales-stats/graphs/integracion28.svelte";
	import  GraphFinal from "./arms-sales-stats/graphs/graficafinal.svelte";

	//IMPORTS ATTACKS
	import Attacks from "./attacks-stats/attacks-stats.svelte";
	import EditAttacks from "./attacks-stats/editAttacksData.svelte";
	import GraphAttacks from "./attacks-stats/graphs/indexgraficas.svelte";
	import GraphLineAttacks from "./attacks-stats/graphs/lineAttacks.svelte";
	import GraphApiExterna1Attacks from "./attacks-stats/graphs/apiExterna1.svelte";
	import GraphApiExterna2Attacks from "./attacks-stats/graphs/apiExterna2.svelte";
	import GraphIntegracion1 from "./attacks-stats/graphs/integracion1.svelte";


	

	import NotFound from "./NotFound.svelte";
	
	import Info from "./Info.svelte";
	const routes = {
		"/info": Info,
		"/homicides": Homicides,
		"/sales": Sales,		
		"/attacks": Attacks,
		"/": Home,
		"/analytics": Graph,
		"/about": Videos,
		//Homicides Stats
		"/homicides/analytics": GraphsIndex, //redirige al "home" de mis graficos, tanto mio como de las API externa
		"/homicides/line": GraphHomicidesLine,//redirige al grafico de mi API
		"/homicides/:state/:year": EditHomicides,//redirige a la página de edición de un recurso
		"/homicides/riesgosPobreza": Pobreza,
		"/homicides/abandonoEscolar": Children,
		"/homicides/usoIMDB": imdb,
		"/homicides/usoCOD": cod,
		"/homicides/homicidesAll": all,
		//Arms Sales Stats
		"/sales/analytics": GraphsArms,
		"/sales/line": GraphLineArms,
		"/sales/external1": GraphExternal1Arms,
		"/sales/external2": GraphExternal2Arms,
		"/sales/external3": GraphExternal3Arms,
		"/sales/integration01": GraphIntegration01,
		"/sales/integration01b": GraphIntegration01b,
		"/sales/integration23": GraphIntegration23,
		"/sales/integration30": GraphIntegration30,
		"/sales/integration28": GraphIntegration28,
		"/sales/grafico": GraphFinal,
		"/sales/:state/:year/:month": EditSale,
		
		//Attacks stats
		"/attacks/analytics": GraphAttacks,
		"/attacks/line": GraphLineAttacks,
		"/attacks/:state/:year": EditAttacks,
		"/attacks/apiexterna1": GraphApiExterna1Attacks,
		"/attacks/apiexterna2": GraphApiExterna2Attacks,
		"/attacks/integracion1": GraphIntegracion1,
		
		
		


		"*": NotFound,
		
	};
</script>


<main>
	<Router {routes}> </Router>
</main>

<style>

</style>