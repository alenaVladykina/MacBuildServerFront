import React, {useEffect, useState, lazy} from 'react';
import './App.scss';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {ProtectedRouter} from "../components/routes/ProtectedRouter";
import {useSelector} from "react-redux";
import {getData} from "../commons/selectors";
import {useAppDispatch} from "./store";
import {authTC} from "./appReduser";


function App() {
  const isLogin = useSelector(getData).isLogin;
  const dispatch = useAppDispatch();
  const location = useLocation();
  const pathNav = localStorage.getItem('pathLocation')
  const navigate = useNavigate();


  useEffect(() => {
    localStorage.setItem('pathLocation', location.pathname)
  }, [location])


  useEffect(() => {
    if (isLogin) {
      navigate(pathNav)
    }
    if (!isLogin) {
      dispatch(authTC())
    }
  }, [isLogin])


  return (
    <div className="App">
      <ProtectedRouter>
        <Header/>
        <Outlet/>
        <Footer/>
      </ProtectedRouter>
    </div>
  );
}

export default App;
