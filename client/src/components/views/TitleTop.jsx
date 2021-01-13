import React from "react";
 import {Jumbotron, Container} from "react-bootstrap";
 import { NavLink } from "react-router-dom";
 import { useSelector } from "react-redux";

function TitleTop() {
  const { isAuth, user } = useSelector((state) => state.user);
    return (
        <div>
         <Jumbotron fluid="sm"  style={{backgroundColor:"skyblue"}}>
  <Container fluid="sm"  style={{backgroundColor:"skyblue", textAlign:"center"}}>
    <h1>C3 PHYSICAL THERAPY HEALTH & WELLNESS SERVICES</h1>
    <p style={{textAlign:"center"}}>
   YOUR HEALTH & SAFETY COMES FIRST
    </p>
    <div>
      {isAuth ? (
        <div style={{textAlign:"right"}}>
          <NavLink className='inactive' activeClassName='active' to='/my-profile'>
            {user.username}
          </NavLink>
          <NavLink className='inactive logout' activeClassName='active' to='/logout'>
            Logout
          </NavLink>
        </div>
      ) : (
        <div style={{textAlign:"right"}}>
          <NavLink className='inactive' activeClassName='active' to='/login'>
            Login
          </NavLink>
          <NavLink className='inactive ' activeClassName='active' to='/register'>
            Register
          </NavLink>
        </div>
      )}
    </div>

  </Container>
</Jumbotron>
        </div>
    )
}

export default TitleTop;

