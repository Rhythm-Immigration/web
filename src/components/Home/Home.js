import React, { useState } from "react";
// import MediaQuery from "react-responsive";
import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import ContactForm from "../ContactForm/ContactForm";
import Form from "react-bootstrap/Form";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";
import HomeImage from "../../assets/images/homeImage.png";
import ReviewBackground from "../../assets/images/review/people1.jpg";
// import MainClip from "../../assets/videos/main.mp4";
import "./Home.css";
import { InputGroup } from "react-bootstrap";
// import ListGroup from 'react-bootstrap/ListGroup';
import StarIcon from "../../assets/Logos/starIcon.png";
import GurtejReview from "../../assets/images/review/gurtej.png";
import FrancoReview from "../../assets/images/review/Franco.png";
import sKhehra from "../../assets/images/review/sKhehra.png";
import James from "../../assets/images/review/James.png";
import Dhwani from "../../assets/images/review/Dhwani.png";
import emailjs from 'emailjs-com';
// import { FcRating } from 'react-icons/fc';

const Result = () => {
  return (
    <p>Your message has been sent !!</p>
  );
};




function Home() {

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

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

      {/* <MediaQuery minWidth={1290}> */}

      <Container className="videoContainer">
        {/* <video className="videoElement" src={MainClip} autoPlay loop muted /> */}
        {/* <video className="videoElement" src={MainClip} loop muted /> */}
        <Image className="videoElement" src={HomeImage} />


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
              <Container className="overlayText">Your file will be handled by a Regulated Immigration Consultant whether it's a start to finish file or a review</Container>
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
                <p>Email: info@rhyhthmimmigration.consulting</p>
              </Row>
              <Row>
                <a href="tel:+16049061717"><Button className="directionsButton" variant="outline-primary">Call</Button></a>
              </Row>
            </Row>

            <Row className="contactInfo">
              <Row className="contactHeading"><p>Office Location</p>
              </Row>
              <Row><p>10318, Whalley Blvd #1, <br /> Surrey, B.C., V3T 4H4</p>
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
                      placeholder="Enter your query here...."
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

      <Container className="reviewContainer" style={{ backgroundImage: `url(${ReviewBackground})` }}>
        <h1 className="testimonialsTitle">CLIENT TESTIMONIALS</h1>
        <Carousel variant="dark">

          <Carousel.Item className="carouselSlide">
            <Container className="threeReviews">
              <Row className="reviewRow">
                <Col className="reviewCol">

                  <Row>
                    <Col xs="auto" className="reviewerLogo nameColor1">
                      K
                    </Col>
                    <Col className="reviewerName">
                      Karan Kataria
                    </Col>
                  </Row>
                  <Row>
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                  </Row>
                  <Row>
                    <p className="reviewText">Had a really great and amazing experience with Satinder at Rhythm Immigration.
                      She is super helpful and knowledgeable. We almost lost hopes about getting our parent’s visa after 3
                      rejections but she analyzed the file with detail and helped us arranging all the documents needed and
                      finally the visa was approved. We really appreciate her dedication towards her work. Forever grateful
                      to you, Satinder Ma’am. Thank you so much.</p>
                  </Row>
                </Col>

                <Col className="reviewCol">
                  <Row>
                    <Image className="reviewerLogo" src={GurtejReview} />
                    <Col className="reviewerName">
                      GURTEJ GILL
                    </Col>
                  </Row>
                  <Row>
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                  </Row>
                  <Row>
                    <p className="reviewText">
                      Rhythm immigration represents among the highest levels of immigration service,
                      I have experienced. Information was accurate, responses to queries were turned around very fast. The service
                      is smooth and straightforward. All responses were prompt and professional. Satinder Grewal Ma'am was very
                      friendly, patient, courteous and helpful. Thank you for guiding and helping me to reach my goal.
                    </p>
                  </Row>
                </Col>

                <Col className="reviewCol">
                  <Row>
                    <Image className="reviewerLogo" src={FrancoReview} />
                    <Col className="reviewerName">
                      Dayne Franco Ulloa
                    </Col>
                  </Row>
                  <Row>
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                  </Row>
                  <Row>
                    <p className="reviewText">
                      My experience with Satinderjit at Rhythm Immigration was excellent.
                      We had many questions and they were all answered with knowledge and in a kind way.
                      What I appreciate the most was how detailed the application process was managed.
                      Thank you so much!
                    </p>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item className="carouselSlide">
            <Container className="threeReviews">
              <Row className="reviewRow">
                <Col className="reviewCol">
                  <Row>
                    <Col xs="auto" className="reviewerLogo nameColor2">
                      M
                    </Col>
                    <Col className="reviewerName">
                      Manjot Mann
                    </Col>
                  </Row>
                  <Row>
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                  </Row>
                  <Row>
                    <p className="reviewText">
                      They helped me to apply for my grandparents Visitor Visa. Got their Visas approved within 2 months.
                      They helped me with my PR application. I am looking forward to get my citizenship  application done by them.
                      They are the best Immigration Consultants in entire Surrey area.
                    </p>
                  </Row>
                </Col>

                <Col className="reviewCol">
                  <Row>
                    <Image className="reviewerLogo" src={sKhehra} />
                    <Col className="reviewerName">
                      Satinder khehra
                    </Col>
                  </Row>
                  <Row>
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                  </Row>
                  <Row>
                    <p className="reviewText">
                      Excellent service!!Rhythm Immigration worked on Vistor Visa application for 2 of my friends to whom I sponsored.
                      All our questions were answered very quickly and precisely. All documents and applications were submitted on time.
                      Everything was triple checked. They made us feel very confident about applications.Vistor visa application is approved
                      and passport is sent for stamping. Thank you Satinderjit Grewal 😊😊 I personally recommend her 100%.
                    </p>
                  </Row>
                </Col>

                <Col className="reviewCol">
                  <Row>
                    <Col xs="auto" className="reviewerLogo nameColor3">
                      S
                    </Col>
                    <Col className="reviewerName">
                      Sukhwinder Singh
                    </Col>
                  </Row>
                  <Row>
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                  </Row>
                  <Row>
                    <p className="reviewText">
                      I am so grateful for the excellent service provided by Rhythm Immigration. Satinder is always
                      quick to respond to all of my queries and provides updates on a regular basis. Finally, i got my
                      PGWP for (3years). Highly recommend their services.
                    </p>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item className="carouselSlide">
            <Container className="threeReviews">
              <Row className="reviewRow">
                <Col className="reviewCol">
                  <Row>
                    <Col xs="auto" className="reviewerLogo nameColor4">
                      S
                    </Col>
                    <Col className="reviewerName">
                      Sukhveer Singh
                    </Col>
                  </Row>
                  <Row>
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                  </Row>
                  <Row>
                    <p className="reviewText">
                      I worked with rhythm immigration. It was a wonderful experience.
                      I had to change the college after having so many difficulties in previous college in canada.
                      I knew no one here , so I approached to them and it was a right decision.
                      They helped me and guided me to take admission in Lasalle college. <br /> <br />
                      Thank you  for wonderful support 👍
                    </p>
                  </Row>
                </Col>

                <Col className="reviewCol">
                  <Row>
                    <Col xs="auto" className="reviewerLogo nameColor5">
                      A
                    </Col>
                    <Col className="reviewerName">
                      Abhishek Gupta
                    </Col>
                  </Row>
                  <Row>
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                  </Row>
                  <Row>
                    <p className="reviewText">
                      I'd highly recommend Satinder ma'am for any sort of immigration related query. Her awareness and
                      way of tackling certain situations are strictly professional, ensuring desired results.
                    </p>
                  </Row>
                </Col>

                <Col className="reviewCol">
                  <Row>
                    <Image className="reviewerLogo" src={James} />
                    <Col className="reviewerName">
                      James Fitzgerald
                    </Col>
                  </Row>
                  <Row>
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                  </Row>
                  <Row>
                    <p className="reviewText">
                      Thanks for the help Rhythm Immigration Consultancy Services.
                    </p>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item className="carouselSlide">
            <Container className="threeReviews">
              <Row className="reviewRow">
                <Col className="reviewCol">
                  <Row>
                    <Image className="reviewerLogo" src={Dhwani} />
                    <Col className="reviewerName">
                      Dhwani Purohit
                    </Col>
                  </Row>
                  <Row>
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                    <Image className="ratingStar" src={StarIcon} />
                  </Row>
                  <Row>
                    <p className="reviewText">
                      I had an overall good experience with Satinder. She is very professional and particular with her work.
                      She guided me in a right direction. Thank you Satinder. 😊 I recommend her.
                    </p>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel >
      </Container >

      <Row className="gap">
        <Col className="gap">  </Col>
      </Row>
    </Container >
  )
};

export default Home