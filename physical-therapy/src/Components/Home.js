import React from "react";
import back from "./Images/back.jpg";
import band from "./Images/band.jpg";
import old from "./Images/old.jpg";
import gabby from "./Images/gabby.jpg";
import points from "./Images/points.jpg";
import hand from "./Images/hand.jpg"
import {Carousel, Card} from "react-bootstrap";


function Home() {
    return (
        <div>
 <Carousel>
  <Carousel.Item interval={500}>
    <img
    className="center"
    src={back} 
    alt="First slide"
    height={600}
    width={1900}

     />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
    className="center"
    src={band} 
    height={600}
    width={1900}
    alt="Second slide"/>
    <Carousel.Caption>  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
    className="center"
    src={old} 
    height={600}
    width={1900}
    alt="Third slide"/>
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 





<div style={{textAlign:"center", backgroundColor:"skyblue" }}>
  <h1>Services</h1>
<p> Personalized Care and Guidance</p>
</div>
<div style={{backgroundColor:"lightblue"}}>

<div style={{display:"inline-flex" }}>
    <div  style={{display:"inline-flex", paddingRight:"250px"}}>
    <Card style={{ width: '18rem',  backgroundColor:"skyblue" }}>
  <Card.Img variant="top" src={gabby} height={200} />
  <Card.Body>
    <Card.Title>Natural Chronic Pain Management</Card.Title>
    <Card.Text>
      We provide eletrotherapy, Manual
      therapy and therapeutic exercises for
      chronic pain management.
      <br></br>
      <br></br>
      Tired of taking Opiods? Dry Needling   
      can be an option for you. Schedule an     
      appointment to today to know if dry
      needling is for you.
    </Card.Text>
  </Card.Body>
</Card>
  </div>
  <div  style={{display:"inline-flex", paddingRight:"200px"}}>
    <Card style={{ width: '18rem',  backgroundColor:"skyblue" }}>
  <Card.Img variant="top" src={hand} height={200} />
  <Card.Body>
    <Card.Title>Neuro Hand Rehabilitation</Card.Title>
    <Card.Text>
 Hand rehab for muscle weakness and 
 paralysis to obtain maximum stranfth and 
 range of motion by improving tone and reducing spasticty.
      <br></br>
      <br></br>
      Chronic nerologic injury or muscle and joint problems??
      <br></br>
      Call and schedule a visit and see how we can help 
      you optimize your hand function.
      <br></br>
      Keep yourself and your loved ones moving pain
      free! <br></br>Our friendly and experienced staff will make
      sure you always feel comfortable and well- informed.
    </Card.Text>
  </Card.Body>
</Card>
</div>



<div  style={{display:"inline-flex", paddingLeft:"125px"}}>
    <Card style={{ width: '18rem' ,  backgroundColor:"skyblue"}}>
  <Card.Img variant="top" src={points} height={200} />
  <Card.Body>
    <Card.Title>Cancer Rehabilitation</Card.Title>
    <Card.Text>
    We offer comprehensive cancer
    rehabilitation to support your
    Physical/emotional well being
    especially during and after cancer treatment.
      <br></br>
      <br></br>
    Our goal is to provide support
    throughtout your cancer survivrship
    We are here to help and aim to get 
    you back to your day to day
    activities and maximize recovery.
    </Card.Text>
  </Card.Body>
</Card>
</div>
 
</div>
  




</div>

        </div>
    )
}

export default Home;

