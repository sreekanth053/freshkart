// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { AppProvider } from './services/AppContext';
import { AuthProvider } from './services/AuthContext'; // Import AuthProvider

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* Wrap AuthProvider around Header and App */}
        <AppProvider>
          <Header />
          <div className='app-container'>
            <App />
          </div>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
