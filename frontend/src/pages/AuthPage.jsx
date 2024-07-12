// AuthPage.jsx
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import Logout from '../components/Auth/Logout';
import '../styles/AuthPage.css';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <Switch>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/signup" component={Signup} />
        <Route path="/auth/logout" component={Logout} />
      </Switch>
    </div>
  );
};

export default AuthPage;
