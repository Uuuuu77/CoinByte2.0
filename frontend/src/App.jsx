// App.jsx
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
import NotFoundPage from './pages/NotFoundPage';
import AuthPage from './pages/AuthPage';
import ThemeContextProvider from './contexts/ThemeContext';
import './App.css';
import './styles/dark-mode.css';
import './styles/global.css';
import './styles/variables.css';

// Main application component
const App = () => {
  return (
    <ThemeContextProvider>
      <Router>
        <div className="container">
          <Navbar /> {/* Navigation bar component */}
          <main>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/exchange" component={ExchangePage} />
              <Route path="/wallet" component={WalletPage} />
              <Route path="/social" component={SocialPage} />
              <Route path="/support" component={SupportPage} />
              <Route path="/auth" component={AuthPage} /> {/* Updated to use AuthPage */}
              <Route component={NotFoundPage} /> {/* Fallback for undefined routes */}
            </Switch>
          </main>
          <Footer /> {/* Footer component */}
        </div>
      </Router>
    </ThemeContextProvider>
  );
};

export default App;
