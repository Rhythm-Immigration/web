import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import "../Blogs.css";

function PGWPextension() {

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
                        <h1 className="BlogTitle">Extension of Post Graduate Work Permits for up to 18 months.</h1>
                    </Row>

                    <Row>
                        <p className="BlogDate">17 March, 2023</p>
                    </Row>

                </Col>

                <Col md={4}>
                    <Image className="BlogImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/blog2.jpg?updatedAt=1680486567930" />
                </Col>

            </Row>


            <Row>
                <Col md={8}>
                    <Row>
                        <p className="BlogText">
                            International Graduates whose Post Graduate Work Permit has recently expired or is expiring, qualify to
                            extend their work permit for up to 18 months. PGWP holders will be able to apply for extension starting
                            form 6 April, 2023.
                        </p>
                    </Row>
                    <Row>
                        <p className="BlogText">
                            Foreign nationals whose PGWP has already expired in 2023 and those who were eligible for the 2022
                            PGWP facilitative measure will also be able to apply for extension of 18 months. International graduates
                            with expired work permit will be able to restore their status (even if they are beyond the 90-day
                            restoration period).
                        </p>
                    </Row>
                    <Row>
                        <p className="BlogText">
                            Eligible PGWP holders will soon receive messages starting from 6 April 2023 to provide necessary
                            information for extension of their permits.
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
                <Button className="directionsButton" onClick={() => window.history.back()}>Back</Button>
            </Row>

        </Container >
    )

};

export default PGWPextension