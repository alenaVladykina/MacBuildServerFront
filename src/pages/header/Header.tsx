import React from 'react';
import {Link} from "react-router-dom";
import './header.css'

const Header = () => {

  return (
    <nav>
      <ul className='list'>
        <li className='list_item'><Link to={'/'} className='link'>Дата</Link></li>
        <li className='list_item'><Link to={'/buttons'} className='link'>Типы кнопок</Link></li>
        <li className='list_item'><Link to={'/form'} className='link'>Форма</Link></li>
      </ul>
    </nav>
  );
};

export default Header;


