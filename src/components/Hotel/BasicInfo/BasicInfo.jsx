import { Col, Form, Input, Row, Select } from 'antd';
import React from 'react';

const BasicInfo = ({ hotelInfo, setHotelInfo }) => {
  const handleChange = (e) => {
    setHotelInfo({
      ...hotelInfo,
      [e.target.name]: e.target.value,
    });
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
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input
                  name='name'
                  value={hotelInfo.name}
                  onChange={handleChange}
                  size='large'
                  placeholder='Nhập tên khách sạn'
                />
              </Form.Item>

              <Form.Item label='Xếp hạng sao'>
                <Select
                  defaultValue='0'
                  style={{
                    width: '300px',
                  }}
                  size='large'
                  onChange={(e) => setHotelInfo({ ...hotelInfo, star: e })}
                  name='star'
                  value={hotelInfo.star}
                >
                  <Select.Option value=''>Không áp dụng</Select.Option>
                  <Select.Option value='1'>1 sao</Select.Option>
                  <Select.Option value='2'>2 sao</Select.Option>
                  <Select.Option value='3'>3 sao</Select.Option>
                  <Select.Option value='4'>4 sao</Select.Option>
                  <Select.Option value='5'>5 sao</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label='Mô tả'
                style={{
                  width: '600px',
                }}
                rules={[
                  {
                    required: true,
                    message: 'Please input description!',
                  },
                ]}
              >
                <Input
                  name='description'
                  value={hotelInfo.description}
                  onChange={handleChange}
                  size='large'
                  placeholder='Nhập mô tả khách sạn'
                />
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
                <Input
                  name='host'
                  value={hotelInfo.host}
                  onChange={handleChange}
                  size='large'
                />
              </Form.Item>

              <Form.Item
                label='Số điện thoại liên lạc (để chúng tôi có thể hỗ trợ đăng ký của Quý vị khi cần)'
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
                <Input
                  name='phone'
                  value={hotelInfo.phone}
                  onChange={handleChange}
                  size='large'
                />
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
                <Input
                  name='street'
                  value={hotelInfo.street}
                  onChange={handleChange}
                  size='large'
                />
              </Form.Item>

              <Form.Item
                label='Địa chỉ dòng 2'
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
                <Input
                  name='homeNumber'
                  value={hotelInfo.homeNumber}
                  onChange={handleChange}
                  size='large'
                />
              </Form.Item>

              <Form.Item
                label='Thành phố'
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
                <Input value={hotelInfo.city} disabled={true} size='large' />
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
