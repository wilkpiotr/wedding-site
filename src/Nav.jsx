import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import './Nav.scss'

class NavDropdownExample extends Component {
    state= {activeKey: 1}

    handleSelect(eventKey) {
        console.log(eventKey)
        this.setState((state)=>{return {activeKey: eventKey}})
    }
  
    render() {
      return (
        <Nav  className="justify-content-end nav" variant="pills" activeKey={this.state.activeKey} onSelect={k => this.handleSelect(k)}>
          <Nav.Item>
            <Nav.Link eventKey="1" href="#/home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="test">
            <Nav.Link className="test" eventKey="2" title="Item">
              Czas i Miejsce
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3">
              Galeria
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4">
              Życzenia
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="5">
              Kontakt
            </Nav.Link>
          </Nav.Item>
        </Nav>
      );
    }
  }

  export default NavDropdownExample;