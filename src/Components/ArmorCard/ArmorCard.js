import React from 'react';
import './ArmorCard.scss'
import { connect } from 'react-redux';
import { addEquip } from '../../actions/index';
import PropTypes from 'prop-types';

export const ArmorCard = ({ img, name, type, rank, rarity, defense, addEquip }) => {
  let helper = (img, name, type, rank, rarity, defense) => {
    let equipment = {
      img: img,
      name: name,
      type: type,
      rank: rank,
      rarity: rarity,
      defense: defense
    }
    addEquip(equipment)
  }
  return (
    <div className='armor-card' onClick={() => helper(img, name, type, rank, rarity, defense)}>
      <img className='equip-img' src={img} alt='Piece of armor'></img>
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

export const mapDispatchToProps = dispatch => ({
  addEquip: (equipment) => dispatch(addEquip(equipment)),
})

export default connect(null, mapDispatchToProps)(ArmorCard);

ArmorCard.propTypes = {
  img: PropTypes.string, 
  name: PropTypes.string, 
  type: PropTypes.string, 
  rank: PropTypes.string, 
  rarity: PropTypes.number, 
  defense: PropTypes.object, 
  addEquip: PropTypes.func
}