import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./pages/header/Header";
import './App.css'


export const App = () => {
  return (
    <div className={'app'}>
      <Header/>
      <Outlet/>
    </div>
  )
};
