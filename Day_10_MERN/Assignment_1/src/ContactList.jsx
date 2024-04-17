import React, { useState } from 'react';

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    const newContact = {
      id: new Date().getTime(),
      name,
      email
    };
    setContacts([...contacts, newContact]);
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Contact List</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <button type="submit">Add Contact</button>
      </form>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <strong>{contact.name}</strong>: {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
