import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Time extends Component {

    state = {total: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0}

    componentDidMount() {
        const timeinterval = setInterval(this.countdown,1000)
    }

    countdown = () => {
        const deadline = '06 Oct 2018 15:00:00 GMT+0200';
        const t = Date.parse(new Date()) - Date.parse(deadline);
        const seconds = Math.floor( (t/1000) % 60 );
        const minutes = Math.floor( (t/1000/60) % 60 );
        const hours = Math.floor( (t/(1000*60*60)) % 24 );
        const days = Math.floor( t/(1000*60*60*24) );
        this.setState((state) => {
            return {total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds}
        })
    }

    render() {
    return(
    <Container>
        <Row>
            <h3>Od naszego ślubu minęło już:</h3>
            <div className="d-inline-block" id="countdown">
                <div className="clock d-inline-block">
                    <span className="days">{this.state.days}</span>
                    <p>Dni</p>
                </div>
                <div className="clock d-inline-block">
                    <span className="hours">{this.state.hours}</span>
                    <p> Godzin</p>
                </div>
                <div className="clock d-inline-block">
                    <span className="minutes">{this.state.minutes}</span>
                    <p> Minut</p>
                </div>
                <div className="clock d-inline-block">
                    <span className="seconds">{this.state.seconds}</span>
                    <p> Sekund</p>
                </div>
            </div>
        </Row>
        <Row>
            <Col>1 of 2</Col>
        </Row>
    </Container>
    )}
}

export default Time;