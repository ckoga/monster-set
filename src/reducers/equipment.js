export const addEquipmentReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_EQUIP":
      return [...state, action.equipment]

    case "RESET_EQUIP":
      return state = [];

    default: return state;
  }
}