import React, { Component } from "react";
// import ModalFooter from "react-bootstrap/ModalFooter";
import Container from "react-bootstrap/Container";
import MediaQuery from "react-responsive";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faInstagram } from "@fortawesome/free-solid-svg-icons";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import RCIC from "../../assets/images/RCIClogo.png";
import FacebookLogo from "../../assets/Logos/Facebook Logo.png";
import InstaLogo from "../../assets/Logos/InstaLogo.png";
import LinkedinLogo from "../../assets/Logos/Linkedin.png";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="footDivOut">
                <div className="footDivIn">
                    < link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
                    <Container>
                        <Row>
                            <Col sm>&#169; 2023 Rhythm Immigration</Col>



                            <Col sm className="footCol3">
                                <a href="mailto:info@rhythmimmigration.consulting?subject=Mail from Website regarding: ">
                                    <Button className="contactButton" variant="outline-primary">Contact Us</Button>
                                </a>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm>
                                <Image className="logoContainer" src={RCIC} />
                            </Col>

                            <MediaQuery minWidth={1290}>
                                <Col sm>
                                    <ul className="list-unstyled list-inline text-center">
                                        <li className="list-inline-item">
                                            <a className="" href="https://www.facebook.com/rhythmimmigration" target="_blank" rel="noopener noreferrer">
                                                <Image className="socialLogo" src={FacebookLogo} />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="" href="https://www.instagram.com/rhythmimmigration/?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">
                                                <Image className="socialLogo" src={InstaLogo} />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="" href="https://www.linkedin.com/in/rhythm-immigration-487677257/" target="_blank" rel="noopener noreferrer">
                                                <Image className="socialLogo" src={LinkedinLogo} />
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                            </MediaQuery>

                            <MediaQuery maxWidth={1290}>
                                <Col sm>
                                    <ul className="list-unstyled list-inline text-center">
                                        <li className="list-inline-item">
                                            <a className="" href="https://www.facebook.com/rhythmimmigration" target="_blank" rel="noopener noreferrer">
                                                <Image className="socialLogo" src={FacebookLogo} />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="" href="https://www.instagram.com/rhythmimmigration/?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">
                                                <Image className="socialLogo" src={InstaLogo} />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="" href="https://www.linkedin.com/in/rhythm-immigration-487677257/" target="_blank" rel="noopener noreferrer">
                                                <Image className="socialLogo" src={LinkedinLogo} />
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                            </MediaQuery>






                            <MediaQuery minWidth={1290}>
                                <Col sm>
                                    <Row><Col sm={5} className="text-right">Business Hours :</Col> <Col sm> <b>By Appointment Only</b></Col></Row>
                                    <Row><Col sm={5} className="text-right" >Monday :</Col > <Col sm={5}>9a.m. – 7:30 p.m.</Col></Row>
                                    <Row><Col sm={5} className="text-right" >Tuesday :</Col > <Col sm={5}>9a.m. – 7:30 p.m.</Col></Row>
                                    <Row><Col sm={5} className="text-right" >Wednesday :</Col > <Col sm={5}>9a.m. – 7:30 p.m.</Col></Row>
                                    <Row><Col sm={5} className="text-right" >Thursday :</Col > <Col sm={5}>9a.m. – 7:30 p.m.</Col></Row>
                                    <Row><Col sm={5} className="text-right" >Friday :</Col > <Col sm={5}>9a.m. – 7:30 p.m.</Col></Row>
                                    <Row><Col sm={5} className="text-right" >Saturday :</Col > <Col sm={5}>9a.m. – 7:30 p.m.</Col></Row>
                                    <Row><Col sm={5} className="text-right" >Sunday :</Col > <Col sm={5}>9a.m. – 7:30 p.m.</Col></Row>
                                </Col>
                            </MediaQuery>

                            <MediaQuery maxWidth={1290}>
                                <Col sm>
                                    <Row><Col sm={5} className="text-left">Business Hours :</Col> <Col sm> <b>By Appointment Only</b></Col></Row>
                                    <Row><Col sm={4} className="text-left" >Monday :</Col > <Col sm={5}>9a.m. – 7:30 p.m.</Col></Row>
                                    <Row><Col sm={4} className="text-left" >Tuesday :</Col > <Col sm={5}>9a.m. – 7:30 p.m.</Col></Row>
                                    <Row><Col sm={4} className="text-left" >Wednesday :</Col > <Col sm={5}>9a.m. – 7:30 p.m.</Col></Row>
                                    <Row><Col sm={4} className="text-left" >Thursday :</Col > <Col sm={5}>9a.m. – 7:30 p.m.</Col></Row>
                                    <Row><Col sm={4} className="text-left" >Friday :</Col > <Col sm={5}>9a.m. – 7:30 p.m.</Col></Row>
                                    <Row><Col sm={4} className="text-left" >Saturday :</Col > <Col sm={5}>9a.m. – 7:30 p.m.</Col></Row>
                                    <Row><Col sm={4} className="text-left" >Sunday :</Col > <Col sm={5}>9a.m. – 7:30 p.m.</Col></Row>
                                </Col>
                            </MediaQuery>
                        </Row>
                    </Container>
                </div>
            </div >
        )
    };
};

export default Footer