import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Button from 'react-bootstrap/Button';
import NavDropdownExample from './Nav'

class App extends Component {
  render() {
    return (<nav>
      <NavDropdownExample/>
      <div className="App-header">
        <h1>Piotr & Agata</h1>
        <Button variant="outline-info">Info</Button>
      </div>
    </nav>
    )}
}

export default App;
