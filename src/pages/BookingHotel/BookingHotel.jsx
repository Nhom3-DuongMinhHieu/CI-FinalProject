import { Button, Col, Image, Rate, Row } from 'antd';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './BookingHotel.scss';

const BookingHotel = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Navbar />
      <div className='booking-hotel__wrapper'>
        <div className='grid'>
          <div className='booking-hotel__overview'>
            <Row>
              <Col span={10}>
                <div className='overview-img'>
                  <Image
                    preview={{
                      visible: false,
                    }}
                    width={'100%'}
                    src='https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/156818895.jpg?k=aafdfb6698dcb416a3747136e682d37aa14acef99ace336642c79b7087351b77&o=&hp=1'
                    onClick={() => setVisible(true)}
                  />
                  <div
                    style={{
                      display: 'none',
                    }}
                  >
                    <Image.PreviewGroup
                      preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                      }}
                    >
                      <Image src='https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/156818404.jpg?k=93a36fefc4a22f9e979b6a345a45fa3fe3fa430c13994da6eb3102c34f924a6d&o=&hp=1' />
                      <Image src='https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/156819028.jpg?k=a2b8a9e92311e8a646f9779b945b6cafb97444a1fd495e580640418f1b319707&o=&hp=1' />
                      <Image src='https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/156818397.jpg?k=db36ceb4648bc720d25c107f04db21e6f46fdadbef91d4418293e5281a0976ed&o=&hp=1' />
                    </Image.PreviewGroup>
                  </div>
                </div>
              </Col>
              <Col span={14}>
                <div className='overview-content'>
                  <div className='overview-content__title'>
                    <h2>Azura resort</h2>
                    <Rate disabled defaultValue={3} />
                  </div>
                  <h6>Duong Dong, Phu Quoc</h6>
                  <div className='overview-content__main'>
                    <h4>Mô tả</h4>
                    <p>
                      Tọa lạc tại mũi Gành Dầu đẹp như tranh vẽ, Vinpearl
                      Discovery Greenhill Phu Quoc là nơi nghỉ dưỡng đầy phong
                      cách và trang nhã, chỉ cách thị trấn Dương Đông 23 km. Với
                      không gian rộng rãi ngập tràn ánh sáng tự nhiên qua cửa sổ
                      vách kính và nội thất màu trắng hoặc trung tính, các biệt
                      thự có phòng ngủ được trang trí tuyệt đẹp, phòng khách,
                      khu vực phòng ăn đi kèm khu bếp nhỏ, TV màn hình phẳng, đồ
                      bếp và tủ lạnh lớn. Các phòng tắm mang phong cách sang
                      trọng cổ điển và được trang bị bồn tắm và/hoặc tiện nghi
                      vòi sen. Chỗ nghỉ phục vụ bữa sáng tự chọn. Dịch vụ đưa
                      đón sân bay có thể được sắp xếp theo yêu cầu.
                    </p>
                    <h4>Tiện ích</h4>
                    <ul>
                      <li>Nhà hàng</li>
                      <li>Phòng Gym</li>
                      <li>Hồ bơi</li>
                      <li>Công viên nước</li>
                      <li>Shop quà</li>
                      <li>Không hút thuốc</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <h1>chọn hạng phòng</h1>
          <div className='hotel-item__wrapper'>
            <Row justify='space-between'>
              <Col span={7} className='hotel-item'>
                <div className='hotel-item__img'>
                  <img
                    src='https://cms.beebeetravel.vn/Upload/Hotel/637854645810164790_225548443.jpg'
                    alt='Safari-hotel'
                  />
                </div>
                <div className='hotel-item__text'>
                  <h4>Sailing Club Signature Resort Phu Quoc</h4>
                  <h6>1 giường đơn</h6>
                  <div className='hotel-item__overview'>
                    <p>5250000/phòng/đêm.</p>
                  </div>
                </div>
                <Button size='large' type='primary' className='order-btn'>
                  Đặt phòng
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingHotel;
