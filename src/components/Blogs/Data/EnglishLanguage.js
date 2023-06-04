import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import "../Blogs.css";

function EnglishLanguage() {


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
                    <Image className="BlogImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/english-language_1_.jpg?updatedAt=1685914019159" />
                </Col>

            </Row>


            <Row>
                <Col md={8}>
                    <Row>
                        <p className="BlogText">
                            Effective mid August 2023, IRCC will start accepting the following additional English language tests for SDS applicants. The newly eligible tests are:
                        </p>
                    </Row>

                    <ul className="BlogText">
                        <li className="BlogText">&bull; CAEL</li>
                        <li className="BlogText">&bull; PTA Academic</li>
                        <li className="BlogText">&bull; TOEFL iBT Test</li>
                    </ul>

                    <Row>
                        <p className="BlogText">
                            Currently IELTS Academic and IELTS General with a score of 6.0 or higher in each (listening, Reading, Writing, Speaking) skill are the only tests that are
                            accepted for SDS applicants.
                        </p>
                    </Row>

                    <Row>
                        <p className="BlogText">
                            Test takers who choose to take CAEL or PTE Academic will need a minimum score of 60 and the ones who choose TOEFL iBT test will require a minimum score of 83.
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

export default EnglishLanguage