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
                    <CardTitle><h5>Venta de armas de 2010 a 2020</h5></CardTitle>
                </CardHeader>
                <CardBody style="background-color: #F0FEFF;">
                    <CardSubtitle />
                    <CardText>Gráfico lineal que representa los datos de homicidios por armas de fuego en la última década.</CardText>
                    <img alt={" "} src={"front/media/homicidesLineMin.jpg"}>
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
                <CardTitle><h5>API Externa: Riesgos De Pobreza</h5></CardTitle>
                </CardHeader>

                <CardBody style="background-color: #F0FEFF;">
                <CardSubtitle />
                <CardText>Gráfico para riesgos de pobrezas</CardText>
                <img alt={" "} src={"/build/mediaSales/ext1.png"}>
                </CardBody>

                <CardFooter style="background-color: #C7EFF3;">
                    
                <a href="/#/homicides/riesgosPobreza"
                ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a>
                
                
            </CardFooter
                >
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