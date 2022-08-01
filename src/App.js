import React from 'react'
import "./App.css";
import Register from "./components/Register";
import { Route, Routes } from "react-router";
import Footer from './commons/Footer';
import Navbar from './commons/Navbar';


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/register' element={<Register />} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
