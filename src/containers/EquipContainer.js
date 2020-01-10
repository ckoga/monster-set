import React, { Component } from 'react';
import ArmorCard from '../Components/ArmorCard/ArmorCard';
import WeaponCard from '../Components/WeaponCard/WeaponCard';
import { connect } from 'react-redux';
import './EquipContainer.scss';

const EquipContainer = ({ armors, weapons }) => {
  let armorCards = armors.map(piece => {
    return <ArmorCard
      key={piece.id}
      img={piece.assets.imageMale}
      name={piece.name}
      type={piece.type}
      rank={piece.rank}
      rarity={piece.rarity}
      defense={piece.defense}
    />
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
    
      <main className='equip-container'>
        {weaponCards}
        {armorCards}
      </main>
  )
}

const mapStateToProps = state => ({
  armors: state.armors,
  weapons: state.weapons
})

export default connect(mapStateToProps)(EquipContainer);