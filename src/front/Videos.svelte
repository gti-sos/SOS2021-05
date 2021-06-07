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

    import {pop} from "svelte-spa-router";

  </script>
  
  <main>
    <h1>SOS2021-05 </h1>
  
    <h2>Videos</h2>
    
  
    <Container>
      <Col xs="auto">
        <Card class="mb-3">
          <CardHeader>
            <CardTitle><h5>Homicides by firearms</h5></CardTitle>
          </CardHeader>
          <CardBody>
            <CardSubtitle />
            
            Video

          </CardBody>
          <CardFooter
            >developed by
            <a href="http://github.com/ivanmartinsk">Iván Martín Jiménez</a
            ></CardFooter
          >
        </Card>
      </Col>
      <Col xs="auto">
        <Card class="mb-3">
          <CardHeader>
            <CardTitle><h5>Arms sales stats</h5></CardTitle>
          </CardHeader>
          <CardBody>
            <CardSubtitle />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/avvu61tny7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          </CardBody>
          <CardFooter
            >developed by
            <a href="http://github.com/manu261998 ">Manuel Sanchez López</a>
          </CardFooter>
        </Card>
      </Col>
      <Col xs="auto">
        <Card class="mb-3">
          <CardHeader>
            <CardTitle><h5>Attacks stats</h5></CardTitle>
          </CardHeader>
          <CardBody>
            <CardSubtitle />
            Video

          </CardBody>
          <CardFooter
            >developed by
            <a href="http://github.com/josanmegias"> José Antonio Megías Macías </a
            ></CardFooter
          >
        </Card>
      </Col>
      <Button outline color="secondary" on:click="{pop}"> Volver</Button>

    </Container>
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
  </style>