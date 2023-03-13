// libraries
import React from 'react';
import { Routes as RRDRoutes, Route } from 'react-router-dom';

// components
import Layout from '../components/Layout';

// pages
import Cart from '../pages/Cart';
import Favorites from '../pages/Favorites';
import Homepage from '../pages/Homepage';
import NoFound from '../pages/NoFound';
import ProductDetail from '../pages/ProductDetail';

export default function Routes() {
  return (
    <RRDRoutes>
      <Route path='/' element={<Layout />}>

        <Route index element={<Homepage />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detail/:id' element={<ProductDetail />} />

        <Route path='*' element={<NoFound />} />

      </Route>
    </RRDRoutes>
  )
}
