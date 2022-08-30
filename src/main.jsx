import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleSheetManager disableVendorPrefixes={true}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
