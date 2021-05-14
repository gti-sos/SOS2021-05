<script>
	import Router from 'svelte-spa-router'; //modulo svelte para SPA
	import Sales from "./arms-sales-stats/arms-sales-stats.svelte";
	import EditSale from "./arms-sales-stats/editData.svelte";
	import Homicides from "./homicides/homicides.svelte";
	import EditHomicides from "./homicides/editHomicideData.svelte";
	import Attacks from "./attacks-stats/attacks-stats.svelte";
	import EditAttacks from "./attacks-stats/editAttacksData.svelte";
	import Home from "./Home.svelte";
	import Graph from "./commongraph/statsGraph.svelte";
	import GraphArms from "./arms-sales-stats/graphs/lineArms.svelte";

	

	import NotFound from "./NotFound.svelte";
	
	import Info from "./Info.svelte";
	const routes = {
		"/info": Info,
		"/homicides": Homicides,
		"/sales": Sales,		
		"/attacks": Attacks,
		"/": Home,
		"/analytics": Graph,
		//Arms Sales Stats
		"/sales/analytics": GraphArms,
		"/sales/:state/:year/:month": EditSale,
		
		"/homicides/:state/:year": EditHomicides,
		"/attacks/:state/:year": EditAttacks,
		


		"*": NotFound,
		
	



	};
</script>


<main>
	<Router {routes}> </Router>
</main>

<style>

</style>