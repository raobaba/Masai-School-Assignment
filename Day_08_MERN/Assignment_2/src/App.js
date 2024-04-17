import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from './ThemeContext';
import UserForm from './UserForm';
import Header from './Header';

function App() {

  return (
    <ThemeProvider>
    <div>
      <Header />
      <UserForm />
    </div>
  </ThemeProvider>
  );
}

export default App;
