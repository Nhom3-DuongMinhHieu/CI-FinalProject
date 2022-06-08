import React, { useContext } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import { AuthContext } from './contexts/AuthContext';
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

const RequireAuth = () => {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);

  if (!isAuthenticated) return <Navigate to='/login' />;
  return <Outlet />;
};

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/all-hotels' element={<AllHotels />} />
        <Route element={<RequireAuth />}>
          <Route path='/create-hotel' element={<CreateHotel />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/booking-hotel' element={<BookingHotel />} />
          <Route path='/booking-ticket' element={<BookingTicket />} />
          <Route path='/admin' element={<Admin />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
