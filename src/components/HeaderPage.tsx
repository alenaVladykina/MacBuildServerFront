import React from 'react';
import {Menu} from "antd";
import {Link} from 'react-router-dom'
import {MenuType} from "../commons/types";
import {Layout} from 'antd';

const {Header} = Layout;

const items: MenuType = [
  {key: '/tasks', label: <Link to='/'>Tasks</Link>},
  {key: '/profile', label: <Link to='/profile'>Profile</Link>}
]


const HeaderPage = () => {
  return (
    <Header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1,
      backgroundColor: 'transparent',
    }}>
      <Menu
        theme="light"
        mode="horizontal"
        items={items}
        style={{width: '100%', display: 'flex', justifyContent: "end"}}
      />
    </Header>
  );
};

export default HeaderPage;