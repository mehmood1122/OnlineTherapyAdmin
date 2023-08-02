// import { useEffect } from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router ,Routes,Route, useNavigate } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Error from './Pages/Error/Error.jsx'
import RecoveryLogin from './Pages/Login/RecoveryLogin';
import Verification from './Pages/Login/Verification';
import NewPassword from './Pages/Login/NewPassword';
import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import PatientManage from './Pages/Patient Management/PatientManage.jsx'
import Notification from './Pages/Dashboard/Notification';
import TherapistManage from './Pages/Therapist Management/TherapistManage';
// import SessionLog from './Pages/Session Logs/SessionLog';
import FeedbackManage from './Pages/Feedback Management/FeedbackManage';
import Profile from './Pages/Profile/Profile';
import ProfileEdit from './Pages/Profile/ProfileEdit';
import ChangePassword from './Pages/Profile/ChangePassword';
import OnlineAppointment from './Pages/Online Appointment/OnlineAppointment';
import ModalsPatient from './Pages/Patient Management/ActiveModalsPatient';
import CreateTherapist from './Pages/Create Therapist/CreateTherapist';
import { useDispatch, useSelector } from 'react-redux';
import useWindowDimensions from './hooks/WindowDimension';
import { sideBar } from './redux/constants';
import OTP from './Auth/OTP';
import FeedbackDetails from './Pages/Feedback Management/FeedbackDetails';
import PatientDetails from './Pages/Patient Management/PatientDetails';
import TherapistDetail from './Pages/Therapist Management/TherapistDetail';
import OnlineAppointmentDetails from './Pages/Online Appointment/OnlineAppointmentDetails';
import ProfileChangePassword from './Pages/Profile/ProfileChangePassword';
// import ModalSuccess from './Pages/Login/ModalSuccess';
// import Modal from './Pages/Login/Modal';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const {isUserLoggedin,accessToken,status,message} = useSelector(state=>state.login)

  return (
    <div className="App">
      <Router>
        <Routes>

         {isUserLoggedin && (status === 200 || status === 201) ? 
        <>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/patientmanagement' element={<PatientManage/>}/>
          <Route path='/notification' element={<Notification/>}/>
          <Route path='/therapistmanagement' element={<TherapistManage/>}/>
          <Route path='/onlineappointment' element={<OnlineAppointment/>}/>
          {/* <Route path='/sessionlog' element={<SessionLog/>}/> */}
          <Route path='/feedbackmanagement' element={<FeedbackManage/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/editprofile' element={<ProfileEdit/>}/>
          <Route path='/editprofile' element={<ProfileEdit/>}/>
          <Route path='/changepassword' element={<ChangePassword/>}/>
          <Route path='/modal' element={<ModalsPatient/>}/>
          <Route path='/createtherapist' element={<CreateTherapist/>}/>
          <Route path='feedbackdetails' element={<FeedbackDetails/>}/>
          <Route path='/patientdetails' element={<PatientDetails/>}/>
          <Route path='/therpaistdetails' element={<TherapistDetail/>}/>
          <Route path='/onlineappointmentdetails' element={<OnlineAppointmentDetails/>}/>
          <Route path='profilechangepassword' element ={<ProfileChangePassword/>}/>
          </>
          :
          <>
          <Route path='/' element={<Login/>}/>
          <Route path='/recovery' element={<RecoveryLogin/>}/>
          <Route path='/verifiycode' element={<Verification/>}/>
          <Route path='/changepass' element={<NewPassword/>}/>  
          <Route path='/otp' element={<OTP/>}/>
          </>
        }
        </Routes>
      </Router>



    </div>
  );
}

export default App;
