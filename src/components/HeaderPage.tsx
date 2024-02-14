import React from 'react';
import {Menu} from "antd";
import {Header} from "antd/es/layout/layout";
import {Link} from 'react-router-dom'
import {ItemMenu, MenuType} from "../commons/types";

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
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    }}>
      <Menu
        inlineIndent={12}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['tasks']}
        items={items}
        style={{flex: 1, minWidth: 0,}}
      />
    </Header>
  );
};

export default HeaderPage;