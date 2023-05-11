import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Image from "react-bootstrap/Image";

import "../Draws.css";

function ExpressEntry() {


    return (
        <Container className="tableContainer">
            < link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>

            <Row>
                <p className="blogHeading">RECENT DRAWS</p>
            </Row>

            <Container className="tableOverflow">

                <Row className="tableHeader">
                    <Col className="tableHeaderCol"><h1>Draw No.</h1></Col>
                    <Col className="tableHeaderCol"><h1>Draw Date</h1></Col>
                    <Col className="tableHeaderCol"><h1>CRS</h1></Col>
                    <Col className="tableHeaderCol"><h1>Program</h1></Col>
                    <Col className="tableHeaderCol"><h1>No. of invitations issued</h1></Col>
                    <Col className="tableHeaderCol"><h1>Tie Breaking Rule</h1></Col>
                </Row>

                <Row className="tableDataColB">
                    <Col >#248</Col>
                    <Col >10 May, 2023</Col>
                    <Col >691</Col>
                    <Col >Provincial Nominee Program</Col>
                    <Col >589</Col>
                    <Col >08 March 2023 at 16:42:17 UTC</Col>
                </Row>

                <Row className="tableDataColA">
                    <Col >#247</Col>
                    <Col >26 April, 2023</Col>
                    <Col >483</Col>
                    <Col >No Program Specified</Col>
                    <Col >3500</Col>
                    <Col >22 April 2023 at 19:46:58 UTC</Col>
                </Row>

                <Row className="tableDataColB">
                    <Col >#246</Col>
                    <Col >12 April, 2023</Col>
                    <Col >486</Col>
                    <Col >No Program Specified</Col>
                    <Col >3500</Col>
                    <Col >19 July 2022 at 11:05:24 UTC</Col>
                </Row>

                <Row className="tableDataColA">
                    <Col >#245</Col>
                    <Col >29 March, 2023</Col>
                    <Col >481</Col>
                    <Col >No Program Specified</Col>
                    <Col >7000</Col>
                    <Col >14 February 2023 at 07:35:00 UTC</Col>
                </Row>

                <Row className="tableDataColB">
                    <Col >#244</Col>
                    <Col >23 March, 2023</Col>
                    <Col >484</Col>
                    <Col >No Program Specified</Col>
                    <Col >7000</Col>
                    <Col >19 May 2022 at 06:48:41 UTC</Col>
                </Row>

                <Row className="tableDataColA">
                    <Col >#243</Col>
                    <Col >15 March, 2023</Col>
                    <Col >490</Col>
                    <Col >No Program Specified</Col>
                    <Col >7000</Col>
                    <Col >16 February 2023 at 10:33:06 UTC</Col>
                </Row>

                <Row className="tableDataColB">
                    <Col >#242</Col>
                    <Col >01 March, 2023</Col>
                    <Col >748</Col>
                    <Col >Provincial Nominee Program</Col>
                    <Col >667</Col>
                    <Col >12 December 2022 at 10:48:12 UTC</Col>
                </Row>

                <Row className="tableDataColA">
                    <Col >#241</Col>
                    <Col >15 February, 2023</Col>
                    <Col >791</Col>
                    <Col >Provincial Nominee Program</Col>
                    <Col >669</Col>
                    <Col >08 February 2023 at 18:09:01 UTC</Col>
                </Row>

                <Row className="tableDataColB">
                    <Col >#240</Col>
                    <Col >02 February, 2023</Col>
                    <Col >489</Col>
                    <Col >Federal Skilled Worker</Col>
                    <Col >3300</Col>
                    <Col >29 March 2022 at 16:09:00 UTC</Col>
                </Row>

                <Row className="tableDataColA">
                    <Col >#239</Col>
                    <Col >01 February, 2023</Col>
                    <Col >733</Col>
                    <Col >Provincial Nominee Program</Col>
                    <Col >893</Col>
                    <Col >09 December 2022 at 10:49:57 UTC</Col>
                </Row>

                <Row className="tableDataColB">
                    <Col >#238</Col>
                    <Col >18 January, 2023</Col>
                    <Col >490</Col>
                    <Col >No Program Specified</Col>
                    <Col >5500</Col>
                    <Col >24 November 2022 at 21:14:59 UTC</Col>
                </Row>

                <Row className="tableDataColA">
                    <Col >#237</Col>
                    <Col >11 January, 2023</Col>
                    <Col >507</Col>
                    <Col >No Program Specified</Col>
                    <Col >5500</Col>
                    <Col >06 December 2022 at 11:00:07 UTC</Col>
                </Row>


                {/* ----------------------------------------------------------------------------------------- */}



            </Container>


            {/* <Row>
                <Button className="directionsButton" onClick={() => window.history.back()}>Back</Button>
            </Row> */}

        </Container >
    )

};

export default ExpressEntry