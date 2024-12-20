import React from 'react';
import {Routes,Route } from 'react-router-dom';
import '../App.css';
import '../Components/Login'
import Login from '../Components/Login';
import Otp from '../Components/OTP';
import { withRouter } from '../Utils/withRouter';
import Updatepassword from '../Components/Updatepassword';
function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/reset-password" element={<Updatepassword />}></Route>   
      <Route path="/Otp" element={<Otp />}></Route>   

    </Routes>
  );
}

export default withRouter(MainRoutes);
