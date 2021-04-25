<script>
	import Table_svelte from './arms-sales-stats/Arms-sales-stats.svelte'
	
	
</script>

<main>
	<h2>Front End Api</h2>
	
	 <input type="button" id="b1" value="Homicides" onClick="document.getElementById('oculto').style.visibility='visible'">
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

	h2 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>