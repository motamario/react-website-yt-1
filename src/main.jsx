import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faTypo3 } from '@fortawesome/free-brands-svg-icons';
// import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import from the correct package
// library.add(faTypo3, faBars);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <App />

    </BrowserRouter>

  </React.StrictMode>,
)
