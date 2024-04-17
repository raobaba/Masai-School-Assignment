import React, { useState, useRef } from 'react';

function UserForm() {
  const [name, setName] = useState('');
  const emailRef = useRef();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Controlled Name:', name);
    console.log('Uncontrolled Email:', emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Controlled Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Uncontrolled Email:
        <input type="text" ref={emailRef} />
      </label>
      <br />
      {name.length < 3 && <span style={{ color: 'red' }}>Name must be at least 3 characters long</span>}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;

