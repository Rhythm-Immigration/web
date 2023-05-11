import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";
import $ from 'jquery';
import "./Blogs.css";

function Blogs() {

    // const [show, setShow] = React.useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    $('html,body').animate({ scrollTop: 0 }, 'slow');


    return (
        <Container>
            < link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>

            <Container className="rootContainer">

                <Row>
                    <p className="blogHeading">BLOG</p>
                </Row>


                <a className="linkNoDecor" href='/#/blog/empp'>
                    <Container className="topBox" >
                        <Row>
                            <h5 className="textOverlay">TRENDING</h5>
                        </Row>
                        <Row>
                            <h1 className="textOverlayTitle">Launch of new economic pathway under the Economic Mobility Pathways Pilot (EMPP)</h1>
                        </Row>
                        <Row>
                            <p className="textOverlayDate">27 March, 2023</p>
                        </Row>
                    </Container>
                </a>



                <Container>
                    <Row>
                        <Col md={6} >
                            <a className="linkNoDecor" href='/#/blog/pgwp-extension'>
                                <Container className="blogBox">
                                    <Row className="">
                                        <h1 className="blogBoxTitle">Extension of Post Graduate Work Permits for up to 18 months.</h1>
                                    </Row>
                                    <Row className="">
                                        <p className="blogBoxDate">17 March, 2023</p>
                                    </Row>
                                </Container>
                            </a>
                        </Col>


                        <Col md={6} >
                            <a className="linkNoDecor" href='/#/blog/agri-food'>
                                <Container className="blogBox2">
                                    <Row>
                                        <h1 className="blogBoxTitle">Agri-Food Pilot update</h1>
                                    </Row>
                                    <Row>
                                        <p className="blogBoxDate">08 May, 2023</p>
                                    </Row>
                                </Container>
                            </a>
                        </Col>
                    </Row>
                </Container>



                <Row>
                    <p className="moreBlogHeading">MORE POSTS</p>
                </Row>

                <Container>
                    <Row>
                        <Col md={6}>
                            <a className="linkNoDecor" href='/#/blog/education-points'>
                                <Image className="blogsListImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/education-points.jpg?updatedAt=1683613343047" />
                            </a>
                        </Col>
                        <Col md={6} className="blogsListInfo">

                            <Container className="blogsListInfoContents">
                                <Row>
                                    <h1 className="blogListTitle ">Update on Canadian education points in Express Entry</h1>
                                </Row>
                                <Row>
                                    {/* <p className="blogListDate">08 May, 2023</p> */}
                                </Row>
                                <a href="/#/blog/education-points"><Row>Read More</Row></a>
                            </Container>



                        </Col>
                    </Row>


                    <Row>
                        <Col md={6}>
                            <a className="linkNoDecor" href='/#/blog/skilled-immigrant-amount'>
                                <Image className="blogsListImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/amount-canada.jpg?updatedAt=1683777843915" />
                            </a>
                        </Col>
                        <Col md={6} className="blogsListInfo">

                            <Container className="blogsListInfoContents">
                                <Row>
                                    <h1 className="blogListTitle ">Minimum amount required to immigrate to Canada for skilled immigrants (Express Entry)</h1>
                                </Row>
                                <Row>
                                    <p className="blogListDate">Updated as on 25 April, 2023</p>
                                </Row>
                                <a href="/#/blog/skilled-immigrant-amount"><Row>Read More</Row></a>
                            </Container>



                        </Col>
                    </Row>
                </Container>



            </Container>



        </Container>
    )

};

export default Blogs