import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react'; //! Emotion Theme
import { theme } from '@/constants'; //! Emotion Theme

import './index.css';

// import { App } from './components/App/App.jsx'; //! CSS-модулі
import { App } from '@/components/App/App.jsx' //! CSS-модулі --> ✅✅✅Аліаси імпортів з абсолютними шляхами з jsconfig.json

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/airplane-model-store3-state1">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode >
);

