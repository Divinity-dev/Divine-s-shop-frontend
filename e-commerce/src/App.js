import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Productlist from './pages/Productlist';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import success from './pages/success';
import { useSelector } from 'react-redux';

function App() {
  const currentUser = useSelector((state)=> state.user)
  const user = currentUser; 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Productlist" element={<Productlist />} />
      <Route path="/Productlist/:category" element={<Productlist />} />
      <Route path="/Product/:id" element={<Product />} />
      <Route
        path="/Register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route path='/success' element={<success />} />
      <Route
        path="/Login"
        element={user ? <Navigate to="/" /> : <Login />}
      />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
