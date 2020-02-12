import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.scss'

const Home = () => {
    return(
    <Container fluid className="p-0 home" id="home">
        <Row className="p-0 m-0 ">
            <Col className="mt-3">
                <p className="head text-center text-secondary text-uppercase">Piotr &amp; Agata</p>
                <h1 className="lead text-center text-white font-weight-bold text-uppercase">Jesteśmy małżeństwem!</h1>
            </Col>
        </Row>
    </Container>
    )
}

export default Home;