import React from 'react';

import ReactDOM from 'react-dom/client';
import 'reset-css';

import { App } from '@/components/App/App';

import '@/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
