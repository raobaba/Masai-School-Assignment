// App.js

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Main />
        <Footer />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default App;
