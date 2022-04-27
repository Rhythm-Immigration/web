import React, { Component, useState, useRef } from "react";
// import MediaQuery from "react-responsive";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import ContactForm from "../ContactForm/ContactForm";
import Form from "react-bootstrap/Form";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";
import HomeImage from "../../assets/images/homeImage.png";
import "./Home.css";
import { InputGroup } from "react-bootstrap";
import emailjs from 'emailjs-com';

const Result = () => {
  return (
    <p>Your message has been sent !!</p>
  );
};




function Home() {


  const [validated, setValidated] = useState(false);

  const [result, showResult] = useState(false);

  const sendEmail = (event) => {

    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    emailjs.sendForm('service_xelenqv', 'template_f5rh5ys', event.target, 'user_JbEEwl9iDs2Se5rE4k3xY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    showResult(true);
    setTimeout(() => {
      event.target.reset();
    }, 2000);

  };

  setTimeout(() => {
    showResult(false)
  }, 3000);
  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };




  return (

    <Container>
      < link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>

      {/* <Row >
                    <Col className="gap"> <ul className="text-center"> <h3>Home Page</h3> </ul> </Col>
                </Row> */}

      <Container>
        <Image src={HomeImage} className="homeImage" />
      </Container>

      <Container className="containerBackgound">
        <Row align="center" className="gap">
          <Row>
            <p className="fontTwoSize">
              Rhythm Immigration Consultancy Services Inc provides assistance to individuals and families on all Canadian
              immigration visa categories. We help our clients to accomplish their dream of living, studying, working and
              settling in Canada. We also provide support to individuals to help them re-unite with their family members
              in Canada.
            </p>
          </Row>

          <Col className="topMargin">
            <h5>Office Location</h5>

            <Row align="center">
              <Col>
                Unit 200, 7404 King George Blvd, <br /> Surrey, B.C., V3W 1N6
              </Col>
            </Row>

            <Row align="center">
              <Col className="gap">
                <a target="_blank" rel="noreferrer" href="https://www.google.ca/maps/place/Rhythm+Immigration+Consultancy+Services/@49.1375002,-122.8469502,17z/data=!3m1!4b1!4m5!3m4!1s0x5485db2254783e4d:0xbf67babee5beb030!8m2!3d49.1374967!4d-122.8447615">
                  <Button variant="warning">Get Directions</Button></a>
              </Col>
            </Row>
          </Col>

          <Col className="topMargin">
            <h5>Contact Information</h5>
            <Row align="center">
              <Col>Mobile: 001 (604) 906-1717</Col>
            </Row>
            <Row>
              <Col>Mobile: +91 99140-61717</Col>
            </Row>
            <Row>
              <Col>Email: info@ryhthmimmigration.consulting</Col>
            </Row>
          </Col>
        </Row>


      </Container>

      <Container className="card topMargin">
        {/* <Container className="card"> */}
        <Row align="center" className="gap">
          <Col sm={4} className="contactDiagonal">
            <Row className="leftRightPadding">
              <h3>Contact Us</h3>
            </Row>

            <Row className="leftRightPadding">
              <h5 className="textLeft">We have got answers to all your questions. Get in touch with us. </h5>
              <p className="textLeft">By Appointment only. Evening and weekend appointments available.</p>

            </Row>
          </Col>

          <Col sm={8} className="leftPadding">

            <Row className="textLeft">


              <Form noValidate validated={validated} onSubmit={sendEmail}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="fullName">
                    {/* <Form.Label>Enter your Full name</Form.Label> */}
                    <p>Enter your Full name</p>
                    <InputGroup hasValidation>
                      <Form.Control
                        required
                        minLength="3"
                        type="text"
                        placeholder="Name"
                        defaultValue=""
                        name="fullName"
                      />
                      <Form.Control.Feedback></Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter your name.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className="mb-3">

                  <Form.Group as={Col} md="6" controlId="email">
                    {/* <Form.Label>Email</Form.Label> */}
                    <p>Email</p>
                    <InputGroup hasValidation>
                      {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                      <Form.Control
                        required
                        minLength="4"
                        type="email"
                        placeholder="enter email here"
                        aria-describedby="inputGroupPrepend"
                        required
                        name="email"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid email.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>



                  <Form.Group as={Col} md="6" controlId="phone">
                    {/* <Form.Label>Mobile</Form.Label> */}
                    <p>Mobile</p>
                    <InputGroup hasValidation>
                      {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                      <Form.Control
                        required
                        min="999999999"
                        type="number"
                        placeholder="Enter number here"
                        name="phone"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid mobile nummber.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} md="12" controlId="message">
                    {/* <Form.Label>Message</Form.Label> */}
                    <p>Message</p>
                    <Form.Control
                      required
                      minLength="5"
                      as="textarea"
                      rows={4}
                      placeholder="Enter your querry here...."
                      name="message" />
                    <Form.Control.Feedback type="invalid">
                      Please type your message.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>




                <Button variant="warning" type="submit">Send Message</Button>

                <Row> {result ? <Result /> : null} </Row>
              </Form>





            </Row>
          </Col>
        </Row>

        {/* <ContactForm></ContactForm> */}

        {/* </Container> */}





      </Container>






      <Row className="gap">
        <Col className="gap">  </Col>
      </Row>
    </Container >

  )
};

export default Home