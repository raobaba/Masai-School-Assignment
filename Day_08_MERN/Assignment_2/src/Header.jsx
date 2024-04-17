import React from 'react';
import { useTheme } from './ThemeContext';

function Header() {
  const { background, text } = useTheme();

  return (
    <header style={{ background, color: text }}>
      <h1>Themed Header</h1>
    </header>
  );
}

export default Header;
