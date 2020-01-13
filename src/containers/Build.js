import React, { Component } from 'react';
import './Build.scss'
import { connect } from 'react-redux';
import WeaponCard from '../Components/WeaponCard/WeaponCard';
import ArmorCard from '../Components/ArmorCard/ArmorCard';
import { addSet } from '../actions/index';
const uuidv4 = require('uuid/v4');



export class Build extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pendingSet: []
    }
  }
  
  buildSet = () => {  
    let { equipment } = this.props
    let set = []
    equipment.map(piece => {
      if (set.length <= 5 && piece.rank !== undefined) {      
        set = [...set, <ArmorCard
          key={uuidv4()}
          img={piece.img}
          name={piece.name}
          type={piece.type}
          rank={piece.rank}
          rarity={piece.rarity}
          defense={piece.defense}
          />]
        } else if (set.length <= 5 && piece.rank === undefined ) {   
          set = [...set, <WeaponCard
            key={uuidv4()}
            img={piece.img}
            name={piece.name}
            type={piece.type}
            rarity={piece.rarity}
            attack={piece.attack.display}
            />]
          } else {
            return 
          }
        })
    // this.setState({ pendingSet: set })
    return set
  }

  saveSet = () => {

  }

  render() {  
    return (
      <aside className='build-container'>
        <h3>Build Stats</h3>
        <button 
        className='build-btn'
        type='button'
        onClick={() => this.saveSet()}
        >Save Set</button>
        {this.buildSet()}
      </aside>
    ) 
  }
}

export const mapStateToProps = state => ({
  equipment: state.equipment
});

export const mapsDispatchToProps = dispatch => ({
  addSet: dispatch( addSet() )
})

export default connect(mapStateToProps)(Build);