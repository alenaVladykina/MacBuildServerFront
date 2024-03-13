import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../app/store";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {getData} from "../commons/selectors";
import {ErrorAC} from "../app/appReduser";


export const GlobalError = () => {
  const error = useAppSelector(getData).error;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error !== null) {
      toast.error(error);
    }
    if (error === null) {
      setTimeout(() => {
        dispatch(ErrorAC(null));
      }, 2000);
    }
  }, [error]);

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