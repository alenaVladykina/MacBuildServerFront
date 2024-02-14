import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import './App.css'
import HeaderPage from "./components/HeaderPage";
import {Layout} from "antd";


export const App = () => {

  useEffect(() => {
    fetch('http://localhost:3001/auth', {})
  })
  return (
    <div className={'app'}>
      <HeaderPage/>
      <Layout style={{backgroundColor: 'transparent'}}>
        <Outlet/>
      </Layout>
    </div>
  )
}
