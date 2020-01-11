export const addArmors = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ARMORS':
      return action.armors

    default: return state
  }
}