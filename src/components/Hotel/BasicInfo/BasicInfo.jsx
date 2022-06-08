import { Col, Input, Row, Select, Form } from 'antd';
import { Option } from 'antd/lib/mentions';
import React from 'react';

const BasicInfo = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Row>
        <Col span={18} className='info-left'>
          <div className='basic__info-item'>
            <h3>Tên của chỗ nghỉ là gì?</h3>
            <Form
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
              layout='vertical'
            >
              <Form.Item
                style={{
                  width: '600px',
                }}
                name='hotel-name'
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input size='large' placeholder='Nhập tên khách sạn' />
              </Form.Item>

              <Form.Item name='rate' label='Xếp hạng sao'>
                <Select
                  defaultValue='0'
                  style={{
                    width: '300px',
                  }}
                  size='large'
                  onChange={handleChange}
                >
                  <Option value='0'>Không áp dụng</Option>
                  <Option value='1'>1 sao</Option>
                  <Option value='2'>2 sao</Option>
                  <Option value='3'>3 sao</Option>
                  <Option value='4'>4 sao</Option>
                  <Option value='5'>5 sao</Option>
                </Select>
              </Form.Item>
            </Form>
          </div>

          <div className='basic__info-item'>
            <h3>Chi tiết liên hệ của chỗ nghỉ là gì?</h3>
            <Form
              name='basic'
              layout='vertical'
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Form.Item
                label='Tên người liên hệ'
                name='username'
                style={{
                  width: '600px',
                }}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập tên người liên hệ!',
                  },
                ]}
              >
                <Input size='large' />
              </Form.Item>

              <Form.Item
                label='Số điện thoại liên lạc (để chúng tôi có thể hỗ trợ đăng ký của Quý vị khi cần)'
                name='phone-number'
                style={{
                  width: '600px',
                }}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số điện thoại người liên hệ!',
                  },
                ]}
              >
                <Input size='large' />
              </Form.Item>
            </Form>
          </div>

          <div className='basic__info-item'>
            <h3>Chỗ nghỉ tọa lạc ở đâu?</h3>
            <Form
              name='basic'
              layout='vertical'
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Form.Item
                label='Địa chỉ phố'
                name='address1'
                style={{
                  width: '600px',
                }}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập giá trị vào trường này!',
                  },
                ]}
              >
                <Input size='large' />
              </Form.Item>

              <Form.Item
                label='Địa chỉ dòng 2'
                name='address2'
                style={{
                  width: '600px',
                }}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập giá trị vào trường này!',
                  },
                ]}
              >
                <Input size='large' />
              </Form.Item>

              <Form.Item
                label='Thành phố'
                name='city'
                initialValue='Thành phố Phú Quốc'
                style={{
                  width: '600px',
                }}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập giá trị vào trường này!',
                  },
                ]}
              >
                <Input disabled={true} size='large' />
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col span={6} className='info-right'>
          <div className='note'>
            <p>
              Sau khi hoàn tất đăng ký, Quý vị vẫn sẽ có thể thực hiện thay đổi
              cho đăng ký trước khi chỗ nghỉ online.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BasicInfo;
