// Logout.jsx
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

// Component for user logout
const Logout = () => {
  const { handleLogout } = useAuth();
  const history = useHistory();

  /**
   * Logs out the user and redirects to the homepage.
   */
  useEffect(() => {
    handleLogout(); // Perform logout action
    history.push('/'); // Redirect to homepage after logout
  }, [handleLogout, history]);

  return null;
};

export default Logout;
