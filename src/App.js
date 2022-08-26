import React, { useEffect } from 'react'
import "./App.css";
import Register from "./components/Register";
import { Route, Routes } from "react-router";
import { useDispatch } from 'react-redux';
import Footer from './commons/Footer';
import Navbar from './commons/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import { getMe } from './state/User/User';


function App() {
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(getMe());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
