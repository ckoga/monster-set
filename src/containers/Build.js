import React, { Component } from 'react';
import './Build.scss'
import { connect } from 'react-redux';
import WeaponCard from '../Components/WeaponCard/WeaponCard';
import ArmorCard from '../Components/ArmorCard/ArmorCard';
import { addSet, resetEquip } from '../actions/index';
import PropTypes from 'prop-types';
const uuidv4 = require('uuid/v4');



export class Build extends Component {
  constructor(props) {
    super(props)
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
    return set
  }

  saveSet = () => {
    let { equipment, addSet, resetEquip } = this.props
    addSet(equipment)
    resetEquip()
    this.buildSet()
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

export const mapDispatchToProps = dispatch => ({
  addSet: equipment => dispatch( addSet(equipment) ),
  resetEquip: equipment => dispatch( resetEquip(equipment) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Build);

Build.propTypes = {
  equipment: PropTypes.arrayOf(PropTypes.object),
  addSet: PropTypes.func,
  resetSet: PropTypes.func
}