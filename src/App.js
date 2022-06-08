import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fetchAllTours } from './api';
import './App.css';
import Footer from './components/Footer/Footer';
import Admin from './pages/Admin/Admin';
import AllHotels from './pages/AllHotels/AllHotels';
import BookingHotel from './pages/BookingHotel/BookingHotel';
import BookingTicket from './pages/BookingTicket/BookingTicket';
import CreateHotel from './pages/CreateHotel/CreateHotel';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Profile from './pages/Profile/Profile';
import SignUp from './pages/SignUp/SignUp';

const App = () => {
  useEffect(() => {
    fetchAllTours().then((tours) => console.log(tours));
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/all-hotels' element={<AllHotels />} />
        <Route path='/create-hotel' element={<CreateHotel />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/booking-hotel' element={<BookingHotel />} />
        <Route path='/booking-ticket' element={<BookingTicket />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
