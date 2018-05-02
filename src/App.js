import React, { Component } from 'react';
import Books from "./components/Books"
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="main">

        <h1>Reading List</h1>
        <Books />


      </div>
    );
  }
}

export default App;
