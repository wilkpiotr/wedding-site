import React, { Component} from 'react';
// import logo from './logo.svg';
import './App.scss';
// import Button from './Components/Button/Button';
import NavDropdownExample from './Components/Nav/Nav';
import Home from './Components/Home/Home'
import Gallery from './Components/Gallery/Gallery'
import Time from './Components/Time/Time'
import Greetings from './Components/Greetings/Greetings'

class App extends Component {
  render() {
    return (<>
    <nav>
      <NavDropdownExample/></nav>
      <Home/>
      <Time/>
      <Gallery/>
      <Greetings/>

      </>
    )}
}

export default App;
