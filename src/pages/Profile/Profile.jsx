import { Col, Row } from 'antd';
import React from 'react';
import './Profile.scss';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='grid'>
        <h2>Thông tin cá nhân</h2>
        <h3>
          Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng
          ra sao.
        </h3>

        <Row className='profile-item'>
          <Col span={7}>Tên</Col>
          <Col span={10}>Minh Hieu Duong</Col>
          <Col span={7} className='edit-profile'>
            Chỉnh sửa
          </Col>
        </Row>
        <Row className='profile-item'>
          <Col span={7}>Đia chỉ email</Col>
          <Col span={10}>dfgdfhgfg@gmail.com</Col>
          <Col span={7} className='edit-profile'>
            Chỉnh sửa
          </Col>
        </Row>
        <Row className='profile-item'>
          <Col span={7}>Số điện thoại</Col>
          <Col span={10}>0947401777</Col>
          <Col span={7} className='edit-profile'>
            Chỉnh sửa
          </Col>
        </Row>
        <Row className='profile-item'>
          <Col span={7}>Ngày sinh</Col>
          <Col span={10}>29-01-1999</Col>
          <Col span={7} className='edit-profile'>
            Chỉnh sửa
          </Col>
        </Row>
        <Row className='profile-item'>
          <Col span={7}>Quốc tịch</Col>
          <Col span={10}>Việt Nam</Col>
          <Col span={7} className='edit-profile'>
            Chỉnh sửa
          </Col>
        </Row>
        <Row className='profile-item'>
          <Col span={7}>Giới tính</Col>
          <Col span={10}>Nam</Col>
          <Col span={7} className='edit-profile'>
            Chỉnh sửa
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
