<script>
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


  </script>
  
  <main>
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
                  <CardText>Gráfico de tipo piramidal que muestra los homicidios en un año determinado en cada estado de EE.UU.</CardText>
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
              <CardTitle><h5>API Externa (INTEGRACION 1): Riesgos De Pobreza - ApexCharts</h5></CardTitle>
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
            <CardTitle><h5>API Externa (INTEGRACION 2): Abandono Escolar -  ApexCharts</h5></CardTitle>
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
                <CardTitle><h5>API Externa (USO 1): Estadísticas COD - HighCharts</h5></CardTitle>
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
              <CardTitle><h5>API EXTERNA (USO 2): TOP 10 shows mejor puntuados IMDB - HighCharts</h5></CardTitle>
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
          <Card  class="mb-3">

            <CardHeader style="background-color: #C7EFF3;">
            <CardTitle><h5>API EXTERNA (USO 3): Volumen de mercado 10 principales criptomonedas - ApexCharts</h5></CardTitle>
            </CardHeader>

            <CardBody style="background-color: #F0FEFF;">
            <CardSubtitle />
            <CardText>Gráfica que muestra el volumen (medida de la cantidad de criptomoneda que se negoció en las últimas 24 horas) de las 10 
              principales criptomonedas.
            </CardText>
            <img alt={" "} src={"/mediaHomicides/coin.jpg"}>
            </CardBody>

            <CardFooter style="background-color: #C7EFF3;">
                
                <a href="/#/homicides/usoCoin"
                ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a>
            
            
             </CardFooter>
        </Card>
            
        </Col>
    

    </Container>
  </main>
  



  
  <style>
    main {
       background-color: #ffffff;
      text-align: center;
      
    }
    h1 {
      color: #15008b;
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
  </style>