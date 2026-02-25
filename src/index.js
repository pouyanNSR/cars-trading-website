import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import App from './App';
import ScrollToTop from './commonCodes/ScrollToTop';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* for scroll to top of the page when click its link on navbar */}
      <ScrollToTop/>

      <App />
    </BrowserRouter>
  </React.StrictMode>
);
