import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import './Nav.scss';

class NavDropdownExample extends Component {
    state= {activeKey: null}

    handleSelect(eventKey) {
        console.log(eventKey)
        this.setState((state)=>{return {activeKey: eventKey}})
    }
  
    render() {
      return (
        <Nav as="ul" className="justify-content-end fixed-top nav pr-5 text-uppercase" variant="pills" activeKey={this.state.activeKey} onSelect={k => this.handleSelect(k)}>
          <Nav.Item as="li">
            <Nav.Link as="a" className="link " eventKey="1" href="#home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="test">
            <Nav.Link as="a" className="link text-body" eventKey="2" href="#time">
              Czas i Miejsce
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as="a" className="link text-body" eventKey="3" href="#gallery">
              Galeria
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as="a" className="link text-body" eventKey="4" href="#wishes">
              Życzenia
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as="a" className="link text-body" eventKey="5" href="#footer">
              Kontakt
            </Nav.Link>
          </Nav.Item>
        </Nav>
      );
    }
  }

  export default NavDropdownExample;