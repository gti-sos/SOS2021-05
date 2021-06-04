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
          <CardTitle><h5>Ataques en EEUU de 2010 a 2020</h5></CardTitle>
        </CardHeader>
        <CardBody style="background-color: #F0FEFF;">
          <CardSubtitle />
          <CardText>Gráfico que muestra los datos sobre los ataques.</CardText>
          
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
          <CardTitle><h5>Api Externa 1: Formula 1.</h5></CardTitle>
        </CardHeader>
        <CardBody style="background-color: #F0FEFF;">
          <CardSubtitle />
          <CardText>Gráfico de la capacidad de los circuitos de la Formula 1</CardText>
          <img alt={" "} src={"/mediaAttacks/PNG.png"}>
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
      <CardText>Gráfico de los infectados de VIH en España frente a los ataques personales en Alabama</CardText>
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
   width: 100%; height: 100%;
    }
   
    @media (min-width: 640px) {
      main {
        max-width: none;
      }
    }
  </style>