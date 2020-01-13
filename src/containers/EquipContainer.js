import React, { Component } from 'react';
import ArmorCard from '../Components/ArmorCard/ArmorCard';
import WeaponCard from '../Components/WeaponCard/WeaponCard';
import EquipmentBox from '../Components/EquipmentBox/EquipmentBox';
import { connect } from 'react-redux';
import './EquipContainer.scss';
const uuidv4 = require('uuid/v4');


export class EquipContainer extends Component {

  createArmorCards = () => {
    let { armors } = this.props
    let armorCards = armors.map(piece => {
      return <ArmorCard
        key={uuidv4()}
        img={piece.assets.imageMale}
        name={piece.name}
        type={piece.type}
        rank={piece.rank}
        rarity={piece.rarity}
        defense={piece.defense}
      />
    })
    return armorCards
  }

  createWeaponCards = () => { 
    let { weapons } = this.props
    let weaponCards = weapons.map(piece => {
      return <WeaponCard 
        key={uuidv4()}
        img={piece.assets.image}
        name={piece.name}
        type={piece.type}
        rarity={piece.rarity}
        attack={piece.attack.display}
      /> 
    })
    return weaponCards
  }

  render() {
    let { path } = this.props;
    if (path === '') {
      return (
        <main className='equip-container'>
          {this.createWeaponCards()}
          {this.createArmorCards()}
        </main>
      )
    } else if (path === 'armors') {
      return (
        <main className='equip-container'>
          {this.createArmorCards()}
        </main>
      )
    } else if (path === 'weapons') {
      return (
        <main className='equip-container'>
          {this.createWeaponCards()}
        </main>
      )
    } else if (path === 'equipment-box') {
      return (
        <main className='equip-container'>
          <EquipmentBox />
        </main>
      )
    }
  }
}

export const mapStateToProps = state => ({
  armors: state.armors,
  weapons: state.weapons,
  path: state.path
})


export default connect(mapStateToProps)(EquipContainer);