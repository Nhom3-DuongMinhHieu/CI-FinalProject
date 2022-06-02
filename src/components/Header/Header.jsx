import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.scss';
import SearchInput from '../SearchInput/SearchInput';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__wave-top'></div>
      <div className='header__wave-bottom'></div>
      <Navbar />
      <SearchInput />
    </div>
  );
};

export default Header;
