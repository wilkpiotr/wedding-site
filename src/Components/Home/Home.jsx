import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.scss'

const Home = () => {
    return(
    <Container fluid className="p-0 pt-5 vh-100 home" id="home">
        <Row className="p-0 m-0 ">
            <Col className="mt-5">
                <h1 className="text-center display-4 text-danger head">Piotr & Agata</h1>
                <p className="lead text-center text-danger">Serdecznie witamy na naszej stronie ślubnej</p>
            </Col>
        </Row>
    </Container>
    )
}

export default Home;