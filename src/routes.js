import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import NotFoundPage from './pages/NotFound';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="/blog" component={Blog} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
