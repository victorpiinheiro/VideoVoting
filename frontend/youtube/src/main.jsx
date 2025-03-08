import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


import { ToastContainer } from 'react-toastify'

import AppRoutes from './Routes'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <AppRoutes />

      <ToastContainer autoClose={2500} />
    </BrowserRouter>
  </StrictMode>
)

