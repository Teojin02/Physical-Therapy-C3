import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
  const { username } = useSelector((state) => state.user.user);

  return (
    <div className='container'>
   <Container fluid >
     <div>
     Hey! <b>{username}</b>
     </div>
   </Container>
    </div>
  );
};

export default Profile;
