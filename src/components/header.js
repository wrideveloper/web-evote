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
    const result = window.confirm('Apakah anda yakin ingin keluar?')
    console.log("hasil confirm", result)
    if(result === true) {
      setUser({});
      localStorage.clear();
      history.push('/')
      window.location.reload()
    }
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
                  <NavItem className="nav-items">
                      <NavLink tag={Linked} to="/" exact activeClassName="nav-links text-active" className="nav-links">Home</NavLink>
                  </NavItem>
                  <NavItem className="persen nav-items">
                      <NavLink tag={Linked} to="/statistik" activeClassName="nav-links text-active" className="nav-links">Hasil Vote</NavLink>
                  </NavItem>
                  <NavItem className="nav-items">
                      <NavLink style={{ cursor: 'pointer' }} onClick={handleLogout} activeClassName="nav-links text-active"  className="nav-links">Log Out</NavLink>
                  </NavItem>
              </Nav>
          </Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;