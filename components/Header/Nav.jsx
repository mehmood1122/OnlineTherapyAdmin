import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Container} from 'react-bootstrap'
// Images
import Search from "../../assets/Search.png";
import Notification from "../../assets/Notify.png";
import Avatar from "../../assets/Avatar.png";
import ArrowDown from "../../assets/bold-arrow.png";
import Separator from "../../assets/Separator.png";

import StatusUp from "../../assets/status-up.png";
import Community from "../../assets/True.png";
import Like from "../../assets/True2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from "hamburger-react";
// import { isSidebarToggle } from "../../redux/Slice/sidebarToggle";
// import { isSidebarToggle } from "../../redux/Slice/sidebarToggle";
import { sidebarOpen } from "../../redux/Slice/sidebarToggle";
import {isSidebarToggle} from '../../redux/Slice/sidebarToggle.js'
// import { logout } from "../../redux/Slice/loginSlice";
import { loggingOut } from "../../redux/Slice/loginSlice";

// Css
import "../../styles/Header/Nav.css";
// Card Componrnt
import StatsCard from "./StatsCard";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
// import { logout, sideBar } from "../../redux/constants";
import { Col, Row } from "react-bootstrap";

const Nav = ({  setIsActive, PageTitle, inCard, StatCard }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openSidebar, setopenSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [search, setSearch] = useState(false);
  const checkDropdown = () => {
    if (dropdown) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const searchToggleHandler = () => {
    setSearch(!search);
  };
  const {isActive} = useSelector(value => value.sidebarToggleSlice ) 

  const sidebarOpenHandler = function(){
    dispatch(sidebarOpen())
  }
  const logoutHandler = () =>{
    dispatch(loggingOut())
  }
  return (
    <section className="nav_main">
      {/* <GiHamburgerMenu onClick={HamburgerclickHandler} className="ham"/> */}
      {/* <Hamburger
      // toggled = {header? true : false}
      //   onToggle={(toggled) => {
      //     if (toggled) {
      //       dispatch({ type: sideBar, payload: true });
      //     } else {
      //       dispatch({ type: sideBar, payload: false });
      //     }
      //   }}
      
        className="ham"
      /> */}
      <div onClick={sidebarOpenHandler}>
      <Hamburger
      // toggled = {header? true : false}
      //   onToggle={(toggled) => {
      //     if (toggled) {
      //       dispatch({ type: sideBar, payload: true });
      //     } else {
      //       dispatch({ type: sideBar, payload: false });
      //     }
      //   }}
      toggled = {isActive ? true : false}
      onToggle={(toggled) => {
            if (toggled) {
              dispatch(sidebarOpen());
            } else {
              dispatch(isSidebarToggle());
            }
          }}
      
        className="ham"
      />
      </div>

      <div className="nav_container">
        <div className="nav_top">
          <div className="nav_top_header">
            <span className="nav_top_heading">{PageTitle} </span>
            <span className="nav_top_description">
              Here's whats happening in your Cake Acount today
            </span>
          </div>

          <div className="nav_top_right_side">
            <div onClick={searchToggleHandler} className="nav_top_search_icon">
              <img src={Search} alt="" />
            </div>
            {search ? (
              <>
                <div className="search_toggle">
                  <input
                    className="search_toggle_input"
                    placeholder="Search"
                    type="text"
                  />
                </div>
              </>
            ) : (
              ""
            )}
            <Link to="/notification">
              <div className="nav_top_notification_icon">
                <img src={Notification} alt="" />
              </div>
            </Link>
            <div className="nav_top_avatar_icon">
              <img src={Avatar} alt="" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <div onClick={checkDropdown} style={{ display: "inline-flex" }}>
                <div className="nav_top_login_details">
                  <span className="nav_top_user_name">Thomas F.</span>
                  <span className="nav_top_user_designation">CEO </span>
                </div>
                <div className="nav_top_dropdown">
                  <img src={ArrowDown} alt="" />
                </div>
              </div>
              <div
                style={{ display: dropdown ? "block" : "none" }}
                className="dropdown_profile"
              >
                <ul>
                  <Link to="/profile">
                    <li>My Profile</li>
                  </Link>
                  {/* <li onClick={()=> {
                    dispatch({type: logout, patload: {name: '', isUserLoggedin: false}})
                    navigate('/', { replace: true });
                    }} className="log_prop">Logout</li> */}
                     <li onClick={logoutHandler} className="log_prop">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {openSidebar ? <Sidebar /> : ""}
        <img className="nav_separater_line" src={Separator} />
        <div className="nav_bottom">
          {/* <Container> */}
            {/* <Row> */}
              {/* <Col xl={4} lg={4} md ={4} sm={4}  > */}
          <StatsCard
            className="stats1"
            title={"Total Patient"}
            img={StatusUp}
            ratio={"0.8%"}
            patient={"404"}
            inCard={inCard}
            // inCard={inCard}
          />
          {/* </Col > */}
          {/* <Col xl={4} lg={4} md ={4} sm={4} > */}
          <StatsCard
            title={"Total Therapists"}
            className="second_card"
            img={Community}
            ratio={"0.8%"}
            patient={"300"}
            inCard={inCard}
            // inCard={inCard}
          />
          {/* </Col> */}
          {/* <Col xl={4} lg={4} md ={4} sm={4} > */}
          <StatsCard
          className="statcard_three"
            title={"Total Sales"}
            img={Like}
            ratio={"0.8%"}
            patient={"$340"}
            inCard={inCard}
            // inCard={inCard}
          />
          {/* </Col>
          </Row>
          </Container> */}
        </div>
      </div>
    </section>
  );
};

export default Nav;
