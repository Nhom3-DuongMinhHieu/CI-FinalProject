import React from 'react';
import logoBottom from '../../img/logo/duck-logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.scss';

const Footer = () => {
  return (
    <div id='about' className='about'>
      <div className='grid about-container'>
        <div className='about__text'>
          <div className='about__text-left'>
            <img src={logoBottom} alt='logo' />
            <h1>VịtTravel</h1>
            <p>Best Travel Agency</p>
          </div>
          <div className='about__text-between'>
            <ul>
              <li>Về chúng tôi</li>
              <li>Chính sách quyền riêng tư</li>
              <li>Điều khoản và điều kiện</li>
              <li>Tuyển dụng</li>
              <li>Kênh đại lý</li>
            </ul>
          </div>
          <div className='about__text-right'>
            <h4>công ty tnhh vịttravel</h4>
            <ul>
              <li>Lê Trọng Tấn, Thanh Xuân, Hà Nội</li>
              <li>Đại diện: Dương Minh Hiếu</li>
              <li>Hotline: 0947401772</li>
              <li>Email: mhdhust@duck.com</li>
              <li>
                <img
                  src='https://images.dmca.com/Badges/dmca-badge-w200-5x1-04.png?ID=10b799a7-3176-4bcc-8447-ded53c469786'
                  alt='DMCA protected'
                />
              </li>
            </ul>
          </div>
        </div>
        <div className='about__social'>
          <div className='about__social-item fb'>
            <FacebookIcon style={{ fontSize: '40px', color: 'white' }} />
          </div>
          <div className='about__social-item ig'>
            <InstagramIcon style={{ fontSize: '40px', color: 'white' }} />
          </div>
          <div className='about__social-item yt'>
            <YouTubeIcon style={{ fontSize: '40px', color: 'white' }} />
          </div>
        </div>
        <div className='about__copyright'>
          <p>
            Copyright © 2022 <span>VịtTravel</span>. All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
