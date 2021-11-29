import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';

import './Projects.css'
import { useHistory } from 'react-router';
const Projects = () => {
    const history = useHistory();
    const SingleProjectDetails = id => {
        history.push(`/project/${id}`)
    }
    const [Projects, setProjects] = useState([])
    useEffect(() => {
        fetch('/project.json')
            .then(res => res.json())
            .then(data => setProjects(data))

    }, [])

    const handleMoreProject = () => {
        history.push("/projects")

    }
    return (
        <div >
            <Container className="py-5">
                <Row >
                    <Col md={12}>
                        <h1><i className="far fa-dot-circle fs-3 mt-5" style={{ color: "#FF014F" }} ></i> <span>All Projects</span></h1>

                    </Col>
                </Row>
                <Row xs={1} md={3} className="g-4 mt-3">
                    {Projects?.slice(0, 3).map(project => <Col
                        key={project.id}>
                        <Card>
                            <Card.Img variant="top" src={project?.images[0]} />
                            <Card.Body>
                                <Card.Title className="project-title">{project?.name}</Card.Title>
                                <Card.Text className="mb-1">
                                    {project?.details.slice(0, 170)}

                                </Card.Text>
                                <Card.Text className="mb-2">
                                    <span className="fw-bolder">Technology Used :</span> {project?.tools}

                                </Card.Text>
                                <Card.Text className="mb-1">
                                    <span>
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="button-tooltip-2">Live Site</Tooltip>}
                                        >
                                            {({ ref, ...triggerHandler }) => (
                                                <a
                                                    {...triggerHandler}
                                                    href={project?.liveSite} target="_blank"
                                                    rel="noopener noreferrer">
                                                    <i
                                                        ref={ref}
                                                        className="fas fa-external-link-square-alt project-link"></i>
                                                </a>


                                            )}
                                        </OverlayTrigger>

                                    </span>
                                    <span>
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="button-tooltip-2">Client Site Code link</Tooltip>}
                                        >
                                            {({ ref, ...triggerHandler }) => (
                                                <a
                                                    {...triggerHandler}
                                                    href={project?.clientSite} target="_blank"
                                                    rel="noopener noreferrer">
                                                    <i
                                                        ref={ref}
                                                        className="fab fa-github project-link"></i>
                                                </a>


                                            )}
                                        </OverlayTrigger>

                                    </span>
                                    <span>
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="button-tooltip-2">Server Site Code link</Tooltip>}
                                        >
                                            {({ ref, ...triggerHandler }) => (
                                                <a
                                                    {...triggerHandler}
                                                    href={project?.serverSite} target="_blank"
                                                    rel="noopener noreferrer">
                                                    <i
                                                        ref={ref}
                                                        className="fas fa-server project-link"></i>
                                                </a>
                                            )}
                                        </OverlayTrigger>

                                    </span>

                                </Card.Text>
                                <Button variant="danger" className="resume-download-btn mt-2" onClick={() => SingleProjectDetails(project?.id)}> View details</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    )}

                    <p className="text-center"><Button variant="danger" className="resume-download-btn mt-2" onClick={handleMoreProject}>View more project</Button> </p>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;