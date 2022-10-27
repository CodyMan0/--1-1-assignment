import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { LoginProvider } from './context/LoginContext';
import Router from './Router';
import theme from './styles/theme';

function App() {
  return (
    <LoginProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </LoginProvider>
  );
}

export default App;
