import React from "react";
import back from "./Images/back.jpg";
import band from "./Images/band.jpg";
import old from "./Images/old.jpg";
import gabby from "./Images/gabby.jpg";
import points from "./Images/points.jpg";
import hand from "./Images/hand.jpg"
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
function Services() {
    return (
    <div>

   <div style={{display:"inline-flex"}}>
     <Card style={{ width: '18rem', backgroundColor:"skyblue"  }}>
  <Card.Img variant="top" src={back} height={200} />
  <Card.Body>
    <Card.Title>PT evaluation</Card.Title>
    <Card.Text>
      Initial assessment to establish your 
      PT needs.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> 1 hr</ListGroupItem>
    <ListGroupItem>$200</ListGroupItem>
  </ListGroup>
  <Card.Body>
  </Card.Body>
</Card>
        </div>

        <div style={{display:"inline-flex", padding:"25px"}}>
     <Card style={{ width: '18rem',  backgroundColor:"skyblue" }}>
  <Card.Img variant="top" src={band} height={200} />
  <Card.Body>
    <Card.Title>Injury Assesment</Card.Title>
    <Card.Text>
      via Zoom Conference call
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> 30 min</ListGroupItem>
    <ListGroupItem>Free</ListGroupItem>
  </ListGroup>
  <Card.Body>
  </Card.Body>
</Card>
        </div>

        <div style={{display:"inline-flex" }}>
     <Card style={{ width: '18rem',  backgroundColor:"skyblue" }}>
  <Card.Img variant="top" src={gabby} height={200} />
  <Card.Body>
    <Card.Title>Tele Rehab</Card.Title>
    <Card.Text>
      Online rehab PT evaluation
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> 1 hr</ListGroupItem>
    <ListGroupItem>$200</ListGroupItem>
  </ListGroup>
  <Card.Body>
  </Card.Body>
</Card>
        </div>

        <div style={{display:"inline-flex" , padding:"25px"}}>
     <Card style={{ width: '18rem',  backgroundColor:"skyblue" }}>
  <Card.Img variant="top" src={hand} height={200} />
  <Card.Body>
    <Card.Title>Tele Rehab</Card.Title>
    <Card.Text>
     Online rehab consultation and services
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> 1 hr</ListGroupItem>
    <ListGroupItem>$150</ListGroupItem>
  </ListGroup>
  <Card.Body>
  </Card.Body>
</Card>
        </div>

        <div style={{display:"inline-flex"}}>
     <Card style={{ width: '18rem',  backgroundColor:"skyblue" }}>
  <Card.Img variant="top" src={old} height={200} />
  <Card.Body>
    <Card.Title>Cancer Rehabilitation</Card.Title>
    <Card.Text>
    Comprehensive rehabilitation and 
    support to cancer survivorship
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> 1 hr</ListGroupItem>
    <ListGroupItem>$150</ListGroupItem>
  </ListGroup>
  <Card.Body>
  </Card.Body>
</Card>
        </div>

        <div style={{display:"inline-flex" , padding:"25px"}}>
     <Card style={{ width: '18rem',  backgroundColor:"skyblue" }}>
  <Card.Img variant="top" src={points} height={200} />
  <Card.Body>
    <Card.Title>Lymphedema Therapy</Card.Title>
    <Card.Text>
      Patient education with lymphedema 
      and self management
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> 1 hr</ListGroupItem>
    <ListGroupItem>$150</ListGroupItem>
  </ListGroup>
  <Card.Body>
  </Card.Body>
</Card>
        </div>

        <div style={{display:"inline-flex" , padding:"25px"}}>
     <Card style={{ width: '18rem',  backgroundColor:"skyblue" }}>
  <Card.Img variant="top" src={back} height={200} />
  <Card.Body>
    <Card.Title>Natural Pain Management</Card.Title>
    <Card.Text>
     Say NO to addicting Opiods and say 
     YEs to NATURAL Pain regiments.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush" >
    <ListGroupItem> 1 hr</ListGroupItem>
    <ListGroupItem>$150</ListGroupItem>
  </ListGroup>
  <Card.Body>
  </Card.Body>
</Card>
        </div>

        <div style={{display:"inline-flex"}}>
     <Card style={{ width: '18rem',  backgroundColor:"skyblue" }}>
  <Card.Img variant="top" src={band} height={200} />
  <Card.Body>
    <Card.Title>Pre and Post joint
        Replacement Rehab
    </Card.Title>
    <Card.Text>
   Shoulder, Hip, Knee and Ankle joint 
   replacement and sergeries
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush" >
    <ListGroupItem> 1 hr</ListGroupItem>
    <ListGroupItem>$150</ListGroupItem>
  </ListGroup>
  <Card.Body>
  </Card.Body>
</Card>
        </div>

        <div style={{display:"inline-flex"}}>
     <Card style={{ width: '18rem',  backgroundColor:"skyblue" }}>
  <Card.Img variant="top" src={band} height={200} />
  <Card.Body>
    <Card.Title>Manual Therapy
    </Card.Title>
    <Card.Text>
Clinical Massage, Joint Mobilization,
stretching
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush" >
    <ListGroupItem> 1 hr</ListGroupItem>
    <ListGroupItem>$150</ListGroupItem>
  </ListGroup>
  <Card.Body>
  </Card.Body>
</Card>
        </div>
    </div>
 

        
    )
}

export default Services;