// AuthPage.jsx
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import Logout from '../components/Auth/Logout';
import '../styles/AuthPage.css';

// Component for authentication pages (Login, Signup, Logout).
const AuthPage = () => {
  const { path } = useRouteMatch();

  return (
    <div className="auth-page">
      <Switch>
        <Route path={`${path}/login`} component={Login} />
        <Route path={`${path}/signup`} component={Signup} />
        <Route path={`${path}/logout`} component={Logout} />
      </Switch>
    </div>
  );
};

export default AuthPage;
