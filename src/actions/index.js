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