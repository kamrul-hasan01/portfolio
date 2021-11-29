import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import travel from '../../../Images/travel.png'
import byCle from '../../../Images/bycle.png'
import dental from '../../../Images/dental.png'
import './Projects.css'
const Projects = () => {
    return (
        <div id="portfolio">
            <Container className="py-5">
                <Row>
                    <Col md={12}>
                        <h1><i className="far fa-dot-circle fs-3" style={{ color: "#FF014F" }} ></i> <span>Projects</span></h1>

                    </Col>

                </Row>

                <Row>
                    <Col md={4} >
                        <div className="col-shadow">
                            <div className="photo-frame">
                                <div className="photo">
                                    <Image src={byCle} alt="" />
                                </div>
                                <div className="photo-details">
                                    <p><a href="https://bicyle-habitat.firebaseapp.com/" target="_blank"
                                        rel="noopener noreferrer">View</a> </p>
                                </div>
                            </div>
                            <p className="fs-5 mt-3 fw-bolder mb-0">Title: ByCycle Habitat</p>
                            <div className="used-stack-tools">
                                <span className="fs-5">Used stack: </span>
                                <Button variant="light">HTML</Button>
                                <Button variant="light">CSS</Button>
                                <Button variant="light">REACT</Button>
                                <Button variant="light">FIREBASE</Button>
                                <Button variant="light">MONGO DB</Button>
                                <Button variant="light">NODE JS</Button>
                            </div>
                            <div className="d-flex justify-content-between">
                                <a href="https://github.com/k17h02/Bycyle-Habitat" target="_blank" rel="noopener noreferrer">
                                    <Button variant="link">Client Side Code</Button>
                                </a>
                                <a href="https://github.com/k17h02/Bycylce-Habitat-server" target="_blank" rel="noopener noreferrer">
                                    <Button variant="link">Server Side Code</Button>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} >
                        <div className="col-shadow">
                            <div className="photo-frame">
                                <div className="photo">
                                    <Image src={travel} alt="" />
                                </div>
                                <div className="photo-details">
                                    <p><a href="https://victory-travel-k17h02.web.app/" target="_blank"
                                        rel="noopener noreferrer">View</a> </p>
                                </div>
                            </div>
                            <p className="fs-5 mt-3 fw-bolder mb-0">Title: Victory Travel</p>
                            <div className="used-stack-tools">
                                <span className="fs-5">Used stack: </span>
                                <Button variant="light">HTML</Button>
                                <Button variant="light">CSS</Button>
                                <Button variant="light">REACT</Button>
                                <Button variant="light">FIREBASE</Button>
                                <Button variant="light">MONGO DB</Button>
                                <Button variant="light">NODE JS</Button>

                            </div>
                            <div className="d-flex justify-content-between">
                                <a href="https://github.com/k17h02/Victory-Travel" target="_blank" rel="noopener noreferrer">
                                    <Button variant="link">Client Side Code</Button>
                                </a>
                                <a href="https://github.com/k17h02/Victory-Travel-server-" target="_blank" rel="noopener noreferrer">
                                    <Button variant="link">Server Side Code</Button>
                                </a>

                            </div>
                        </div>
                    </Col>

                    <Col md={4} >
                        <div className="col-shadow">
                            <div className="photo-frame">
                                <div className="photo">
                                    <Image src={dental} alt="" />
                                </div>
                                <div className="photo-details">
                                    <p><a href="https://denticare-k17h02.web.app/" target="_blank"
                                        rel="noopener noreferrer">View</a> </p>
                                </div>
                            </div>
                            <p className="fs-5 mt-3 fw-bolder mb-0">Title: Denti Care</p>
                            <div className="used-stack-tools">
                                <span className="fs-5">Used stack: </span>
                                <Button variant="light">HTML</Button>
                                <Button variant="light">CSS</Button>
                                <Button variant="light">REACT</Button>
                                <Button variant="light">FIREBASE</Button>

                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="https://github.com/k17h02/Victory-Travel" target="_blank" rel="noopener noreferrer">
                                    <Button variant="link">Client Side Code</Button>
                                </a>


                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Projects;