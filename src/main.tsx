import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './plugins/i18n';

import App from './app.tsx';
import './index.css';
import ThemeProvider from './components/theme/theme-provider.tsx';
import { store } from './store/index.ts';

const root = createRoot(document.querySelector('#root')!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
