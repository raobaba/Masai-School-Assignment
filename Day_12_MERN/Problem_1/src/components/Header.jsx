// Header.js

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme } = useTheme();

  return <header style={{ borderBottom: `2px solid ${theme === 'light' ? '#333333' : '#ffffff'}` }}>Header</header>;
};

export default Header;
