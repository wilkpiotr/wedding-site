import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import church from '../../images/church.jpg';
import hotel from '../../images/hotel.jpg';

const Place = () => {
    return(
        <Container className="p-0" id="">
        <Row className="p-0 m-0 ">
            <Col className="">
                <h3 className="invite text-center text-dark p-5">Uroczystości odbyły się dnia:</h3>
                <p className="text-uppercase text-center"> 06 pażdziernika 2018 roku</p>
            </Col>
        </Row>
        <Row className="p-0 m-0 ">
            <Col className="mt-5">
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={church}
                />
            </Col>
            <Col className="mt-5 text-danger">
                    <h4>ŚLUB</h4>
                    <p>Ceremonia ślubna odbyła się w kościele pod wezwaniem św. Jadwigi w Dębicy.</p>
            </Col>
        </Row>
        <Row className="p-0 m-0 ">
            <Col className="mt-5 text-danger media">
                <h4>WESELE</h4>
                <p>Przyjęcie weselne będzie miało miejsce w restauracji Ambrozja przy ulicy Adama Mickiewicza 62 w Dębicy.</p>
                <Figure.Image className="align-self-cente"
                    width={171}
                    height={180}
                    alt="171x180"
                    src={hotel}
                />
            </Col>
        </Row>
    </Container>
    )
}

export default Place;