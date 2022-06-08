import { PlusOutlined } from '@ant-design/icons';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Col, Form, Input, InputNumber, Modal, Row } from 'antd';
import React, { useState } from 'react';

const Price = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
          <div className='info-item'>
            <h3>Phòng Deluxe Giường Đôi/2 Giường Đơn Nhìn Ra Núi</h3>
            <div className='bed-quantity'>
              <h4>Số giường:</h4>
              <h4>2 giường đôi + 2 giường đơn</h4>
            </div>
            <div className='action-btn'>
              <Button
                style={{ marginBottom: '4px' }}
                icon={<EditIcon />}
                type='primary'
                ghost
              />
              <Button
                type='primary'
                danger
                icon={<DeleteForeverIcon />}
                ghost
              />
            </div>
          </div>
          <Button
            type='dashed'
            ghost
            icon={<PlusOutlined />}
            size='large'
            style={{ color: '#666', marginBottom: '40px' }}
            onClick={showModal}
          >
            Thêm phòng
          </Button>
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
      <Modal
        title='Thêm phòng'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name='basic'
          layout='vertical'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label='Tên phòng'
            name='room-name'
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tên phòng!',
              },
            ]}
          >
            <Input size='large' />
          </Form.Item>

          <Form.Item
            label='Loại giường'
            name='bed-type'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập số giường!',
              },
            ]}
          >
            <Row>
              <Col style={{ paddingLeft: '20px' }} span={12}>
                Giường đơn
              </Col>
              <Col span={12} style={{ marginBottom: '6px' }}>
                <InputNumber min={0} max={4} defaultValue={1} />
              </Col>
            </Row>

            <Row>
              <Col
                style={{ paddingLeft: '20px', marginBottom: '4px' }}
                span={12}
              >
                Giường đôi
              </Col>
              <Col span={12}>
                <InputNumber min={0} max={4} defaultValue={0} />
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            label='Giá phòng'
            name='room-price'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập giá phòng!',
              },
            ]}
          >
            <InputNumber
              addonAfter='VND/phòng/đêm'
              defaultValue={100000000}
              size='large'
            />
          </Form.Item>

          <Form.Item
            label='Ảnh phòng'
            name='room-photo'
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập ảnh phòng!',
              },
            ]}
          >
            <Input size='large' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Price;
