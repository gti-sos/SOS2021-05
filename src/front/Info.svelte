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
    <h1>SOS2021-05 </h1>
  
    <h2>Team</h2>
    <Container>
      <Col>
        <a href = " http://github.com/ivanmartinsk " > Iván Martín Jiménez </a>
      </Col>
      <Col>
        <a href = " http://github.com/manu261998 " > Manuel Sanchez López </a>
      </Col>
      <Col>
        <a href = " http://github.com/josanmegias " > José Antonio Megías Macías </a>
      </Col>
    </Container>
  
    <h2>Project description</h2>
    <p>
      Research on attacks, homicides caused by guns and firearms sold in recent years in the US.
    </p>
  
    <Container>
      <Col>
        <a href="http://github.com/gti-sos/SOS2021-05"
          ><b>Repository: </b>http://github.com/gti-sos/SOS2021-05</a
        >
      </Col>
      <Col>
        <a href="http://sos2021-05.herokuapp.com"
          ><b>URL: </b>http://sos2021-05.herokuapp.com</a
        >
      </Col>
      <Col>
        <a href="./#/analytics"
          ><b>Line Graph: </b> http://sos2021-05.herokuapp.com/#/analytics</a
        >
      </Col>
      <Col>
        <a href="./#/about"
          ><b>Videos: </b> http://sos2021-05.herokuapp.com/#/about</a
        >
      </Col>
    </Container>
  
    <h2>APIs</h2>
    <Container>
      <Col xs="auto">
        <Card class="mb-3">
          <CardHeader>
            <CardTitle><h5>Homicides by firearms</h5></CardTitle>
          </CardHeader>
          <CardBody>
            <CardSubtitle />
            <CardText
              >Homicides by firearms in the recent years in USA</CardText
            >
            <a href="http://sos2021-05.herokuapp.com/api/v1/homicides-by-firearms">
              <Button color="primary">Backend</Button></a
            >
            <a href="/#/homicides">
              <Button color="primary">Frontend</Button>
            </a>
            <a href="https://documenter.getpostman.com/view/14948327/TzJsfdKb"
              ><Button color="info">Postman Documentation v1</Button></a
            >

            <a href="https://documenter.getpostman.com/view/14948327/TzJydbLX "
            ><Button color="info">Postman Documentation v2</Button></a
          >
          <a href="./#/homicides/analytics"
            ><Button style="background-color: #D992FF">Gráficas</Button></a>

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
            <CardText
              >Arms sales stats in the recent years in USA</CardText
            >
            <a href=" http://sos2021-05.herokuapp.com/api/v1/arms-sales-stats">
              <Button color="primary">Backend</Button>
            </a>
            <a href="/#/sales">
              <Button color="primary">Frontend</Button>
            </a>
            <a href=" https://documenter.getpostman.com/view/14942846/TzJrCewR">
              <Button color="info">Postman Documentation v1</Button>
            </a>

            <a href="https://documenter.getpostman.com/view/14942846/TzJydbG4"
            ><Button color="info">Postman Documentation v2</Button></a>

            <a href="http://sos2021-05.herokuapp.com/#/sales/analytics"
            ><Button style="background-color: #D992FF">Gráficas</Button></a>

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
            <CardText>
             Attacks stats in the recent years in USA
            </CardText>
            <a href="http://sos2021-05.herokuapp.com/api/v1/attacks-stats"
              ><Button color="primary">Backend</Button></a
            >
            <a href="/#/attacks"
              ><Button color="primary">Frontend</Button></a
            >
            <a href=" https://documenter.getpostman.com/view/14948357/TzJsfdFD"
              ><Button color="info">Postman Documentation v1</Button></a
            >
            <a href=" https://documenter.getpostman.com/view/14948357/TzJydbLY"
              ><Button color="info">Postman Documentation v2</Button></a
            >

            <a href="http://sos2021-05.herokuapp.com/#/attacks/analytics"
            ><Button style="background-color: #D992FF">Gráficas</Button></a>


          </CardBody>
          <CardFooter
            >developed by
            <a href="http://github.com/josanmegias"> José Antonio Megías Macías </a
            ></CardFooter
          >
        </Card>
      </Col>
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
    b {
      color: #058d76;
    }
    @media (min-width: 640px) {
      main {
        max-width: none;
      }
    }
  </style>