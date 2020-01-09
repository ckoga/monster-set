import React from 'react';
import ArmorCard from '../Components/ArmorCard';
import WeaponCard from '../Components/WeaponCard';
import { connect } from 'react-redux';

const EquipContainer = ({ armors, weapons }) => {
  let cards = armors.map(piece => {
    return <ArmorCard
      key={piece.name}
      name={piece.name}
      type={piece.type}
      rank={piece.rank}
      rarity={piece.rarity}

    />
  })

  
  return (
    <main className='equip-container'>
      {cards}
      
    </main>
  )
}

const mapStateToProps = state => ({
  armors: state.armors,
  weapons: state.weapons
})

export default connect(mapStateToProps)(EquipContainer);