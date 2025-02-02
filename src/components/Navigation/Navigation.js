import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import RCIC from "../../assets/images/RCIClogo.png";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navigation.css";
import { Container, Image } from "react-bootstrap";
import Logo from "../../assets/Logos/logo.png";
import WhatsAppGreen from "../../assets/Logos/WAG.png"
// import NavDropdown from "react-bootstrap/Navbar";



class Navigation extends Component {
    render() {

        return (

            <div className="outNavBar">
                <div className="inNavBar">
                    <Navbar collapseOnSelect expand="lg" className="" >
                        <Container>
                            <Navbar.Brand href='/#/'><Image className="logoSize" src={Logo} /> </Navbar.Brand><Image className="logoSize" src={RCIC} />
                            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                            {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
                            <Nav className="ml-auto">
                                {/* <Nav.Link href='/#/'><h4 className="linkColor">HOME</h4></Nav.Link> */}
                                {/* <Nav.Link href='/#/services'><h4 className="linkColor">OUR SERVICES</h4></Nav.Link> */}

                                {/* <Nav.Link href=''><h4 className="navInfo">FREE INITIAL CONSULTATION</h4></Nav.Link>
                                <Nav.Link href='tel:+16049061717'><Button className="navButton" variant="outline-primary">Call | <Image className="wWhatsApplogo whatsApplogoSize" src={WhatsAppWhite} /> : +1 (604) 906-1717</Button></Nav.Link>
                                <Nav.Link href='tel:+918847528783'><Button className="navButton" variant="outline-primary">Call | <Image className="whatsApplogoSize" src={WhatsAppGreen} /> : +91 88475-28783</Button></Nav.Link> */}

                                <Row>
                                    <Col>
                                        <Nav.Link href='' className="navInfoLink"><h4 className="navInfo">FREE INITIAL CONSULTATION</h4></Nav.Link>
                                    </Col>

                                    <Col>
                                        <Row>
                                            <Nav.Link href='tel:+16049061717'><Button className="navButton" variant="outline-primary">Call | <Image className="whatsApplogoSize" src={WhatsAppGreen} /> +1 (604)906-1717</Button></Nav.Link>
                                        </Row>
                                        <Row>
                                            <Nav.Link href='tel:+918847528783'><Button className="navButton" variant="outline-primary">Call | <Image className="whatsApplogoSize" src={WhatsAppGreen} /> +91 88475-28783</Button></Nav.Link>
                                        </Row>
                                    </Col>
                                </Row>




                                {/* <Nav.Link href='/#/projects'><h4 className="linkColor">About Us</h4></Nav.Link> */}
                                {/* <Nav.Link href="#pricing"><h4 className="linkColor">ASSESSMENT</h4></Nav.Link> */}
                            </Nav>
                            {/* </Navbar.Collapse> */}
                        </Container>
                    </Navbar>
                </div>
                <Container>
                    <Navbar collapseOnSelect expand="lg" variant="dark" className="" sticky="top">
                        <Container>

                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="m-auto">
                                    <Nav.Link href='/#/'><h4 className="linkColor">HOME</h4></Nav.Link>
                                    <Nav.Link href='/#/services'><h4 className="linkColor">OUR SERVICES</h4></Nav.Link>
                                    <Nav.Link href='/#/blogs'><h4 className="linkColor">BLOGS</h4></Nav.Link>
                                    <Nav.Link href='/#/draws'><h4 className="linkColor">EXPRESS ENTRY DRAWS</h4></Nav.Link>



                                    {/* <Nav.Link href='/#/projects'><h4 className="linkColor">About Us</h4></Nav.Link> */}
                                    {/* <Nav.Link href="#pricing"><h4 className="linkColor">ASSESSMENT</h4></Nav.Link> */}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </div>
        )
    };
};

export default Navigation