// Footer.js

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return <footer style={{ borderTop: `2px solid ${theme === 'light' ? '#333333' : '#ffffff'}` }}>Footer</footer>;
};

export default Footer;
