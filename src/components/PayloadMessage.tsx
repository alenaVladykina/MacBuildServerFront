import React, {useEffect} from 'react';
import {toast, ToastContainer} from "react-toastify";
import {useAppDispatch, useAppSelector} from "../app/store";
import {getData} from "../commons/selectors";
import {MessageAC} from "../app/appReduser";

export const PayloadMessage = () => {
  const message = useAppSelector(getData).payloadMessage;
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (message !== null) {
      toast.success(message);
    }
    if (message === null) {
      setTimeout(() => {
        dispatch(MessageAC(null));
      }, 2000);
    }
  }, [message]);

  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};