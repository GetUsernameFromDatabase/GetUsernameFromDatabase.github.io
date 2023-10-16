import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './plugins/i18n';

import App from './app.tsx';
import './index.css';
import ThemeProvider from './components/theme/theme-provider.tsx';

const root = createRoot(document.querySelector('#root')!);
root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
