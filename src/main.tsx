import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './plugins/i18n';

import App from './app.tsx';
import './index.css';
import { ThemeContextProvider } from './contexts/theme/theme-context-provider.tsx';

const root = createRoot(document.querySelector('#root')!);
root.render(
  <StrictMode>
    <ThemeContextProvider>
      <App />{' '}
    </ThemeContextProvider>
  </StrictMode>,
);
