import React from "react";
// Css
import "../../styles/Header/Sidebar.css";
// Images
import Logo from "../../assets/logoside.png";
import Line from "../../assets/sidebar-seprator.png";
import Pie from "../../assets/ChartPieSlice.png";
import Bag from "../../assets/ShoppingBagOpen.png";
import Greater from "../../assets/gray-greater-vector.png";
import Folder from "../../assets/FolderNotch.png";
import Book from "../../assets/BookOpen.png";
import IDbadge from "../../assets/IdentificationBadge.png";
import Chats from "../../assets/ChatsTeardrop.png";
// import {IoCreateSharp} from 'react-icons/ios'
import Rocket from "../../assets/rocket.png";
import Component from "../../assets/cube.png";
import Hamburger from "../../assets/hamburger.png";
import Documentation from "../../assets/icon-documentation.png";
import {MdOutlineCreateNewFolder} from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx';

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { sideBar } from "../../redux/constants";
import { isSidebarToggle } from "../../redux/Slice/sidebarToggle";

function Sidebar() {
  const {isActive} = useSelector((value) => value.sidebarToggleSlice);
  const dispatch = useDispatch();
  const toggleClickHandler = function(){
    dispatch(isSidebarToggle())
  }
  return (
    <div
      style={{ transform: isActive ? "translateX(0px)" : "translateX(-305px)" }}
      className={`sidebar_main_container`}
    >
      <div style={{ textAlign: "center" }} className="sidebar_logo">
      <div className="btn-exit">
          {/* <button onClick={()=> dispatch({type: sideBar, payload: false})} className="btn">X</button> */}
          <button onClick={toggleClickHandler} className="btn"><RxCross2/></button>

        </div>
        <Link to={"/"}>
          <img
            className="mt-5 logo_img"
            style={{ cursor: "pointer" }}
            src={Logo}
            alt=""
          />
        </Link>
      </div>
      <div style={{ textAlign: "center" }} className="sidebar_separator">
        <img src={Line} alt="" />
      </div>
      <div className="sidebar_first_section">
        <ul className="sidebar_ul">
          <li className="sidebar_dashboard">
            <Link to="/">
              <div>
                <img style={{ marginRight: "5px" }} src={Pie} alt="" />{" "}
                Dashboard
              </div>
            </Link>
          </li>
          <li className="sidebar_pat_manage">
            <Link to="/patientmanagement">
              <div className="sidebar_pat_manage_inside">
                <div style={{ display: "flex", alignItem: "center" }}>
                  <img style={{ marginRight: "12px" }} src={Bag} alt="" />{" "}
                  Patient Management
                </div>
                <img src={Greater} alt="" />
              </div>
            </Link>
          </li>
          <li className="sidebar_ther_manage">
            <Link to="/therapistmanagement">
              <div className="sidebar_ther_manage_inside">
                <div style={{ display: "flex", alignItem: "center" }}>
                  <img style={{ marginRight: "12px" }} src={Folder} alt="" />{" "}
                  Therapist Management
                </div>
                <img src={Greater} alt="" />
              </div>
            </Link>
          </li>
          <li className="sidebar_online_appoint">
            <Link to="/onlineappointment">
              <div>
                <img style={{ marginRight: "5px" }} src={Book} alt="" /> Online
                Appointment Logs
              </div>
            </Link>
          </li>
          {/* <li className="sidebar_session">
            <Link to={"/sessionlog"}>
              <div>
                <img style={{ marginRight: "5px" }} src={IDbadge} alt="" />{" "}
                Session Logs
              </div>
            </Link>
          </li> */}
          <li className="sidebar_feeback">
            <Link to={"/feedbackmanagement"}>
              <div>
                <img style={{ marginRight: "5px" }} src={Chats} alt="" />{" "}
                Feedback Management
              </div>
            </Link>
          </li>
          <li  className="sidebar_feeback">
            <Link to={"/createtherapist"}>
              <div style={{display:"flex",alignItem:"center"}}>
                {/* <img style={{ marginRight: "5px" }} src={Chats} alt="" />{" "} */}
                {/* <IoCreateSharp/> */}
                <MdOutlineCreateNewFolder style={{marginRight:"5px",fontSize:"22px"}}/>
                Create Therapist
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div style={{ textAlign: "center" }} className="sidebar_separator">
        <img src={Line} alt="" />
      </div>

      {/* Second Section */}

      {/* <div className="sidebar_second_section">
        <span>DOCS</span>
        <div className="sidebar_second_sub_section">
          <ul>
            <li className="side_second_section_docs_Basics">
              <div>
                <img src={Rocket} alt="" />
                Basic s
              </div>
            </li>
            <li className="side_second_section_docs_Components">
              <div>
                <img src={Component} alt="" />
                Components
              </div>
            </li>
            <li
              style={{ marginLeft: "5px" }}
              className="side_second_section_docs_Components"
            >
              <div>
                <img src={Hamburger} alt="" />
                Changelog
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: "center" }} className="sidebar_separator">
        <img src={Line} alt="" />
      </div> */}

      {/* Third Section */}
      {/*       
      <div className="sidebar_third_section">
        <div className="sidebar_third_section_img">
          <img src={Documentation} alt="" />
        </div>
        <span className="sidebar_third_section_heading">Need help?</span>
        <span className="sidebar_third_section_query">
          Please check our docs
        </span>
        <button className="sidebar_third_section_btn">Documentation</button>
      </div> */}
    </div>
  );
}

export default Sidebar;
