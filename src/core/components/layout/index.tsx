import React, { Component } from 'react';

import {
  IOwnProps,
} from '@/core/components/layout/types';

export class LayoutComponent extends Component<IOwnProps> {

  render() {
    const { children, className } = this.props;
    return (
      <section className={className}>
        <section id='content'>
          {children}
        </section>
      </section>
    );
  }
}
