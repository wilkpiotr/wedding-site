import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class WishingForm extends Component {
    render() {
        return(
        <Form className="container">
            <Form.Row>
                <Col>
                    <Form.Control placeholder="First name" />
                </Col>
                <Col>
                    <Form.Control placeholder="Last name" />
                </Col>
            </Form.Row>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>With textarea</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" />
        </InputGroup>
        </Form>
        )
    }
}

export default WishingForm;