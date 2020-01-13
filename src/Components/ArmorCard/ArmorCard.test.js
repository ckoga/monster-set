import React from 'react';
import { addEquip } from '../../actions/index';
import { shallow } from 'enzyme';
import ArmorCard from './ArmorCard';

describe('ArmorCard component', () => {
  let wrapper, armors;
  beforeEach(() => {
    wrapper = shallow(<ArmorCard />)
    armors = [
      {
        name: 'Odogaron Helm',
        type: 'head',
        rank: 'low',
        rarity: 4,
      },
      {
        name: 'Leather Headgear',
        type: 'head',
        rank: 'low',
        rarity: 1
      },
      {
        name: 'Leather Gloves',
        type: 'head',
        rank: 'low',
        rarity: 1
      }
    ];
  });

  it('should invoke helper when the div is clicked', () => {
    const wrapper = shallow(<ArmorCard />)
    wrapper.find('.armor-card').simulate('click');
    expect(wrapper.instance().helper).toHaveBeenCalled()
  })
})
