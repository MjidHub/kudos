import React, { Component } from "react";
import {Nav, Navbar} from "react-bootstrap";
import "./top-bar.css";

class TopBar extends Component {
    render() {
        return(
            <Navbar style={{marginBottom: "0", borderRadius:"0"}} collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                        <Nav.Link href="/login">Log In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default TopBar;