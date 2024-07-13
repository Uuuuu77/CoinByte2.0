import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../services/auth';

const Logout = () => {
  const history = useHistory();

  /**
   * Logs out the user and redirects to the homepage.
   */
  useEffect(() => {
    logout();
    history.push('/');
  }, [history]);

  return null;
};

export default Logout;
