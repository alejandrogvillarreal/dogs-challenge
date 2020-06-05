import { combineReducers } from 'redux';
import breedsReducer from './breeds.reducer';
import dogsReducer from './dogs.reducer';
import teamReducer from './team.reducer';

export default combineReducers({
  breeds: breedsReducer,
  dogs: dogsReducer,
  team: teamReducer,
});