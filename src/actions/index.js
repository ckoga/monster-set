export const addWeapons = weapons => {
  return {
    type: 'ADD_WEAPONS',
    weapons
  }
}

export const addArmors = armors => {
  return {
    type: 'ADD_ARMORS',
    armors
  }
}

export const addPath = path => {
  return {
    type: 'ADD_PATH',
    path
  }
}

export const addEquip = equipment => {
  return {
    type: 'ADD_EQUIP',
    equipment
  }
}