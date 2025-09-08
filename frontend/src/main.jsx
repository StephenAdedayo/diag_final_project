import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import DiaContextProvider from './context/DiaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <DiaContextProvider>
    <App />
        </DiaContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
