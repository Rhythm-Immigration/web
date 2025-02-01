import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import $ from 'jquery';

import "../Blogs.css";

function CategoryBased() {
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
                        <h1 className="BlogTitle">Canada has finally launched the first-ever new process of category-based draws after long wait and speculations.</h1>
                    </Row>

                    <Row>
                        <p className="BlogDate">31 May, 2023</p>
                    </Row>

                </Col>

                <Col md={4}>
                    <Image className="BlogImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/category-based.jpg?updatedAt=1685914745086" />
                </Col>

            </Row>


            <Row>
                <Col md={8}>
                    <Row>
                        <p className="BlogText">
                            On 31 May 2023, The Honourable Sean Fraser, Minister of
                            Immigration, Refugees and Citizenship announced the launch of
                            category-based draws for Express Entry. Invitations will be issued
                            to candidates with specific skills, training or language ability. More
                            information will be made available in coming weeks.
                        </p>
                    </Row>

                    <Row>
                        <p className="BlogText">
                            As per the new release, category-based invitations will focus on
                            candidates with strong French Language proficiency or work
                            experience in the fields of healthcare, science, technology,
                            engineering and mathematics (STEM) professions, trades, such as
                            carpenters, plumbers, contractors, transport, agriculture and agri-
                            food.
                        </p>
                    </Row>

                    <Row>
                        <p className="BlogText">
                            The first category-based invitation to apply are expected to be
                            sent in summer 2023.
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

export default CategoryBased