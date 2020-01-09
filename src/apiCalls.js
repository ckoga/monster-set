export const getWeapons = () => {
  return fetch('https://mhw-db.com/weapons')
    .then(res => {
      if(!res.ok) {
        throw(Error('Error fetching weapons'))
      }
      return res.json()
    })
};

export const getArmor = () => {
  return fetch('https://mhw-db.com/armor')
    .then(res => {
      if (!res.ok) {
        throw (Error('Error fetching armor'))
      }
      return res.json()
    })
};
