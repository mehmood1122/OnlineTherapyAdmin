import React from "react";
import Nav from "../../components/Header/Nav";
import Sidebar from "../../components/Header/Sidebar";
import "../../styles/Dashboard/Notification.css";
import circle from "../../assets/circle.png";
import notify1 from '../../assets/notify1.png'
import notify2 from '../../assets/notify2.png'
import notify3 from '../../assets/notify3.png'
import notify4 from '../../assets/notify4.png'

import { Container, Row, Col } from "react-bootstrap";
const Notification = () => {
  return (
    // <div className="notifcation_container container">
    <>
    <div className="dashboard_header">
        <Nav PageTitle={"Notification 🔥"} />
      </div>
      <div className="dashboard_sidebar">
        <Sidebar />
      </div>
    <Container className="notifcation_container">
      <Row>
        <Col md={12}>
          <h2>Today</h2>
          <div style={{ marginTop: "39px" }} className="first_notification">
            <img src={circle} alt="" />
            <span>Monday, June 31 2023</span>
            <div className="notification_desc">
              <span style={{ color: "#303972", fontWeight: "700" }}>
                Total Patient
              </span>
              <span> Total Patient has created new task at</span>{" "}
              <span style={{ color: "#027F3D", fontWeight: "700" }}>
                History Lesson
              </span>
            </div>
          </div>
        </Col>
      {/* </Row> */}
      {/* <Row> */}
        <Col md={12}>
          {/* <h2>Today</h2> */}
          <div style={{ marginTop: "39px" }} className="first_notification">
            <img src={circle} alt="" />
            <span>Monday, June 31 2023</span>
            <div className="notification_desc">
              <span style={{ color: "#027F3D", fontWeight: "700" }}>
                [REMINDER]
              </span>
              <span>
                {" "}
                Due date of{" "}
                <span style={{ color: "#027F3D", fontWeight: "700" }}>
                  Science Homework
                </span>{" "}
                task will be coming
              </span>
            </div>
          </div>
        </Col>
        {/* <Row> */}
          <Col md={12}>
            {/* <h2>Today</h2> */}
            <div style={{ marginTop: "39px" }} className="first_notification">
              <img src={circle} alt="" />
              <span>Monday, June 31 2023</span>
              <div className="notification_desc">
                <span style={{ color: "#303972", fontWeight: "700" }}>
                  Tony Soap
                </span>
                <span>
                  {" "}
                  Commented at{" "}
                  <span style={{ color: "#FF4550", fontWeight: "700" }}>
                    Science Homework
                  </span>{" "}
                  task will be coming
                </span>
              </div>
            </div>
          </Col>
        {/* </Row> */}
        {/* <Row> */}
          <Col md={12}>
          <div style={{ marginTop: "39px" }} className="first_notification">
            <img src={circle} alt="" />
            <span>Monday, June 31 2023</span>
            <div className="notification_desc">
              <span style={{ color: "#303972", fontWeight: "700" }}>
                Samantha Williams
              </span>
              <span>
                {" "}
                add 4 files on {" "}
                <span style={{ color: "#0E8CC1", fontWeight: "700" }}>
                  Art Class
                </span>{" "}
              </span>
            </div>
          </div>
          </Col>
          
        {/* </Row> */}
        <Row style={{marginTop:"25px",marginLeft:"25px"}} >
            <Col md={3}>
              <img  src={notify1} alt="" />
            </Col>
            <Col md={3}>
              <img src={notify2} alt="" />
            </Col>
            <Col md={3}>
              <img src={notify3} alt="" />
            </Col>
            <Col md={3}>
              <img src={notify4} alt="" />
            </Col>
          </Row>
          {/* <Row> */}
          <Col md={12}>
          <div style={{ marginTop: "39px" }} className="first_notification">
            <img src={circle} alt="" />
            <span>Monday, June 31 2023</span>
            <div className="notification_desc">
              <span style={{ color: "#303972", fontWeight: "700" }}>
                You
              </span>
              <span>
                {" "}
                has moved {" "}
                <span style={{ color: "#038CC6", fontWeight: "700" }}>
                  "Biology Homework"
                </span>{" "}
                <span>task to</span><span  style={{ color: "#303972", fontWeight: "700" }}> Done</span>
              </span>
            </div>
          </div>
          </Col>
          
        {/* </Row> */}
        

      </Row>
      <Row>
        <Col md={12} style={{ marginTop: "49px" }}>
          <h2>Yesterday</h2>
          <div style={{ marginTop: "39px" }} className="first_notification">
            <img src={circle} alt="" />
            <span>Sunday, June 30 2023</span>
            <div className="notification_desc">
              <span style={{ color: "#303972", fontWeight: "700" }}>
                Jhonny Ahmad
              </span>
              <span>  mentioned you at </span>{" "}
              <span style={{ color: "#FCC43E", fontWeight: "700" }}>
              Scheduled Appointment
              </span>
            </div>
          </div>
        </Col>
        <Col md={12} >

          <div style={{ marginTop: "39px",border:"none" }} className="first_notification">
            <img src={circle} alt="" />
            <span>Sunday, June 30 2023</span>
            <div className="notification_desc">
              <span style={{ color: "#303972", fontWeight: "700" }}>
              Nadila Adja  
              </span>
              <span>  mentioned you at </span>{" "}
              <span style={{ color: "#4D44B5", fontWeight: "700" }}>
               Program Schedule 
              </span>
            </div>
          </div>
        </Col>
        </Row>
    </Container>
    </>
  );
};

export default Notification;
