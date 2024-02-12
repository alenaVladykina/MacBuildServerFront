import React from 'react';
import {Outlet} from "react-router-dom";
import './App.css'
import HeaderPage from "./components/HeaderPage";


export const App = () => {

  return (
    <div className={'app'}>
      <HeaderPage/>
      <Outlet/>
    </div>
  )
}
