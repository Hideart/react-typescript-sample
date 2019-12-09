import React, { Component } from 'react';
import {
  Router as BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { history } from './history';
import { MainLayout } from '@/app/layout/main-layout';
import { Page } from './routes-path';

function NotFoundComponent() {
  return <div>Not found</div>;
}

class Router extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <Switch>
          <Redirect from='/' to={Page.BOARD_PAGE} exact={true} />
          <Route component={MainLayout} path={'/'} />
          <Route path='*' component={NotFoundComponent} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
