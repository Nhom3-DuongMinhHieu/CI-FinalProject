import { Button, message, Steps } from 'antd';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicInfo from '../../components/Hotel/BasicInfo/BasicInfo';
import Convenient from '../../components/Hotel/Convenient/Convenient';
import Price from '../../components/Hotel/Price/Price';
import { HotelContext } from '../../contexts/HotelContext';
import './CreateHotel.scss';
const { Step } = Steps;

const CreateHotel = () => {
  const [current, setCurrent] = useState(0);
  const [hotelInfo, setHotelInfo] = useState({
    name: '',
    host: '',
    phone: '',
    description: '',
    star: '',
    city: 'Thành phố Phú Quốc',
    street: '',
    homeNumber: '',
  });
  const [price, setPrice] = useState([]);
  const [convenients, setConvenients] = useState([]);

  const { createHotel } = useContext(HotelContext);
  const navigate = useNavigate();

  const steps = [
    {
      title: 'Thông tin cơ bản',
      content: <BasicInfo />,
    },
    {
      title: 'Bố cục và giá',
      content: <Price />,
    },
    {
      title: 'Tiện nghi',
      content: <Convenient />,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleAddHotel = async () => {
    message.success('Tạo khách sạn thành công');
    await createHotel({
      hotelInfo,
      price,
      convenients,
    });
    navigate('/');
  };

  return (
    <div className='create__hotel-wrapper'>
      <div className='grid'>
        <div className='create-hotel__step'>
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </div>
        <div className='steps-content'>
          {current === 0 ? (
            <BasicInfo hotelInfo={hotelInfo} setHotelInfo={setHotelInfo} />
          ) : (
            ''
          )}
          {current === 1 ? <Price price={price} setPrice={setPrice} /> : ''}
          {current === 2 ? (
            <Convenient
              convenients={convenients}
              setConvenients={setConvenients}
            />
          ) : (
            ''
          )}
        </div>
        <div className='steps-action'>
          {current < steps.length - 1 && (
            <Button type='primary' onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type='primary' onClick={handleAddHotel}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: '0 8px',
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateHotel;
