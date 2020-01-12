import React from 'react';
import './WeaponCard.scss';
import { connect } from 'react-redux';
import { addEquip } from '../../actions/index';

export const WeaponCard = ({ img, name, type, rarity, attack, addEquip }) => {
  let helper = (img, name, type, rarity, attack) => {
    let equipment = {
      img: img,
      name: name,
      type: type,
      rarity: rarity,
      attack: attack
    }
    addEquip(equipment)
  }

  return (
    <div className='weapon-card' onClick={() => helper(img, name, type, rarity, attack) }>
      <img className='equip-img' src={img} alt='Weapon'></img>
      <h4 className='weapon-name'>{name}</h4>
      <ul>
        <li>type: {type}</li>
        <li>rarity: {rarity}</li>
        <li>attack: {attack}</li>
      </ul>
    </div>
  )
}

export const mapDispatchToProps = dispatch => ({
  addEquip: (equipment) => dispatch( addEquip(equipment) ),
})

export default connect(null, mapDispatchToProps)(WeaponCard);