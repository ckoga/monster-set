export const getWeapons = async () => {
  try {
    const res = await fetch('https://mhw-db.com/weapons')
    if (!res.ok) {
      throw Error ('Failed to get weapons')
    }
    const weapons = await res.json();
    const smallerSet = weapons.slice(0, 900)
    return smallerSet;
  } catch (error) {
    console.error(error)
  }
};

export const getArmors = async () => {
  try {
    const res = await fetch('https://mhw-db.com/armor')
      if(!res.ok) {
        throw Error('Failed to get armors')
      }
      const armor = await res.json();
      const smallerSet = armor.slice(0, 600)
    return smallerSet;
  } catch (error) {
    console.log(error)
  }
};
