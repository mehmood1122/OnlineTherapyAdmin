import React ,{useRef} from "react";
import Nav from "../../components/Header/Nav";
import Sidebar from "../../components/Header/Sidebar";
import "../../styles/Create Therapist/CreateTherapist.css";
import { Container, Row, Col } from "react-bootstrap";
import { createtherapistApi } from "../../redux/Slice/createtherapistSlice";
import { createtherapistClear } from "../../redux/Slice/createtherapistSlice";
import { patientPaginatedApi } from "../../redux/Slice/patientPaginatedSlice";
import { useDispatch,useSelector } from "react-redux";
import { useEffect,useState } from "react";
// import  from "../../redux/Slice/patientPaginatedSlice";
const CreateTherapist = () => {
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const confirmPassword = useRef(null)
    const expertise = useRef(null)
    const experience = useRef(null)
  const dispatch = useDispatch()
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const createTherapistHandler = ()=>{
    dispatch(createtherapistApi({
      name :name.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
      expertise: expertise.current.value,
      experience : experience.current.value
    }))
    dispatch(createtherapistClear())
    // dispatch(patientPaginatedApi())

  }

  const {message,isLoading,status} = useSelector(value=>value.createtherapistSlice)


useEffect(() => {
  if (isLoading === false ) {
    setShowMessage(true);
    setMessageText(message);

    const timer = setTimeout(() => {
      setShowMessage(false);
      setMessageText("");
      dispatch(createtherapistClear());
      email.current.value= null
      name.current.value=null
      password.current.value=null
      confirmPassword.current.value=null
      expertise.current.value=null
      experience.current.value=null

    }, 2000);

    return () => clearTimeout(timer);
  }
}, [isLoading, status, message, dispatch]);
  return (
    <div>
      <div className="dashboard_header">
        <Nav PageTitle={"Patient Management 🔥"} />
      </div>
      <div className="dashboard_sidebar">
        <Sidebar />
      </div>
      <Container>
        <Row>
          <Col>
            <div className="create_therapist_container">
              <div className="create_therapist_title">Create Therapist</div>

          {
            showMessage && (
              <div class="alert alert-2-success">
              <h3 class="alert-title">{message}</h3>
              {/* <p class="alert-content">Lorem ipsum</p> */}
            </div>
            )
          }

              <form onSubmit={(e)=>e.preventDefault()} action="" className="create_therapist_form">
                <div className="create_therapist_user_field">
                  <label style={{fontSize:"15px",fontWeight:"500"}} htmlFor="">Name:</label>
                  <input ref={name} placeholder="Enter Your Name" type="text" />
                </div>
                <div className="create_therapist_email_field">
                  <label style={{fontSize:"15px",fontWeight:"500"}} htmlFor="">Email:</label>
                  <input ref={email} placeholder="Enter Your Email" type="text" />
                </div>
                <div className="create_therapist_password_field">
                  <label style={{fontSize:"15px",fontWeight:"500"}} htmlFor="">Password:</label>
                  <input ref={password} placeholder="Enter Your Password" type="text" />
                </div>
                <div className="create_therapist_Repassword_field">
                  <label style={{fontSize:"15px",fontWeight:"500"}} htmlFor="">Confirm Password:</label>
                  <input ref={confirmPassword} placeholder="Retype Password" type="text" />
                </div>
                <div className="create_therapist_expertise_field">
                  <label style={{fontSize:"15px",fontWeight:"500"}} htmlFor="">Expertise:</label>
                  <input ref={expertise} placeholder="Expertise" type="text" />
                </div>
                <div className="create_therapist_experience_field">
                  <label style={{fontSize:"15px",fontWeight:"500"}} htmlFor="">Experience:</label>
                  <input ref={experience} placeholder="Experience in Years" type="text" />
                </div>

                <div style={{marginTop:"32px"}}>
                    <button onClick={createTherapistHandler} className="create_therapist_btn">Create Therapist</button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateTherapist;
