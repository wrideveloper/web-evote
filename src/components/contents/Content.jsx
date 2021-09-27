import React from 'react'
import { Container } from "reactstrap";
import { Switch } from "react-router-dom";
import Top from "./Top";

const Content = ({ sidebarIsOpen, togleSidebar, children}) => {
    return (
        <Container fluid className={sidebarIsOpen ?  "content is-open" : "content" }>
            <Top toggleSidebar={togleSidebar} />
            <Switch>{children}</Switch>
        </Container>
    )
}

export default Content
