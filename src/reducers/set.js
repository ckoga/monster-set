export const addSetReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_SET':
      return action.set;

    default:
      return state;
  }
}