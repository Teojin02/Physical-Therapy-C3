import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar() {

  return (
    <nav className='nav'>
      <NavLink className='inactive ' activeClassName='active' to='/home'>
        Home
      </NavLink>
      <NavLink className='inactive ' activeClassName='active' to='/Services'>
        Services
      </NavLink>
      <NavLink className='inactive ' activeClassName='active' to='/Products'>
        Products
      </NavLink>
      <NavLink className='inactive ' activeClassName='active' to='/News'>
        News
      </NavLink>
      <NavLink className='inactive ' activeClassName='active' to='/About'>
        About
      </NavLink>
      <NavLink className='inactive ' activeClassName='active' to='/More'>
        More
      </NavLink>
    </nav>
  );
}
