import React, {useContext, useEffect} from 'react';
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

    useEffect(() => {
      if (!isLogin) {
        userStore.authMe();
      } else {
        navigate('/');
      }
    }, [isLogin]);

    const onClickNavigate = () => {
      navigate('/register')
    }

    const onFinish = (values: any) => {
      userStore.login(values.email, values.password)
    };

    return (
      <Content style={{width: '100%', marginTop: '100px'}}>
        <Row justify={'center'}>
          <Col xxl={{span: 6, offset: 0}}
               xl={{span: 8, offset: 0}}
               lg={{span: 10, offset: 0}}
               md={{span: 12, offset: 0}}
               sm={{span: 18, offset: 0}}
               xs={{span: 20, offset: 0}}
          >
            <Title level={2} style={{marginBottom: '30px', textAlign: "center"}}>Sign In</Title>
            <Form
              name="authorizationForm"
              labelCol={{span: 6}}
              initialValues={{remember: true}}
              onFinish={onFinish}
              wrapperCol={{span: 16, offset: 2}}
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
              </Flex>
            </Form>

          </Col>
        </Row>
      </Content>
    );
  })
;

export default AuthorizationForm;

