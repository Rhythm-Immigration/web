// from HTMLModElement.js

// const handleSubmit = (event) => {
//   const form = event.currentTarget;
//   if (form.checkValidity() === false) {
//     event.preventDefault();
//     event.stopPropagation();
//     if (firstName === "" || firstName === "_  _  _  _  _  _") {
//       document.getElementById("fNameLabelReq").style.display = "block";
//       document.getElementById("fNameLabelLen").style.display = "block";
//       document.getElementById("fNameLabelOK").style.display = "none";
//     }
//     else if (firstName.length < 2) {
//       document.getElementById("fNameLabelReq").style.display = "none";
//       document.getElementById("fNameLabelOK").style.display = "none";
//       document.getElementById("fNameLabelLen").style.display = "block";
//     }
//     else if (firstName.length >= 2 & firstName !== "_  _  _  _  _  _") {
//       document.getElementById("fNameLabelOK").style.display = "block";
//       document.getElementById("fNameLabelReq").style.display = "none";
//       document.getElementById("fNameLabelLen").style.display = "none";
//     }
//   }
//   else {
//     document.getElementById("fNameLabelOK").style.display = "block";
//     document.getElementById("fNameLabelReq").style.display = "none";
//     document.getElementById("fNameLabelLen").style.display = "none";
//     event.preventDefault();
//     event.stopPropagation();
//     console.log("true");
//   }
// }

// function FormExample() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };
// };






{/* <Row>
                    <Col className="gap"> <ul className="text-center"> <h3>Wanna know a little about me?</h3> </ul> </Col>
                </Row>

                <Row className="textControl gap">
                    <Col >
                        <h5>
                            I am a recent BCIT Graduate with Distinction in the extensive study program (earned 120 credits in 2 years) of Computer Information Technology.
                            I am the recipient of <b> “The BCIT Computer Information Technology Award - 2021”</b> for getting highest grades with GPA of 92% in my final year.
                            I have worked on various projects producing high quality deliverables.
                            My clients and sponsors have always been very happy with the results that were delivered to them.
                            Don't take my word for it. See it for yourself! See the
                            <a href="https://www.linkedin.com/posts/bcitcomputing_tomorrow-is-the-day-please-join-us-online-activity-6742900421712453632-CRK-/" target="_blank" rel="noopener noreferrer"> video </a>
                            of one of my sponsors Dr. Johann Roduit, co-founder of Conexkt and an expert for Innosuisse - the Swiss innovation agency.

                        </h5>

                        <h5>
                            I have also worked with Builtspace Technologies Corp. and TEDxAbbotsford during my internship program under "Industry Sponsored Student Projects" at the British Columbia Institute of Technology.
                            In addition to that, I have also worked on some projects as a member of a team and also on some individual projects. The information related to my projects and skillset is available on this website.
                        </h5>
                    </Col>
                </Row>

                <Row className="gap">
                    <Col className="gap"> <h5>Programming languages in my skillset include:</h5> </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Button className="marginAll" variant="outline-info">HTML</Button>
                        <Button className="marginAll" variant="outline-info">JavaScript</Button>
                        <Button className="marginAll" variant="outline-info">CSS</Button>
                        <Button className="marginAll" variant="outline-info">Node.js</Button>
                        <Button className="marginAll" variant="outline-info">jQuery</Button>
                        <Button className="marginAll" variant="outline-info">React Native</Button>
                        <Button className="marginAll" variant="outline-info">Angular</Button>
                        <Button className="marginAll" variant="outline-info">Python</Button>
                        <Button className="marginAll" variant="outline-info">Java</Button>
                        <Button className="marginAll" variant="outline-info">PHP</Button>
                        <Button className="marginAll" variant="outline-info">R (RStudio)</Button>
                        <Button className="marginAll" variant="outline-info">Bash Scripting</Button>
                        <Button className="marginAll" variant="outline-info">Structured Query Language</Button>
                    </Col>
                </Row>

                <Row className="gap">
                    <Col className="gap"> <h5>I have worked with following technologies and concepts:</h5> </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Button className="marginAll" variant="outline-info">Linux</Button>
                        <Button className="marginAll" variant="outline-info">Unix</Button>
                        <Button className="marginAll" variant="outline-info">Windows 7 / 8 / 9 / 10</Button>
                        <Button className="marginAll" variant="outline-info">Windows Server 2016 / 2019</Button>
                        <Button className="marginAll" variant="outline-info">Active Directory</Button>
                        <Button className="marginAll" variant="outline-info">Wireshark</Button>
                        <Button className="marginAll" variant="outline-info">Netcat</Button>
                        <Button className="marginAll" variant="outline-info">Packet Tracer</Button>
                        <Button className="marginAll" variant="outline-info">Metasploit</Button>
                        <Button className="marginAll" variant="outline-info">Ansible</Button>
                        <Button className="marginAll" variant="outline-info">Vagrant</Button>
                        <Button className="marginAll" variant="outline-info">Version Control Systems (Git) / Github</Button>
                        <Button className="marginAll" variant="outline-info">MySQL Workbench</Button>
                        <Button className="marginAll" variant="outline-info">VirtualBox</Button>
                        <Button className="marginAll" variant="outline-info">VMware</Button>
                        <Button className="marginAll" variant="outline-info">Enterprise Network Setup</Button>
                        <Button className="marginAll" variant="outline-info">LAN / WAN</Button>
                        <Button className="marginAll" variant="outline-info">Network Security</Button>
                        <Button className="marginAll" variant="outline-info">Agile Methodologies</Button>
                        <Button className="marginAll" variant="outline-info">DevOps</Button>
                        <Button className="marginAll" variant="outline-info">Continous Integration</Button>
                        <Button className="marginAll" variant="outline-info">Continous Delivery</Button>
                        <Button className="marginAll" variant="outline-info">Amazon Web Services</Button>
                        <Button className="marginAll" variant="outline-info">Serverless AWS services</Button>
                        <Button className="marginAll" variant="outline-info">Azure</Button>
                        <Button className="marginAll" variant="outline-info">Docker</Button>
                        <Button className="marginAll" variant="outline-info">Kubernetes</Button>
                        <Button className="marginAll" variant="outline-info">App Deployements (Heroku, AWS, Git Pages, etc.)</Button>
                        <Button className="marginAll" variant="outline-info">REST API</Button>
                        <Button className="marginAll" variant="outline-info">OpenAPI Specification</Button>
                        <Button className="marginAll" variant="outline-info">SwaggerHub</Button>
                        <Button className="marginAll" variant="outline-info">Microservices</Button>
                        <Button className="marginAll" variant="outline-info">Object-oriented programming</Button>
                        <Button className="marginAll" variant="outline-info">Test Driven Development</Button>
                    </Col>
                </Row>

                <Row className="gap">
                    <Col className="gap"> <h5>Databases in my skillset include:</h5> </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Button className="marginAll" variant="outline-info">MySQL</Button>
                        <Button className="marginAll" variant="outline-info">Microsoft SQL Server</Button>
                        <Button className="marginAll" variant="outline-info">MongoDB</Button>
                        <Button className="marginAll" variant="outline-info">SQLite</Button>
                        <Button className="marginAll" variant="outline-info">Firebase Realtime Database</Button>
                        <Button className="marginAll" variant="outline-info">Amazon DynamoDB</Button>
                    </Col>
                </Row>

                <Row className="gap">
                    <Col className="gap"> <h5>My Projects
                    <a href="/portofolio/#/projects"> (click here for details) </a>
                         </h5>
                          </Col>
                </Row>


                    <Row fluid="true">


                        <Col className="smallGap text-center" >
                            <Row>
                            <a className="hoverEffect" href="https://game.karandev.xyz/" target="_blank" rel="noopener noreferrer">
                                <Image src={HangmanImage} thumbnail />
                            </a>
                            </Row>
                            <Row className="marginAll"><Col><h5>Hangman Game</h5></Col></Row>

                        </Col>

                        <Col className="smallGap text-center" >
                            <Row>
                            <a className="hoverEffect" href="https://dansljardin.herokuapp.com/#/" target="_blank" rel="noopener noreferrer">
                                <Image src={DansImage} thumbnail />
                            </a>
                            </Row>
                            <Row className="marginAll"><Col><h5>Dans L'Jardin</h5></Col></Row>

                        </Col>

                        <Col className="smallGap text-center" >
                            <Row>
                            <a className="hoverEffect" href="mailto:harika.karanveer@gmail.com?subject=Tell me some general info about Builtspace App">
                                <Image src={BuiltImage} thumbnail />
                            </a>
                            </Row>
                            <Row className="marginAll"><Col><h5>Builtspace Project</h5> <p>(No link due to NDA)</p></Col></Row>

                        </Col>

                    </Row>
                    <Row fluid="true">
                        <Col className="smallGap text-center" >
                            <Row>
                            <a className="hoverEffect" href="https://www.figma.com/proto/KP5zNiiZAwIAYsuDb2nopg/Task-FLows?node-id=4%3A1790&scaling=contain" target="_blank" rel="noopener noreferrer">
                                <Image src={MunchiImage} thumbnail />
                            </a>
                            </Row>
                            <Row className="marginAll"><Col><h5>Munchi Food Ordering App</h5></Col></Row>

                        </Col>

                        <Col className="smallGap text-center" >
                            <Row>
                            <a className="hoverEffect" href="https://karanharika.github.io/2D-snake/" target="_blank" rel="noopener noreferrer">
                                <Image src={SnakeImage} thumbnail />
                            </a>
                            </Row>
                            <Row className="marginAll"><Col><h5>Snake 2D Game</h5></Col></Row>

                        </Col>

                        <Col className="smallGap text-center" >
                            <Row>
                            <a className="hoverEffect" href="https://karanharika.github.io/reminders_app/" target="_blank" rel="noopener noreferrer">
                                <Image src={RemindersImage} thumbnail />
                            </a>
                            </Row>
                            <Row className="marginAll"><Col><h5>Reminders Web App</h5></Col></Row>

                        </Col>





                    </Row> */}