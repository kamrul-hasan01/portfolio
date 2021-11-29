import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-light text-dark">
            <Container className="text-center">
                <p className="py-3 mb-0"><i className="far fa-copyright"></i> 2021 Design by <i style={{ color: "#FF451B" }} className="fas fa-heart"></i> MD Kamrul Hasan</p>
            </Container>
        </div>
    );
};

export default Footer;