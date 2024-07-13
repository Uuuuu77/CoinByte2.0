import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ExchangePage from './pages/ExchangePage';
import WalletPage from './pages/WalletPage';
import SocialPage from './pages/SocialPage';
import SupportPage from './pages/SupportPage';
import AuthPage from './pages/AuthPage';
import NotFoundPage from './pages/NotFoundPage';
import ThemeContextProvider, { ThemeContext } from './contexts/ThemeContext';
import DarkModeToggle from './components/Common/DarkModeToggle';
import './App.css';

const App = () => {
  return (
    <ThemeContextProvider>
      <Router>
        <div className="container">
          <Navbar />
          <main>
            <DarkModeToggle />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/exchange" component={ExchangePage} />
              <Route path="/wallet" component={WalletPage} />
              <Route path="/social" component={SocialPage} />
              <Route path="/support" component={SupportPage} />
              <Route path="/auth" component={AuthPage} />
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
