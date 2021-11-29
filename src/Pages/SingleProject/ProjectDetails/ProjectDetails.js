import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

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
                        <Carousel variant="dark">


                            {Project?.images?.map(IMG => <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={IMG}
                                    alt="Third slide"
                                />

                            </Carousel.Item>)
                            }
                        </Carousel>
                    </Col>
                    <Col md={12} className="mt-5">
                        <h2>Project Name: {Project?.name}</h2>
                        <p className="mb-1">Live Site:  <a href={Project?.liveSite} target="_blank" rel="noopener noreferrer">View</a> </p>
                        <p className="mb-1">Client Site:  <a href={Project?.clientSite} target="_blank" rel="noopener noreferrer">View</a> </p>
                        <p className="mb-2">Server Site:  <a href={Project?.serverSite} target="_blank" rel="noopener noreferrer">View</a> </p>
                        <p className="mb-2"> <span className="fw-bolder">Technology Used :</span>{Project?.tools}</p>
                        <p className="mb-1"> <span className="fw-bolder">Description :</span> {Project?.details}</p>
                        <ul>
                            {Project?.li?.map(l => <li>{l}</li>)}


                        </ul>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProjectDetails;