import React from 'react';
import ArmorCard from '../Components/ArmorCard';
import WeaponCard from '../Components/WeaponCard';
import { connect } from 'react-redux';
import './EquipContainer.scss'

const EquipContainer = ({ armors, weapons }) => {
  let armorCards = armors.map(piece => {
    return (<ArmorCard
      key={piece.id}
      img={piece.assets.imageFemale}
      name={piece.name}
      type={piece.type}
      rank={piece.rank}
      rarity={piece.rarity}
      defense={piece.defense}
    />)
  })

  let weaponCards = weapons.map(piece => {
    return <WeaponCard 
      key={piece.id}
      img={piece.assets.image}
      name={piece.name}
      type={piece.type}
      rarity={piece.rarity}
      attack={piece.attack.display}
    /> 
  })

  
  return (
    <div className='whole-container'>
      <div className='button-div'>
        <button className='all-equip-btn' type='button'>All</button>
        <button className='weapon-btn' type='button'>Weapons</button>
        <button className='armor-btn' type='button'>Armor</button>
      </div>
      <main className='equip-container'>
        {weaponCards}
        {armorCards}
      </main>
    </div>
  )
}

const mapStateToProps = state => ({
  armors: state.armors,
  weapons: state.weapons
})

export default connect(mapStateToProps)(EquipContainer);