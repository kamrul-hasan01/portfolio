import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './projectDetails.css'
const ProjectDetails = ({ id }) => {
    const [Project, setProject] = useState([])
    useEffect(() => {
        fetch('/project.json')
            .then(res => res.json())
            .then(data => {
                const FindProject = data.find(d => d.id === id);
                setProject(FindProject)
            })

    }, [id])

    return (
        <div>

            <Container className="py-5">
                <Row>
                    <Col md={12}>
                        <div className="car-container">
                            <Carousel variant="dark">


                                {Project?.images?.map(IMG => <Carousel.Item
                                    key={IMG}
                                >
                                    <img
                                        className="d-block w-100"
                                        src={IMG}
                                        alt="Third slide"
                                    />

                                </Carousel.Item>)
                                }
                            </Carousel>
                        </div>
                    </Col>
                    <Col md={12} className="mt-5">
                        <h2>Project Name: {Project?.name}</h2>
                        <div className="d-flex">
                            <p className="mb-1 fs-4 fw-light">Live Site : <a href={Project?.liveSite} target="_blank" rel="noopener noreferrer"> <i
                                className="fas fa-external-link-square-alt project-link"></i></a> </p>

                            <p className="mb-1 fs-4 fw-light">Client Site:  <a href={Project?.clientSite} target="_blank" rel="noopener noreferrer">  <i className="fab fa-github project-link"></i></a> </p>
                            {Project?.serverSite && <p className="mb-2 fs-4 fw-light">Server Site:  <a href={Project?.serverSite} target="_blank" rel="noopener noreferrer"><i className="fas fa-server project-link"></i></a> </p>}
                        </div>

                        <p className="mb-2"> <span className="fw-bolder">Technology Used :</span>{Project?.tools}</p>
                        <p className="mb-1"> <span className="fw-bolder">Description :</span> {Project?.details}</p>
                        <ul>
                            {Project?.li?.map(l => <li
                                key={l}
                            >{l}</li>)}


                        </ul>


                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default ProjectDetails;