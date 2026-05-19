import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router/Routes.tsx'
import { GlobalDataProvider } from './store/Context/GlobalDataContext.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <GlobalDataProvider>
      <Router />
    </GlobalDataProvider>
    </ BrowserRouter>
  </StrictMode>,
)
