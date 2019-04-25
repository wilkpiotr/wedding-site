import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from '../Button/Button';

import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import './Form.scss';

class WishingForm extends Component {
    state = { validated: false };

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.setState({ validated: true });
      }

    render() {
        const { validated } = this.state;
        return(
        <Container fluid className="gradient">
            <Form noValidate validated={validated} onSubmit={e => this.handleSubmit(e)} className="container form-container">
            <Row>
                <Col>
                <p className="text-center">Podobało Ci się wesele? Chcesz nam coś przekazać - śmiało - pisz :)</p>
                </Col>
            </Row>
            <Form.Row className="justify-content-center">
                <Form.Group as={Col} controlId="validationName">
                    <Form.Label>Imię i Nazwisko</Form.Label>
                    <Form.Control placeholder="Imię i Nazwisko" type="text" required/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Wprowadź poprawne dane.</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <InputGroup  className="justify-content-center pt-1">
                    <InputGroup.Prepend>
                        <InputGroup.Text as="label">Wasze Życzenia</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" col="10"/>
                </InputGroup>
            </Form.Row>
            <Form.Row className="justify-content-center">
                    <Button kind="info" text="Zatwierdź"/>
            </Form.Row>
        </Form>
        </Container>
        )
    }
    // constructor(...args) {
    //     super(...args);
    
    //     this.state = { validated: false };
    //   }
    
    //   handleSubmit(event) {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //       event.preventDefault();
    //       event.stopPropagation();
    //     }
    //     this.setState({ validated: true });
    //   }
    
    //   render() {
    //     const { validated } = this.state;
    //     return (
    //       <Form
    //         noValidate
    //         validated={validated}
    //         onSubmit={e => this.handleSubmit(e)}
    //       >
    //         <Form.Row>
    //           <Form.Group as={Col} md="4" controlId="validationCustom01">
    //             <Form.Label>First name</Form.Label>
    //             <Form.Control
    //               required
    //               type="text"
    //               placeholder="First name"
    //               defaultValue="Mark"
    //             />
    //             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //           </Form.Group>
    //           <Form.Group as={Col} md="4" controlId="validationCustom02">
    //             <Form.Label>Last name</Form.Label>
    //             <Form.Control
    //               required
    //               type="text"
    //               placeholder="Last name"
    //               defaultValue="Otto"
    //             />
    //             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //           </Form.Group>
    //           <Form.Group as={Col} md="4" controlId="validationCustomUsername">
    //             <Form.Label>Username</Form.Label>
    //             <InputGroup>
    //               <InputGroup.Prepend>
    //                 <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
    //               </InputGroup.Prepend>
    //               <Form.Control
    //                 type="text"
    //                 placeholder="Username"
    //                 aria-describedby="inputGroupPrepend"
    //                 required
    //               />
    //               <Form.Control.Feedback type="invalid">
    //                 Please choose a username.
    //               </Form.Control.Feedback>
    //             </InputGroup>
    //           </Form.Group>
    //         </Form.Row>
    //         <Form.Row>
    //           <Form.Group as={Col} md="6" controlId="validationCustom03">
    //             <Form.Label>City</Form.Label>
    //             <Form.Control type="text" placeholder="City" required />
    //             <Form.Control.Feedback type="invalid">
    //               Please provide a valid city.
    //             </Form.Control.Feedback>
    //           </Form.Group>
    //           <Form.Group as={Col} md="3" controlId="validationCustom04">
    //             <Form.Label>State</Form.Label>
    //             <Form.Control type="text" placeholder="State" required />
    //             <Form.Control.Feedback type="invalid">
    //               Please provide a valid state.
    //             </Form.Control.Feedback>
    //           </Form.Group>
    //           <Form.Group as={Col} md="3" controlId="validationCustom05">
    //             <Form.Label>Zip</Form.Label>
    //             <Form.Control type="text" placeholder="Zip" required />
    //             <Form.Control.Feedback type="invalid">
    //               Please provide a valid zip.
    //             </Form.Control.Feedback>
    //           </Form.Group>
    //         </Form.Row>
    //         <Form.Group>
    //           <Form.Check
    //             required
    //             label="Agree to terms and conditions"
    //             feedback="You must agree before submitting."
    //           />
    //         </Form.Group>
    //         <Button type="submit" text="Submit">Submit form</Button>
    //       </Form>
    //     );
    //   }
}


export default WishingForm;