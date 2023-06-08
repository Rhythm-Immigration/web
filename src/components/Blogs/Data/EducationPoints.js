import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import $ from 'jquery';

import "../Blogs.css";

function EducationPoints() {

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
                        <h1 className="BlogTitle">Update on Canadian education points in Express Entry</h1>
                    </Row>

                    <Row>
                        {/* <p className="BlogDate">08 May, 2023</p> */}
                    </Row>

                </Col>

                <Col md={4}>
                    <Image className="BlogImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/education-points.jpg?updatedAt=1683613343047" />
                </Col>

            </Row>


            <Row>
                <Col md={8}>
                    <Row>
                        <p className="BlogText">
                            If you earned a Canadian degree, diploma or certificate and completed any part of your program of
                            study or training between March 2020 and August 2022, you’re now eligible for Canadian educational
                            credential points even if you completed the program entirely
                        </p>
                    </Row>

                    <Row>
                        {/* <p className="BlogText">
                            Foreign nationals whose PGWP has already expired in 2023 and those who were eligible for the 2022
                            PGWP facilitative measure will also be able to apply for extension of 18 months. International graduates
                            with expired work permit will be able to restore their status (even if they are beyond the 90-day
                            restoration period).
                        </p> */}
                        <ul className="BlogText">
                            <li className="BlogText">&bull; through distance learning;</li>
                            <li className="BlogText">&bull; from outside Canada; or</li>
                            <li className="BlogText">&bull; through part-time studies.</li>
                        </ul>

                    </Row>
                    <Row>
                        <p className="BlogText">
                            Update your Express Entry profile to ensure you have the best possible chance to be invited to apply
                            through Express Entry.
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

export default EducationPoints