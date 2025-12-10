import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*
      App.jsx imports the components and returns the Home page.
      The CatDetail page only loads when the URL changes (depending on which cat, that is).
      
      main.jsx imports App.jsx and renders the file with the 'root' id to display what's in the App.jsx file.
      index.html is our empty stage (the one with the element containing the 'root' id) that gets filled in by main.jsx.
      BrowserRouter element wraps around the App element so that everything loads somehow.
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
