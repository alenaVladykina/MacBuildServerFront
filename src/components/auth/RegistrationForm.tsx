import React, {useContext} from 'react';
import {Button, Col, Form, Input, Layout, Row} from "antd";
import {Typography} from 'antd';
import {observer} from "mobx-react-lite";
import {StoreContext} from "../../store";
import {useNavigate} from "react-router-dom";

const {Title, Text} = Typography;
const {Content} = Layout;

type FieldType = {
  email: string
  password: string,
  confirm: string
}

const RegistrationForm = observer(() => {
  const {userStore} = useContext(StoreContext);
  const navigate = useNavigate();


  const onFinish = (values: FieldType) => {
    userStore.register(values.email, values.password, values.confirm);
  };

  const onClickNavigate = () => {
    navigate('/auth');
  }

  return (
    <Content style={{marginTop: '100px'}}>
      <Row justify={'start'} style={{textAlign: "center"}}>
        <Col span={8} offset={8}>
          <Title level={2} style={{textAlign: 'center', marginBottom: '30px'}}>Sign Up</Title>
          <Form
            name="registerForm"
            initialValues={{remember: true}}
            onFinish={onFinish}
          >
            <Form.Item<FieldType>
              label="Email"
              name="email"
              wrapperCol={{offset: 5, span: 16}}
              rules={[{required: true, message: 'Invalid email!', type: 'email'}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              wrapperCol={{offset: 4, span: 16}}
              rules={[{required: true, message: 'Invalid password!', min: 4}]}
            >
              <Input.Password/>
            </Form.Item>
            <Form.Item<FieldType>
              label="Confirm Password"
              name="confirm"
              wrapperCol={{offset:2, span: 16}}
              rules={[{required: true, message: 'Invalid password!', min: 4}]}
            >
              <Input.Password/>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 4, span: 16}}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Text type="secondary"
                style={{display: "block", textAlign: "center"}}>
            Already have an account?
          </Text>
          <Button type="link"
                  onClick={onClickNavigate}>
            Sign In
          </Button>
        </Col>
      </Row>
    </Content>
  );
});


export default RegistrationForm;