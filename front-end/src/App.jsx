// App.jsx
import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Private from './components/Private.jsx';
import Login from './components/Login.jsx';
import Product from './components/Product.jsx';
import GetProduct from './components/GetProduct.jsx';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* Protected Routes */}
          <Route element={<Private />}>
            <Route path='/' element={<GetProduct/>} />
            <Route path='/add' element={<Product/>} />
            <Route path='/update/id' element={<h1>Update Product Component</h1>} />
            <Route path='/logout' element={<h1>Logout Product Component</h1>} />
            <Route path='/profile' element={<h1>Profile Product Component</h1>} />
          </Route>

          {/* Public Routes */}
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
