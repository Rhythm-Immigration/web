import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Image from "react-bootstrap/Image";

import "../Draws.css";

function BCpnp() {


    return (
        <Container className="tableContainer">
            < link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>

            <Row>
                <p className="blogHeading">RECENT DRAWS</p>
            </Row>



            <Row className="tableHeader">
                <Col md={3} className="tableHeaderCol"><h1>Draw Date</h1></Col>
                <Col md={3} className="tableHeaderCol"><h1>Description</h1></Col>
                <Col md={3} className="tableHeaderCol"><h1>No. of invitations issued</h1></Col>
                <Col md={3} className="tableHeaderCol"><h1>Streams with Points</h1></Col>
                {/* <Col md={2} className="tableHeaderCol"><h1>Points</h1></Col> */}
                {/* <Col md={2} className="tableHeaderCol"><h1>Tie Breaking Rule</h1></Col> */}
            </Row>

            <Row className="tableDataColA">
                <Col className="m-auto" md={3}>21 March, 2023</Col>
                <Col className="m-auto" md={3}>General draw (includes tech occupations)</Col>
                <Col className="m-auto" md={3}>202</Col>
                <Col className="m-auto" md={3}>
                    <Row className="m-auto">Skilled Worker: 101 points</Row>
                    <Row className="m-auto">Skilled Worker (EEBC): 101 points</Row>
                    <Row className="m-auto">International Graduate: 106 points</Row>
                    <Row className="m-auto">International Graduate (EEBC): 106 points</Row>
                    <Row className="m-auto">Entry Level and Semi-skilled: 85 points</Row>
                </Col>
            </Row>

            <Row className="tableDataColB">
                <Col className="m-auto" md={3}>21 March, 2023</Col>
                <Col className="m-auto" md={3}>Targeted Draw – Childcare: Early Childhood Educators and Assistants (NOC 42202)</Col>
                <Col className="m-auto" md={3}>34</Col>
                <Col className="m-auto" md={3}>Skilled Worker, International Graduate (includes EEBC option): 60 points
                </Col>
            </Row>

            <Row className="tableDataColA">
                <Col md={2}>#243</Col>
                <Col md={2}>15 March, 2023</Col>
                <Col md={2}>490</Col>
                <Col md={2}>No Program Specified</Col>
                <Col md={2}>7000</Col>
                <Col md={2}>16 February 2023 at 10:33:06 UTC</Col>
            </Row>

            <Row className="tableDataColB">
                <Col md={2}>#242</Col>
                <Col md={2}>01 March, 2023</Col>
                <Col md={2}>748</Col>
                <Col md={2}>Provincial Nominee Program</Col>
                <Col md={2}>667</Col>
                <Col md={2}>12 December 2022 at 10:48:12 UTC</Col>
            </Row>

            <Row className="tableDataColA">
                <Col md={2}>#241</Col>
                <Col md={2}>15 February, 2023</Col>
                <Col md={2}>791</Col>
                <Col md={2}>Provincial Nominee Program</Col>
                <Col md={2}>669</Col>
                <Col md={2}>08 February 2023 at 18:09:01 UTC</Col>
            </Row>

            <Row className="tableDataColB">
                <Col md={2}>#240</Col>
                <Col md={2}>02 February, 2023</Col>
                <Col md={2}>489</Col>
                <Col md={2}>Federal Skilled Worker</Col>
                <Col md={2}>3300</Col>
                <Col md={2}>29 March 2022 at 16:09:00 UTC</Col>
            </Row>

            <Row className="tableDataColA">
                <Col md={2}>#239</Col>
                <Col md={2}>01 February, 2023</Col>
                <Col md={2}>733</Col>
                <Col md={2}>Provincial Nominee Program</Col>
                <Col md={2}>893</Col>
                <Col md={2}>09 December 2022 at 10:49:57 UTC</Col>
            </Row>

            <Row className="tableDataColB">
                <Col md={2}>#238</Col>
                <Col md={2}>18 January, 2023</Col>
                <Col md={2}>490</Col>
                <Col md={2}>No Program Specified</Col>
                <Col md={2}>5500</Col>
                <Col md={2}>24 November 2022 at 21:14:59 UTC</Col>
            </Row>

            <Row className="tableDataColA">
                <Col md={2}>#237</Col>
                <Col md={2}>11 January, 2023</Col>
                <Col md={2}>507</Col>
                <Col md={2}>No Program Specified</Col>
                <Col md={2}>5500</Col>
                <Col md={2}>06 December 2022 at 11:00:07 UTC</Col>
            </Row>





            {/* <Row>
                <Button className="directionsButton" onClick={() => window.history.back()}>Back</Button>
            </Row> */}

        </Container >
    )

};

export default BCpnp