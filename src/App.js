import React, { useEffect } from 'react'
import "./App.css";
import Register from "./components/Register";
import { Route, Routes, useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import Footer from './commons/Footer';
import Navbar from './commons/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import { getMe } from './state/User/User';
import DetailModal from './commons/DetailModal';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showDetail = useSelector(state => state.showDetail);
  const singleFilm = useSelector(state => state.singleFilm);
  const user = useSelector(state => state.user);

  useEffect(() => { 
    !user.id && dispatch(getMe());
    //esto no es performante, me dispara request innecesarias.
    //deberia ponerlo mas abajo en el arbol.
    navigate(`/${showDetail ? "single/"+singleFilm.id : ""}`);
  }, [dispatch, showDetail]);
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
