import React from 'react';
import Button from 'react-bootstrap/Button';

const Buttons = (props) => {
    return <Button variant={props.kind}>{props.text}</Button>
}

export default Buttons;

