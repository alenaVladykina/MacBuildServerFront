import React from 'react';
import {Link} from "react-router-dom";
import './header.css'

const Header = () => {

  return (
    <nav>
      <ul className={'list'}>
        <li className={'list_item'}><Link to={'/'} className={'link'}>Data</Link></li>
        <li className={'list_item'}><Link to={'/buttons'} className={'link'}>Buttons</Link></li>
        <li className={'list_item'}><Link to={'/form'} className={'link'}>Form</Link></li>
      </ul>
    </nav>
  );
};

export default Header;


