// libraries
import React from 'react';
import { Outlet } from 'react-router-dom';

// components
import Header from './Header';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
