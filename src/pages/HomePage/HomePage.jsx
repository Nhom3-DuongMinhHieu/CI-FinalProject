import React from 'react';
import Header from '../../components/Header/Header';
import './HomePage.scss';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className='home__page-intro'>
        <div className='grid'>
          <h1>VịtTravel là gì?</h1>
          <p className='intro__sub-title'>
            Đây là nền tảng đặt phòng khách sạn, vé du lịch và cho thuê phòng
            vjppro nhất hiện nay.
          </p>
          <div className='intro-list'>
            <div className='intro-item'>
              <img
                src='https://beebeetravel.vn/assets/images/service/s1.png'
                className='intro-item-icon'
              />
              <div className='intro-item-text'>
                <h3>Chuyên Tour Đảo</h3>
                <p>
                  Trải nghiệm dịch vụ lặn ngắm san hô chuyên nghiệp với giá cực
                  rẻ.
                </p>
              </div>
            </div>

            <div className='intro-item'>
              <img
                src='https://beebeetravel.vn/assets/images/service/s2.png'
                className='intro-item-icon'
              />
              <div className='intro-item-text'>
                <h3>Khách Sạn Giá Rẻ</h3>
                <p>Cung cấp dịch vụ đặt phòng khách sạn tiện lợi, tiết kiệm.</p>
              </div>
            </div>

            <div className='intro-item'>
              <img
                src='https://beebeetravel.vn/assets/images/service/s3.png'
                className='intro-item-icon'
              />
              <div className='intro-item-text'>
                <h3>Xuất Vé Nhanh Chóng 24/7</h3>
                <p>
                  Kiểm tra vé tiện lợi, nhanh chóng, bất cứ đâu và bất kỳ lúc
                  nào.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
