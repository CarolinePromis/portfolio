import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import Cursor from './Cursor.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cursor />
    <App/>
  </StrictMode>,
)