import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import $ from 'jquery';

import "../Blogs.css";

function Blog1() {
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
                        <h1 className="BlogTitle">Launch of new economic pathway under the Economic Mobility Pathways Pilot (EMPP)</h1>
                    </Row>

                    <Row>
                        <p className="BlogDate">27 March, 2023</p>
                    </Row>

                </Col>

                <Col md={4}>
                    <Image className="BlogImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/blog1.jpg?updatedAt=1680339812269" />
                </Col>

            </Row>


            <Row>
                <Col md={8}>
                    <Row>
                        <p className="BlogText">
                            The new economic pathway under the EMPP will help the employers to overcome labour shortages in
                            key occupations by hiring skilled refuges and other qualified displaced individuals. This new pathway will
                            open in the summer of 2023 as per reports. Refugees and other displaced people who qualify under any
                            National Occupation Classification 2021 category (TEER 0-5) will be hired.
                        </p>
                    </Row>
                    <Row>
                        <p className="BlogText">
                            The new pathway will give opportunities to skilled individuals who has experience in in-demand jobs like
                            nurse aides, personal support workers, long-term care aides, software engineers, web designers,
                            mechanical and electrical engineers and technicians, teachers, tourism and hospitality workers, and
                            truck and delivery service drivers. This program will help both the employers and the qualified
                            candidates. Employers will be able to meet the labour market needs by accessing this pool of
                            candidates. The candidates will have an opportunity to restart their careers and their lives in safety with
                            their families in Canada.
                        </p>
                    </Row>
                    <Row>
                        <p className="BlogText">
                            The EMPP program will be more flexible in terms of eligibility (more details to follow) which will allow
                            displaced people to apply easily. The application process will be easier and faster. Most of the
                            applications are expected to be processed within 6 months. Applicants will also benefit form some fee
                            waivers and using loans to fund their travel, settlement and start-up cost.
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

export default Blog1