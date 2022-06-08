import { CloseOutlined } from '@ant-design/icons';
import { Button, Col, InputNumber, Row } from 'antd';
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import './BookingTicket.scss';

const BookingTicket = () => {
  return (
    <>
      <Navbar />
      <div className='booking-ticket__wrapper'>
        <div className='grid'>
          <h1>Vé Safari</h1>
          <Row>
            <Col span={16}>
              <div className='ticket-img'>
                <img
                  src='https://cms.beebeetravel.vn/Upload/Promotion/637596896734378316_VESAFARI.jpg'
                  alt=''
                />
              </div>
            </Col>
            <Col span={8} className='ticket-right'>
              <div className='ticket-content'>
                <h3 style={{ textAlign: 'justify' }}>Người lớn (trên 1,4m)</h3>
                <Row>
                  <Col span={6}>
                    <InputNumber min={1} max={10} defaultValue={1} />
                  </Col>
                  <Col span={4}>
                    <CloseOutlined />
                  </Col>
                  <Col span={4}>
                    <p>650000</p>
                  </Col>
                  <Col span={4}>
                    <DragHandleIcon />
                  </Col>
                  <Col span={6}>
                    <h3>650000</h3>
                  </Col>
                </Row>

                <h3 style={{ textAlign: 'justify' }}>
                  Trẻ em (từ 1m đến 1,4m)
                </h3>
                <Row>
                  <Col span={6}>
                    <InputNumber min={0} max={10} defaultValue={0} />
                  </Col>
                  <Col span={4}>
                    <CloseOutlined />
                  </Col>
                  <Col span={4}>
                    <p>650000</p>
                  </Col>
                  <Col span={4}>
                    <DragHandleIcon />
                  </Col>
                  <Col span={6}>
                    <h3>650000</h3>
                  </Col>
                </Row>

                <h3 style={{ textAlign: 'justify' }}>
                  Người cao tuổi (trên 60 tuổi)
                </h3>
                <Row>
                  <Col span={6}>
                    <InputNumber min={0} max={10} defaultValue={0} />
                  </Col>
                  <Col span={4}>
                    <CloseOutlined />
                  </Col>
                  <Col span={4}>
                    <p>650000</p>
                  </Col>
                  <Col span={4}>
                    <DragHandleIcon />
                  </Col>
                  <Col span={6}>
                    <h3>650000</h3>
                  </Col>
                </Row>
              </div>
              <div className='total-price'>
                <h3>Tổng tiền:</h3>
                <h3>650000</h3>
              </div>
              <Button type='primary' size='large'>
                Đặt vé
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default BookingTicket;
