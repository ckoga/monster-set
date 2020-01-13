import { addEquipmentReducer } from './equipment';

describe('addEquipmentReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = addEquipmentReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is ADD_EQUIP', () => {
    const initialState = [
      {
        name: 'Daoras Colossus',
        type: 'hammer',
        rarity: 8,
        attack: 1040
      }
    ];

    const equipment = {
      name: 'Odogaron Helm',
      type: 'head',
      rank: 'low',
      rarity: 4,
    }

    const action = {
      type: 'ADD_EQUIP',
      equipment
    };

    const result = addEquipmentReducer(initialState, action)
    const expectedState = [initialState[0], equipment]

    expect(result).toEqual(expectedState)
  });

  it('should return the correct state if the action is RESET_EQUIP', () => {
    const initialState = [
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
      }
    ];

    const equipment = null

    const action = {
      type: 'RESET_EQUIP',
      equipment
    }

    const result = addEquipmentReducer(initialState, action);

    const expectedState = [];

    expect(result).toEqual(expectedState);
  });


})