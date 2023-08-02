import React from 'react'
import { Container,Row,Col,Table } from 'react-bootstrap';
import ThreeDots from '../../assets/ThreeDots.png'
import Search from "../../assets/newSearch.png";

import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { feedbackPaginatedApi } from '../../redux/Slice/feedbackPaginatedSlice';
import PaginationFeedback from '../../components/Pagination/PaginationFeedback';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const FeedbackTable = ({detailpage,setDetailPage}) => {
    // const [opneaction, setOpenAction]   = useState(false);
    // const [opneaction1, setOpenAction1] = useState(false);
    // const [opneaction2, setOpenAction2] = useState(false);
    // const [opneaction3, setOpenAction3] = useState(false);
    // const [opneaction4, setOpenAction4] = useState(false);
    // const [opneaction5, setOpenAction5] = useState(false);
    // const [opneaction6, setOpenAction6] = useState(false);
    // const [opneaction7, setOpenAction7] = useState(false);
    // const actionHandler = () => {
    //     setOpenAction(!opneaction);
    
    //     // setOpenAction1(!opneaction1)
    //   };
    //   const actionHandler1 = () => {
    //     setOpenAction1(!opneaction1);
    //     setOpenAction(false);
    //   };
    //   const actionHandler2 = () => {
    //     setOpenAction2(!opneaction2);
    //     // setOpenAction1(!opneaction1)
    //     setOpenAction1(false);
    //   };
    //   const actionHandler3 = () => {
    //     setOpenAction3(!opneaction3);
    //     // setOpenAction1(!opneaction1)
    //     setOpenAction2(false);
    //   };
    //   const actionHandler4 = () => {
    //     setOpenAction4(!opneaction4);
    //     // setOpenAction1(!opneaction1)
    //     setOpenAction3(false);
    //   };
    //   const actionHandler5 = () => {
    //     setOpenAction5(!opneaction5);
    //     // setOpenAction1(!opneaction1)
    //     setOpenAction4(false);
    //   };
    //   const actionHandler6 = () => {
    //     setOpenAction6(!opneaction6);
    //     // setOpenAction1(!opneaction1)
    //     setOpenAction5(false);
    //   };
    //   const actionHandler7 = () => {
      //     setOpenAction7(!opneaction7);
      //     setOpenAction6(false);
      //   };
      
      //   // function viewClickHandler() {
        //     //   setDetailPage(!detailpage);
        //     // }
        const {data} = useSelector(value=>value.feedbackPaginated)
    const [openActions, setOpenActions] = useState(Array(data && data.length).fill(false));
  const toggleAction = (index) => {
    const updatedActions = [...openActions];
    updatedActions[index] = !updatedActions[index];
    setOpenActions(updatedActions);
  };
  const getModalStyles = (index) =>{
    const modalStyles = [
      // { backgroundColor: "red", color: "white" },
      // { backgroundColor: "blue", color: "white" },
      // { backgroundColor: "green", color: "white" },
      // {top:"115px",right:"26px "},
      {position:"absolute",top:"115px",right:"75px"},
      {position:"absolute",top:"193px",right:"75px"},
      {position:"absolute",top:"270px",right:"75px"},

    ];
    return modalStyles[index] || {}
  }
        
  const [currentPagenew, setCurrentPagenew] = useState(1);
   const totalPagesnew = 0;
    const handlePageChange = (pageNumber) => {
      setCurrentPagenew(pageNumber);  
       };

      const dispatch = useDispatch()
      useEffect(()=>{
        dispatch(feedbackPaginatedApi(currentPagenew))
      },[currentPagenew])

      const navigate = useNavigate()

      const viewClickHandler = (index) =>{
        navigate("/feedbackdetails",{state:[data[index]]})
      }
      const viewClickHandler1 = (index) =>{
        navigate("/feedbackdetails",{state:[data[index]]})
      }
      const viewClickHandler2 = (index)=>{
        navigate("/feedbackdetails",{state:[data[index]]})
      }
    
      const [search,setSearch] = useState('')
      console.log(search)


  return (
    <div>
         <Container>
        <Row className="patient_manage_title_header">
          <Col>
          <div className="patient_logs_bar patient_manage_title_header feedback_log session_log_bar">
        <div className="log_bar_heading">Feedback Management</div>
        <div className="patient_log_input">
          <img src={Search} alt="" />
          <input onChange={(e)=>setSearch(e.target.value)} placeholder="Search" type={"text"} />
        </div>
        </div>
            <div style={{ padding: "45px 0px" }}>
              <Table className='table_feedback ' style={{ position: "relative" }} responsive="sm">
                <thead className="Table_headings feedback_table_heading">
                  <th>S.No.</th>
                 
                  <th> Name</th>
                  <th>Date</th>
                  <th>View</th>
                 
                </thead>

                <tbody className="table_body feedback_table_body">
                 
                {data && data.filter((feedback)=>{
                  return search.toLowerCase() === '' ? feedback : feedback.name.toLowerCase().includes(search)
                }) .map((feedback,index)=>{
                  return(
                    <tr key={feedback.id}>
                      <td>{feedback.id}</td>
                      <td>{feedback.name}</td>
                      <td>{feedback.createdAt.slice(0,10)}</td>
                      <td>
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleAction(index)}
                      src={ThreeDots}
                    />
                  </td>
                  {openActions[index] && (
                // <td colSpan={6}>
                  <div
                    style={{
                      // right: "-12px",
                      ...getModalStyles(index)
                    }}
                    className="action_dropdown_toggle patient_action_toggle"
                  >
                    <ul className="actions_toogle_list_container">
                     
                      <li onClick={() => viewClickHandler(index)} className="actions_toogle_list">
                        View
                      </li>
                    </ul>
                  </div>
                // </td>
              )}
                    </tr>
                  )
                })}
                 {
                  data && data.length === 0 ? <h4 className="pagination-error" style={{color:"red",justifyContent:"center",display:"flex"}}>NO RECORD FOUND</h4> :""
                }
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <PaginationFeedback
          currentPagenew={currentPagenew}
          totalPagesnew={totalPagesnew}
          onPageChange={handlePageChange}
        />
      </Container>
    </div>
  )
}

export default FeedbackTable