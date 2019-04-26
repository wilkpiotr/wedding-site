import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Time.scss'

class Time extends Component {

    state = {total: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0}

    componentDidMount() {
        setInterval(this.countdown,1000)
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
    <Container className="time" id="time">
        <Row className="justify-content-center">
            <h3 className="pb-3 text-danger">Jesteśmy już małżeństwem od:</h3>
        </Row>
        <Row className="justify-content-center">
            <div className="d-inline-block" id="countdown">
                <div className="clock d-inline-block text-center">
                    <span className="days">{this.state.days}</span>
                    <p>Dni</p>
                </div>
                <div className="clock d-inline-block text-center">
                    <span className="hours">{this.state.hours}</span>
                    <p> Godzin</p>
                </div>
                <div className="clock d-inline-block text-center">
                    <span className="minutes">{this.state.minutes}</span>
                    <p> Minut</p>
                </div>
                <div className="clock d-inline-block text-center">
                    <span className="seconds">{this.state.seconds}</span>
                    <p> Sekund</p>
                </div>
            </div>
        </Row>
    </Container>
    )}
}

export default Time;