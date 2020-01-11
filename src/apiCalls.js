export const getWeapons = async () => {
  try {
    const res = await fetch('https://mhw-db.com/weapons')
    if (!res.ok) {
      throw Error ('Failed to get weapons')
    }
    const weapons = await res.json();
    const smallerSet = weapons.slice(0, 900)
    console.log('weapons: ', smallerSet)
    return smallerSet;
  } catch (error) {
    console.error(error)
  }
  
  // return fetch('https://mhw-db.com/weapons')
  //   .then(res => {
  //     if(!res.ok) {
  //       throw(Error('Error fetching weapons'))
  //     }
  //     return res.json()
  //   })
};

export const getArmors = async () => {
  try {
    const res = await fetch('https://mhw-db.com/armor')
      if(!res.ok) {
        throw Error('Failed to get armors')
      }
      const armor = await res.json();
      const smallerSet = armor.slice(0, 600)
    console.log('armor: ', smallerSet)
    return smallerSet;
  } catch (error) {
    console.log(error)
  }

  // return fetch('https://mhw-db.com/armor')
  //   .then(res => {
  //     if (!res.ok) {
  //       throw (Error('Error fetching armor'))
  //     }
  //     return res.json()
  //   })
};
