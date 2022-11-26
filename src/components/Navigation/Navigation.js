import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navigation.css";
import { Container, Image } from "react-bootstrap";
import Logo from "../../assets/Logos/logo.png";
import NavDropdown from "react-bootstrap/Navbar";



class Navigation extends Component {
    render() {

        return (

            <div className="outNavBar">
                <div className="inNavBar">
                    <Navbar collapseOnSelect expand="lg" className="" >
                        <Container>
                            <Navbar.Brand href='/#/'><Image className="logoSize" src={Logo} /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link href='/#/'><h4 className="linkColor">HOME</h4></Nav.Link>
                                    <Nav.Link href='/#/services'><h4 className="linkColor">OUR SERVICES</h4></Nav.Link>
                                    {/* <Nav.Link href='/#/projects'><h4 className="linkColor">About Us</h4></Nav.Link> */}
                                    {/* <Nav.Link href="#pricing"><h4 className="linkColor">ASSESSMENT</h4></Nav.Link> */}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div></div>
        )
    };
};

export default Navigation