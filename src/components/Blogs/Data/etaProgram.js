import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import $ from 'jquery';

import "../Blogs.css";

function EtaProgram() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');


    return (
        <Container className="rootContainer">
            < link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>

            <Row>
                <Col md={8}>
                    <Row>
                        <p className="blogHeading">BLOG</p>
                    </Row>

                    <Row>
                        <h1 className="BlogTitle">Eligible travellers from 13 newly added countries qualify for visa-free air travel to Canada through eTA (Electronic Travel Authorization) program</h1>
                    </Row>

                    <Row>
                        <p className="BlogDate">06 June, 2023</p>
                    </Row>

                </Col>

                <Col md={4}>
                    <Image className="BlogImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/eta-program.jpg?updatedAt=1686196700273" />
                </Col>

            </Row>


            <Row>
                <Col md={8}>
                    <Row>
                        <p className="BlogText">
                            Effective 06 June 2023, eligible travellers from the following countries can apply for an eTA instead of a visitor visa.
                        </p>
                    </Row>

                    <ul className="BlogText">
                        <li className="BlogText">&bull; Antigua and Barbuda</li>
                        <li className="BlogText">&bull; Argentina</li>
                        <li className="BlogText">&bull; Costa Rica</li>
                        <li className="BlogText">&bull; Morocco</li>
                        <li className="BlogText">&bull; Panama</li>
                        <li className="BlogText">&bull; Philippines</li>
                        <li className="BlogText">&bull; St. Kitts and Nevis</li>
                        <li className="BlogText">&bull; St. Lucia</li>
                        <li className="BlogText">&bull; St. Vincent and the Grenadines</li>
                        <li className="BlogText">&bull; Seychelles</li>
                        <li className="BlogText">&bull; Thailand</li>
                        <li className="BlogText">&bull; Trinidad and Tobago</li>
                        <li className="BlogText">&bull; Uruguay</li>
                    </ul>

                    <Row>
                        <p className="BlogText">
                            Conditions to apply for eTA: < br />
                            - Currently hold a valid United States non-immigrant visa or have held a Canadian visa in the last 10 years. < br />
                            - Air travellers can visit Canada for a period of 6 months for business or leisure activities.
                        </p>
                    </Row>

                    <Row>
                        <p className="BlogText font-weight-bold">
                            NOTE - For those who are not eligible for an eTA, or who are travelling to Canada by means other than air (for example,
                            by car, bus, train and boat—including by cruise ship), will still need a visitor visa.
                        </p>
                    </Row>

                    <Row>
                        <p className="BlogText">
                            It will not only make the air travel faster, easier and affordable, but also help grow Canada's economy. This will also help
                            reduce the workload and improve the processing time, benefitting other applicants.
                        </p>
                    </Row>

                    <Row>
                        <p className="BlogText">
                            Individuals who already have a valid visa can continue to use it to travel to Canada.
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

export default EtaProgram