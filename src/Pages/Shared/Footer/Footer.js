import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <Container className="text-center">
                <p className="py-3"><i className="far fa-copyright"></i> 2021 Design by <i style={{ color: "#FF451B" }} className="fas fa-heart"></i> MD Kamrul Hasan</p>
            </Container>
        </div>
    );
};

export default Footer;