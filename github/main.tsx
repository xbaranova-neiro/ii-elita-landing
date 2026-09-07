import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from '../app/page';
import '../app/globals.css';

const normalizedPath = window.location.pathname.replace(/\/+$/, '');
const variant = normalizedPath.endsWith('/short') ? 'short' : 'full';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home variant={variant} assetBase={import.meta.env.BASE_URL} />
  </StrictMode>,
);
