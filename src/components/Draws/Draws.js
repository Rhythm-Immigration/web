import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Image from "react-bootstrap/Image";
import "./Draws.css";
import ExpressEntry from "./DrawTables/ExpressEntry";


function Draws() {

    // const [show, setShow] = React.useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    return (
        <Container className="drawsRootCon">
            < link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>

            <Container>

                {/* Following code is for Draw category selector */}
                {/* <Row>
                    <Col md={4} className="selectorColumn">
                        <a href="/#/draws/express-entry">

                            <Button className="drawButtons" >Express Entry Draw</Button>

                        </a>
                    </Col>

                    <Col md={4} className="selectorColumn">
                        <a href="/#/draws/bc-pnp">

                            <Button className="drawButtons" >BC-PNP Draw</Button>

                        </a>
                    </Col>

                    <Col md={4} className="selectorColumn">
                        <a href="/#/draws/tronto-pnp">

                            <Button className="drawButtons" >Tronto PNP Draw</Button>

                        </a>
                    </Col>
                </Row> */}

                <ExpressEntry />
            </Container>



        </Container>
    )

};

export default Draws