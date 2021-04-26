<script>
	import Router from 'svelte-spa-router';
	import Sales from "./arms-sales-stats/arms-sales-stats.svelte";
	import Homicides from "./homicides/homicides.svelte";
	import Attacks from "./attacks-stats/attacks-stats.svelte";
	
	import Info from "./Info.svelte";
	const routes = {
		"/": Info,
		"/homicides": Homicides,
		"/sales": Sales,		
		"/attacks": Attacks
	};
</script>


<main>
	<Router {routes}> </Router>
</main>

<style>

</style>