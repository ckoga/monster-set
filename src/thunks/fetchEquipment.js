import { getArmors, getWeapons } from '../apiCalls';
import { addArmors, addWeapons } from '../actions/index';

export const fetchArmors = () => {
  return async (dispatch) => {
    try {
      const armors = await getArmors();
      dispatch( addArmors(armors) )
    } catch (error) {
      console.log(error)
    }
  } 
}

export const fetchWeapons = () => {
  return async (dispatch) => {
    try {
      const weapons = await getWeapons();
      dispatch(addWeapons(weapons))
    } catch (error) {
      console.log(error)
    }
  }
}