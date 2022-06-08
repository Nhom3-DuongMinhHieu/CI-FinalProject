import { EyeOutlined } from '@ant-design/icons';
import LocalAtmTwoToneIcon from '@mui/icons-material/LocalAtmTwoTone';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import { Button, Col, Rate, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './HotelList.scss';

const HotelList = () => {
  return (
    <div id='hotels' className='hotels grid'>
      <h1>khách sạn nổi bật</h1>
      <div className='hotel-item__wrapper'>
        <Row justify='space-between'>
          <Col span={7} className='hotel-item'>
            <Link
              to='/'
              style={{ width: '100%', height: '100%' }}
              className='hotel-item__link'
            >
              <div className='hotel-item__img'>
                <img
                  src='https://cms.beebeetravel.vn/Upload/Hotel/637854645810164790_225548443.jpg'
                  alt='Safari-hotel'
                />
              </div>
              <div className='hotel-item__text'>
                <h4>Sailing Club Signature Resort Phu Quoc</h4>
                <div className='hotel-item__overview'>
                  <Rate disabled defaultValue={4} />
                </div>
                <div className='hotel-item__overview'>
                  <MapTwoToneIcon />
                  <p>
                    Khu Bãi Dài, xã Gành Dầu, Thành Phố Phú Quốc, tỉnh Kiên
                    Giang.
                  </p>
                </div>
                <div className='hotel-item__overview'>
                  <LocalAtmTwoToneIcon />
                  <p>5250000/phòng/đêm.</p>
                </div>
              </div>
              <Link to='/booking-hotel'>
                <Button size='large' type='primary' className='order-btn'>
                  Đặt phòng
                </Button>
              </Link>
            </Link>
          </Col>
        </Row>
      </div>
      <Link to='/all-hotels'>
        <Button
          className='see-all__btn'
          type='primary'
          icon={<EyeOutlined />}
          size='large'
        >
          Xem tất cả
        </Button>
      </Link>
    </div>
  );
};

export default HotelList;
