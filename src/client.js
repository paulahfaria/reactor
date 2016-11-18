import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store);

window.onload = () => {
  window.__app_container__ = document.getElementById('app');
  render(
    <Provider store={store}>
      <Router history={history} onUpdate={() => { window.scrollTo(0, 0); }}>
        {routes}
      </Router>
    </Provider>,
  window.__app_container__
  );
};
