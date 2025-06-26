import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as BrowswerRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowswerRouter>
   <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowswerRouter>
)
