import React from "react";
// import MediaQuery from "react-responsive";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ListGroup from 'react-bootstrap/ListGroup';
import MainImage from "../../assets/images/servicesMain.png";

import "./Services.css";


function Services() {

    const [show, setShow] = React.useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    const [visitorShow, setVisitorShow] = React.useState(false);
    const visitorHandleShow = () => setVisitorShow(true);
    const visitorHandleClose = () => setVisitorShow(false);

    const [superShow, setSuperShow] = React.useState(false);
    const superHandleShow = () => setSuperShow(true);
    const superHandleClose = () => setSuperShow(false);

    const [prShow, setPRShow] = React.useState(false);
    const prHandleShow = () => setPRShow(true);
    const prHandleClose = () => setPRShow(false);

    const [familyShow, setFamilyShow] = React.useState(false);
    const familyHandleShow = () => setFamilyShow(true);
    const familyHandleClose = () => setFamilyShow(false);

    const [citizenShow, setCitizenShow] = React.useState(false);
    const citizenHandleShow = () => setCitizenShow(true);
    const citizenHandleClose = () => setCitizenShow(false);

    const [prCardShow, setPRcardShow] = React.useState(false);
    const prCardHandleShow = () => setPRcardShow(true);
    const prCardHandleClose = () => setPRcardShow(false);

    const [notesShow, setNotesShow] = React.useState(false);
    const notesHandleShow = () => setNotesShow(true);
    const notesHandleClose = () => setNotesShow(false);

    const [collegeShow, setCollegeShow] = React.useState(false);
    const collegeHandleShow = () => setCollegeShow(true);
    const collegeHandleClose = () => setCollegeShow(false);

    return (
        <Container>
            < link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>



            <Container className="ImageBox">
                <Image className="imageServicesMain" src={MainImage}></Image>
            </Container>

            <Container className="infoBox">
                <Row className="servicesBoxHeading">
                    <p className="headingText">Our services are tailored as per our customers requirements</p>
                    <p className="headingText">Here is how we can assist you</p>
                </Row>
                <Row className="servicesBoxA">
                    <p className="headingText">First Consultation for up to 15 minutes is free</p>
                    <p className="extraInfo">(over the phone only)</p>
                    <p className="textInfo">We will understand your profile, answer any specific questions that you might have.</p>
                </Row>
                <Row className="servicesBoxB">
                    <p className="headingText">Half-an-hour/Hourly paid Consultation</p>
                    <p className="extraInfo">(By Phone, in-person or online)</p>
                    <p className="textInfo">If you have any further questions about your profile, we will try to answer all those questions.</p>
                </Row>
                <Row className="servicesBoxA">
                    <p className="headingText">Complete application from start to finish</p>
                    <p className="textInfo"> If you would like to be represented by a licensed Immigration Consultant, we will help you from start to finish
                        of your visa application. This includes providing checklist of documents, filling paper/online application
                        form(s), providing templates, reviewing file before submission. Your application will also include a submission
                        letter from the Consultant.</p>
                </Row>
                <Row className="servicesBoxB">
                    <p className="headingText">Application review</p>
                    <p className="textInfo">  If you have already prepared your visa application but would like to ensure that everything is done correctly,
                        our licensed Immigration Consultant will thoroughly review it before submission. You can get peace of mind since
                        we will help to reduce the risk and avoid mistake that can negatively affect your application and might also delay
                        the processing.</p>
                </Row>
            </Container>


            <Container className="servicesSlideBoxDeck gap">
                <Row className="slideBoxwidth">
                    <Col className="slideBox">Post Graduate Work Permit (PGWP)
                        <Container className="overlay">
                            <button className="overlayText" onClick={handleShow}>
                                International students who successfully complete their education in Canada and want to apply for PGWP.<br /><br />
                                <p className="readMore">Read more...</p>
                            </button>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header closeButton className="separationColor">
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Post Graduate Work Permit (PGWP)
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="justifyText">
                                        International students who successfully complete their education in Canada
                                        and follow the rules of their study permit may be eligible to apply for a
                                        Post Graduate Work Permit (PGWP). The length of your PGWP will depend on
                                        the length of program that you have completed.
                                    </p>
                                </Modal.Body>
                                <Modal.Footer className="separationColor">
                                    <Button className="closeButton" variant="primary-boundary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Container>
                    </Col>
                    <Col className="slideBox">Visitor Visa
                        <Container className="overlay">
                            <button className="overlayText" onClick={visitorHandleShow}>
                                If you would like to visit your family/friends or as a tourist you'll need a visa to enter Canada.<br /><br />
                                <p className="readMore">Read more...</p>
                            </button>
                            <Modal
                                show={visitorShow}
                                onHide={visitorHandleClose}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header closeButton className="separationColor">
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Visitor Visa
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="justifyText">
                                        If you would like to visit your family, friends or relative who are Canadian
                                        Citizens, Permanent Residents, International students or workers, you might
                                        need a visa to enter Canada. If you do not have any family, friends or relatives
                                        in Canada, you can be eligible to visit Canada as a tourist. Citizens of most of
                                        the nationalities will require a Visitor visa.
                                    </p>
                                </Modal.Body>
                                <Modal.Footer className="separationColor">
                                    <Button className="closeButton" variant="primary-boundary" onClick={visitorHandleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Container>
                    </Col>
                    <Col className="slideBox">Super Visa
                        <Container className="overlay">
                            <button className="overlayText" onClick={superHandleShow}>
                                Canadian Citizens and permanent residents can sponsor their parents and grandparents and apply for their Super Visa.<br /><br />
                                <p className="readMore">Read more...</p>
                            </button>
                            <Modal
                                show={superShow}
                                onHide={superHandleClose}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header closeButton className="separationColor">
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Super Visa
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="justifyText">
                                        Canadian Citizens and permanent residents can sponsor their parents and grandparents
                                        and apply for their Super Visa. The sponsor must meet the LICO (Low Income Cut-off)
                                        requirement in order to be eligible to apply. LICO value is updated every year. There
                                        are other requirements, such as an invitation letter, medical insurance coverage that
                                        must be met in order to successfully sponsor your parents and grandparents on a Super Visa.
                                    </p>
                                </Modal.Body>
                                <Modal.Footer className="separationColor">
                                    <Button className="closeButton" variant="primary-boundary" onClick={superHandleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Container>
                    </Col>
                </Row>
                <Row className="slideBoxwidth">
                    <Col className="slideBox">Permanent Residence
                        <Container className="overlay">
                            <button className="overlayText" onClick={prHandleShow}>
                                You may be eligible to apply for Permanent residence from inside or outside Canada under various immigration categories.<br /><br />
                                <p className="readMore">Read more...</p>
                            </button>
                            <Modal
                                show={prShow}
                                onHide={prHandleClose}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header closeButton className="separationColor">
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Permanent Residence
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="justifyText">
                                        You may be eligible to apply for Permanent residence from inside or outside Canada under
                                        various immigration categories such as Express Entry (Federal Skilled Worker, Federal
                                        Skilled Trades Worker, Canadian Experience Class), Provincial Nominee Program. You should
                                        typically contact a Regulated Immigration Consultant ahead of time and have your profile
                                        assessed. We can help you determine the required IELTS score for eligibility, assist in
                                        getting Education Credential Assessment since it can take a few months to complete these requirements.
                                    </p>
                                </Modal.Body>
                                <Modal.Footer className="separationColor">
                                    <Button className="closeButton" variant="primary-boundary" onClick={prHandleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Container>
                    </Col>
                    <Col className="slideBox">Family Sponsorship
                        <Container className="overlay">
                            <button className="overlayText" onClick={familyHandleShow}>
                                You may be eligible to sponsor your family members for permanent residence in Canada.<br /><br />
                                <p className="readMore">Read more...</p>
                            </button>
                            <Modal
                                show={familyShow}
                                onHide={familyHandleClose}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header closeButton className="separationColor">
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Family Sponsorship
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="justifyText">
                                        Canadian Citizens and Permanent Residents may be eligible to sponsor their spouse, parents,
                                        grandparents, dependent children and relative for permanent residence in Canada. Contact us
                                        for personalized assessment.
                                    </p>
                                </Modal.Body>
                                <Modal.Footer className="separationColor">
                                    <Button className="closeButton" variant="primary-boundary" onClick={familyHandleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Container>
                    </Col>
                    <Col className="slideBox">Citizenship
                        <Container className="overlay">
                            <button className="overlayText" onClick={citizenHandleShow}>You may be eligible to apply for Canadian citizenship if you meet the requirements.<br /><br />
                                <p className="readMore">Read more...</p>
                            </button>
                            <Modal
                                show={citizenShow}
                                onHide={citizenHandleClose}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header closeButton className="separationColor">
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Citizenship
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>
                                        You may be eligible to apply for Canadian citizenship if you meet following requirements:
                                    </p>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>&#10687;&nbsp;&nbsp; be a permanent resident</ListGroup.Item>
                                        <ListGroup.Item>&#10687;&nbsp;&nbsp; have lived in Canada for at least 3 out of the last 5 years (1,095 days)</ListGroup.Item>
                                        <ListGroup.Item>&#10687;&nbsp;&nbsp; have filed your taxes</ListGroup.Item>
                                        <ListGroup.Item>&#10687;&nbsp;&nbsp; pass a citizenship test</ListGroup.Item>
                                        <ListGroup.Item>&#10687;&nbsp;&nbsp; prove language skills in English or French</ListGroup.Item>
                                    </ListGroup>
                                </Modal.Body>
                                <Modal.Footer className="separationColor">
                                    <Button className="closeButton" variant="primary-boundary" onClick={citizenHandleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Container>
                    </Col>
                </Row>

                <Row className="slideBoxwidth">
                    <Col className="slideBox">Permanent Resident Card
                        <Container className="overlay">
                            <button className="overlayText" onClick={prCardHandleShow}>
                                <ListGroup variant="flush" >
                                    <ListGroup.Item className="darkFlush">PR card Renewal</ListGroup.Item>
                                    <ListGroup.Item className="darkFlush">Lost/Stolen/Damaged PR card</ListGroup.Item>
                                    <ListGroup.Item className="darkFlush">PRTD (Permanent Resident Travel Document)<br /><br />
                                        <p className="readMore">Read more...</p></ListGroup.Item>
                                </ListGroup>
                            </button>
                            <Modal
                                show={prCardShow}
                                onHide={prCardHandleClose}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header closeButton className="separationColor">
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Permanent Resident Card
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <h1 className="listHeading">PR Card Renewal</h1>
                                            <p>Permanent Resident cards are generally valid for 5 years. You must apply to renew your PR card at least 90 days before it expires. </p>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <h1 className="listHeading">Lost/Stolen/Damaged PR card</h1>
                                            <p>Always file a formal police complaint if your PR Card is ever lost/stolen. Your next step is to apply for a new PR Card.</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <h1 className="listHeading">PRTD (Permanent Resident Travel Document)</h1>
                                            <p>If your PR card expires while travelling outside of Canada, you can apply for a Permanent Resident Travel Document. It helps you enter Canada as a Permanent Resident.</p>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Modal.Body>
                                <Modal.Footer className="separationColor">
                                    <Button className="closeButton" variant="primary-boundary" onClick={prCardHandleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Container>
                    </Col>
                    <Col className="slideBox">ATIP/GCMS Notes
                        <Container className="overlay">
                            <button className="overlayText" onClick={notesHandleShow}>
                                In some circumstances you might need to apply for ATIP/GCMS notes.<br /><br />
                                <p className="readMore">Read more...</p>
                            </button>
                            <Modal
                                show={notesShow}
                                onHide={notesHandleClose}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header closeButton className="separationColor">
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        ATIP/GCMS Notes
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>
                                        Here are some of the circumstances under which you might need to apply for ATIP/GCMS notes :
                                    </p>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="justifyText">&#10687;&nbsp;&nbsp; If your visa application was refused, the reasons mentioned in your refusal letter are more generic. You can review and understand the actual reasons, observations and comments of the Visa Officer by applying for CAIPS/GCMS notes. It helps you overcome any drawbacks and you can resubmit your application for better chances of positive outcome.</ListGroup.Item>
                                        <ListGroup.Item className="justifyText">&#10687;&nbsp;&nbsp; If your visa application is taking longer than normal processing time.</ListGroup.Item>
                                        <ListGroup.Item className="justifyText">&#10687;&nbsp;&nbsp; If you do not have a copy of your application/documents submitted for a visa application.</ListGroup.Item>
                                    </ListGroup>
                                </Modal.Body>
                                <Modal.Footer className="separationColor">
                                    <Button className="closeButton" variant="primary-boundary" onClick={notesHandleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Container>
                    </Col>
                    <Col className="slideBox">Change of College
                        <Container className="overlay">
                            <button className="overlayText" onClick={collegeHandleShow}>
                                If you are already in Canada with a valid Study Permit, you may be able to change your college.<br /><br />
                                <p className="readMore">Read more...</p>
                            </button>
                            <Modal
                                show={collegeShow}
                                onHide={collegeHandleClose}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header closeButton className="separationColor">
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Change of College
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="justifyText">
                                        If you are already in Canada with a valid Study Permit, you may be able to change your
                                        college. Get in touch with us to help you guide about your options and get you enrolled
                                        in a college and program of your choice.
                                    </p>
                                </Modal.Body>
                                <Modal.Footer className="separationColor">
                                    <Button className="closeButton" variant="primary-boundary" onClick={collegeHandleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Container>
                    </Col>
                </Row>

                <Row className="slideBoxwidth">
                    <Col className="slideBox">Spousal Open Work Permit
                        <Container className="overlay">
                            <Container className="overlayText">If you are an international student with a valid study permit, in some cases, your spouse or common-law partner may be able to apply for an open work permit that will let them work for any employer. Contact us for a detailed review of your profile.</Container>
                        </Container>
                    </Col>
                    <Col className="slideBox">Invitation Letter
                        <Container className="overlay">
                            <Container className="overlayText">We can prepare invitation letter if you are sponsoring your family, friends, relatives on a Visitor visa or your parents/grandparents on a super visa.</Container>
                        </Container>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>

                </Row>

            </Container>





        </Container>
    )

};

export default Services