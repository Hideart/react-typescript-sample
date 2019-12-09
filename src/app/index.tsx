import React from 'react';

import GlobalStyles from './styles';

import { default as Router } from '@/app/router';
import { DateService } from '@/core/services/date.service';

export const dateService = new DateService();

export class MainApp extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Router />
      </>
    );
  }
}
