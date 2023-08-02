import React from "react";
import "../../styles/Dashboard/Dashboardfooter.css";
import Map from "../../assets/World Map.png";
import US from "../../assets/US.png";
import IND from "../../assets/IN.png";
import PK from "../../assets/PK.png";
import BD from "../../assets/BD.png";
import SliderBar from "../../components/SliderBar";
import Dropdown from "../../assets/bold_dropdown.png";
import { useState } from "react";


const DashboardFooter = () => {

  const [MonthlyToggle,setMonthlyToggle] = useState(false)

  function MonthlyToggleHandler(){
    setMonthlyToggle(!MonthlyToggle)
  }
  return (
    <div className="dashboard_footer container">
      <div data-aos="fade-up" className="container footer_main">
        <div>
          <img className="first_side_footer" src={Map} alt="" />
        </div>
        <div className="second_side_footer">
          <div style={{position:"relative"}} className="second_side_footer_header">
            <span className="second_side_heading">Users by Country</span>
            <button onClick={MonthlyToggleHandler} style={{fontWeight:"500",color:"#858688"}} className="second_side_header_button">
              Monthly
              <img style={{marginLeft:"5px"}} src={Dropdown} />
            </button>
            {
              MonthlyToggle ? <div style={{top:"59px",right:"-2px"}} className="action_dropdown_toggle_chart">
              <ul className="actions_toogle_list_container">
                <li className="actions_toogle_list">Weekly</li>
                <li className="actions_toogle_list">Monthly </li>
                <li className="actions_toogle_list">Yearly </li>
                
              </ul>
            </div>
            :""}
          </div>

          <SliderBar flag={US} country="United States" ratio="20%" />
          <SliderBar flag={IND} country="India" ratio="40%" />
          <SliderBar flag={PK} country="Pakistan" ratio="20%" />
          <SliderBar flag={BD} country="Bangladesh" ratio="25%" />
        </div>
      </div>
    </div>
  );
};

export default DashboardFooter;
