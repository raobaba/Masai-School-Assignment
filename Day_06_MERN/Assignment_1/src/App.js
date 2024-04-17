import React, { useState } from 'react';
import UserProfile from './UserProfile'
import EditProfile from './EditProfile';

function App() {
  const [editMode, setEditMode] = useState(false);
  const userData = {
    name: "John Doe",
    email: "john@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  };
  return (
    <div>
      <h1>User Profile</h1>
      {editMode ? (
        <EditProfile userData={userData} />
      ) : (
        <UserProfile userData={userData} />
      )}
      <button onClick={() => setEditMode(!editMode)}>
        {editMode ? "View Mode" : "Edit Mode"}
      </button>
    </div>
  );
}

export default App;
