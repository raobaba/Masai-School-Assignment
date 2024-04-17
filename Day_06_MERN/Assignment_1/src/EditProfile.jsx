import React from 'react';

function EditProfile({ userData }) {
  return (
    <div>
      <h2>Edit Profile</h2>
      <label>Name:</label>
      <input type="text" defaultValue={userData.name} /><br />
      <label>Email:</label>
      <input type="email" defaultValue={userData.email} /><br />
      <label>Bio:</label>
      <textarea defaultValue={userData.bio} /><br />
    </div>
  );
}

export default EditProfile;
