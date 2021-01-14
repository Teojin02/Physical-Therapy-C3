import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap"
import back from  "./Images/back.jpg"
function Yoli() {
    return (
        <div>
            <Container fluid>
                <Row>
                 <Col>
                   <Image src={back} width="200px" height="200px" />
                   <h1>
                       PT Services, Wherever, whenever YOU WANT in<br></br>
                       your home, gym, park, or workplace<br></br>
                       YOU CHOOSE   
                   </h1>
                   <br></br>
                   <br></br>
                   <h2>
                       We can visit and provide you with quality care when and where you want it.<br></br>
                       <br></br>
                   </h2>
                   <h2>
                       Our Professional team is here to guide our patinets and their <br></br>
                       families every step of the way throughtout their health journeys.
                       <br></br>
                        All our patients are eligible for this Personalized service. <br></br>
                        Schedule yours today, and we promise you'll be well-informed and <br></br>
                        confident that your health is in the best of hands.
                   </h2>
                 </Col>
                 <Col>
                 <Image src={back} width="200px" height="200px" />
                    <h1>
                        Yoli Better Body System<br></br>
                        for Optimal Health <br></br>
                        <br></br>
                        <br></br>

                        Link <br></br>
                        <br></br>
                        <br></br>

                        <h2> Weight loss/gain with or without exercise pH balance <br></br>
                        <br></br>
                            Detoxtifixacation Alkalixation Proper nutrition <br></br>
                            <br></br>
                            Boost your immune System<br></br>
                            <br></br>
                            All natural food supplements <br></br>
                            <br></br>

                        </h2>

                    </h1>

                 </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Yoli;