import React, { Component } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { LayoutComponent } from '@/core/components/layout';
import { IOwnProps } from './types';
import { CustomRoute } from '@/core/router/custom-router';

import { Page, routes } from '@/app/router/routes-path';

export class MainLayout extends Component<IOwnProps> {
  readonly state = {
    path: '',
    title: '',
  };

  propsCallBack = (data: any, path: string | string[] | undefined) => {
    const { title } = data;
    const currentPath = this.state.path;
    if (currentPath !== path) {
      this.setState({ title, path });
    }
  }

  render() {
    const { title } = this.state;

    return (
      <LayoutComponent
        mainLink={Page.BOARD_PAGE}
        headerTitle={title}
      >
      <Switch>
        {routes.map(route => (
          <CustomRoute
            key={route.path as string}
            propsCallBack={(e) => this.propsCallBack(e, route.path)}
            {...route}
          />
        ))}
        <Redirect from='*' to={Page.BOARD_PAGE} />
      </Switch>
      </LayoutComponent>
  );
  }
}