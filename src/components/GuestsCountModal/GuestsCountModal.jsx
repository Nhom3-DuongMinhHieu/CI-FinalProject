import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import React, { useRef } from 'react';
import './GuestsCountModal.scss';

const GuestsCountModal = ({ setModalVisible, amount, setAmount }) => {
  const handleChange = (type, value) =>
    setAmount({ ...amount, [type]: amount[type] + value });

  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModalVisible(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return (
    <div ref={modalRef} className='person-count__modal'>
      <Row>
        <Col span={7}>Người lớn</Col>
        <Col span={7}></Col>
        <Col span={10}>
          <Row>
            <Col span={8}>
              <Button
                disabled={amount.adult === 1}
                onClick={() => handleChange('adult', -1)}
              >
                <MinusOutlined />
              </Button>
            </Col>
            <Col span={8}>{amount.adult}</Col>
            <Col span={8}>
              <Button onClick={() => handleChange('adult', 1)}>
                <PlusOutlined />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={7}>Trẻ em</Col>
        <Col span={7}></Col>
        <Col span={10}>
          <Row>
            <Col span={8}>
              <Button
                disabled={amount.children === 0}
                onClick={() => handleChange('children', -1)}
              >
                <MinusOutlined />
              </Button>
            </Col>
            <Col span={8}>{amount.children}</Col>
            <Col span={8}>
              <Button onClick={() => handleChange('children', 1)}>
                <PlusOutlined />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={7}>Số phòng</Col>
        <Col span={7}></Col>
        <Col span={10}>
          <Row>
            <Col span={8}>
              <Button
                disabled={amount.room === 1}
                onClick={() => handleChange('room', -1)}
              >
                <MinusOutlined />
              </Button>
            </Col>
            <Col span={8}>{amount.room}</Col>
            <Col span={8}>
              <Button onClick={() => handleChange('room', 1)}>
                <PlusOutlined />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default GuestsCountModal;
