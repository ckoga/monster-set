import React from 'react';
import './EquipmentBox.scss'
import { connect } from 'react-redux'; 
import ArmorCard from '../ArmorCard/ArmorCard';
import WeaponCard from '../WeaponCard/WeaponCard';
import PropTypes from 'prop-types';
const uuidv4 = require('uuid/v4');

export const EquipmentBox = (allSets) => {
  let displaySets = allSets.allSets.map(set => set.map(piece => {
    if (piece.rank !== undefined) {
      return <ArmorCard
        key={uuidv4()}
        img={piece.img}
        name={piece.name}
        type={piece.type}
        rank={piece.rank}
        rarity={piece.rarity}
        defense={piece.defense}
      />
    } else if (piece.rank === undefined) {
      return <WeaponCard
        key={uuidv4()}
        img={piece.img}
        name={piece.name}
        type={piece.type}
        rarity={piece.rarity}
        attack={piece.attack.display}
      />
    }
  }))
  
  
  return (
    <div className='all-sets-container'>
      {displaySets}
    </div>
  )
}

export const mapStateToProps = state => ({
  allSets: state.allSets
})

export default connect(mapStateToProps)(EquipmentBox);

EquipmentBox.propTypes = {
  allSets: PropTypes.objectOf(PropTypes.array)
}