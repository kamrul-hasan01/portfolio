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
                            <p className="fs-4 mt-3 fw-bolder mb-0">ByCycle Habitat</p>
                            <p>Full-Stack e-commerce website. Users can buy products from there. user can give a review. Admin can manage orders and products.

                            </p>
                            <p className="fs-5"> <span className="fw-bold"> Technology Used : </span>
                                Bootstrap, React js, Node js, Express js,
                                MongoDB, Firebase.

                            </p>

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
                            <p className="fs-5 mt-3 fw-bolder mb-0">Victory Travel</p>
                            <p>Full-Stack travel booking website. Users can buy products from there. user can give a review. Admin can manage orders and products.

                            </p>
                            <p className="fs-5"> <span className="fw-bold"> Technology Used : </span>
                                Bootstrap, React js, Node js, Express js,
                                MongoDB, Firebase.

                            </p>


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
                            <p className="fs-5 mt-3 fw-bolder mb-0">Denti Care</p>
                            <p>Font End Dental care website. Users can buy products from there. User can give a review.User can book an appointment.
                            </p>
                            <p className="fs-5"> <span className="fw-bold"> Technology Used : </span>
                                HTML, CSS, Bootstrap, React js,  Firebase.

                            </p>


                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Projects;