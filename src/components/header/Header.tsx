import React from 'react';
import './header.scss'
import {NavLink} from "react-router-dom";

const Header = () => {


  return (
    <header className='header'>
      <nav className='header_nav'>
        <ul className='menu'>
          <li className='menu__item'>
            <NavLink
              to="/works"
              className={({isActive}) =>
                isActive ? "active" : ''}
            >
              Works
            </NavLink>
          </li>
          <li className='menu__item'>
            <NavLink
              to="/blog"
              className={({isActive}) =>
                isActive ? "active" : ''
              }>
              Blog
            </NavLink>
          </li>
          <li className='menu__item'>
            <NavLink
              to="/"
              className={({isActive}) =>
                isActive ? "active" : ''}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;