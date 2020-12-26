import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Navtabs() {
    return (
        <div>
         <Navbar bg="white" expand="lg"  style={{backgroundColor:"lightblue", padding:"0"}}>
  <Navbar.Toggle  aria-controls="basic-navbar-nav" />
  <Navbar.Collapse  style={{backgroundColor:"lightblue" , padding:"0"}} id="basic-navbar-nav">
    <Nav className="mr-auto" style={{backgroundColor:"lightblue", padding:"0" }}>
    <Link href="#Home" style={{ fontSize:"30px", color:"black", marginRight:"15px", marginLeft:"20px", flex:"10"}} to="/Home">Home</Link>
     
     <Link style={{ fontSize:"30px", color:"black", marginRight:"15px"}} to="/Services"> Services</Link>
    
     <Link style={{ fontSize:"30px", color:"black", marginRight:"15px"}} to ="/Products">Products</Link>

    <Link style={{ fontSize:"30px", color:"black", marginRight:"15px"}} to="/News">News</Link>

    <Link style={{ fontSize:"30px", color:"black", marginRight:"15px"}} to ="/About">About C3 PT</Link>
    
     <Link style={{ fontSize:"30px", color:"black", marginRight:"15px"}} to ="/More">More</Link>
   
    </Nav>
    <div>
    <p>Email:<a href="mailto:clarissa@c3physicaltherapy.net">clarissa@c3physicaltherapy.net</a> </p>
    <p> Call:<a href="tel:8012526995">801-252-6995</a> </p>
    </div>
  </Navbar.Collapse>
</Navbar>

        </div>
    )
}

export default Navtabs;