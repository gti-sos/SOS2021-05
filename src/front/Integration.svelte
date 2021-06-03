<script>


import GraphAttacks from "./attacks-stats/graphs/indexgraficas.svelte";

import GraphsIndex from "./homicides/indexGraficas.svelte";

    import {
      Button,
      Icon,
      Card,
      CardBody,
      CardFooter,
      CardHeader,
      CardSubtitle,
      CardText,
      CardTitle,
      Col,
      Container,
      Row,
    } from "sveltestrap";

    import {pop} from "svelte-spa-router";
import { onMount } from "svelte";
    



    async function armas(){

        document.getElementById("armas").style.visibility = "visible"    
        document.getElementById("homicidios").style.visibility = "hidden"    
        document.getElementById("ataques").style.visibility = "hidden"   

        
     }
     async function homicidios(){

document.getElementById("armas").style.visibility = "hidden"    
document.getElementById("homicidios").style.visibility = "visible"    
document.getElementById("ataques").style.visibility = "hidden"   
}
async function ataques(){

document.getElementById("armas").style.visibility = "hidden"    
document.getElementById("homicidios").style.visibility = "hidden"    
document.getElementById("ataques").style.visibility = "visible"   
}
  </script>
  
  <main>
    <h1>SOS2021-05 </h1>
  
    <h2>Integraciones</h2>
    <h5>Seleccione que integraciones desea explorar</h5>
    <div>
        <Button style="" on:click={armas}>Venta de Armas-Manuel Sánchez</Button>
        <Button color="secondary" on:click={homicidios}>Homicidios-Iván Martin</Button>
        <Button color="secondary" on:click={ataques}> Ataques-José Antonio Megías</Button>

    </div>

  <div class="armas" id="armas">
   armas
   
    </div>

<div class="homicidios" id="homicidios">
   homicidios
</div>

<div class="ataques" id="ataques">
   ataques
</div>

  </main>
  
  <style>
    main {
      text-align: center;
      padding: 1em;
      max-width: 240px;
      margin: 0 auto;
    }
    h1 {
      color: #680606;
      text-transform: uppercase;
      font-size: 4em;
      font-weight: 100;
    }
   
    @media (min-width: 640px) {
      main {
        max-width: none;
      }
    }
    div.armas{
        visibility: hidden;
    }
    div.homicidios{
        visibility: hidden;
    }

    div.ataques{
        visibility: hidden;
    }
  </style>