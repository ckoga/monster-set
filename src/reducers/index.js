import { combineReducers }from 'redux';
import { addWeapons } from './weapons';
import { addArmors } from './armors';

export const rootReducer = combineReducers({
  weapons: addWeapons,
  armors: addArmors,
})