/** @format */
'use client';
import React, { useState } from 'react';
import { addUser } from '../redux/slice';
import { useDispatch } from 'react-redux';

const AddUser = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handleUserDispatch = (name) => {
    // console.log(name);
    dispatch(addUser(name));
  };
  return (
    <div className="container">
      <h1>Add User</h1>
      <input
        type="text"
        placeholder="add user"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => handleUserDispatch(name)}>Add User</button>
    </div>
  );
};

export default AddUser;
