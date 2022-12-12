import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, createBrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import DeviceCard from './device-card/DeviceCard';
import DeviceCardList from './device-card-list/DeviceCardList'
import LandingPage from './landing-page/landingPage';
import DeviceDetails from './device-details/DeviceDetails'; 
import DevicesByBrand from './devices-by-brand-and-type/DevicesByBrandAndType';
import DevicesByBrandAndType from './devices-by-brand-and-type/DevicesByBrandAndType';
import SlickSlider from './slider/Slider';

function App() {
  
  return (
    <div>
      <Header />
      <div>
        
        {/* <button onClick={landingPage}>Device</button> */}

        <Routes>
          <Route path='/' element={<DeviceCardList />} />
          <Route path='/landing-page' element={<LandingPage />} />
          {/* <Route path='/device-details' element={<DeviceDetails />} /> */}
          <Route path="/device-details/:id" element={<DeviceDetails />}/>
          <Route path="/devices/:typeId/:brandId" element={<DeviceCardList />} />
        </Routes>
      </div>
      {/* 
      <DeviceCardList/>
       */}
      <Footer />
    </div>
  );
}


export default App;
