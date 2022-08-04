import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from './state/Movies/popular';
import "./App.css";
import Register from "./components/Register";
import { Route, Routes } from "react-router";
import Footer from './commons/Footer';
import Navbar from './commons/Navbar';
import Home from './components/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies())
  }, [dispatch])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
