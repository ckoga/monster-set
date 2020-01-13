import React from 'react';
import { EquipContainer, mapStateToProps } from '../containers/EquipContainer';
import { shallow } from 'enzyme';


describe('EquipContainer', () => {
  describe('EquipContainer Component', () => {
    let wrapper, weapons, armors, path, mockState;
    beforeEach(() => {
      wrapper = shallow(<EquipContainer />);
      weapons = [
        {
          name: 'Daoras Colossus',
          type: 'hammer',
          rarity: 8,
          attack: 1040
        },
        {
          name: 'Buster Sword 1',
          type: 'great-sword',
          rarity: 1,
          attack: 384
        },
        {
          name: 'Buster Sword 2',
          type: 'great-sword',
          rarity: 1,
          attack: 432
        }
      ];
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
      path = undefined;
      mockState = {
        weapons: weapons,
        armors: armors,
        path: path
      }
    });

    describe('mapStateToProps', () => {
      it('should return an object with the armors data', () => {
        const expected = {
          armors: [
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
          ],
          weapons: [
            {
              name: 'Daoras Colossus',
              type: 'hammer',
              rarity: 8,
              attack: 1040
            },
            {
              name: 'Buster Sword 1',
              type: 'great-sword',
              rarity: 1,
              attack: 384
            },
            {
              name: 'Buster Sword 2',
              type: 'great-sword',
              rarity: 1,
              attack: 432
            }
          ],
          path: path
        }

        const mappedProps = mapStateToProps(mockState);

        expect(mappedProps).toEqual(expected)
      })
    })
  })
})