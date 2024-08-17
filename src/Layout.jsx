// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../src/Components/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
