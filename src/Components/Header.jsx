// src/components/Header.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { clearUser } from '../features/authSlice';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(clearUser());
    }).catch((error) => {
      console.error("Error during sign-out:", error);
    });
  };

  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1>My App</h1>
      <button 
        onClick={handleLogout} 
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;