import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
    Navbar,
    Button
} from "reactstrap";
const Top = ({ toggleSidebar }) => {
    const [user, setUser] = useState([]);

    const handleLogout = () => {
        setUser({});
        localStorage.clear();
        alert('Anda Berhasil Logout')
        window.location.reload()
    };

    return (
        <Navbar
            light
            className="navbar mb-5 bg-white flex justify-content-between"
            expand="md"
        >
            <Button color="warning" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faAlignLeft} />
            </Button>
            <Button type="button" style={{ backgroundColor: '#3F3D56' }} onClick={handleLogout}>Log Out</Button>
        </Navbar>
    )
}

export default Top
