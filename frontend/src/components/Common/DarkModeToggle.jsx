import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle">
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
