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

    let lineimage =  'tutorial/image.gif';

  </script>
  
  <main>
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
    <Container>
       
      <Col xs="auto">
        
        <Card  class="mb-3">
          <CardHeader style="background-color: #C7EFF3;">
            <CardTitle><h5>Venta de armas de 2010 a 2020</h5></CardTitle>
          </CardHeader>
          <CardBody style="background-color: #F0FEFF;">
            <CardSubtitle />
            <CardText>Gráfico lineal que muestra los datos sobre la venta de armas.</CardText>
            <img alt={" "} src={"/build/mediaSales/line.png"}>
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
          <CardTitle><h5>Api Externa: Equipos de futbol.</h5></CardTitle>
        </CardHeader>
        <CardBody style="background-color: #F0FEFF;">
          <CardSubtitle />
          <CardText>Gráfico de Burbujas que muestra los equipos de Inglaterra, Estados Unidos, España e Italia</CardText>
          <img alt={" "} src={"/build/mediaSales/ext1.png"}>
        </CardBody>
        <CardFooter style="background-color: #C7EFF3;">
            
          <a href="/#/sales/external1 "
          ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
        >
          
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
  </style>