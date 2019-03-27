import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from 'core/utils/history';
import Main from 'containers/Main';
import Customers from 'containers/Customers';
import NotFound from 'containers/NotFound';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/customers" component={Customers} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
