import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.scss';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import EquipContainer from '../containers/EquipContainer';
import { addPath } from '../actions/index'
import Build from './Build';
import { fetchArmors } from '../thunks/fetchEquipment';
import { fetchWeapons } from '../thunks/fetchEquipment';


export class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.fetchArmors();
    this.props.fetchWeapons();
   
    // getWeapons()
    //   .then(data => this.props.addWeapons(data))
    //   .catch(err => console.log(err))

    // getArmors()
    //   .then(data => this.props.addArmors(data))
    //   .catch(err => console.log(err))
  }

  render () {
    let { activeNav } = this.props
    return (
      <div className="App">
        <header className='header'>
          <h1 className='header-h1'>Monster Set</h1>
          <div className='button-div'>
            <NavLink className='nav' to='/' onClick={() => activeNav('') }>All</NavLink>
            <NavLink className='nav' to='/weapons' onClick={() => activeNav('weapons') }>Weapons</NavLink>
            <NavLink className='nav' to='/armor' onClick={() => activeNav('armors') }>Armor</NavLink>
            <NavLink className='nav' to='/equipment-box' onClick={() => activeNav('equipment-box') }>Equipment Box</NavLink>
          </div>
        </header>
        <div className='below-header'>
          <Build />
          <Route exact path='/' render={() => <EquipContainer /> } />
          <Route exact path='/weapons' render={() => <EquipContainer /> } />
          <Route exact path='/armor' render={() => <EquipContainer /> } />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  weapons: state.weapons,
  armors: state.armors
})

export const mapDispatchToProps = dispatch => ({
  fetchArmors: () => dispatch( fetchArmors() ),
  fetchWeapons: () => dispatch( fetchWeapons() ),
  activeNav: (str) => dispatch( addPath(str) )
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
