import { combineReducers } from 'redux';
import storeReducer from './store.reducer';

export default combineReducers({
  userStore: storeReducer,
});
