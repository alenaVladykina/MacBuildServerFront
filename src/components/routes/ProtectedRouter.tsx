import {Navigate} from "react-router-dom";
import React from 'react';
import {getData} from "../../commons/selectors";
import {useAppSelector} from "../../app/store";

type PropsType = {
  children: any;
}


export const ProtectedRouter = (props: PropsType) => {
  const isLogin = useAppSelector(getData).isLogin

  return isLogin
    ? props.children
    : <Navigate to="/auth" replace={true}/>
};