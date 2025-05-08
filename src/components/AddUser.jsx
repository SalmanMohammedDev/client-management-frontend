import React, { useState } from 'react';
import { addUser } from '../api';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser({ name, email });
    alert('User added!');
    setName('');
    setEmail('');
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Add User</h2>
      <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default AddUser;
