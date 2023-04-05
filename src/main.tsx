import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'


import { EiteckApp } from './EiteckApp';
import { store } from './store';

import './index.css';
//theme
import "primereact/resources/themes/viva-dark/theme.css";     
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";                                         
import { BrowserRouter } from 'react-router-dom';
import 'primeflex/primeflex.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <EiteckApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
