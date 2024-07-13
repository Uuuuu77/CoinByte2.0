import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import Footer from './components/Common/Footer';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ExchangePage from './pages/ExchangePage';
import WalletPage from './pages/WalletPage';
import SocialPage from './pages/SocialPage';
import SupportPage from './pages/SupportPage';
import AuthPage from './pages/AuthPage';
import NotFoundPage from './pages/NotFoundPage';
import ThemeContextProvider from './contexts/ThemeContext';
import DarkModeToggle from './components/Common/DarkModeToggle';
import './App.css';
import './styles/dark-mode.css';
import './styles/global.css';
import './styles/variables.css';

const App = () => {
  return (
    <ThemeContextProvider>
      <Router>
        <div className="container">
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/exchange" component={ExchangePage} />
              <Route path="/wallet" component={WalletPage} />
              <Route path="/social" component={SocialPage} />
              <Route path="/support" component={SupportPage} />
              <Route path="/auth/login" component={Login} />
              <Route path="/auth/signup" component={Signup} />
              <Route path="/auth/logout" component={Logout} />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeContextProvider>
  );
};

export default App;
