import { addWeapons } from './weapons';

describe('addWeapons', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = addWeapons(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is ADD_WEAPONS', () => {
    const initialState = [];
    const weapons = [
      {
        name: 'Daoras Colossus',
        type: 'hammer',
        rarity: 8,
        attack: 1040
      }
    ];

    const action = {
      type: 'ADD_WEAPONS',
      weapons
    }

    const result = addWeapons(initialState, action);
    const expectedState = weapons
    expect(result).toEqual(expectedState)
  });
})