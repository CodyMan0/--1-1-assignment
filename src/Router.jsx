import React, { useContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { LoginContext, useAuth } from './context/LoginContext';
import Auth from './pages/Auth';
import Todos from './pages/Todos';

const Router = () => {
  const { isLoggedIn } = useContext(LoginContext);
  const navigator = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigator('/');
    } else {
      navigator('/todo');
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/todo" element={<Todos />} />
    </Routes>
  );
};

export default Router;
