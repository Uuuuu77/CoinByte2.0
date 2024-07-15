// Logout.jsx
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../services/auth';

// Component for user logout
const Logout = () => {
  const history = useHistory();

  /**
   * Logs out the user and redirects to the homepage.
   */
  useEffect(() => {
    logout(); // Perform logout action
    history.push('/'); // Redirect to homepage after logout
  }, [history]);

  return null;
};

export default Logout;
