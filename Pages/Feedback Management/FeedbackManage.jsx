import { React, useState } from "react";
import Sidebar from "../../components/Header/Sidebar";
import Nav from "../../components/Header/Nav";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/Feedback Management/FeedbackManage.css";
import FeedbackTable from "./FeedbackTable";
import FeedbackLogButton from "./FeedbackLogButton";
import PatientLogs from "../Patient Management/PatientLogs";
import FeedbackDetails from "./FeedbackDetails";
import { useSelector,useDispatch } from "react-redux";
import { feedbackPaginatedApi } from "../../redux/Slice/feedbackPaginatedSlice";
import { useEffect } from "react";
const FeedbackManage = () => {
  const [pageActive, setPageActive] = useState(true);

  const cardStyle = {
    display: "none",
  };
  const PatientLogTitle = {
    marginRight : "30px",
  }
  const PatientLogInput = {
    width:"269px"
  }

  const {data} = useSelector((value)=>value.feedbackPaginated)
  // console.log(data)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(feedbackPaginatedApi())
  },[])
  return (
    <div  className=" patient_manage_cont">

      {pageActive ? (
        <>
          <div className="dashboard_header">
            <Nav PageTitle={"Feedbacks Management 🔥"} />
          </div>
          <div className="dashboard_sidebar">
            <Sidebar />
          </div>
          <Container className="feedback_manage_container">
            <Row >
              <Col>
                <FeedbackLogButton />
              </Col>
            </Row>
            <Row className="patient_manage_title_header">
              <Col>
                <PatientLogs  title={"Feedback Management"} />
              </Col>
            </Row>
            <Row>
              <Col>
                <FeedbackTable
                  detailpage={pageActive}
                  setDetailPage={setPageActive}
                />
              </Col>
            </Row>
            {/* <PatientLogs title={"Feedback Management"}/>
                <FeedbackTable
                  detailpage = {pageActive}
                  setDetailPage = {setPageActive}
                /> */}
          </Container>
        </>
      ) : (
        <>
          <div className="dashboard_header">
            <Nav inCard={cardStyle} PageTitle={"Feedbacks Management 🔥"} />
          </div>
          <div className="dashboard_sidebar">
            <Sidebar />
          </div>
          <Container>
            <Row>
              <Col>
               <FeedbackDetails />
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
};

export default FeedbackManage;
