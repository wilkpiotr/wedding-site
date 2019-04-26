import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from '../Button/Button';
import Container from 'react-bootstrap/Container';
import './Form.scss';

class WishingForm extends Component {

    
    render() {
    const validated = this.props.validated;

    return(
    <Container fluid className="gradient">
        <Form noValidate validated={validated} onSubmit={(e) => this.props.onSubmit(e)} className="container form-container">
        <Row>
            <Col>
            <p className="text-center">Podobało Ci się wesele? Chcesz nam coś przekazać - śmiało - pisz :)</p>
            </Col>
        </Row>
        <Form.Row className="justify-content-center">
            <Form.Group as={Col} controlId="validationName">
                <Form.Label>Imię i Nazwisko</Form.Label>
                <Form.Control placeholder="Imię i Nazwisko" type="text" required ref={this.props.inputRef}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Wprowadź poprawne dane.</Form.Control.Feedback>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <InputGroup  className="justify-content-center pt-1">
                <InputGroup.Prepend>
                    <InputGroup.Text as="label">Wasze Życzenia</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" ref={this.props.textareaRef} aria-label="With textarea" col="10" required />
                <Form.Control.Feedback type="invalid">Wpisz treść życzeń.</Form.Control.Feedback>
            </InputGroup>
        </Form.Row>
        <Form.Row className="justify-content-center">
                <Button kind="info" text="Zatwierdź"/>
        </Form.Row>
    </Form>
    </Container>
    )
}}



export default WishingForm;