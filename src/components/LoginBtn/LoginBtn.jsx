import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Drawer, Form, Input, Space } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './LoginForm.scss';

const LoginBtn = () => {
  const [visible, setVisible] = useState(false);
  const { loadUser, login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const user = loadUser();
    if (user) navigate('/');
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onFinish = async (values) => {
    const user = await login(values);
    if (user) {
      setVisible(false);
      navigate('/');
    }
  };

  return (
    <>
      <Space>
        <Button
          type='primary'
          onClick={showDrawer}
          style={{
            fontSize: '16px',
            height: 'auto',
            padding: '8px 12px',
            fontWeight: 700,
          }}
        >
          Đăng nhập
        </Button>
      </Space>
      <Drawer
        title='Đăng nhập tài khoản'
        placement={'right'}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={'right'}
        width={'460px'}
        headerStyle={{ padding: 24 }}
      >
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='Username'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Ghi nhớ đăng nhập</Checkbox>
            </Form.Item>

            <Link className='login-form-forgot' to='/'>
              Quên mật khẩu
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              Đăng nhập
            </Button>
            <span>
              Bạn chưa có tài khoản? <Link to='/'>Đăng kí ngay!</Link>
            </span>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default LoginBtn;
