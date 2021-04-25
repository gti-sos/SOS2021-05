<script>
	import Router from 'svelte-spa-router';
	import Sales from "src/front/arms-sales-stats/Arms-sales-stats.svelte";
	import Homicides from "src/front/homicides/Homicides.svelte";
	
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