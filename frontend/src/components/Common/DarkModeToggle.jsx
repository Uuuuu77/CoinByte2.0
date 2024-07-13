// DarkModeToggle.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="dark-mode-toggle">
      {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
