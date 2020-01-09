import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getWeapons, getArmors } from '../apiCalls';
import EquipContainer from '../containers/EquipContainer';
import Header from '../Components/Header'
import Stats from '../containers/Stats';
import { addArmors, addWeapons } from '../actions/index'


export class App extends Component {
  constructor() {
    super()
  }

  componentDidMount = () => {
    getWeapons()
      .then(data => this.props.addWeapons(data))
      .catch(err => console.log(err))

    getArmors()
      .then(data => this.props.addArmors(data))
      .catch(err => console.log(err))
  }

  render () { 
    return (
      <div className="App">
        <Header />
        <div className='below-header'>
          <Stats />
          <EquipContainer />
        </div>
      </div>
    );
  }

}

export const mapDispatchToProps = dispatch => ({
  addWeapons: weapons => dispatch( addWeapons(weapons) ),
  addArmors: armors => dispatch( addArmors(armors) )
})

export default connect(null, mapDispatchToProps)(App);
