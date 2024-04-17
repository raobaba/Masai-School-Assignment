import React, { createContext, useState, useContext } from 'react';

const themes = {
  light: {
    background: '#f4f4f4',
    text: '#333',
  },
  dark: {
    background: '#333',
    text: '#f4f4f4',
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, ...themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
