import React, {useContext, useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import './App.css'
import HeaderPage from "./components/HeaderPage";
import {Layout} from "antd";
import {observer} from "mobx-react-lite";
import {StoreContext} from "./store";


export const App = observer(() => {
  const {userStore} = useContext(StoreContext)
  const isLogin = userStore.isLogin


  useEffect(() => {
    if (!isLogin) {
      userStore.authMe();
    }
  })

  return (
    <div className={'app'}>
      <HeaderPage/>
      <Layout style={{backgroundColor: 'transparent'}}>
        <Outlet/>
      </Layout>
    </div>
  )
});
