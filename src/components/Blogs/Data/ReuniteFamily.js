import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import "../Blogs.css";

function ReuniteFamily() {


    return (
        <Container className="rootContainer">
            < link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>

            <Row>
                <Col md={8}>
                    <Row>
                        <p className="blogHeading">BLOG</p>
                    </Row>

                    <Row>
                        <h1 className="BlogTitle">Reuniting family members and extending work permits for additional 18 months</h1>
                    </Row>

                    <Row>
                        <p className="BlogDate">26 May, 2023</p>
                    </Row>

                </Col>

                <Col md={4}>
                    <Image className="BlogImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/reunite-family.jpg?updatedAt=1685915528285" />
                </Col>

            </Row>


            <Row>
                <Col md={8}>
                    <Row>
                        <p className="BlogText">
                            Canada is committed in reuniting family members through new
                            measures and address labour shortages as well. These new
                            measures will not only help the families reunite more quickly but
                            also give them an opportunity to support themselves once they
                            arrive in Canada. The new measure will include:
                        </p>
                    </Row>

                    <ul className="BlogText">
                        <li className="BlogText">&bull; faster temporary resident visa (TRV) processing times for spousal applicants</li>
                        <li className="BlogText">&bull; new and dedicated processing tools for spousal TRV applicants</li>
                        <li className="BlogText">&bull; a new open work permit for spousal and family class applicants</li>
                        <li className="BlogText">&bull; open work permit extensions for open work permit holders expiring between August 1 and the end of 2023</li>
                    </ul>

                    <Row>
                        <p className="BlogText">
                            Processing time for these applications is projected to be 30 days.
                        </p>
                    </Row>

                    <Row>
                        <p className="BlogText">
                            Canada has also made open work permits available for spousal
                            applicants and their dependent children who reside with their
                            sponsor in Canada and have temporary resident status. Spouses,
                            partners and dependants are now able to apply for and receive an
                            open work permit as soon as they submit a complete permanent
                            residence application under the spouse or common-law partner in
                            Canada class (SPCLC) or other family class programs.
                        </p>
                    </Row>

                    <Row>
                        <p className="BlogText">
                            Finally, Minister Fraser announced that spousal applicants, along
                            with other open work permit holders, whose open work permits
                            expire between August 1 and the end of 2023, will be able to
                            extend their work permits for an additional 18 months. A similar
                            option was recently offered to many with expiring post-
                            graduation work permits.
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

export default ReuniteFamily