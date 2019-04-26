import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './WeddingWishes.scss'


const WeddingWishes = ({greetings}) => {
    
    return(
    <Container id="wishes">
        <Row>
            <Col>
                <h3 className="text-center">Kochani!</h3>
                <p>Serdecznie dziękujemy Wam za wszystkie życzenia! Teraz ciężko pracujemy, aby mogły się one spełnić. Te złożone za pośrednictwem tej strony cały czas możecie przeczytać pod spodem. Oczywiście jeśli ktoś ma ochotę coś dodać od siebie, nic nie stoi na przeszkodzie ;)</p>
            </Col>
        </Row>
            
            {greetings.map((greeting, index) => {
                return(<Row key={index}>
                    <Col className="wishes my-1">
                    <p><b>{greeting.author}</b><cite> napisali {greeting.date}</cite></p>
                    <p>{greeting.text}</p>
                </Col>
            </Row>
                )
            })}
    </Container>
    )
    
}

export default WeddingWishes;