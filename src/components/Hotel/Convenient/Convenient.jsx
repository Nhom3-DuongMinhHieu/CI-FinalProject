import { Checkbox, Col, Row } from 'antd';
import React from 'react';

const plainOptions = [
  { label: 'Wi-Fi miễn phí', value: '1' },
  { label: 'Xe đưa đón sân bay', value: '2' },
  { label: 'Nhà hàng', value: '3' },
  { label: 'Phòng gia đình', value: '4' },
  { label: 'Dịch vụ phòng', value: '5' },
  { label: 'Trung tâm Spa & chăm sóc sức khoẻ', value: '6' },
  { label: 'Quầy bar', value: '7' },
  { label: 'Bồn tắm nóng/bể sục (jacuzzi)', value: '8' },
  { label: 'Lễ tân 24 giờ', value: '9' },
  { label: 'Phòng xông hơi', value: '10' },
  { label: 'Điều hòa nhiệt độ', value: '11' },
  { label: 'Trung tâm thể dục', value: '12' },
  { label: 'Công viên nước', value: '13' },
  { label: 'Hồ bơi', value: '14' },
  { label: 'Bãi biển', value: '15' },
  { label: 'Sân vườn', value: '16' },
  { label: 'Phòng không hút thuốc', value: '17' },
];

const Convenient = ({ convenients, setConvenients }) => {
  const onChange = (checkedValues) => {
    setConvenients(checkedValues);
  };

  return (
    <div>
      <Row>
        <Col span={18} className='info-left'>
          <div className='basic__info-item'>
            <h3>Tiện nghi</h3>
            <Checkbox.Group
              className='bacsic__info-item-checkbox'
              options={plainOptions}
              defaultValue={convenients}
              onChange={onChange}
            />
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

export default Convenient;
