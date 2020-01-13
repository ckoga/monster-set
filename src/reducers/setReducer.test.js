import { addSetReducer } from './set';

describe('addSetReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = addSetReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is ADD_SET', () => {
    const initialState = [];
    const set = [
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

    const action = {
      type: 'ADD_SET',
      set
    };

    const result = addSetReducer(initialState, action);

    const expectedState = [set];

    expect(result).toEqual(expectedState);
  });
})