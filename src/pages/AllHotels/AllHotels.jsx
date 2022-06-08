import {
  Button,
  Checkbox,
  Col,
  Image,
  Pagination,
  Rate,
  Row,
  Slider,
} from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './AllHotels.scss';

const AllHotels = () => {
  const onChangeCheckbox = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

  const [sliderValue, setSliderValue] = useState([]);
  const onChangeSlider = (value) => {
    setSliderValue(
      Intl.NumberFormat('vi').format(value[0]) +
        ' - ' +
        value[1].toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    );
  };

  const onAfterChangeSlider = (value) => {
    setSliderValue(
      Intl.NumberFormat('vi').format(value[0]) +
        ' - ' +
        value[1].toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    );
  };

  const [current, setCurrent] = useState(1);
  const onChangePage = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <>
      <Navbar />
      <div className='all-hotels__wrapper'>
        <div className='grid'>
          <Row>
            <Col span={6}>
              <div className='all-hotels__sidebar'>
                <div className='sidebar-title'>Chọn lọc theo:</div>
                <div className='sidebar-item'>
                  <div className='sidebar-item__title'>
                    <h5>Khoảng giá:</h5>
                    <h6>{sliderValue}</h6>
                  </div>
                  <Slider
                    style={{ marginLeft: '12px', marginRight: '12px' }}
                    range={{
                      draggableTrack: true,
                    }}
                    step={100000}
                    max={10000000}
                    defaultValue={[0, 10000000]}
                    onChange={onChangeSlider}
                    onAfterChange={onAfterChangeSlider}
                  />
                </div>
                <div className='sidebar-item'>
                  <div className='sidebar-item__title'>Xếp hạng sao:</div>
                  <Checkbox.Group
                    style={{
                      width: '100%',
                    }}
                    onChange={onChangeCheckbox}
                  >
                    <Row>
                      <Col span={24}>
                        <Checkbox
                          style={{
                            fontSize: '16px',
                            margin: '4px 4px 4px 12px',
                          }}
                          value='5'
                        >
                          5 sao
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox
                          style={{
                            fontSize: '16px',
                            margin: '4px 4px 4px 12px',
                          }}
                          value='4'
                        >
                          4 sao
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox
                          style={{
                            fontSize: '16px',
                            margin: '4px 4px 4px 12px',
                          }}
                          value='3'
                        >
                          3 sao
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox
                          style={{
                            fontSize: '16px',
                            margin: '4px 4px 4px 12px',
                          }}
                          value='2'
                        >
                          2 sao
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox
                          style={{
                            fontSize: '16px',
                            margin: '4px 4px 4px 12px',
                          }}
                          value='1'
                        >
                          1 sao
                        </Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </div>
                <div className='sidebar-item'>
                  <div className='sidebar-item__title'>Tiện ích:</div>
                  <Checkbox.Group
                    style={{
                      width: '100%',
                    }}
                    onChange={onChangeCheckbox}
                  >
                    <Row>
                      <Col span={24}>
                        <Checkbox
                          style={{
                            fontSize: '16px',
                            margin: '4px 4px 4px 12px',
                          }}
                          value='5'
                        >
                          Xe đưa đón sân bay
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox
                          style={{
                            fontSize: '16px',
                            margin: '4px 4px 4px 12px',
                          }}
                          value='4'
                        >
                          Trung tâm Spa & chăm sóc sức khoẻ
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox
                          style={{
                            fontSize: '16px',
                            margin: '4px 4px 4px 12px',
                          }}
                          value='3'
                        >
                          Phòng không hút thuốc
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox
                          style={{
                            fontSize: '16px',
                            margin: '4px 4px 4px 12px',
                          }}
                          value='2'
                        >
                          Wi-Fi miễn phí
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox
                          style={{
                            fontSize: '16px',
                            margin: '4px 4px 4px 12px',
                          }}
                          value='1'
                        >
                          Dịch vụ phòng
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox
                          style={{
                            fontSize: '16px',
                            margin: '4px 4px 4px 12px',
                          }}
                          value='1'
                        >
                          Nhà hàng
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox
                          style={{
                            fontSize: '16px',
                            margin: '4px 4px 4px 12px',
                          }}
                          value='1'
                        >
                          Quầy bar
                        </Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </div>
              </div>
            </Col>
            <Col span={18} className='all-hotels__content'>
              <div className='content-item'>
                <div className='content-left'>
                  <div className='content-left__img'>
                    <Image
                      height={200}
                      width={200}
                      src='https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/156818998.jpg?k=f97cc7c7230cf16b4c49413803ffec49501def9c4bbca7e4ba7465c0ecb26d72&o=&hp=1'
                      placeholder={
                        <Image
                          preview={false}
                          src='https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/156818998.jpg?k=f97cc7c7230cf16b4c49413803ffec49501def9c4bbca7e4ba7465c0ecb26d72&o=&hp=1'
                          height={200}
                          width={200}
                        />
                      }
                    />
                  </div>
                  <div className='content-left__info'>
                    <div className='content-item__title'>
                      <h4>Azura Resort</h4>
                      <Rate disabled defaultValue={4} />
                    </div>
                    <div className='content-item__address'>
                      Duong Dong, Phu Quoc
                    </div>
                    <div className='content-item__description'>
                      asfdsfgsdfgfdgdfgergerrrrrrrrrsdfghdfhgfhgfhfghfgjfghniogengirnegkjefdnguiterngk
                    </div>
                  </div>
                </div>
                <div className='content-right'>
                  <div className='content-right__price'>
                    <h4>10,000,000 VND</h4>
                    <p>Đã bao gồm thuế và phí</p>
                  </div>
                  <Link to='/'>
                    <Button type='primary' size='large'>
                      Đặt phòng
                    </Button>
                  </Link>
                </div>
              </div>
              <Pagination
                current={current}
                onChange={onChangePage}
                total={50}
                style={{ marginTop: '20px' }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default AllHotels;
