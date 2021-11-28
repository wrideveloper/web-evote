import React, { useState } from "react";
import { NavLink as Linked } from "react-router-dom";
import "./header.css";
import { Navbar, Nav, NavbarToggler, Collapse, NavbarBrand, NavLink, NavItem, Container } from 'reactstrap';
import { useHistory } from 'react-router-dom'
function Header() {
  let history = useHistory();
  const [user, setUser] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
  const handleLogout = () => {
    setUser({});
    localStorage.clear();
    alert('Anda Berhasil Logout')
    history.push('/')
    window.location.reload()
  };
  console.log(user)
  
  return (
    <>
    <Navbar dark expand="md">
      <Container fluid>
      <NavbarBrand tag={Linked} to="/"><img className="logo" alt="logo" src={process.env.PUBLIC_URL + '/images/logo-wri-banner2.png'} /></NavbarBrand>
        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
          <Collapse isOpen={isOpen} navbar className="justify-content-end">
              <Nav className="mr-auto" navbar>
                  <NavItem>
                      <NavLink tag={Linked} to="/" exact activeClassName="text-active">Home</NavLink>
                  </NavItem>
                  <NavItem className="persen">
                      <NavLink tag={Linked} to="/statistik" activeClassName="text-active">Lihat hasil vote</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink onClick={handleLogout} activeClassName="text-active">Log Out</NavLink>
                  </NavItem>
              </Nav>
          </Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;