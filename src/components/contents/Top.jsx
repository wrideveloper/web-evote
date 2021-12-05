import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
    Navbar,
    Button
} from "reactstrap";
import { useHistory } from 'react-router';

const Top = ({ toggleSidebar }) => {
    const [user, setUser] = useState([]);
    let history = useHistory()

    const handleLogout = () => {
        setUser({});
        localStorage.clear();
        alert('Anda Berhasil Logout');
        history.push('/');
        window.location.reload();
    };
    console.log(user)

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
