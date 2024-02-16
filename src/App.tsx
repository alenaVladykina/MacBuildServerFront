import React, {useContext, useEffect} from 'react';
import {Outlet} from "react-router-dom";
import './App.css'
import HeaderPage from "./components/HeaderPage";
import {Layout, Skeleton, Row, Col} from "antd";
import {observer} from "mobx-react-lite";
import {StoreContext} from "./store";
import {ProtectedRouter} from "./components/routes/ProtectedRouter";


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
      <Skeleton loading={userStore.isLoading} active>
        <ProtectedRouter>
          <HeaderPage/>
          <Row justify='center'>
            <Col xxl={{span: 20, offset: 0}}
                 xl={{span: 22, offset: 0}}
                 lg={{span: 24, offset: 0}}
                 md={{span: 24, offset: 0}}
                 sm={{span: 24, offset: 0}}
                 xs={{span: 24, offset: 0}}
            >
              <Layout style={{backgroundColor: 'transparent'}}>
                <Outlet/>
              </Layout>
            </Col>
          </Row>
        </ProtectedRouter>
      </Skeleton>
    </div>
  )
});
