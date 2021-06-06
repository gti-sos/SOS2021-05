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
  
    <h1>Venta de Armas EEUU </h1>
  
    <Container>
    
      <Col>
        Desarrollado por:
        <a href = " http://github.com/manu261998 " > Manuel Sanchez López </a>
      </Col>
      
    </Container>
  
   <p></p>
   <p></p>

   
    <h2>Gráficas</h2>
    <Container class="import" id="import">
       
      <Col xs="auto">
        
        <Card  class="mb-3">
          <CardHeader style="background-color: #C7EFF3;">
            <CardTitle><h5>Venta de armas de 2010 a 2020 (No evaluable)</h5></CardTitle>
          </CardHeader>
          <CardBody style="background-color: #F0FEFF;">
            <CardSubtitle />
            <CardText>Gráfico lineal que muestra los datos sobre la venta de armas.</CardText>
            <img alt={" "} src={"/mediaSales/line.png"}>
          </CardBody>
          <CardFooter style="background-color: #C7EFF3;">
              
            <a href="/#/sales/line "
            ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
          >
            
        </CardFooter
          >
        </Card>
        
    </Col>
    <Col xs="auto">
        
      <Card  class="mb-3">
        <CardHeader style="background-color: #C7EFF3;">
          <CardTitle><h5>Venta de armas de 2010 a 2020</h5></CardTitle>
        </CardHeader>
        <CardBody style="background-color: #F0FEFF;">
          <CardSubtitle />
          <CardText>Gráfico de barras interactivo que muestra los datos sobre la venta de armas.</CardText>
          <img alt={" "} src={"/mediaSales/general.png"}>
        </CardBody>
        <CardFooter style="background-color: #C7EFF3;">
            
          <a href="/#/sales/grafico "
          ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
        >
          
      </CardFooter
        >
      </Card>
      
  </Col>
    <Col xs="auto">
        
      <Card  class="mb-3">
        <CardHeader style="background-color: #C7EFF3;">
          <CardTitle><h5>Api Externa: Equipos de futbol.</h5></CardTitle>
        </CardHeader>
        <CardBody style="background-color: #F0FEFF;">
          <CardSubtitle />
          <CardText>Gráfico de Burbujas que muestra los equipos de Inglaterra, Estados Unidos, España e Italia</CardText>
          <img alt={" "} src={"/mediaSales/ext1.png"}>
        </CardBody>
        <CardFooter style="background-color: #C7EFF3;">
            
          <a href="/#/sales/external1 "
          ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
        >
          
      </CardFooter
        >
      </Card>
      
  </Col>
    
  <Col xs="auto">
        
    <Card  class="mb-3">
      <CardHeader style="background-color: #C7EFF3;">
        <CardTitle><h5>Api Externa: Casos de Covid por país.</h5></CardTitle>
      </CardHeader>
      <CardBody style="background-color: #F0FEFF;">
        <CardSubtitle />
        <CardText>Gráfico de Burbujas que muestra los casos de covid, casos recuperados y decesos en los principales paises afectados por la pandemia.</CardText>
        <CardText>Ha sido desarrollada utilizando la libreria Chartist. Lamentablemente no es interactiva.</CardText>
        <img alt={" "} src={"/mediaSales/ext2.png"}>
      </CardBody>
      <CardFooter style="background-color: #C7EFF3;">
          
        <a href="/#/sales/external2 "
        ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
      >
        
    </CardFooter
      >
    </Card>
    
</Col>
<Col xs="auto">
        
  <Card  class="mb-3">
    <CardHeader style="background-color: #C7EFF3;">
      <CardTitle><h5>Api Externa: Insectos Animal Crossing.</h5></CardTitle>
    </CardHeader>
    <CardBody style="background-color: #F0FEFF;">
      <CardSubtitle />
      <CardText>Animal Crossing es un videojuego muy popular entre las personas jovenes.</CardText>
      <CardText>Se trata de un simulador de vida digital a tiempo real que te permite pescar, cazar bichos e interactuar con el
                entorno. Este widget nos muestra los meses en los que aparece por el mundo cada insecto que el jugador debe atrapar.

      
      </CardText>
      <CardText>Esperad unos segundos, tarda en cargar.</CardText>
      <img alt={" "} src={"/mediaSales/ext3.png"}>
    </CardBody>
    <CardFooter style="background-color: #C7EFF3;">
        
      <a href="/#/sales/external3 "
      ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
    >
      
  </CardFooter
    >
  </Card>
  
</Col>

<Col xs="auto">
        
  <Card  class="mb-3">
    <CardHeader style="background-color: #C7EFF3;">
      <CardTitle><h5>Api Externa: Previsión Temperatura Sevilla</h5></CardTitle>
    </CardHeader>
    <CardBody style="background-color: #F0FEFF;">
      <CardSubtitle />
      <CardText>Previsión para las proximas 24h en Sevilla</CardText>
      <CardText>Api externa utilizando API externa con Oauth.
      
      </CardText>
     
      <img alt={" "} src={"/mediaSales/ext4.png"}>
    </CardBody>
    <CardFooter style="background-color: #C7EFF3;">
        
      
      <a href="/#/sales/external4 "
      ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
    >
      
  </CardFooter
    >
  </Card>
  
</Col>

<Col xs="auto">
        
  <Card  class="mb-3">
    <CardHeader style="background-color: #C7EFF3;">
      <CardTitle><h5>Integracion: G.01 Armas vendidas e índice de Calidad de Vida por estados (PROXY)</h5></CardTitle>
    </CardHeader>
    <CardBody style="background-color: #F0FEFF;">
      <CardSubtitle />
      <CardText>Gráfico orientado al estudio de la influencia de la calidad de vida en la venta de armas de EEUU</CardText>
      <CardText>Los datos sobre la Calidad de Vida pertenecen a la API desarrollada por Lucía Castro.
        He decidido acotarlo por estados y que el usuario decida cual quiere visualizar debido a que el calculo de todos los datos a la vez es
        computacionalmente imposible de realizar en un tiempo que no se haga tedioso al usuario.
        Para cargar los datos he implementado un proxy en nuestro index.js que puede ver en el siguiente enlace (al final del archivo):
        <a href="https://github.com/gti-sos/SOS2021-05/blob/main/index.js">Ver código Proxy</a>
      </CardText>
     
      <img alt={" "} src={"/mediaSales/int1.png"}>
    </CardBody>
    <CardFooter style="background-color: #C7EFF3;">
        
      <a href="/#/sales/integration01 "
      ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
    >
      
  </CardFooter
    >
  </Card>
  
</Col>
  

<Col xs="auto">
        
  <Card  class="mb-3">
    <CardHeader style="background-color: #C7EFF3;">
      <CardTitle><h5>Integracion: G.01 Armas vendidas e índice de Seguridad por estados (PROXY)</h5></CardTitle>
    </CardHeader>
    <CardBody style="background-color: #F0FEFF;">
      <CardSubtitle />
      <CardText>Gráfico orientado al estudio de la influencia de la seguridad estimada de la población estadounidense en la venta de armas</CardText>
      <CardText>Los datos sobre la Seguridad pertenecen a la API desarrollada por Lucía Castro.
        He decidido acotarlo por estados y que el usuario decida cual quiere visualizar debido a que el calculo de todos los datos a la vez es
        computacionalmente imposible de realizar en un tiempo que no se haga tedioso al usuario.
        Para cargar los datos he implementado un proxy en nuestro index.js que puede ver en el siguiente enlace (al final del archivo):
        <a href="https://github.com/gti-sos/SOS2021-05/blob/main/index.js">Ver código Proxy</a>
      </CardText>
     
      <img alt={" "} src={"/mediaSales/int1b.png"}>
    </CardBody>
    <CardFooter style="background-color: #C7EFF3;">
        
      <a href="/#/sales/integration01b "
      ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
    >
      
  </CardFooter
    >
  </Card>
  
</Col>

<Col xs="auto">
        
  <Card  class="mb-3">
    <CardHeader style="background-color: #C7EFF3;">
      <CardTitle><h5>Integracion: G.23 Personas con Trastornos Mentales propietarios de Armas (PROXY)</h5></CardTitle>
    </CardHeader>
    <CardBody style="background-color: #F0FEFF;">
      <CardSubtitle />
      <CardText>Gráfico orientado al estudio </CardText>
      <CardText>Los datos sobre la Salud Mental pertenecen a la API desarrollada por Eduardo Carmona.
        Pese a que las autoridades estadounidenses en las mayoria de los estados restringen la compra de armas a personas mentalmente inestables, muchos
        no pasan estos filtros por lo que esta estimación es fiable sin embargo no deja de ser una estimación.
        Para cargar los datos he implementado un proxy en nuestro index.js que puede ver en el siguiente enlace (al final del archivo):
        <a href="https://github.com/gti-sos/SOS2021-05/blob/main/index.js">Ver código Proxy</a>
      </CardText>
     
      <img alt={" "} src={"/mediaSales/int23.png"}>
    </CardBody>
    <CardFooter style="background-color: #C7EFF3;">
        
      <a href="/#/sales/integration23 "
      ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
    >
      
  </CardFooter
    >
  </Card>

  <Card  class="mb-3">
    <CardHeader style="background-color: #C7EFF3;">
      <CardTitle><h5>Integracion: G.30 Nombre de Estados Norteamericanos y Comunidades Autónomas (PROXY)</h5></CardTitle>
    </CardHeader>
    <CardBody style="background-color: #F0FEFF;">
      <CardSubtitle />
      
      <CardText>Los datos sobre el nombre de los estados pertenecen a la API desarrollada por Alejandro Sánchez.
        
        Gráfico dicertido e interactivo que muestra todos los nombres de estados y comunidades autónomas. Si recargas el gráfico, las
        palabras se duplican para hacerlo todo muy vistoso. (A las 7 recargas vuelve al principio)
        Para cargar los datos he implementado un proxy en nuestro index.js que puede ver en el siguiente enlace (al final del archivo):
        <a href="https://github.com/gti-sos/SOS2021-05/blob/main/index.js">Ver código Proxy</a>
      </CardText>
     
      <img alt={" "} src={"/mediaSales/int30.png"}>
    </CardBody>
    <CardFooter style="background-color: #C7EFF3;">
        
      <a href="/#/sales/integration30 "
      ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
    >
      
  </CardFooter
    >
  </Card>
  
</Col>

<Col xs="auto">
        
  <Card  class="mb-3">
    <CardHeader style="background-color: #C7EFF3;">
      <CardTitle><h5>Integracion: G.28 Armas vendidas en los 5 estados mas habitados y videojuegos mas vendidos en EEUU en el año 2020(PROXY)</h5></CardTitle>
    </CardHeader>
    <CardBody style="background-color: #F0FEFF;">
      <CardSubtitle />
      <CardText>Gráfico orientado al estudio de la venta de videojugos y la venta de armas</CardText>
      <CardText>Los datos sobre la Venta de Videojuegos pertenecen a la API desarrollada por Fernando Olmedo.
        
        Para cargar los datos he implementado un proxy en nuestro index.js que puede ver en el siguiente enlace (al final del archivo):
        <a href="https://github.com/gti-sos/SOS2021-05/blob/main/index.js">Ver código Proxy</a>
      </CardText>
     
      <img alt={" "} src={"/mediaSales/int28.png"}>
    </CardBody>
    <CardFooter style="background-color: #C7EFF3;">
        
      <a href="/#/sales/integration28 "
      ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
    >
      
  </CardFooter
    >
  </Card>
  
</Col>

    </Container>
   
    </div>

<div class="homicidios" id="homicidios">
  <h1>Homicidios por armas de fuego en EE.UU </h1>
  
  <Container>
  
    <Col>
      Desarrollado por:
      <a href = " https://github.com/ivanmartinsk " > Iván Martín Jiménez </a>
    </Col>
    
  </Container>

      <p></p>
      <p></p>

      
          <h2>Gráficas</h2>
          <Container>
          
          <Col xs="auto">
              
              <Card  class="mb-3">
              <CardHeader style="background-color: #C7EFF3;">
                  <CardTitle><h5>Homicidios por armas de fuego entre 2010 y 2020</h5></CardTitle>
              </CardHeader>
              <CardBody style="background-color: #F0FEFF;">
                  <CardSubtitle />
                  <CardText>Gráfico lineal que representa los datos de homicidios por armas de fuego en la última década.</CardText>
                  <img alt={" "} src={"/mediaHomicides/homicidesGraph.jpg"}>
              </CardBody>
              <CardFooter style="background-color: #C7EFF3;">
                  
                  <a href="/#/homicides/line">
                  <Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a>
                  
                  </CardFooter>
              </Card>
              
          </Col>
          <Col xs="auto">
              
            <Card  class="mb-3">
            <CardHeader style="background-color: #C7EFF3;">
                <CardTitle><h5>Homicidios por armas de fuego en EE.UU - HighCharts</h5></CardTitle>
            </CardHeader>
            <CardBody style="background-color: #F0FEFF;">
                <CardSubtitle />
                <CardText>Gráfico para mostrar todos los recursos, por año seleccionado, junto a la estadística de Pareto.</CardText>
                <img alt={" "} src={"/mediaHomicides/homicidesAll2.jpg"}>
            </CardBody>
            <CardFooter style="background-color: #C7EFF3;">
                
                <a href="/#/homicides/homicidesAll">
                <Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a>
                
                </CardFooter>
            </Card>
            
        </Col>
        <Col xs="auto">
              
          <Card  class="mb-3">
          <CardHeader style="background-color: #C7EFF3;">
              <CardTitle><h5>Homicidios por armas de fuego en EE.UU - ApexCharts</h5></CardTitle>
          </CardHeader>
          <CardBody style="background-color: #F0FEFF;">
              <CardSubtitle />
              <CardText>Gráfico para mostrar un desglose de los homicidios por armas de fuego en EE.UU por año y estado</CardText>
              <img alt={" "} src={"/mediaHomicides/homicidiosApex.jpg"}>
          </CardBody>
          <CardFooter style="background-color: #C7EFF3;">
              
              <a href="/#/homicides/homicidesApex">
              <Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a>
              
              </CardFooter>
          </Card>
          
      </Col>

          <Col xs="auto">
              
          <Card  class="mb-3">

            <CardHeader style="background-color: #C7EFF3;">
            <CardTitle><h5>API Externa (INTEGRACION 1): Riesgos De Pobreza</h5></CardTitle>
            </CardHeader>

            <CardBody style="background-color: #F0FEFF;">
            <CardSubtitle />
            <CardText>Gráfico que compara el número de homicidios por armas de fuego en USA con el número
              de personas en riesgo de pobreza.
            </CardText>
            <img alt={" "} src={"/mediaHomicides/pobreza.jpg"}>
            </CardBody>

            <CardFooter style="background-color: #C7EFF3;">
                
                <a href="/#/homicides/riesgosPobreza"
                ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a>
            
            
              </CardFooter>
        </Card>  
        <Card  class="mb-3">

          <CardHeader style="background-color: #C7EFF3;">
          <CardTitle><h5>API Externa (INTEGRACION 2): Abandono Escolar</h5></CardTitle>
          </CardHeader>

          <CardBody style="background-color: #F0FEFF;">
          <CardSubtitle />
          <CardText>Gráfico de área que compara el numero de homicidios por armas de fuego con el número
            de abandonos escolares por año.
          </CardText>
          <img alt={" "} src={"/mediaHomicides/abandono.jpg"}>
          </CardBody>

          <CardFooter style="background-color: #C7EFF3;">
              
              <a href="/#/homicides/abandonoEscolar"
              ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a>
          
          
            </CardFooter>
      </Card>  
          <Card  class="mb-3">

              <CardHeader style="background-color: #C7EFF3;">
              <CardTitle><h5>API Externa (USO 1): Estadísticas COD</h5></CardTitle>
              </CardHeader>

              <CardBody style="background-color: #F0FEFF;">
              <CardSubtitle />
              <CardText>Gráfico que, dado un perfil público de PSN, nos devuelve sus estadísticas en el videojuego
                "Call of Duty: Warzone".
              </CardText>
              <img alt={" "} src={"/mediaHomicides/cod.jpg"}>
              </CardBody>

              <CardFooter style="background-color: #C7EFF3;">
                  
                  <a href="/#/homicides/usoCOD"
                  ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a>
              
              
               </CardFooter>
          </Card>

          <Card  class="mb-3">

            <CardHeader style="background-color: #C7EFF3;">
            <CardTitle><h5>API EXTERNA (USO 2): TOP 10 shows mejor puntuados IMDB</h5></CardTitle>
            </CardHeader>

            <CardBody style="background-color: #F0FEFF;">
            <CardSubtitle />
            <CardText>Gráfico para estadísticas IMDB, que nos representa un top con las películas y series mejor
              puntuadas, así como el número de votaciones que ha recibido dicha obra en IMDB.
            </CardText>
            <img alt={" "} src={"/mediaHomicides/imdb.png"}>
            </CardBody>

            <CardFooter style="background-color: #C7EFF3;">
                
                <a href="/#/homicides/usoIMDB"
                ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a>
            
            
             </CardFooter>
        </Card>
          
      </Col>
  

  </Container>
  
</div>

<div class="ataques" id="ataques">
  <h1>Ataques en EEUU </h1>
  
  <Container>
  
    <Col>
      Desarrollado por:
      <a href = " http://github.com/josanmegias " > José Antonio Megías Macías </a>
    </Col>
    
  </Container>

 <p></p>
 <p></p>

 
  <h2>Gráficas</h2>
  <Container>
     
    <Col xs="auto">
      
      <Card  class="mb-3">
        <CardHeader style="background-color: #C7EFF3;">
          <CardTitle><h5>Ataques en EEUU de 2010 a 2020</h5></CardTitle>
        </CardHeader>
        <CardBody style="background-color: #F0FEFF;">
          <CardSubtitle />
          <CardText>Gráfico lineal que muestra los datos sobre los ataques.</CardText>
          <img alt={" "} src={"/mediaAttacks/attacksLine.PNG"}>
          
        </CardBody>
        <CardFooter style="background-color: #C7EFF3;">
            
          <a href="/#/attacks/line"
          ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
        >
          
      </CardFooter
        >
      </Card>
      
  </Col>


  <Col xs="auto">
      
    <Card  class="mb-3">
      <CardHeader style="background-color: #C7EFF3;">
        <CardTitle><h5>Ataques en EEUU en 2019 (CANVASJS)</h5></CardTitle>
      </CardHeader>
      <CardBody style="background-color: #F0FEFF;">
        <CardSubtitle />
        <CardText>Gráfico que muestra los datos sobre los tipos de ataques (armas personales, pistola y navaja)
          en los diferentes estados de EEUU en 2019.</CardText>
        <img alt={" "} src={"/mediaAttacks/attacks1.PNG"}>
        
      </CardBody>
      <CardFooter style="background-color: #C7EFF3;">
          
        <a href="/#/attacks/attacks1"
        ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
      >
        
    </CardFooter
      >
    </Card>
    
</Col>

<Col xs="auto">
      
  <Card  class="mb-3">
    <CardHeader style="background-color: #C7EFF3;">
      <CardTitle><h5>Ataques con armas personales entre 2017 y 2019 (HIGHCHARTS)</h5></CardTitle>
    </CardHeader>
    <CardBody style="background-color: #F0FEFF;">
      <CardSubtitle />
      <CardText>Gráfico que muestra los datos sobre los ataques por armas personales de todos los estados de EEUU entre los años 2017 y 2019.</CardText>
      <img alt={" "} src={"/mediaAttacks/attacks2.PNG"}>
      
    </CardBody>
    <CardFooter style="background-color: #C7EFF3;">
        
      <a href="/#/attacks/attacks2"
      ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
    >
      
  </CardFooter
    >
  </Card>
  
</Col>


  <Col xs="auto">
      
    <Card  class="mb-3">
      <CardHeader style="background-color: #C7EFF3;">
        <CardTitle><h5>Api Externa 1: Formula 1.</h5></CardTitle>
      </CardHeader>
      <CardBody style="background-color: #F0FEFF;">
        <CardSubtitle />
        <CardText>Gráfico de la capacidad de los circuitos de la Formula 1</CardText>
        <img alt={" "} src={"/mediaAttacks/USO1.PNG"}>
      </CardBody>
      <CardFooter style="background-color: #C7EFF3;">
          
        <a href="/#/attacks/apiexterna1"
        ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
      >
        
    </CardFooter
      >
    </Card>
    
</Col>

<Col xs="auto">
      
  <Card  class="mb-3">
    <CardHeader style="background-color: #C7EFF3;">
      <CardTitle><h5>Api Externa 2: Tenis.</h5></CardTitle>
    </CardHeader>
    <CardBody style="background-color: #F0FEFF;">
      <CardSubtitle />
      <CardText>Gráfico del Ranking de los 10 mejores tenistas del mundo</CardText>
      <img alt={" "} src={"/mediaAttacks/USO2.PNG"}>
    </CardBody>
    <CardFooter style="background-color: #C7EFF3;">
        
      <a href="/#/attacks/apiexterna2"
      ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
    >
      
  </CardFooter
    >
  </Card>
  
</Col>

<Col xs="auto">
      
<Card  class="mb-3">
  <CardHeader style="background-color: #C7EFF3;">
    <CardTitle><h5>Integracion 1: Infectados VIH</h5></CardTitle>
  </CardHeader>
  <CardBody style="background-color: #F0FEFF;">
    <CardSubtitle />
    <CardText>Gráfico de los infectados de VIH y viviendo con VIH frente a los ataques personales en EEUU</CardText>
    <img alt={" "} src={"/mediaAttacks/INTEGRACION1.PNG"}>
  </CardBody>
  <CardFooter style="background-color: #C7EFF3;">
      
    <a href="/#/attacks/integracion24"
    ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
  >
    
</CardFooter
  >
</Card>

</Col>


<Col xs="auto">
      
<Card  class="mb-3">
  <CardHeader style="background-color: #C7EFF3;">
    <CardTitle><h5>Integracion 2: Nacimientos en los países de Europa</h5></CardTitle>
  </CardHeader>
  <CardBody style="background-color: #F0FEFF;">
    <CardSubtitle />
    <CardText>Gráfico de los nacimientos en los países de Europa del año 2019, y ataques totales en Estados Unidos a manos del sexo masculino.
    </CardText>
    <img alt={" "} src={"/mediaAttacks/INTEGRACION2.PNG"}>
  </CardBody>
  <CardFooter style="background-color: #C7EFF3;">
      
    <a href="/#/attacks/integracion01"
    ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
  >
    
</CardFooter
  >
</Card>

</Col>

<Col xs="auto">
      
<Card  class="mb-3">
  <CardHeader style="background-color: #C7EFF3;">
    <CardTitle><h5>Integracion 3: Suicidios en algunas ciudades de España</h5></CardTitle>
  </CardHeader>
  <CardBody style="background-color: #F0FEFF;">
    <CardSubtitle />
    <CardText>Gráfico de los suicidios entre 2016 y 2019, y ataques por pistola en EEUU </CardText>
    <img alt={" "} src={"/mediaAttacks/INTEGRACION3.PNG"}>
  </CardBody>
  <CardFooter style="background-color: #C7EFF3;">
      
    <a href="/#/attacks/integracion27"
    ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
  >
    
</CardFooter
  >
</Card>

</Col>
  

  </Container>
</div>

  </main>
  
  <style>

main {
       background-color: #ffffff;
      text-align: center;
      
    }
    h1 {
      color: #680606;
      text-transform: uppercase;
      font-size: 4em;
      font-weight: 100;
    }
   img{
   
        border: 3px solid rgb(27, 27, 27);
        width: 50%; height: 50%;
    }
   
    @media (min-width: 640px) {
      main {
        max-width: none;
      }
    }

  
   
    @media (min-width: 640px) {
      main {
        max-width: none;
      }
    }
    div.armas{
        visibility: hidden;
        height: 0px;
    }
    div.homicidios{
        visibility: hidden;
        height: 0px;
        
    }

    div.ataques{
        visibility: hidden;
        height: 0px;
    }
  </style>