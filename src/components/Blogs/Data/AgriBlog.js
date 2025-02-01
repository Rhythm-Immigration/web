import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import $ from 'jquery';

import "../Blogs.css";

function AgriBlog() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');

    // const [show, setShow] = React.useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    return (
        <Container className="rootContainer">
            < link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>

            <Row>
                <Col md={8}>
                    <Row>
                        <p className="blogHeading">BLOG</p>
                    </Row>

                    <Row>
                        <h1 className="BlogTitle">Agri-Food Pilot update.</h1>
                    </Row>

                    <Row>
                        <p className="BlogDate">08 May, 2023</p>
                    </Row>

                </Col>

                <Col md={4}>
                    <Image className="BlogImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/adrian-infernus-BN6iQEVN0ZQ-unsplash.jpg?updatedAt=1683607065299" />
                </Col>

            </Row>


            <Row>
                <Col md={8}>
                    <Row>
                        <p className="BlogText">
                            Agri-Food Pilot program is now extended until 14 May 2025. This pilot provides pathway to
                            permanent residence for experienced, non-seasonal workers in specific industries and with specific
                            occupations. The pilot program will have a maximum limit of 2750 applications each year. However,
                            annual limit for individual occupations is removed.
                        </p>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col md={8}>
                    {/* can put here about the author */}

                </Col>
            </Row>


            <Row>
                <a href="/#/blogs"> <Button className="directionsButton">Back</Button> </a>
            </Row>



        </Container >
    )

};

export default AgriBlog