import { addPathReducer } from './path';

describe('addPathReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = addPathReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is ADD_PATH', () => {
    const initialState = '';
    const differentPath = '/armors'
    const path = '/weapons';
    const action = {
      type: 'ADD_PATH',
      path
    }
    const result = addPathReducer(initialState, action);

    const expectedState = '/weapons';

    expect(result).toEqual(expectedState);

    const secondResult = addPathReducer(differentPath, action);

    expect(secondResult).toEqual(expectedState);
  });
})