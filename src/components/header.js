import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

function Header() {
  return (
    <nav className="navbar">
      <img className="logo" alt="logo" src={process.env.PUBLIC_URL + '/images/logo-wri-banner2.png'} />
      <ul className="nav-links">
        <Link to="#" className="home">
          <li>Home</li>
        </Link>
        <Link to="#" className="hasil">
          <li>Lihat hasil vote</li>
        </Link>
        <Link to="#" className="logout">
          <li>Log Out</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;