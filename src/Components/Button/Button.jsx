import React from 'react';
import Button from 'react-bootstrap/Button';
import './Button.scss'

const Buttons = (props) => {
    return <Button onClick={props.onClick} className="button" variant={props.kind}>{props.text}</Button>
}

export default Buttons;

