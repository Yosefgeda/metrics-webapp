/* eslint-disable*/
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Navbar from './components/Navbar';
// import HomeItems from './components/HomeItems';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/" element={<Home />} /> 
      </Routes> 
    </>   
  );
}

export default App;
