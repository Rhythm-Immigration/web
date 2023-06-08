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


                <a className="linkNoDecor" href='/#/blog/eta-program'>
                    <Container className="topBox" >
                        <Row>
                            <h5 className="textOverlay">TRENDING</h5>
                        </Row>
                        <Row>
                            <h1 className="textOverlayTitle">Eligible travellers from 13 newly added countries qualify for visa-free air travel to Canada through eTA program</h1>
                        </Row>
                        <Row>
                            <p className="textOverlayDate">06 June, 2023</p>
                        </Row>
                    </Container>
                </a>



                <Container>
                    <Row>

                        <Col md={6} >
                            <a className="linkNoDecor" href='/#/blog/category-based'>
                                <Container className="blogBox">
                                    <Row>
                                        <h1 className="blogBoxTitle">Canada has finally launched the first-ever new process of category-based draws after long wait and speculations</h1>
                                    </Row>
                                    <Row>
                                        <p className="blogBoxDate">31 May, 2023</p>
                                    </Row>
                                </Container>
                            </a>
                        </Col>

                        <Col md={6} >
                            <a className="linkNoDecor" href='/#/blog/english-language'>
                                <Container className="blogBox2">
                                    <Row className="">
                                        <h1 className="blogBoxTitle">IRCC approves new English Language test for SDS (Student Direct Stream) applicants</h1>
                                    </Row>
                                    <Row className="">
                                        <p className="blogBoxDate">30 May, 2023</p>
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
                            <a className="linkNoDecor" href='/#/blog/study-length'>
                                <Image className="blogsListImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/studyLength.jpg?updatedAt=1685912201886" />
                            </a>
                        </Col>
                        <Col md={6} className="blogsListInfo">

                            <Container className="blogsListInfoContents">
                                <Row>
                                    <h1 className="blogListTitle ">Length of online studies counted towards your Post Graduate Work Permit</h1>
                                </Row>
                                <Row>
                                    <p className="blogListDate">30 May, 2023</p>
                                </Row>
                                <a href="/#/blog/study-length"><Row>Read More</Row></a>
                            </Container>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <a className="linkNoDecor" href='/#/blog/reunite-family'>
                                <Image className="blogsListImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/reunite-family.jpg?updatedAt=1685915528285" />
                            </a>
                        </Col>
                        <Col md={6} className="blogsListInfo">

                            <Container className="blogsListInfoContents">
                                <Row>
                                    <h1 className="blogListTitle ">Reuniting family members and extending work permits for additional 18 months</h1>
                                </Row>
                                <Row>
                                    <p className="blogListDate">26 May, 2023</p>
                                </Row>
                                <a href="/#/blog/reunite-family"><Row>Read More</Row></a>
                            </Container>
                        </Col>
                    </Row>

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


                    <Row>
                        <Col md={6}>
                            <a className="linkNoDecor" href='/#/blog/agri-food'>
                                <Image className="blogsListImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/adrian-infernus-BN6iQEVN0ZQ-unsplash.jpg?updatedAt=1683607065299" />
                            </a>
                        </Col>
                        <Col md={6} className="blogsListInfo">

                            <Container className="blogsListInfoContents">
                                <Row>
                                    <h1 className="blogListTitle ">Agri-Food Pilot update</h1>
                                </Row>
                                <Row>
                                    <p className="blogListDate">08 May, 2023</p>
                                </Row>
                                <a href="/#/blog/agri-food"><Row>Read More</Row></a>
                            </Container>
                        </Col>
                    </Row>


                    <Row>
                        <Col md={6}>
                            <a className="linkNoDecor" href='/#/blog/pgwp-extension'>
                                <Image className="blogsListImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/blog2.jpg?updatedAt=1680486567930" />
                            </a>
                        </Col>
                        <Col md={6} className="blogsListInfo">

                            <Container className="blogsListInfoContents">
                                <Row>
                                    <h1 className="blogListTitle ">Extension of Post Graduate Work Permits for up to 18 months.</h1>
                                </Row>
                                <Row>
                                    <p className="blogListDate">17 March, 2023</p>
                                </Row>
                                <a href="/#/blog/pgwp-extension"><Row>Read More</Row></a>
                            </Container>
                        </Col>
                    </Row>


                    <Row>
                        <Col md={6}>
                            <a className="linkNoDecor" href='/#/blog/empp'>
                                <Image className="blogsListImage m-auto" src="https://ik.imagekit.io/oow6a1gal/Rhythm/blog1.jpg?updatedAt=1680339812269" />
                            </a>
                        </Col>
                        <Col md={6} className="blogsListInfo">

                            <Container className="blogsListInfoContents">
                                <Row>
                                    <h1 className="blogListTitle ">Launch of new economic pathway under the Economic Mobility Pathways Pilot (EMPP)</h1>
                                </Row>
                                <Row>
                                    <p className="blogListDate">27 March, 2023</p>
                                </Row>
                                <a href="/#/blog/empp"><Row>Read More</Row></a>
                            </Container>
                        </Col>
                    </Row>




                </Container>



            </Container>



        </Container>
    )

};

export default Blogs