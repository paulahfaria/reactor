import { createStore, applyMiddleware } from 'redux';
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';
import reducers from './reducers';

const store = createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(
    ReduxThunkMiddleware,
    ReduxPromiseMiddleware
  ));

export default store;
