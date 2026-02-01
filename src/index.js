import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/custom.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
