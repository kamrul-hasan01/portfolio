import React from 'react';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';
import './Banner.css'
import Typewriter from 'typewriter-effect';
import userImg from '../../../Images/IMG_2165.jpg'
const Banner = () => {
    return (
        <div className="banner-bg">
            <Container className="py-5">
                <Row className="pt-5">
                    <Col md={6} className="banner-col-shadow p-3 pt-5 mb-3">

                        <p>  <span className="user-icon"><i className="fas fa-user fs-3 custom-font-color"></i></span> </p>
                        <h1>Hi, I,m <span className="custom-font-color">Kamrul Hasan <br /></span>  <Typewriter
                            options={{
                                strings: ['a Web Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        /> </h1>
                        <p className="fs-5 mb-0"> <span><i class="fas fa-file-code custom-font-color pe-2"></i></span> Web Developer</p>
                        <p className="fs-5 mb-0"> <span><i class="fas fa-envelope custom-font-color pe-2"></i></span> kamrulhasan.kh02@gmail.com</p>
                        <p className="fs-5 mb-0"> <span><i class="fas fa-map-marker custom-font-color pe-2 mb-3"></i></span> Uttara, Dhaka</p>

                        <Button variant="danger" className="resume-download-btn mt-2">Download Resume</Button>
                        <Button variant="danger" className="resume-download-btn mt-2">Contact Me</Button>

                    </Col>
                    <Col md={6}>
                        <Image src={userImg} thumbnail fluid className="user-photo" />
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Banner;