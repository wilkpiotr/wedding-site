import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.scss'

const Footer = () => {
    return(
    <Container as="footer" fluid className="footer py-4" id="footer">
        <Container className="p-0">
            <Row className="justify-content-between">
                <Col>
                    <p className="m-0 text-left text-light">Made by <a target="blank" href="https://www.linkedin.com/in/piotr-wilk-39962b153/">Piotr Wilk</a></p>
                </Col>
                <Col>
                    <p className="m-0 text-right text-light">All pictures made by <a target="blank" href="https://www.facebook.com/ewelina.kulas.fotografia/">Ewelina Kulas</a>. All right reserved</p>
                </Col>
            </Row>
        </Container>
    </Container>
    )
}

export default Footer;