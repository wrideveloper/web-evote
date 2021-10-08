import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button
} from "reactstrap";
const Top = ({ toggleSidebar }) => {
    return (
        <Navbar
            light
            className="navbar mb-5 bg-white flex justify-content-between"
            expand="md"
        >
        <Button color="warning" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faAlignLeft} />
        </Button>
        <Button type="button" style={{backgroundColor: '#3F3D56'}}>Log Out</Button>
        </Navbar>
    )
}

export default Top
