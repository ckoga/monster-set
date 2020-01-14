import React from 'react';
import { shallow } from 'enzyme';
import { addEquip } from '../../actions/action.test';

describe('WeaponCard Component', () => {
  let wrapper, addEquip, equipment;
  beforeEach(() => {
    equipment = [
      {
        img: 'image',
        name: 'Daoras Colossus',
        type: 'hammer',
        rarity: 8,
        attack: 1040
      },
      {
        img: 'image',
        name: 'Diablos Shatter',
        type: 'hammer',
        rarity: 5,
        attack: 800
      }
    ]

    wrapper = shallow(<WeaponCard 
      img={equipment[0].img}
      name={equipment[0].name}
      type={equipment[0].type}
      rarity={equipment[0].rarity}
      attack={equipment[0].attack}
    />)
  })
})