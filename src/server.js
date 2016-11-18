import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import Helmet from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import routes from './routes';

import NotFoundPage from './pages/NotFound';

// server configs
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// defining the static assets folder
app.use(Express.static(path.join(__dirname, 'static')));

// universal routing and rendering configs
app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {
      let markup;

      if (err) return res.status(500).send(err.message);
      if (redirectLocation) return res.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);

      if (renderProps) {
        markup = renderToString(
          <Provider store={createStore(reducers)}>
            <RouterContext {...renderProps} />
          </Provider>
        );
      } else {
        // 404 Page
        markup = renderToString(<NotFoundPage />);
        res.status(404);
      }
      const head = Helmet.rewind();

      return res.render('index', { markup, head });
    }
  );
});

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }

  console.info(`Server running on http://localhost:${port} [${env}]`);
});
