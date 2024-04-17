import React from 'react';
import { useTheme } from './ThemeContext';

function UserForm() {
  const { background, text } = useTheme();

  return (
    <form style={{ background, color: text }}>
      <label>
        Name:
        <input type="text" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
