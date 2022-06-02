import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo/logo-black.png';
import LoginBtn from '../LoginBtn/LoginBtn';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='grid navbar-container'>
        <Link to='/' className='navbar__logo'>
          <img className='navbar__logo-icon' src={logo} alt='logo' />
          <span className='navbar__logo-text'>VịtTravel</span>
        </Link>

        <div className='navbar__between'>
          <div className='navbar__between-list'>
            <Link to='/' className='navbar__between-item'>
              Trang chủ
            </Link>

            <Link to='#tours' className='navbar__between-item'>
              Đặt tour
            </Link>

            <Link to='#hotels' className='navbar__between-item'>
              Khách sạn
            </Link>
          </div>
        </div>

        <div className='navbar__right'>
          <Link to='#' className='navbar__right-host'>
            Cho thuê phòng
          </Link>
          <LoginBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
