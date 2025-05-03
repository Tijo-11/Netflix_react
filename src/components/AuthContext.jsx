import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check sessionStorage for cached auth state on mount
    const cachedAuth = sessionStorage.getItem('isAuthenticated');
    if (cachedAuth === 'true') {
      setIsAuthenticated(true);
      const cachedUser = sessionStorage.getItem('user');
      if (cachedUser) setUser(JSON.parse(cachedUser));
    }
  }, []);

  const login = (email, password) => {
    // Mock validation: email and password must be non-empty
    if (email && password) {
      const userData = { email };
      setIsAuthenticated(true);
      setUser(userData);
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};