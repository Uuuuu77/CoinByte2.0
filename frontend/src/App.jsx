// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import WalletPage from './pages/WalletPage';
import SocialPage from './pages/SocialPage';
import SupportPage from './pages/SupportPage';
import AuthPage from './pages/AuthPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/wallet" component={WalletPage} />
          <Route path="/social" component={SocialPage} />
          <Route path="/support" component={SupportPage} />
          <Route path="/auth" component={AuthPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
