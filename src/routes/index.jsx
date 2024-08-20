// src/routes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/authSlice';
import Layout from '../Layout';
import Home from '../Pages/Home';

const PrivateRoute = ({ children }) => {
  const user = useSelector(selectUser);
  return user ? children : <Navigate to="/" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PrivateRoute><Home /></PrivateRoute>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
