import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import "../Blogs.css";

function SkilledAmount() {

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
                        <h1 className="BlogTitle">Minimum amount required to immigrate to Canada for skilled immigrants (Express Entry).
                        </h1>
                    </Row>

                    <Row>
                        <p className="BlogDate">Updated as on 25 April 2023</p>
                    </Row>

                </Col>

                <Col md={4}>
                    <Image className="BlogImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/amount-canada.jpg?updatedAt=1683777843915" />
                </Col>

            </Row>


            <Row>
                <Col md={8}>

                    <Row>
                        <p className="BlogText">
                            Please reffer to the table below for information regarding minimum amount required to immigrate to Canada for skilled immigrants (Express Entry). Updated as on 25 April 2023.
                        </p>
                    </Row>

                    <Row>
                        <Container>
                            <Row className="amounttableHeader">
                                <Col>Number of Family Members</Col>
                                <Col>Funds Required (In Canadian Dollars)</Col>
                            </Row>

                            <Row className="amountTableDataColA">
                                <Col>1</Col>
                                <Col>$13,757</Col>
                            </Row>
                            <Row className="amountTableDataColB">
                                <Col>2</Col>
                                <Col>$17,127</Col>
                            </Row>
                            <Row className="amountTableDataColA">
                                <Col>3</Col>
                                <Col>$21,055</Col>
                            </Row>
                            <Row className="amountTableDataColB">
                                <Col>4</Col>
                                <Col>$25,564</Col>
                            </Row>
                            <Row className="amountTableDataColA">
                                <Col>5</Col>
                                <Col>$28,994</Col>
                            </Row>
                            <Row className="amountTableDataColB">
                                <Col>6</Col>
                                <Col>$32,700</Col>
                            </Row>
                            <Row className="amountTableDataColA">
                                <Col>7</Col>
                                <Col>$36,407</Col>
                            </Row>
                            <Row className="amountTableDataColB">
                                <Col>If more than 7 people, for each additional family member</Col>
                                <Col>$3,706</Col>
                            </Row>
                        </Container>
                    </Row>

                    {/* <Row>
                        <ul className="BlogText">
                            <li className="BlogText">&bull; through distance learning;</li>
                            <li className="BlogText">&bull; from outside Canada; or</li>
                            <li className="BlogText">&bull; through part-time studies.</li>
                        </ul>

                    </Row> */}

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

export default SkilledAmount