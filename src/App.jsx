// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../src/features/authSlice';
import Login from '../src/Pages/Login';
import AppRoutes from '../src/routes/index';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {!user ? <Login /> : <AppRoutes />}
    </div>
  );
}

export default App;
