import React, { useState } from 'react';
import { Col, Container, Row, Button, Form, FloatingLabel, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
const ContactMe = () => {
    const [show, setShow] = useState(false);
    const [review, setReview] = useState({});
    const handleInputOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const data = { ...review };
        data[field] = value;
        setReview(data);

    }
    const handleSubmit = e => {
        e.preventDefault()
        setShow(false)
        emailjs.sendForm('service_8wz67va', 'gmail', e.target, 'user_LiKtigRFtgHVAUzAqiUAr')
            .then((result) => {
                if (result.text === "OK") {
                    setShow(true)
                }
            }, (error) => {
                setShow(false)

            });


    }
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                        <h1><i className="far fa-dot-circle fs-3" style={{ color: "#FF014F" }} ></i> <span>Contact Me</span></h1>

                    </Col>
                    <Col md={4}>

                        <Row >

                            <Col md={12} className="text-center px-5 py-2 col-shadow">
                                <i className="fas fa-mobile-alt fs-3"></i>
                                <p className="mb-0">PHONE</p>
                                <p style={{ color: "#FF014F" }} className="fs-5">+8801950458002</p>
                            </Col>
                            <Col md={12} className="text-center px-5 py-2 col-shadow">
                                <i className="far fa-envelope fs-3"></i>
                                <p className="mb-0">Email</p>
                                <p style={{ color: "#FF014F" }} className="fs-5">kamrulhasan.kh02@gmail.com</p>
                            </Col>
                            <Col md={12} className="text-center px-5 py-2 col-shadow">
                                <i className="fas fa-map-marker-alt fs-3"></i>
                                <p className="mb-0">PHONE</p>
                                <p style={{ color: "#FF014F" }} className="fs-5">Uttara, Dhaka</p>
                            </Col>

                        </Row>
                    </Col>
                    <Col md={8} className="px-5">
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" className="mb-3" >
                                    <FloatingLabel label="Full Name">
                                        <Form.Control
                                            size="lg"
                                            required
                                            type="text"
                                            placeholder="Full Name"
                                            name="name"
                                            onBlur={handleInputOnBlur}
                                        />
                                    </FloatingLabel>

                                </Form.Group>
                                <Form.Group as={Col} md="12" className="mb-3" >
                                    <FloatingLabel label="Email">
                                        <Form.Control
                                            size="lg"
                                            required
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            onBlur={handleInputOnBlur}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} md="12" className="mb-3" >
                                    <FloatingLabel label="Subject">
                                        <Form.Control
                                            size="lg"
                                            required
                                            type="text"
                                            placeholder="Subject"
                                            name="subject"
                                            onBlur={handleInputOnBlur}
                                        />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3" as={Col} md="12" controlId="exampleForm.ControlTextarea1">



                                    <FloatingLabel label="Message">
                                        <Form.Control
                                            as="textarea"
                                            required
                                            style={{ height: '100px' }}
                                            size="lg"

                                            type="text"
                                            placeholder="Message"
                                            name="message"
                                            onBlur={handleInputOnBlur}
                                        />
                                    </FloatingLabel>

                                </Form.Group>

                            </Row>
                            <p className="text-start my-3"> <Button type="submit" variant="danger" style={{ backgroundColor: "#FF014F" }} >Send Message</Button></p>
                        </Form>
                        <Alert show={show} variant="success">
                            <Alert.Heading>your message has been sent successfully.</Alert.Heading>


                        </Alert>


                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default ContactMe;