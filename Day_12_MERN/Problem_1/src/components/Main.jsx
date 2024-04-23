// Main.js

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Main = () => {
  const { theme } = useTheme();

  return <main style={{ padding: '20px', backgroundColor: theme === 'light' ? '#f0f0f0' : '#1f1f1f' }}>Main Content</main>;
};

export default Main;
