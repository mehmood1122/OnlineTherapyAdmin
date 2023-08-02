import React from "react";
import Check from "../../assets/greenCheck.png";
import "../../styles/Login/ModalFile.css";
import Cross from "../../assets/cross.png";
const ModalSuccess = ({closeModal,setCloseModal}) => {
  // const[closeModal,setCloseModal] = useState(true)
  const closeModalHandler= ()=>{
    setCloseModal(!closeModal)
    
  }
  
  return (
    <div className="modalWrraper">
      <div className="modalContainer">
        <div style={{textAlign:"end"}}>
          <img onClick={closeModalHandler} src={Cross} alt="" style={{cursor:"pointer"}} />
        </div>
        <div className="modal_container_body">
          <div className="modal_header">
            <img src={Check} alt="" />
          </div>
          <div className="modal_body">Password Updated Successfully</div>
          <button className="modal_btn" onClick={closeModalHandler}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccess;
