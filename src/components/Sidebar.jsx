import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, toggle }) => (
  <div className={isOpen  ? "sidebar is-open" : "sidebar"}>
    <div className="sidebar-header text-center">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>
        <img alt="logo wri" src={process.env.PUBLIC_URL + '/images/logo-wri.png'} height={50} />
        <div><h3>E-Vote</h3></div>
      </div>
      
      <hr/>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem className="sidebar-item" >
          <NavLink tag={Link} to={"/admin/calon"} className="text-white bold text-center">
            Calon
          </NavLink>
        </NavItem>  
        <NavItem className="sidebar-item">
          <NavLink tag={Link} to={"/admin/pemilih"} className="text-white bold text-center">
            Pemilih
          </NavLink>
        </NavItem>
        <NavItem className="sidebar-item">
          <NavLink tag={Link} to={"/admin/hasil-pemilihan"} className="text-white bold text-center">
            Hasil Pemilihan
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default SideBar;
