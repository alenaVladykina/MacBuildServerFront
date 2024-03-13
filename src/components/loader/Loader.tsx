import React from 'react';
import './loader.scss'
import {useSelector} from "react-redux";
import {getData} from "../../commons/selectors";

const Loader = () => {
  const isLoading = useSelector(getData).isLoading

  if (isLoading === false) return

  return (
    <div className="loader"/>
  );
};

export default Loader;