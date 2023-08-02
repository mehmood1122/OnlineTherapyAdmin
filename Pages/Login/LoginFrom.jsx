import React from "react";
import { Link } from "react-router-dom";
// Images
import Fb from "../../assets/Facebook.png";
import Google from "../../assets/Google.png";
import { useRef } from "react";
import { loginApi } from "../../redux/Slice/loginSlice";
import { useDispatch,useSelector } from 'react-redux';
const LoginFrom = ({ isactive, setIsactive }) => {
  const dispatch = useDispatch()
  const email = useRef(null)
  const password = useRef(null)
  const fcmToken = useRef(null)
  // Form Function
  function submitHandler(e) {
    e.preventDefault();
  }

 // Login Button Function 
  const loginHandler = function(){
    const fcmToken = "123"
    dispatch(loginApi({email:email.current.value,password:password.current.value,fcmToken}))
  }
  const {message} = useSelector((value)=>value.login)
  console.log({message})
  
  return (
    <div className="sec_right">
      <div className="Login_header">Log in to your account</div>
      {message}
      {/* Form */}
      <form onSubmit={submitHandler} className="login_form" action="" method="">
        <div className="login_form_user">
          <label>Email</label>
          <input ref={email} placeholder="Enter Your Email" type="email" />
        </div>
        <div className="login_form_pass">
          <label>Password</label>
          <input ref={password} placeholder="Enter Your Password" type="password" />
        </div>
        {/* <div className="login_form_pass">
          <label>Fmc Token</label>
          <input ref={fcmToken} placeholder="Enter Fmc Token" type="password" />
        </div> */}
        {/* Forgot Section */}
        <div className="form_recovery_section">
          <div className="login_form_checkbox">
            <input type="checkbox" name=" " id="" />
            <span>Remember Me</span>
          </div>
          <div className="login_form_forgot">
            <Link
            to={'/recovery'}
              // onClick={clickHandlerStates}
              style={{
                fontWeight: "500",
                fontSize: "15px",
                cursor: "pointer",
                color: "#5E72E4",
              }}
            >
              Forgot password ?
            </Link>
          </div>
        </div>
        <div>
          {/* <Link ><button onClick={()=> dispatch({type: login, payload: {name : '', isUserLoggedin: true}})} className="Login_Btn">LOGIN</button></Link> */}
          <Link ><button onClick={loginHandler} className="Login_Btn">LOGIN</button></Link>

        </div>
      </form>
      {/* <div className="sec_right_bottom text-center">
        <p style={{ color: "#98A9BC" }}>OR</p>
      </div> */}
      
      {/* Social Media */}

      {/* <div className="social_logins">
        <div className="login_google">
          <img src={Google} alt="" />
          <a
            target={"_blank"}
            href="https://accounts.google.com/v3/signin/identifier?dsh=S-1257938982%3A1677191480397942&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHeqmI9UlBJ4MMu61Wrw-DNYHjUZu8BXz8UVFc-xM5pqr73d8TLd5E-9IKn0f45bXDojrm4vjg"
          >
            Log in with Google
          </a>
        </div>
        <div className="login_fb">
          <img src={Fb} alt="" />
          <a target={"_blank"} href="http://facebook.com">
            Log in with Facebook
          </a>
        </div>
      </div>
      <div
        className="Login_Register"
        style={{ textAlign: "center", marginTop: "9px" }}
      >
        <span className="login_free">Create a free account</span>
        <span className="login_new">New to OTP?</span>
      </div> */}
    </div>
  );
};

export default LoginFrom;
