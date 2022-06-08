import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import logo from '../../img/logo/logo-black.png';
import LoginBtn from '../LoginBtn/LoginBtn';
import './Navbar.scss';

const Navbar = () => {
  useEffect(() => {
    let navbar = document.querySelector('.navbar');
    window.onscroll = function () {
      document.body.scrollTop >= 2 || document.documentElement.scrollTop >= 2
        ? navbar.classList.add('nav-colored')
        : navbar.classList.remove('nav-colored');
    };
  }, []);

  return (
    <div className='navbar'>
      <div className='grid navbar-container'>
        <LinkScroll
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          className='navbar__logo'
        >
          <img className='navbar__logo-icon' src={logo} alt='logo' />
          <span className='navbar__logo-text'>VịtTravel</span>
        </LinkScroll>

        <div className='navbar__between'>
          <div className='navbar__between-list'>
            <LinkScroll
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              className='navbar__between-item'
            >
              Trang chủ
            </LinkScroll>

            <LinkScroll
              to='tours'
              spy={true}
              smooth={true}
              className='navbar__between-item'
            >
              Đặt tour
            </LinkScroll>

            <LinkScroll
              to='hotels'
              spy={true}
              smooth={true}
              className='navbar__between-item'
            >
              Khách sạn
            </LinkScroll>

            <LinkScroll
              to='about'
              spy={true}
              smooth={true}
              className='navbar__between-item'
            >
              Về chúng tôi
            </LinkScroll>
          </div>
        </div>

        <div className='navbar__right'>
          <Link to='/create-hotel' className='navbar__right-host'>
            Cho thuê phòng
          </Link>
          <LoginBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
