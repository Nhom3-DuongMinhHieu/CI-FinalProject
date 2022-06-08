import { Button, message, Steps } from 'antd';
import React, { useState } from 'react';
import BasicInfo from '../../components/Hotel/BasicInfo/BasicInfo';
import Convenient from '../../components/Hotel/Convenient/Convenient';
import Price from '../../components/Hotel/Price/Price';
import './CreateHotel.scss';
const { Step } = Steps;
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

const CreateHotel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
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
        <div className='steps-content'>{steps[current].content}</div>
        <div className='steps-action'>
          {current < steps.length - 1 && (
            <Button type='primary' onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type='primary'
              onClick={() => message.success('Processing complete!')}
            >
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
