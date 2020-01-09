import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getWeapons, getArmor } from '../apiCalls';
import EquipContainer from '../containers/EquipContainer';
import Header from '../Components/Header'
import { addArmors, addWeapons } from '../actions/index'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount = () => {
    getWeapons()
      .then(data => this.props.addWeapons(data))
      .catch(err => console.log(err))

    getArmor()
      .then(data => this.props.addArmors(data))
      .catch(err => console.log(err))
  }

  render () { 
    return (
      <div className="App">
        <Header />
        <EquipContainer />
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  addWeapons: weapons => dispatch( addWeapons(weapons) ),
  addArmors: armors => dispatch( addArmors(armors) )
})

export default connect(null, mapDispatchToProps)(App);
