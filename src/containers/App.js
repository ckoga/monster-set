import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount = () => {
    fetch('https://mhw-db.com/weapons')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))

    fetch('https://mhw-db.com/armor')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  render () { 
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
