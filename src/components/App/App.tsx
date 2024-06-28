import * as React from 'react';

import { MainPage } from '@/Pages/MainPage/MainPage';

import { Header } from '../Header/Header';

export const App = () => {
  return (
    <Header>
      <MainPage />
    </Header>
  );
};
