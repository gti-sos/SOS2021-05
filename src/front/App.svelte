<script>
	import Router from 'svelte-spa-router'; //modulo svelte para SPA
	import Sales from "./arms-sales-stats/arms-sales-stats.svelte";
	import EditSale from "./arms-sales-stats/editData.svelte";
	import Homicides from "./homicides/homicides.svelte";
	import Attacks from "./attacks-stats/attacks-stats.svelte";
	import Home from "./Home.svelte";
	import NotFound from "./NotFound.svelte";
	
	import Info from "./Info.svelte";
	const routes = {
		"/info": Info,
		"/homicides": Homicides,
		"/sales": Sales,		
		"/attacks": Attacks,
		"/": Home,
		"/sales/:state/:year/:month": EditSale,
		"*": NotFound,
		
	



	};
</script>


<main>
	<Router {routes}> </Router>
</main>

<style>

</style>