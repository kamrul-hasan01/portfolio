import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../Images/logo-user.jpg'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#FF014F"
    }
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    React Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/home" activeStyle={activeStyle}>Home</Nav.Link>
                        <Nav.Link href="#link" >Resume</Nav.Link>
                        <Nav.Link href="#link">About Me</Nav.Link>
                        <Nav.Link as={NavLink} to="/projects" activeStyle={activeStyle}>Projects</Nav.Link>
                        <Nav.Link href="#link">Contact Me</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;