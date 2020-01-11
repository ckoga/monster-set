import { combineReducers }from 'redux';
import { addWeapons } from './weapons';
import { addArmors } from './armors';
import { addPathReducer } from './path';
import { addEquipmentReducer } from './equipment';


export const rootReducer = combineReducers({
  weapons: addWeapons,
  armors: addArmors,
  path: addPathReducer,
  equipment: addEquipmentReducer
})