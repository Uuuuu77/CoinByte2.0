import { useState, useEffect } from 'react';
import { login, logout, getCurrentUser } from '../services/auth';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, []);

  const handleLogin = async (credentials) => {
    try {
      const loggedInUser = await login(credentials);
      setUser(loggedInUser);
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      throw new Error('Logout failed');
    }
  };

  return { user, loading, handleLogin, handleLogout };
};

export default useAuth;
