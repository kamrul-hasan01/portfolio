import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import skill from '../../../Images/skills.jpg'
import html from '../../../Images/html-5.png'
import css from '../../../Images/css-3.png'
import bootstrap from '../../../Images/bootstrap.png'
import js from '../../../Images/js.png'
import react from '../../../Images/physics.png'
import node from '../../../Images/nodejs.png'
import mongo from '../../../Images/database.png'
import firebase from '../../../Images/hot.png'
import git from '../../../Images/git.png'
import figma from '../../../Images/figma.png'
import photoshop from '../../../Images/photoshop.png'
import './skills.css'
const Skills = () => {
    return (
        <div id="skills" className="pt-5 bg-light" >
            <Container>
                <Row>
                    <Col md={12}>
                        <h1><i className="far fa-dot-circle fs-3" style={{ color: "#FF014F" }} ></i> <span>Skills</span></h1>


                    </Col>
                    <Col md={4}>
                        <Image src={skill} alt="picture" fluid></Image>
                    </Col>
                    <Col md={8}>
                        <h1 className="fw-lighter">What I do</h1>
                        <p className="fs-5 fw-lighter">CRAZY MERN STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
                        <Row>
                            <Col md={2} xs={6}>
                                <div className="skill-col">
                                    <div className="d-flex justify-content-center">
                                        <Image src={html} ></Image>
                                    </div>
                                    <p className="text-center">HTML</p>
                                </div>
                            </Col>
                            <Col md={2} xs={6} >
                                <div className="skill-col">
                                    <div className="d-flex justify-content-center">
                                        <Image src={css} ></Image>
                                    </div>
                                    <p className="text-center">CSS</p>
                                </div>
                            </Col>
                            <Col md={2} xs={6} >
                                <div className="skill-col">
                                    <div className="d-flex justify-content-center">
                                        <Image src={bootstrap} ></Image>
                                    </div>
                                    <p className="text-center">Bootstrap</p>
                                </div>
                            </Col>
                            <Col md={2} xs={6} >
                                <div className="skill-col">
                                    <div className="d-flex justify-content-center">
                                        <Image src={js} ></Image>
                                    </div>
                                    <p className="text-center">JavaScript</p>
                                </div>
                            </Col>
                            <Col md={2} xs={6}>
                                <div className="skill-col">
                                    <div className="d-flex justify-content-center">
                                        <Image src={react} ></Image>
                                    </div>
                                    <p className="text-center">React</p>
                                </div>
                            </Col>

                            <Col md={2} xs={6} >
                                <div className="skill-col">
                                    <div className="d-flex justify-content-center">
                                        <Image src={node} ></Image>
                                    </div>
                                    <p className="text-center">Node js</p>
                                </div>
                            </Col>
                            <Col md={2} xs={6} >
                                <div className="skill-col">
                                    <div className="d-flex justify-content-center">
                                        <Image src={mongo} ></Image>
                                    </div>
                                    <p className="text-center">Mongo DB</p>
                                </div>
                            </Col>
                            <Col md={2} xs={6} >
                                <div className="skill-col">
                                    <div className="d-flex justify-content-center">
                                        <Image src={firebase} ></Image>
                                    </div>
                                    <p className="text-center">Firebase</p>
                                </div>
                            </Col>
                            <Col md={2} xs={6}>
                                <div className="skill-col">
                                    <div className="d-flex justify-content-center">
                                        <Image src={git} ></Image>
                                    </div>
                                    <p className="text-center">Git</p>
                                </div>
                            </Col>
                            <Col md={2} xs={6}>
                                <div className="skill-col">
                                    <div className="d-flex justify-content-center">
                                        <Image src={figma} ></Image>
                                    </div>
                                    <p className="text-center">Figma</p>
                                </div>
                            </Col>
                            <Col md={2} xs={6}>
                                <div className="skill-col">
                                    <div className="d-flex justify-content-center">
                                        <Image src={photoshop} ></Image>
                                    </div>
                                    <p className="text-center">PhotoShop</p>
                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;