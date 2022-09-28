import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { StyledEngineProvider } from '@mui/joy/styles';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);

