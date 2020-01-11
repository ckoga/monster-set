export const addEquipmentReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_EQUIP":
      return [...state, action.equipment]

    default: return state;
  }
}