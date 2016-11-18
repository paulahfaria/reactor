import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import TestReducer from './Test';

export default combineReducers({
  routing: routerReducer,
  test: TestReducer
});
