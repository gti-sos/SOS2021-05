<script>
	//IMPORTS COMUNES
	import Router from 'svelte-spa-router'; //modulo svelte para SPA
	import Home from "./Home.svelte";
	import Graph from "./commongraph/statsGraph.svelte";

	//IMPORTS HOMICIDES
	import Homicides from "./homicides/homicides.svelte";
	import EditHomicides from "./homicides/editHomicideData.svelte";
	import GraphsIndex from "./homicides/indexGraficas.svelte";
	import GraphHomicidesLine from "./homicides/lineHomicides.svelte";
	import Pobreza from "./homicides/integrations/riesgosPobreza.svelte"

	//Aqui hago 2 imports uno para cada API externa
	


	//IMPORTS SALES
	import Sales from "./arms-sales-stats/arms-sales-stats.svelte";
	import EditSale from "./arms-sales-stats/editData.svelte";
	import GraphsArms from "./arms-sales-stats/graphs/indexgraficas.svelte";
	import GraphLineArms from "./arms-sales-stats/graphs/lineArms.svelte";
	import GraphExternal1Arms from "./arms-sales-stats/graphs/external1.svelte";
	import GraphExternal2Arms from "./arms-sales-stats/graphs/external2.svelte";

	//IMPORTS ATTACKS
	import Attacks from "./attacks-stats/attacks-stats.svelte";
	import EditAttacks from "./attacks-stats/editAttacksData.svelte";
	import GraphAttacks from "./attacks-stats/graphs/lineAttacks.svelte";


	

	import NotFound from "./NotFound.svelte";
	
	import Info from "./Info.svelte";
	const routes = {
		"/info": Info,
		"/homicides": Homicides,
		"/sales": Sales,		
		"/attacks": Attacks,
		"/": Home,
		"/analytics": Graph,
		//Homicides Stats
		"/homicides/analytics": GraphsIndex, //redirige al "home" de mis graficos, tanto mio como de las API externa
		"/homicides/line": GraphHomicidesLine,//redirige al grafico de mi API
		"/homicides/:state/:year": EditHomicides,//redirige a la página de edición de un recurso
		"/homicides/riesgosPobreza": Pobreza,
		//Arms Sales Stats
		"/sales/analytics": GraphsArms,
		"/sales/line": GraphLineArms,
		"/sales/external1": GraphExternal1Arms,
		"/sales/external2": GraphExternal2Arms,
		"/sales/:state/:year/:month": EditSale,
		
		//Attacks stats
		"/attacks/analytics": GraphAttacks,
		"/attacks/:state/:year": EditAttacks,
		
		


		"*": NotFound,
		
	};
</script>


<main>
	<Router {routes}> </Router>
</main>

<style>

</style>