import React, { Component, useState, useRef } from "react";
import MediaQuery from "react-responsive";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import ContactForm from "../ContactForm/ContactForm";
import Form from "react-bootstrap/Form";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";
import HomeImage from "../../assets/images/homeImage.png";
import MainClip from "../../assets/videos/main.mp4";
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

    window.location.reload();

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

      <MediaQuery minWidth={1290}>

        <Container className="videoContainer">
          {/* <video className="videoElement" src={MainClip} autoPlay loop muted /> */}
          <video className="videoElement" src={MainClip} loop muted />

          <Container>
            <Row className="videoContent">
              Rhythm Immigration Consultancy Services Inc provides personalized and strategic consultancy services to
              individuals and families on all Canadian immigration visa categories. We help our clients to accomplish
              their dream of settling, living, studying and working in Canada by assessing their profiles and finding
              the best immigration pathways for them. We also provide support to individuals to help them re-unite with
              their family members in Canada. We are well equipped to successfully handle an array of immigration cases.
            </Row>
          </Container>
        </Container>

        <Container className="whyChoose">
          <Row align="center" className="gap">

            <Row><h1>WHY CHOOSE US</h1></Row>
          </Row>
        </Container>

        <Container className="slideBoxDeck gap">
          <Row className="slideBoxwidth">
            <Col className="slideBox">Professionally handled by a Regulated Canadian Immigration Consultant
              <Container className="overlay">
                <Container className="overlayText">Your file will be handled by a Regulated Immigration Consultant whether is a start to finish file or a review</Container>
              </Container>
            </Col>
            <Col className="slideBox">Free First Assessment
              <Container className="overlay">
                <Container className="overlayText">We provide a free of cost initial (first) consultation for a maximum of 15 minutes over the phone (no in-person appointment)</Container>
              </Container>
            </Col>
            <Col className="slideBox">Consultation available over the phone/online.
              <Container className="overlay">
                <Container className="overlayText">You do not need to take time off from work, cancel your plans or deal with traffic, we provide consultations over the phone/online for your convenience</Container>
              </Container>
            </Col>
          </Row>
          <Row className="slideBoxwidth">
            <Col className="slideBox">Flexible working hours
              <Container className="overlay">
                <Container className="overlayText">We have flexible working hours/days and are available on most weekends and statutory holidays with a prior appointment</Container>
              </Container>
            </Col>
            <Col className="slideBox">Fee for Service
              <Container className="overlay">
                <Container className="overlayText">We offer our services at market competitive prices with an adjustable payment plan. We charge a flat fee for our services and there are not hidden or hourly charges for visa applications.</Container>
              </Container>
            </Col>
            <Col className="slideBox">Attention to Detail
              <Container className="overlay">
                <Container className="overlayText">We assess profile very carefully before giving any immigration advice. Apart from that, we always sit with our clients and check their profile thoroughly before final submission which gives them a sense of confidence and satisfaction</Container>
              </Container>
            </Col>
          </Row>
        </Container>

        <Container className="contactContainer">

          <Row>
            <Col md={6} className="contactInfoBox">
              <Row className="contactInfo">
                <Row className="contactHeading">
                  <p>Contact Information</p>
                </Row>
                <Row>
                  <p>Mobile: 001 (604) 906-1717</p>
                </Row>
                <Row>
                  <p>Email: info@ryhthmimmigration.consulting</p>
                </Row>
                <Row>
                  <a href="tel:+16049061717"><Button className="directionsButton" variant="outline-primary">Call</Button></a>
                </Row>
              </Row>

              <Row className="contactInfo">
                <Row className="contactHeading"><p>Office Location</p>
                </Row>
                <Row><p>10318, Whalley Blwd #1, <br /> Surrey, B.C., V3T 4H4</p>
                </Row>
                <Row><a target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir//10318+Whalley+Blvd,+Surrey,+BC+V3T+4H4/@49.1900441,-122.8435607,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x5485d77fe99784f9:0x97e7ad9c4054079c!2m2!1d-122.841372!2d49.1900441!3e0">
                  <Button className="directionsButton" variant="outline-primary">Get Directions</Button></a>
                </Row>
              </Row>
            </Col>


            <Col md={6} className="contactInfoBox">

              <Row className="textLeft landscapeForm">

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
                          placeholder="Enter here"
                          aria-describedby="inputGroupPrepend"
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
                          placeholder="Enter here"
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

                  <Button className="directionsButton" variant="outline-primary" type="submit">Send Message</Button>

                  <Row> {result ? <Result /> : null} </Row>
                </Form>

              </Row>
            </Col>
          </Row>
        </Container>

        <Row className="gap">
          <Col className="gap">  </Col>
        </Row>

      </MediaQuery>

      <MediaQuery maxWidth={1290}>
        <Container className="videoContainerMobile">
          <video className="videoElement" src={MainClip} loop muted />

          <Container>
            <Row className="videoContentMobile">
              Rhythm Immigration Consultancy Services Inc provides personalized and strategic consultancy services to
              individuals and families on all Canadian immigration visa categories. We help our clients to accomplish
              their dream of settling, living, studying and working in Canada by assessing their profiles and finding
              the best immigration pathways for them. We also provide support to individuals to help them re-unite with
              their family members in Canada. We are well equipped to successfully handle an array of immigration cases.
            </Row>
          </Container>
        </Container>

        <Container className="whyChoose">
          <Row align="center" className="gap">

            <Row><h1>WHY CHOOSE US</h1></Row>
          </Row>
        </Container>


        <Container className="slideBoxDeckMobile gap">
          <Row className="slideBoxwidth">
            <Col className="slideBoxMobile">Professionally handled by a Regulated Canadian Immigration Consultant
              <Container className="overlay">
                <Container className="overlayText">Your file will be handled by a Regulated Immigration Consultant whether is a start to finish file or a review</Container>
              </Container>
            </Col>
            <Col className="slideBoxMobile">Free First Assessment
              <Container className="overlay">
                <Container className="overlayText">We provide a free of cost initial (first) consultation for a maximum of 15 minutes over the phone (no in-person appointment)</Container>
              </Container>
            </Col>
            <Col className="slideBoxMobile">Consultation available over the phone/online.
              <Container className="overlay">
                <Container className="overlayText">You do not need to take time off from work, cancel your plans or deal with traffic, we provide consultations over the phone/online for your convenience</Container>
              </Container>
            </Col>
          </Row>
          <Row className="slideBoxwidth">
            <Col className="slideBoxMobile">Flexible working hours
              <Container className="overlay">
                <Container className="overlayText">We have flexible working hours/days and are available on most weekends and statutory holidays with a prior appointment</Container>
              </Container>
            </Col>
            <Col className="slideBoxMobile">Fee for Service
              <Container className="overlay">
                <Container className="overlayText">We offer our services at market competitive prices with an adjustable payment plan. We charge a flat fee for our services and there are not hidden or hourly charges for visa applications.</Container>
              </Container>
            </Col>
            <Col className="slideBoxMobile">Attention to Detail
              <Container className="overlay">
                <Container className="overlayText">We assess profile very carefully before giving any immigration advice. Apart from that, we always sit with our clients and check their profile thoroughly before final submission which gives them a sense of confidence and satisfaction</Container>
              </Container>
            </Col>
          </Row>
        </Container>

        <Container className="contactContainerMobile">

          <Row className="contactInfoBoxMobile">
            {/* <Col className="contactInfoBox"> */}
            <Row xs={1} md={1} lg={1} className="contactInfoMobile">
              <Row className="contactHeading">
                <p>Contact Information</p>
              </Row>
              <Row>
                <p>Mobile: 001 (604) 906-1717</p>
              </Row>
              <Row>
                <p>Email: info@ryhthmimmigration.consulting</p>
              </Row>
              <Row>
                <a href="tel:+16049061717"><Button className="directionsButton" variant="outline-primary">Call</Button></a>
              </Row>
            </Row>

            <Row xs={1} md={1} lg={1} className="contactInfoMobile">
              <Row className="contactHeading"><p>Office Location</p>
              </Row>
              <Row><p>10318, Whalley Blwd #1, <br /> Surrey, B.C., V3T 4H4</p>
              </Row>
              <Row><a target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir//10318+Whalley+Blvd,+Surrey,+BC+V3T+4H4/@49.1900441,-122.8435607,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x5485d77fe99784f9:0x97e7ad9c4054079c!2m2!1d-122.841372!2d49.1900441!3e0">
                <Button className="directionsButton" variant="outline-primary">Get Directions</Button></a>
              </Row>
            </Row>


            <Row xs={1} md={1} lg={1} className="contactInfoMobile mobileForm">
              <Row className="contactHeading"><p>Contact Us</p>
              </Row>
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
                        placeholder="Enter here"
                        aria-describedby="inputGroupPrepend"
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
                        placeholder="Enter here"
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

                <Button className="directionsButton" variant="outline-primary" type="submit">Send Message</Button>

                <Row> {result ? <Result /> : null} </Row>
              </Form>

            </Row>
            {/* </Col> */}
          </Row>
        </Container>

        <Row className="gap">
          <Col className="gap">  </Col>
        </Row>

      </MediaQuery >




    </Container >

  )
};

export default Home