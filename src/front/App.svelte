<script>
	import Router from 'svelte-spa-router';
	import Sales from "./arms-sales-stats/Arms-sales-stats.svelte";
	import Homicides from "./homicides/Homicides.svelte";
	
	import Info from "./Info.svelte";
	const routes = {
		"/": Info,
		"/homicides": Homicides,
		"/sales": Sales		
	};
</script>


<main>
	<Router {routes}> </Router>
</main>

<style>

</style>