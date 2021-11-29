import React from 'react';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';
import './Banner.css'
import Typewriter from 'typewriter-effect';
import userImg from '../../../Images/user.png'

const Banner = () => {

    return (
        <div className="banner-bg">
            <Container className="py-5">
                <Row className="pt-5">
                    <Col md={6} className="banner-col-shadow p-3 pt-5 mb-3">

                        <p>  <span className="user-icon"><i className="fas fa-user fs-3 custom-font-color"></i></span> </p>
                        <h1>Hi, I'm <span className="custom-font-color">Kamrul Hasan <br /></span>
                            <div className="d-flex">
                                <span className="me-2">a</span>
                                <span>
                                    <Typewriter
                                        options={{
                                            strings: ['  Web Developer'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                            </div>
                        </h1>
                        <p className="fs-5 mb-0"> <span><i class="fas fa-file-code custom-font-color pe-2"></i></span> Web Developer</p>
                        <p className="fs-5 mb-0"> <span><i class="fas fa-envelope custom-font-color pe-2"></i></span> kamrulhasan.kh02@gmail.com</p>
                        <p className="fs-5 mb-0"> <span><i class="fas fa-map-marker custom-font-color pe-2 mb-3"></i></span> Uttara, Dhaka</p>

                        <a href="https://drive.google.com/file/d/18HdLxJ3CpS1xE9-LIhJE5vTYU7xSdUwW/view" target="_blank" rel="noopener noreferrer">  <Button variant="danger" className="resume-download-btn mt-2">Download Resume</Button></a>
                        <a href="#contact">
                            <Button variant="danger" className="resume-download-btn mt-2">Contact Me</Button>
                        </a>

                    </Col>
                    <Col md={6} className="d-flex justify-content-center">
                        <Image src={userImg} fluid className="user-photo" />
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Banner;