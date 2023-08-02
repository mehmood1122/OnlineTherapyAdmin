import React from "react";
import DropDown from "../../assets/dropdown-gray.png";
import Pos from '../../assets/pos-sign.png'
import '../../styles/Feedback Management/FeedbackLogButton.css'
import { Row,Col } from "react-bootstrap";
const FeedbackLogButton = () => {
  return (
    <Row>
      <Col>
        <div className="feedback_log_container">
          <div style={{marginRight:"40px"}} className="feedback_leftside_log">
            <span>
              Filter By Status{" "}
              <img
                style={{ marginLeft: "6px", cursor: "pointer" }}
                src={DropDown}
                alt=""
              />
            </span>
           
          </div>
          <div className="feedback_log_button">
                <button><img src={Pos} alt="" /></button>
            </div>
          {/* <div className="rightside_log">
            <div className="rightside_log_buttons">
              <button
                // onClick={appointClickHandler}
                className="appointmentlog_btn"
              >
                <img style={{ marginRight: "5px" }} src={Cube} alt="" />{" "}
                Appointment Log
              </button>
              <button onClick={videoPageClickHandler} className="videolog_btn">
                <img style={{ marginRight: "5px" }} src={Setting} alt="" />
                Video Session Log
              </button>
            </div>
          </div> */}
        </div>
      </Col>
    </Row>
  );
};

export default FeedbackLogButton;
