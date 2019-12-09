import { RedirectProps } from 'react-router-dom';
import { BoardPage } from '@/app/pages/board';

import { IRouteProps } from '@/core/models/interfaces/protected-router';

export const redirect: RedirectProps[] = [];

export const Page = {
  BOARD_PAGE: '/board',
};

export const routes: IRouteProps[] = [
  {
    component: BoardPage,
    path: Page.BOARD_PAGE,
    exact: true,
    props: {
      title: 'Board',
    },
  },
];
