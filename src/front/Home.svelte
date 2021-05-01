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
  
  <main >
   <body  id= "silverfox" style="background-image: url(https://d3i6fh83elv35t.cloudfront.net/static/2019/05/2019-04-28T203439Z_1736859717_RC13D8614730_RTRMADP_3_USA-GUNS-NRA-1200x800.jpg); width: 100%; height: 95%;
   object-fit: cover ">
        <section id="hero" class="text-white tm-font-big tm-parallax" style="background-position: center -400px;">
         
          
          
          <div class="text-center tm-hero-text-container">
            <div class="tm-hero-text-container-inner">
                <h2 class="tm-hero-title">SOS2021-05</h2>
                <p class="tm-hero-subtitle">
                  A research focused on the arms market and violence<br>that afflicts American society 
                </p>
            </div>        
          </div>
    
          <div class="tm-next tm-intro-next">
            <div class="text-center tm-down-arrow-link">
                <a href="./#/info">
                    <Button color="primary">Let's explore</Button></a>
                </div>
          </div>      
        </section>
    
   


    </body>
  </main>
  
  <style>

 #silverfox {
  /* Asignamos una altura mínima */
  min-height: 400px;
  
  
  background-size: cover;
  background-position: center;
  border-width: 6px;
  border-style: solid;
  border-color: rgb(49, 49, 49);
}


#hero {
  
  
  height: 94vh;
  min-height: 375px;
  position: center;
}

@media (min-height: 830px) {
  #hero {
    background-position: center -210px;
  }
}

@media (min-height: 680px) and (max-height: 829px) {
  #hero {
    background-position: center -300px;
  }
}

@media (min-height: 500px) and (max-height: 679px) {
  #hero {
    background-position: center -400px;
  }
}

@media (max-height: 499px) {
  #hero {
    background-position: center -450px;
  }
}

.tm-hero-text-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

.tm-hero-text-container-inner {
  margin-top: -90px;
}

.tm-hero-title {
  font-size: 3.5rem;
  text-shadow: 2px 2px 2px #333;
}

.tm-intro-next {
  position: absolute;
  bottom: 100px;
  left: 0;
  right: 0;
}

@media (max-height: 480px) {
  .tm-hero-text-container-inner {
    margin-top: -40px;
  }

  .tm-intro-next {
    bottom: 20px;
  }
}

.tm-down-arrow-link {
  display: block;
  margin-top: 18%;
}






  </style>

