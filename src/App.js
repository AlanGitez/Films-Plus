import React from 'react'
import "./App.css";
import Register from "./components/Register";
import { Route, Routes } from "react-router";
import { useSelector } from 'react-redux';
import Footer from './commons/Footer';
import Navbar from './commons/Navbar';
import Home from './components/Home';
import DetailModal from './commons/DetailModal';
import Login from './components/Login';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
