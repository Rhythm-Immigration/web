import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import $ from 'jquery';

import "../Blogs.css";

function RevisedStudentsProgram() {
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
                        <h1 className="BlogTitle">Revised requirements for international students</h1>
                    </Row>

                    <Row>
                        <p className="BlogDate">07 Dec, 2023</p>
                    </Row>

                </Col>

                <Col md={4}>
                    <Image className="BlogImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/student_Ax0-jBi1r?updatedAt=1702019476682" />
                </Col>

            </Row>


            <Row>
                <Col md={8}>



                    <ol className="BlogText">
                        <li className="BlogText">
                            <b>1. Financial Requirement – Starting 01 January 2024, financial requirement for study
                                permit applicants will be raised</b> so that international students are financially prepared
                            for their life in Canada. Currently students are required to have $10,000 as cost-of living,
                            which has not changed since early 2000s. A <b>single applicant</b> is now required to show
                            that they have <b>$20,634 in addition to their first-year tuition fee and travel cost. This
                                change will apply to all study permit applications received on or after 01 January 2024.</b> < br />
                            < br />
                            Moving forward, this amount will be adjusted each year based on low-income cut-off
                            (LICO) updates from Statistics Canada.
                        </li>
                        <li className="BlogText">
                            <b>2. Limiting visas – </b>as stated by Minister Miller, "Ahead of September 2024 semester, we
                            are prepared to take necessary measures, including limiting visas, to ensure that
                            designated learning institutions provide adequate and sufficient student supports as
                            part of the academic experience."
                        </li>
                        <li className="BlogText">
                            <b>3. Waiver on 20 hour per week limit – </b> The <b>waiver on the 20-hour-per-week limit</b> on the
                            number of hours international students are allowed to work off campus while class is in
                            session will be <b>extended to April 30, 2024</b>. International <b>students already in Canada</b>, as
                            well as applicants who has <b>submitted their application</b> for study permit as of
                            <b>December 7, 2023</b> will be able to work more that 20 hours per week, off-campus.
                        </li>
                        <li className="BlogText">
                            <b>4. Online studies toward Post Graduate Work Permit -</b> Students who begin a study
                            program before September 1, 2024 will be able to count time spent studying online
                            towards the length of a future post-graduation work permit, as long as it constitutes less
                            than 50% of the program of study. This measure will no longer apply to students who
                            begin a study program on or after that date.
                        </li>
                        <li className="BlogText">
                            <b>5. 18 months extension to Post Graduate Work permit holders – </b>Foreign nationals with a
                            post-graduate work permit expiring up to December 31, 2023 remain eligible to apply
                            for an extension of 18 months. This temporary policy will not be extended further.
                        </li>
                    </ol>

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

export default RevisedStudentsProgram