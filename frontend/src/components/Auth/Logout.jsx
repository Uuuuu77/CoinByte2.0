import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../services/auth';
import './Logout.css';

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    logout();
    history.push('/');
  }, [history]);

  return null;
};

export default Logout;
