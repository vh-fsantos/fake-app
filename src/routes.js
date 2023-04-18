import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Detail from './pages/Detail'
import Edit from './pages/Edit'

import { createBrowserHistory } from 'history'

export const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/detail/:id' component={Detail}/>
        <Route path='/edit/:id' component={Edit}/>
      </Switch>
    </Router>
  );
};

export default Routes;