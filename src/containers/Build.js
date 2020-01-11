import React from 'react';
import './Build.scss'
import { connect } from 'react-redux';
import WeaponCard from '../Components/WeaponCard/WeaponCard';
import ArmorCard from '../Components/ArmorCard/ArmorCard';
const uuidv4 = require('uuid/v4');


const Build = ({ equipment }) => {
  let buildSet = () => {
    return equipment.map(piece => {
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
      } else {
        return 
      }
    })
  }

  return (
    <aside className='build-container'>
      <h3>Build Stats</h3>
      {buildSet()}
    </aside>
  )
}

export const mapStateToProps = state => ({
  equipment: state.equipment
});

export default connect(mapStateToProps)(Build);