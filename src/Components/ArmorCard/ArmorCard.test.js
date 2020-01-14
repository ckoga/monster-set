import React from 'react';
// import { addEquip } from '../../actions/index';
import { shallow } from 'enzyme';
import { ArmorCard } from './ArmorCard';

describe('ArmorCard component', () => {
  let wrapper, armors, mockAddEquip;
  beforeEach(() => {
    mockAddEquip = jest.fn()
    armors = [
      {
        img: 'image',
        name: 'Odogaron Helm',
        type: 'head',
        rank: 'low',
        rarity: 4,
        defense: { base: 2, max: 38, augmented: 68 }
      },
      {
        img: 'image',
        name: 'Leather Headgear',
        type: 'head',
        rank: 'low',
        rarity: 1,
        defense: { base: 2, max: 38, augmented: 68 }
      },
      {
        img: 'image',
        name: 'Leather Gloves',
        type: 'head',
        rank: 'low',
        rarity: 1,
        defense: { base: 2, max: 38, augmented: 68 }
      }
    ];

    wrapper = shallow(<ArmorCard
      img={armors[0].img}
      name={armors[0].name}
      type={armors[0].type}
      rank={armors[0].rank}
      rarity={armors[0].rarity}
      defense={armors[0].defense}
    />);
  });

  it('should invoke helper when the div is clicked', () => {
    wrapper.find('.armor-card').simulate('click');
    expect(wrapper.instance().helper).toHaveBeenCalled();
    //if its getting to addEquip (err: is not a func) is it ok to assume helper is being called?
  })
})
