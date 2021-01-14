import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const { isAuth, user } = useSelector((state) => state.user);
  return (
    <nav className='nav'>
      <NavLink className='inactive ' activeClassName='active' to='/home'>
        Home
      </NavLink>
      <NavLink className='inactive ' activeClassName='active' to='/Services'>
        Services
      </NavLink>
      <NavLink className='inactive ' activeClassName='active' to='/About'>
        About
      </NavLink>
      <NavLink className='inactive ' activeClassName='active' to='/More'>
        More
      </NavLink>

      {isAuth ? (
        <div style={{textAlign:"right"}}>
      <NavLink className='inactive ' activeClassName='active' to='/Appointment'>
        Appointment
      </NavLink>

      <NavLink className='inactive ' activeClassName='active' to='/Products'>
        Products
      </NavLink>

      <NavLink className='inactive ' activeClassName='active' to='/News'>
        News
      </NavLink>


        </div>
      ) : (
        <div style={{textAlign:"right"}}>
         
        </div>
      )}

    </nav>
  );
}
