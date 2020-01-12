import React from 'react';
import './Build.scss'
import { connect } from 'react-redux';
import WeaponCard from '../Components/WeaponCard/WeaponCard';
import ArmorCard from '../Components/ArmorCard/ArmorCard';
const uuidv4 = require('uuid/v4');


export const Build = ({ equipment }) => {
  let set = []
  let buildSet = () => {  
    equipment.map(piece => {
      if (set.length <= 5 && piece.rank !== undefined) { 
        console.log('set: ', set)     
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
          console.log('set: ', set)  
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
      
      return (
        <aside className='build-container'>
      <h3>Build Stats</h3>
      <button className='build-btn' type='button'>Save Set</button>
      
      {buildSet()}
    </aside>
  )
}

export const mapStateToProps = state => ({
  equipment: state.equipment
});

export default connect(mapStateToProps)(Build);