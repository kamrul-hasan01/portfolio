import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import myPhoto from "../../../Images/IMG_21.jpg";
import "./AboutMe.css";
import linkedin from "../../../Images/linkedin.png";
import github from "../../../Images/github.png";
const AboutMe = () => {
  return (
    <div id="aboutMe" className="pt-5">
      <Container>
        <Row>
          <Col md={6} className="info-cont">
            <Image src={myPhoto} className="about-me-pic" />
            <div className="about-me-info">
              <p className="mb-0">Name :</p>
              <p className="mb-0 fs-5">Kamrul Hasan</p>
              <div>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>

              <p className="mb-0">Email :</p>
              <p className="mb-0 fs-5">
                kamrulhasan.kh02 <br /> @gmail.com
              </p>
              <div>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <p className="mb-0">Phone :</p>
              <p className="mb-0 fs-5">01950458002</p>
              <div>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <p className="mb-0">Address :</p>
              <p className="mb-0 fs-5">Uttara, Dhaka</p>
            </div>
          </Col>
          <Col md={6} className="about-info-container">
            <p
              style={{
                color: "#FF014F",
                fontSize: "22px",
                fontWeight: "bold",
                marginTop: "35px",
                marginBottom: 0,
              }}
            >
              About Me
            </p>
            <h4 className="fw-bolder">Mern Stack Developer</h4>

            <p className="fs-5 text-muted">
              Hi! My name is Kamrul Hasan. I am an mern stack developer, having
              good knowledge on multiple core technologies like (HTML, CSS,
              Bootstrap, Tailwind CSS, Material UI, React, Node JS, Mongo DB,
              Firebase).
            </p>
            <p>Find with me</p>
            <p className="media-link">
              <a
                href="https://github.com/kamrul-hasan01"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Image
                  className="media-logo"
                  src={github}
                  alt="py Picture"
                  fluid
                ></Image>
              </a>
              <a
                href="https://www.linkedin.com/in/kamrul-hasan01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Image
                  className="media-logo"
                  src={linkedin}
                  alt="py Picture"
                  fluid
                ></Image>
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
