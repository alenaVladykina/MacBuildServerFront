import React, {useContext,} from 'react';
import {Button, Col, Form, Input, Layout, Row} from "antd";
import {Typography} from 'antd';
import {observer} from "mobx-react-lite";
import {StoreContext} from "../../store";
import {useNavigate} from "react-router-dom";

const {Title, Text} = Typography;
const {Content} = Layout;

type FieldType = {
  email: string;
  password: string;
};

const AuthorizationForm = observer(() => {
  const {userStore} = useContext(StoreContext)
  const navigate = useNavigate()
  const onClickNavigate = () => {
    navigate('/register')
  }

  const onFinish = (values: any) => {
    userStore.login(values.email, values.password)
  };

  return (
    <Content style={{width: '100%', marginTop: '100px'}}>
      <Row justify={'start'} style={{textAlign: "center"}}>
        <Col span={8} offset={8}>
          <Title level={2} style={{marginBottom: '30px', textAlign: "center"}}>Sign In</Title>
          <Form
            name="authorizationForm"
            labelCol={{span: 4}}
            initialValues={{remember: true}}
            onFinish={onFinish}
          >
            <Form.Item<FieldType>
              label="Email"
              name="email"
              wrapperCol={{offset: 2, span: 12}}
              rules={[{required: true, message: 'Invalid email!', type: 'email'}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              wrapperCol={{offset: 2, span: 12}}
              rules={[{required: true, message: 'Short password!', min: 4}]}
            >
              <Input.Password/>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 4, span: 16}}>
              <Button type="primary"
                      htmlType="submit">
                Sing In
              </Button>
            </Form.Item>
          </Form>
          <Text type="secondary"
                style={{display: "block", textAlign: "center"}}>
            Don't have an account?
          </Text>
          <Button type="link"
                  onClick={onClickNavigate}
          >Sign Up</Button>
        </Col>
      </Row>
    </Content>
  );
});

export default AuthorizationForm;

//Don't have an account?
//Sign Up