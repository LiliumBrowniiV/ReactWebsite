import React from 'react';
import { Nav, NavLink, Bars } from "./NavbarElement";
import background from "./Home.jpg";
const index = () => {
  return (
    <Nav style  = {{ backgroundImage: `url(${background})`}}>
      <NavLink to = "/about" activestyle>
         About
        </NavLink>    
        <NavLink to = "/contact" activestyle>
        contact
        </NavLink>
      </Nav>
  )
}

export default index
