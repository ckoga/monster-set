import { addArmors } from '../reducers/armors';

describe('addArmors', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = addArmors(undefined, {});
    expect(result).toEqual(expected)
  });

  it('should return the correct state if the action.type is ADD_ARMORS', () => {
    const initialState = [];
    const armors = [
      {
        name: 'Leather Helm',
        type: 'head',
        rank: 'low',
        rarity: 1,
      }
    ];

    const action = {
      type: 'ADD_ARMORS',
      armors
    }
    const result = addArmors(initialState, action);
    const expectedState = [armors[0]];
    expect(result).toEqual(expectedState)
  });
})