import React, { useEffect } from 'react'
import '../styles/Auth/OTP.css'
// import {bgframe} from "../../assets/bg-login-frame.png";
import bgFrame from '../assets/bg-login-frame.png'
import { Container,Row,Col } from 'react-bootstrap'
import  { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useLocation,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { forgotOtpVerifyApi } from '../redux/Slice/forgotOtpVerify';
import { forgotOtpVerifyClear } from '../redux/Slice/forgotOtpVerify';
const OTP = () => {
    const [otp, setOtp] = useState('');

    const location = useLocation()
    const {email} = location.state

  const navigate = useNavigate()
    const dispatch = useDispatch()
    const otpVerifyHandler = () =>{
      dispatch(forgotOtpVerifyApi({
        email,
        otp:otp
      }))
      dispatch(forgotOtpVerifyClear())
    }

    const {isLoading,status} = useSelector(value=>value.forgotOtpVerify)

    useEffect(()=>{
      if(isLoading == false && status == 200){
        navigate("/changepass",{state:{email:email,otp:otp}})
      }
    },[isLoading,status])
  return (
   
    
     <section className="LoginContainer">
      <Container className="container">
        <Row className="login_Container_Wrapper">
          <Col md="6" sm="12">
            <div className="sec_left">
              <img src={bgFrame} />
            </div>
          </Col>
          <Col md="6" sm="12">
          <div className="otp-container">
      <div className="Login_header">OTP</div>
      <div className='otp-wrapper'>
      <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      inputType='text' 
      renderSeparator={<span></span>}
      renderInput={(props) => <input {...props} />}
      className="otp-input"
      inputStyle={"none"}

    />
      </div>
      <button onClick={otpVerifyHandler} className='otp-verify-btn'>Verify OTP</button>
      </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OTP
