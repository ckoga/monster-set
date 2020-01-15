import React from 'react';
import { Build, mapStateToProps, mapDispatchToProps } from './Build';
import { shallow } from 'enzyme';
import { addSet } from '../actions/index';

describe('Build Component', () => {
  let wrapper, equipment, mockState;
  beforeEach(() => {
    wrapper = shallow(<Build />);
    equipment = [
      {
        name: 'Daoras Colossus',
        type: 'hammer',
        rarity: 8,
        attack: 1040
      },
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
    mockState = {
      equipment: equipment
    };
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch = jest.fn();
    let mappedProps = mapDispatchToProps(mockDispatch);
    let equipment = [{ img: 'image', name: 'sword', type: 'tiny sword', rarity: 200, attack: 10000 }, { img: 'image', name: 'sword', type: 'tiny sword', rarity: 200, attack: 10000 }];
    
    it('addSet', () => {
      const actionToDispatch = addSet([{ img: 'image', name: 'sword', type: 'tiny sword', rarity: 200, attack: 10000 }, { img: 'image', name: 'sword', type: 'tiny sword', rarity: 200, attack: 10000 }]);
      
      mappedProps.addSet(equipment);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  })
});

describe('mapStateToProps', () => {
  it('should return an object that contains equipment', () => {
    let equipment = [
      {
        name: 'Daoras Colossus',
        type: 'hammer',
        rarity: 8,
        attack: 1040
      },
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

    const expected = {
      equipment: equipment
    };

    const mockState = {
      id: 2,
      equipment: equipment
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  });
});