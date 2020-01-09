import React from 'react';
import './ArmorCard.scss'

const ArmorCard = ({ img, name, type, rank, rarity, defense }) => {
  return (
    <div className='armor-card'>
      <img className='equip-img' src={img}></img>
      <h4>{name}</h4>
      <ul>
        <li>type: {type}</li>
        <li>rank: {rank}</li>
        <li>rarity: {rarity}</li>
        <li>defense: {defense.base}-{defense.max}</li>
      </ul>
    </div>
  )

}

export default ArmorCard;