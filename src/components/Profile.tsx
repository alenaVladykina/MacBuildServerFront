import React, {useContext} from 'react';
import {Content} from "antd/es/layout/layout";
import {observer} from "mobx-react-lite";
import {Row, Typography, Col} from 'antd';
import {StoreContext} from "../store";

const {Title, Text, Paragraph} = Typography;

const Profile = observer(() => {

  const {userStore} = useContext(StoreContext);
  return (
    <Content>
      <Row justify={'start'}>
        <Col span={16} offset={2}>
          <Title level={2}>Profile</Title>
          <Paragraph>
            <Text strong={true}>Email :</Text>
            <Text> {userStore.email}</Text>
          </Paragraph>

        </Col>
      </Row>
    </Content>

  );
});

export default Profile;