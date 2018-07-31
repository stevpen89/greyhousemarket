import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
