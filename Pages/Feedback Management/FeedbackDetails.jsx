import React from "react";
import Patient from "../../assets/patientpic.png";
import Cam from "../../assets/camera.png";
import Aero from '../../assets/aeroplane-white.png'
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/Feedback Management/FeedbackDetails.css";
import { feedbackPaginatedApi } from "../../redux/Slice/feedbackPaginatedSlice";
import Sidebar from "../../components/Header/Sidebar";
import Nav from "../../components/Header/Nav";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const FeedbackDetails = ({index}) => {
  
 const location = useLocation()
 const [data] = location.state
 console.log(data)
  return (
<>
    {/* {data && data.map((item,index)=>{ */}
    <div  className=" patient_manage_cont">


  
    <div className="dashboard_header">
      <Nav PageTitle={"Feedbacks Management 🔥"} />
    </div>
    <div className="dashboard_sidebar">
      <Sidebar />
    </div>

       <div>
       <Container >
         <div data-aos="fade-up"  className="feedback_details_card">
         <Row>
           <Col className="feedback_card_header_left_side">
             <span>Feedbacks Details</span>
           </Col>
         </Row>
         <Row className="feedback_detail">
           <Col xl={7} lg={7} md={7} sm={7} xs={12} className="feedback_detail_left_side">
             <div className="feedback_bio_left">
               <div className="feedback_patient_pic">
                 <img src={Patient} alt="" />
                 <div className="feedback_patient_camera_pic">
                   <img style={{ width: "13px" }} src={Cam} alt="" />
                 </div>
               </div>
               <div className="feedback_patient_bio_right">
                 <div className="feedback_name pat_name">
                   Name:{" "}
                   <span
                     style={{
                       marginLeft: "28px",
                       textAlign: "left",
                       color: "#000000",
                       fontWeight: "600",
                     }}
                   >
                     {/* {data ? data[0].name:""} */}
                     {/* {data && data[index].name} */}

                    {data.name}
                    {data.id}
                    {console.log(data.name)}
                    {/* {console.log(data ? data[index].name:"")} */}
                   </span>
                 </div>
                 <div className="feed_detail_email pat_email feedback_email">
                   Email:{" "}
                   <span
                     style={{
                       marginLeft: "30px",
                       textAlign: "left",
                       color: "#000000",
                       fontWeight: "600",
                     }}
                   >
                      {/* {data ? data[0].email:""} */}
                      {data.email}
                   </span>
                 </div>
                 <div className="feedback_phone pat_phone">
                   Phone:{" "}
                   <span
                     style={{
                       marginLeft: "28px",
                       textAlign: "left",
                       color: "#000000",
                       fontWeight: "600",
                     }}
                   >
                     121212
                   </span>
                 </div>
                 <div className="feedback_phone pat_height">
                   Height:{" "}
                   <span
                     style={{
                       marginLeft: "28px",
                       textAlign: "left",
                       color: "#000000",
                       fontWeight: "600",
                     }}
                   >
                     10 Fit
                   </span>
                 </div>
               </div>
             </div>
           </Col>
           <Col xl={3} lg={4} sm={4} md={4} className="feedback_detail_right_side">
             <div className="pat_weight">
               Weight:{" "}
               <span
                 style={{
                   marginLeft: "28px",
                   textAlign: "left",
                   color: "#000000",
                   fontWeight: "600",
                 }}
               >
                 70KG
               </span>
             </div>
             <div className="pat_city">
               City:{" "}
               <span
                 style={{
                   marginLeft: "52px",
                   textAlign: "left",
                   color: "#000000",
                   fontWeight: "600",
                 }}
               >
                 New York
               </span>
             </div>
             <div className="pat_state">
               State:{" "}
               <span
                 style={{
                   marginLeft: "43px",
                   textAlign: "left",
                   color: "#000000",
                   fontWeight: "600",
                 }}
               >
                 BAC
               </span>
             </div>
             <div className="pat_country">
               Country:{" "}
               <span
                 style={{
                   marginLeft: "23px",
                   textAlign: "left",
                   color: "#000000",
                   fontWeight: "600",
                 }}
               >
                 USA
               </span>
             </div>
           </Col>
         </Row>
         <Row className="feedback_details_message">
           <Col>
             <div className="feedback_details_heading">Message:</div>
             <div className="feedback_details_msg">

             </div>
             <div style={{marginTop:"20px"}} className="feedback_details_msg">
                 {data.message}
               </div>
             <div className="feedback_reply_button">
                 <button><img style={{marginRight:"5px"}} src={Aero} alt="" />Reply</button>
             </div>
           </Col>
         </Row>
         </div>
       </Container> 
     </div>
       {/* })}   */}
       
       </div>
</>
  );
};

export default FeedbackDetails;
