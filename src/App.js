import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.scss';
// import Button from './Components/Button/Button';
import NavDropdownExample from './Components/Nav/Nav';
import Home from './Components/Home/Home'
import Gallery from './Components/Gallery/Gallery'
import Time from './Components/Time/Time'
import WeddingWishes from './Components/WeddingWishes/WeddingWishes'

class App extends Component {
  render() {
    return (<Fragment>
    <nav>
      <NavDropdownExample/></nav>
      <Home/>
      <Time/>
      <Gallery/>
      <WeddingWishes/>
      </Fragment>
    )}
}

export default App;
