import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './WeddingWishes.scss'

class WeddingWishes extends Component {
    state = {text: `Jeżeli kochać - to kochać stale,dopóki serce przestanie bić. I swej miłości nie wstydzić się wcale,bo bez miłości nie można żyć`}

    render() {
        return(
        <Container>
            <Row>
                <Col>
                    <h3 className="text-center">Kochani!</h3>
                    <p>Serdecznie dziękujemy Wam za wszystkie życzenia! Teraz ciężko pracujemy, aby mogły się one spełnić. Te złożone za pośrednictwem tej strony cały czas możecie przeczytać pod spodem. Oczywiście jeśli ktoś ma ochotę coś dodać od siebie, nic nie stoi na przeszkodzie ;)</p>
                </Col>
            </Row>
            <Row>
                <Col className="wishes my-1">
                    <p><b>Tomek I Ania Kuczyńscy </b><cite>napisali 05.10.2018r.</cite></p>
                    <p>{this.state.text}</p>
                </Col>
            </Row>
            <Row>
                <Col className="wishes my-1">
                    <p><b>Tomek I Ania Kuczyńscy </b><cite>napisali 05.10.2018r.</cite></p>
                    <p>{this.state.text}</p>
                </Col>
            </Row>
            <Row>
                <Col className="wishes my-1">
                    <p><b>Tomek I Ania Kuczyńscy </b><cite>napisali 05.10.2018r.</cite></p>
                    <p>{this.state.text}</p>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default WeddingWishes;