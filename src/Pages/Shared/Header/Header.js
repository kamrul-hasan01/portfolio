import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Header = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="md" sticky="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/">

                    Kamrul Hasan
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/home" >Home</Nav.Link>

                        <Nav.Link as={HashLink} to="/#aboutMe" >About Me</Nav.Link>
                        <Nav.Link as={HashLink} to="/#skills" >Skills</Nav.Link>
                        <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={HashLink} to="/#contact">Contact Me</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;