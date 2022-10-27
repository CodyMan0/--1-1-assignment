import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useEffect,
} from 'react';
import { getLocalStorage, TOKEN_NAME } from '../utils/localStorage';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), []);

  useEffect(() => {
    const loggedIn = getLocalStorage({ name: TOKEN_NAME });
    if (loggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export const useAuth = () => useContext(LoginContext);
