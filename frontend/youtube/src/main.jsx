import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppRoutes from './Routes';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import AuthProvider from './contexts/Auth';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <GlobalStyles />
      <Header />
      <AppRoutes />
      <ToastContainer autoClose={2500} />
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)

