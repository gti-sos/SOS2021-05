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
            <img alt={" "} src={"/build/mediaSales/line.png"}>
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
          <CardTitle><h5>Api Externa 1: .</h5></CardTitle>
        </CardHeader>
        <CardBody style="background-color: #F0FEFF;">
          <CardSubtitle />
          <CardText>Gráfico de ...</CardText>
          <img alt={" "} src={"/build/mediaSales/ext1.png"}>
        </CardBody>
        <CardFooter style="background-color: #C7EFF3;">
            
          <a href="/#//attacks/apiexterna1"
          ><Button style="background-color:  #22A3B0 ; ">Ir a la gráfica</Button></a
        >
          
      </CardFooter
        >
      </Card>
      
  </Col>

  <Col xs="auto">
        
    <Card  class="mb-3">
      <CardHeader style="background-color: #C7EFF3;">
        <CardTitle><h5>Api Externa 2: .</h5></CardTitle>
      </CardHeader>
      <CardBody style="background-color: #F0FEFF;">
        <CardSubtitle />
        <CardText>Gráfico de ...</CardText>
        <img alt={" "} src={"/build/mediaSales/ext1.png"}>
      </CardBody>
      <CardFooter style="background-color: #C7EFF3;">
          
        <a href="/#//attacks/apiexterna2"
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