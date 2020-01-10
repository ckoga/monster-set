import React from 'react';
import './WeaponCard.scss';

const WeaponCard = ({ img, name, type, rarity, attack }) => {
  return (
    <div className='weapon-card'>
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

export default WeaponCard;