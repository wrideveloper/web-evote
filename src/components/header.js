import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css"

function Header() {
  const [user, setUser] = useState([]);

  const handleLogout = () => {
    setUser({});
    localStorage.clear();
    alert('Anda Berhasil Logout')
    window.location.reload()
  };

  return (
    <nav className="navbar">
      <img className="logo" alt="logo" src={process.env.PUBLIC_URL + '/images/logo-wri-banner2.png'} />
      <ul className="nav-links">
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/hasil-vote" className="hasil">
          <li>Lihat hasil vote</li>
        </Link>
        <Link to="#" className="logout" onClick={handleLogout}>
          <li>Log Out</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;