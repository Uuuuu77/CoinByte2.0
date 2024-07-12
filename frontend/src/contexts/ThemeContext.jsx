import React, { createContext, useState, useEffect } from 'react';

// Create a context
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.className = newTheme; // Apply theme class to body
  };

  // Save theme preference to local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme; // Apply saved theme class to body
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme; // Apply theme class to body
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
