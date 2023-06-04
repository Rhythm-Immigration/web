import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import "../Blogs.css";

function StudyLength() {


    return (
        <Container className="rootContainer">
            < link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>

            <Row>
                <Col md={8}>
                    <Row>
                        <p className="blogHeading">BLOG</p>
                    </Row>

                    <Row>
                        <h1 className="BlogTitle">Length of online studies counted towards your Post Graduate Work Permit</h1>
                    </Row>

                    <Row>
                        <p className="BlogDate">30 May, 2023</p>
                    </Row>

                </Col>

                <Col md={4}>
                    <Image className="BlogImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/studyLength.jpg?updatedAt=1685912201886" />
                </Col>

            </Row>


            <Row>
                <Col md={8}>
                    <Row>
                        <p className="BlogText">
                            For students who are inside Canada (on a valid Study Permit), the time spent while studying online will count towards the length of
                            their Post Graduate Work Permit until 31 August 2023.

                        </p>
                    </Row>
                    <Row>
                        <p className="BlogText">
                            However, starting from 01 September 2023, students must complete 50% of their programs in-class inside Canada in order to be able to
                            count that time period for your Post Graduate Work Permit.
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

export default StudyLength