import React from 'react';
import { Build, mapStateToProps, mapDispatchToProps } from './Build';
import { shallow } from 'enzyme';
import { addSet } from '../actions/action.test';

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
    it('should should call dispatch with an addSet action when saveSet is called', () => {
      const mockDispatch = jest.fn();
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
      const actionToDispatch = addSet(equipment);
      const mappedProps = mapDispatchToProps(mockDispatch);

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