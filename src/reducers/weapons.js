export const addWeapons = (state = [], action) => {
  switch(action.type) {
    case 'ADD_WEAPONS':
      return action.weapons

    default: return state
  }
}