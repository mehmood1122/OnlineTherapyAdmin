import { React, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import bgframe from "../../assets/bg-login-frame.png";
import Container from "react-bootstrap/Container";
import LoginFrom from "./LoginFrom";


// Css
import "../../styles/Login/Login.css";
import RecoveryLogin from "./RecoveryLogin";
import NewPassword from "./NewPassword";
// import NewPassword from './NewPassword'

const Login = () => {
  // const [newpassActive,setnewpassActive] = useState(false)

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
            <LoginFrom />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
