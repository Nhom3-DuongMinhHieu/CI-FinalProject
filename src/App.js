import React, { useContext } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import LoginBtn from './components/LoginBtn/LoginBtn';
import { AuthContext } from './contexts/AuthContext';
import Admin from './pages/Admin/Admin';
import AllHotels from './pages/AllHotels/AllHotels';
import CreateHotel from './pages/CreateHotel/CreateHotel';
import HomePage from './pages/HomePage/HomePage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Profile from './pages/Profile/Profile';

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
        <Route element={<RequireAuth />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/all-hotels' element={<AllHotels />} />
          <Route path='/create-hotel' element={<CreateHotel />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin' element={<Admin />} />
        </Route>
        <Route path='/login' element={<LoginBtn />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
