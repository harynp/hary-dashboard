import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Customer from '../pages/Customer';
import Enterprice from '../pages/Enterprice';

const Context = () => {
  return (
    <Routes>
      <Route id="home" path="/" element={<Home/>} />
      <Route id="customer" path="/customer" element={<Customer/>} />
      <Route id="enterprice" path='/enterprice' element={<Enterprice/>}/>
    </Routes>
  )
}

export default Context;