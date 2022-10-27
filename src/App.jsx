import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LoginProvider } from './context/LoginContext';
import Router from './Router';

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
