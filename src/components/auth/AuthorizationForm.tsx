import React, {useContext, useEffect, useState,} from 'react';
import {Button, Col, Flex, Form, Input, Layout, Row} from "antd";
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
    const isLogin = userStore.isLogin;

    if (isLogin) {
      setTimeout(() => navigate('/'), 0)
    }

    const onClickNavigate = () => {
      navigate('/register')
    }

    const onFinish = (values: any) => {
      userStore.login(values.email, values.password)
    };

    return (
      <Content style={{width: '100%', marginTop: '100px'}}>
        <Row justify={'start'}>
          <Col xl={{span: 6, offset: 8}}
               lg={{span: 12, offset: 6}}
               md={{span: 16, offset: 4}}
               sm={{span: 24, offset: 2}}>
            <Title level={2} style={{marginBottom: '30px', textAlign: "center"}}>Sign In</Title>
            <Form
              name="authorizationForm"
              labelCol={{span: 4}}
              initialValues={{remember: true}}
              onFinish={onFinish}
              wrapperCol={{span: 18, offset: 2}}
            >
              <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[{required: true, message: 'Invalid email!', type: 'email'}]}
              >
                <Input/>
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{required: true, message: 'Short password!', min: 4}]}
              >
                <Input.Password/>
              </Form.Item>
              <Flex align={'center'} vertical>
                <Form.Item>
                  <Button type="primary"
                          htmlType="submit">
                    Sing In
                  </Button>
                </Form.Item>
                <Text type="secondary"
                      style={{display: "block", textAlign: "center"}}>
                  Don't have an account?
                </Text>
                <Button type="link"
                        onClick={onClickNavigate}
                >Sign Up</Button>
                {/*<Button type="link"*/}
                {/*        onClick={() => (fetch('/api/user', {*/}
                {/*          method: 'POST',*/}
                {/*        })).then((res) => console.log(res))}*/}
                {/*>auth</Button>*/}
              </Flex>
            </Form>

          </Col>
        </Row>
      </Content>
    );
  })
;

export default AuthorizationForm;

