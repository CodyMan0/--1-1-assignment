import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { LoginProvider } from './context/LoginContext';
import Router from './Router';

function App() {
  return (
    <LoginProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </LoginProvider>
  );
}

export default App;
