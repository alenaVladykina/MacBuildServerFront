import {Navigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {StoreContext} from "../../store";
import React from 'react';

type PropsType = {
  children: React.ReactNode;
}


export const ProtectedRouter = observer((props: PropsType) => {
  const {userStore} = useContext(StoreContext);

  return userStore.isLogin
    ? props.children
    : <Navigate to="/auth" replace={true}/>;
});
