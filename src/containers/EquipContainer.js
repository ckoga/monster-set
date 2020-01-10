import React from 'react';
import ArmorCard from '../Components/ArmorCard';
import WeaponCard from '../Components/WeaponCard';
import { connect } from 'react-redux';
import './EquipContainer.scss'

const EquipContainer = ({ armors, weapons }) => {
  let cards = armors.map(piece => {
    return (<ArmorCard
      key={piece.id}
      img={piece.assets.imageMale && piece.assets.imageFemale}
      name={piece.name}
      type={piece.type}
      rank={piece.rank}
      rarity={piece.rarity}
      defense={piece.defense}
    />)
  })

  
  return (
    <div className='whole-container'>
      <div className='button-div'>
        <button className='all-equip-btn' type='button'>All</button>
        <button className='weapon-btn' type='button'>Weapons</button>
        <button className='armor-btn' type='button'>Armor</button>
      </div>
      <main className='equip-container'>
        {cards}
      </main>
    </div>
  )
}

const mapStateToProps = state => ({
  armors: state.armors,
  weapons: state.weapons
})

export default connect(mapStateToProps)(EquipContainer);