<script>
	import Table_svelte from './homicides/Homicides.svelte'
	export let name;
	
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	 <input type="button" id="b1" value="Games" onClick="document.getElementById('oculto').style.visibility='visible'">
	 <input type="button" value="Ocultar" onClick="document.getElementById('oculto').style.visibility='hidden'">
	<br>
   
    
    <div id="oculto" style="visibility:visible">
       
		<Table_svelte/>

    </div>
<style type="text/css">
  table, th, td {
  border: 1px solid black;
  text-align:center;
  margin: auto;
}

  </style>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>