import React, { useState } from "react";
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavLink, NavbarText } from 'reactstrap'
import { Link } from "react-router-dom";
import "./header.css"

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleTogle = () => setIsOpen(prev => !prev)

  return (
    <Navbar dark expand="md">
       <NavbarBrand href="/evote">
        <img className="logo" alt="logo" src={process.env.PUBLIC_URL + '/images/logo-wri-banner2.png'} />
      </NavbarBrand>
      <NavbarToggler onClick={handleTogle} style={{marginRight: 10}} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="flex m-md-auto" navbar>
          <NavItem >
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" active>Lihathasil vote</NavLink>
          </NavItem>
          <NavItem >
            <NavLink href="#">LogOut</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;