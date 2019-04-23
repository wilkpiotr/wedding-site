import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.scss'

const Home = () => {
    return(
    <Container fluid className="p-0 pt-5 vh-100 home">
        <Row className="p-0 m-0 ">
            <Col className="mt-5">
                <h1 className="text-center display-4 text-danger">Piotr & Agata</h1>
                <p className="lead text-center text-danger">Serdecznie witamy na naszej stronie ślubnej</p>
            </Col>
            {/* <Col className="pic justify-content-end"><img className="vh-100" src={picture} alt="my"/></Col> */}
        </Row>
    </Container>
    )
}

export default Home;