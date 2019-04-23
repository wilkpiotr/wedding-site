import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Button from './Components/Button/Button';
import NavDropdownExample from './Components/Nav/Nav';
import Home from './Components/Home/Home'

class App extends Component {
  render() {
    return (<Fragment>
    <nav>
      <NavDropdownExample/></nav>
      <Home/>
      <div className="App-header">
        
      <Button kind="outline-info" text="Btn"></Button>
      </div>
      </Fragment>
    )}
}

export default App;
