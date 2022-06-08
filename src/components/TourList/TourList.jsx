import { Button, Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import AccessAlarmsTwoToneIcon from '@mui/icons-material/AccessAlarmsTwoTone';
import LocalAtmTwoToneIcon from '@mui/icons-material/LocalAtmTwoTone';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import Safari from '../../img/tour/VESAFARI.jpg';
import './TourList.scss';

const TourList = () => {
  return (
    <div id='tours' className='tickets'>
      <div className='grid'>
        <h1>đặt vé vui chơi</h1>
        <div className='ticket-item__wrapper'>
          <Row justify='space-between'>
            <Col span={7} className='ticket-item'>
              <Link
                to='/'
                style={{ width: '100%', height: '100%' }}
                className='ticket-item__link'
              >
                <div className='ticket-item__img'>
                  <img src={Safari} alt='Safari-ticket' />
                </div>
                <div className='ticket-item__text'>
                  <h4>Vé Safari</h4>
                  <div className='ticket-item__overview'>
                    <MapTwoToneIcon />
                    <p>
                      Khu Bãi Dài, xã Gành Dầu, Thành Phố Phú Quốc, tỉnh Kiên
                      Giang.
                    </p>
                  </div>
                  <div className='ticket-item__overview'>
                    <AccessAlarmsTwoToneIcon />
                    <p>9:30 - 16:30 hằng ngày.</p>
                  </div>
                  <div className='ticket-item__overview'>
                    <LocalAtmTwoToneIcon />
                    <p>490000 - 650000/người/vé.</p>
                  </div>
                </div>
                <Button size='large' type='primary' className='order-btn'>
                  Đặt vé
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default TourList;
