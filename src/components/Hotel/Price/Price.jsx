import { PlusOutlined } from '@ant-design/icons';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Col, Form, Input, InputNumber, Modal, Row } from 'antd';
import React, { useState } from 'react';

const initialValue = {
  name: '',
  bedSingle: 1,
  bedDoule: 0,
  price: '10000000',
  image: '',
};

const Price = ({ price, setPrice }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [priceData, setPriceData] = useState(initialValue);
  const [current, setCurrent] = useState(null);

  window.scrollTo(0, 0);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleChange = (e) => {
    setPriceData({
      ...priceData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOk = () => {
    if (current != null) {
      setPrice((prev) =>
        prev.map((item, index) => (index === current ? priceData : item))
      );
    } else {
      setPrice([...price, priceData]);
    }
    setIsModalVisible(false);
    setPriceData(initialValue);
    setCurrent(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleUpdate = (index) => {
    setPriceData(price[index]);
    setCurrent(index);
    setIsModalVisible(true);
  };

  const handleDelete = (index) => {
    setPrice((prev) => prev.filter((item, i) => i !== index));
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
          {price.map((item, index) => (
            <div key={index}>
              <div className='info-item'>
                <h3>{item.name}</h3>
                <div className='bed-quantity'>
                  <h4>Số giường:</h4>
                  <h4>
                    {item.bedDoule} giường đôi + {item.bedSingle} giường đơn
                  </h4>
                </div>
                <div className='action-btn'>
                  <Button
                    style={{ marginBottom: '4px' }}
                    icon={<EditIcon />}
                    type='primary'
                    ghost
                    onClick={() => handleUpdate(index)}
                  />
                  <Button
                    type='primary'
                    danger
                    icon={<DeleteForeverIcon />}
                    ghost
                    onClick={() => handleDelete(index)}
                  />
                </div>
              </div>
            </div>
          ))}

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
        title={current != null ? 'Cập nhật phòng' : 'Thêm phòng'}
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
            <Input
              name='name'
              value={priceData.name}
              onChange={handleChange}
              size='large'
            />
          </Form.Item>

          <Form.Item
            label='Loại giường'
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
                <InputNumber
                  min={0}
                  max={4}
                  defaultValue={1}
                  name='bedSingle'
                  value={priceData.bedSingle}
                  onChange={(e) => setPriceData({ ...priceData, bedSingle: e })}
                />
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
                <InputNumber
                  min={0}
                  max={4}
                  defaultValue={0}
                  value={priceData.bedDoule}
                  name='bedDouble'
                  onChange={(e) => setPriceData({ ...priceData, bedDoule: e })}
                />
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            label='Giá phòng'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập giá phòng!',
              },
            ]}
          >
            <InputNumber
              addonAfter='VND/phòng/đêm'
              defaultValue={10000000}
              name='price'
              value={priceData.price}
              onChange={(e) => setPriceData({ ...priceData, price: e })}
              size='large'
            />
          </Form.Item>

          <Form.Item
            label='Ảnh phòng'
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
            <Input
              name='image'
              value={priceData.image}
              onChange={handleChange}
              size='large'
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Price;
