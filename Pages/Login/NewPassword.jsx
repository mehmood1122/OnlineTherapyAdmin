import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../../styles/Login/NewPassword.css";
import { Col, Row } from "react-bootstrap";
import Gsign from "../../assets/GreaterSign.png";
import Eye from "../../assets/Eye.png";
import bgframe from "../../assets/bg-login-frame.png";
import ModalSuccess from "./ModalSuccess";
import { useDispatch, useSelector } from 'react-redux';
import { changePasswordApi } from '../../redux/Slice/changePassword';
import { useRef } from 'react';
import { useLocation,useNavigate} from 'react-router-dom';
const NewPassword = () => {
  const password = useRef(null)
  const confirmPassword = useRef(null)
  const dispatch = useDispatch()
  const location = useLocation()
  const {email,otp} = location.state
  const {isLoading,status,message} = useSelector(value=>value.changePassword)
  const navigate = useNavigate()
  const [ismodalActive,setIsModalActive] = useState(false)
console.log(email,otp)

  const LoginWrapper = {
    width: "532px",
    height: "598px",
  };
  // Form function

  const clickHandler = (e) => {
    e.preventDefault();
  };

  const changePasswordClickHandler = ()=>{
    dispatch(changePasswordApi({
      email,
      otp,
      password:password.current.value,
      confirmPassword:confirmPassword.current.value


    }))
  }

  useEffect(()=>{
    if(isLoading == false && status == 200 ){
      setIsModalActive(true)

      setTimeout(()=>{
        navigate("/")
      },3000)

    }
  },[isLoading,status])
  return (
    <section className="LoginContainer">
      <Container className="container">
        <Row className="login_Container_Wrapper">
          <Col md="6" sm="12">
            <div className="sec_left">
              <img src={bgframe} />
            </div>
          </Col>
          <Col md="6" sm="12">
            <div style={LoginWrapper} className="sec_right">
              <div className="Gsign_img">
                <img style={{ cursor: "pointer" }} src={Gsign} alt="" />
              </div>
              <div className="Recovery_Heading">Password Recovery</div>
              
              <form onClick={clickHandler} className="login_form" action="">
                <div className="login_form_email_recovery">
                  <label>
                    New Password<span style={{ color: "#DF0404" }}>*</span>
                  </label>
                  <div className="new_password_login newpassword_page_input">
                    <input ref={password} placeholder="Enter New Password" type="password" />
                    <img style={{cursor:"pointer"}} src={Eye} alt="" />
                  </div>
                </div>
                <div className="login_form_email_recovery">
                  <label>
                    New Password<span style={{ color: "#DF0404" }}>*</span>
                  </label>
                  <div className="new_password_login newpassword_page_input">
                    <input ref={confirmPassword} placeholder="Enter New Password" type="password" />
                    <img style={{cursor:"pointer"}} src={Eye} alt="" />
                  </div>
                </div>

                <div>
                  <button onClick={changePasswordClickHandler} style={{ marginTop: "2rem" }} className="Login_Btn">
                    UPDATE
                  </button>
                </div>
              </form>
              {ismodalActive && <ModalSuccess closeModal={ismodalActive} setCloseModal = {setIsModalActive}/>}
              <Link to='/'><div
                style={{
                  color: "#5E72E4",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                Back to login
              </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewPassword;
