import React from 'react';
import './Header.scss'
import { Route, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header-h1'>Monster Set</h1>
      <div className='button-div'>
        <NavLink className='nav' to='/'>All</NavLink>
        <NavLink className='nav' to='/weapons'>Weapons</NavLink>
        <NavLink className='nav' to='/armor'>Armor</NavLink>
      </div>
      <button className='equip-box-btn'>Equipment Box</button>
    </header>
  )
}

export default Header;