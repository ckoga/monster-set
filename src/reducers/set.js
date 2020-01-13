export const addSetReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_SET':
      return [...state, action.set];

    default:
      return state;
  }
}