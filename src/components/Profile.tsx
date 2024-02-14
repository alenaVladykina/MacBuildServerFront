import React from 'react';
import {Content} from "antd/es/layout/layout";
import {observer} from "mobx-react-lite";
import {Divider, Drawer, Typography} from 'antd';

const {Title} = Typography;

const Profile = observer(() => {

  return (
    <Content style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div>
        <Title level={2}>Profile</Title>
        <div>
          <p>UserMame</p>
          <p>Email</p>
        </div>
        <Title level={3}>History tasks</Title>
      </div>
      <Divider/>
    </Content>

  );
});

export default Profile;