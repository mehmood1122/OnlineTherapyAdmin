import React from "react";

import Nav from "../../components/Header/Nav";
import Sidebar from "../../components/Header/Sidebar";
import "../../styles/Dashboard/Dashboard.css";
// import "../../styles/Dashboard/DashboardChart.css";
import DashboardChart from "./DashboardChart";
import DashboardFooter from "./DashboardFooter";
import Notification from "./Notification";
import { useState } from "react";
const Dashboard = () => {
  const [isActive,setIsActive] = useState(true)
  return (
    <div className="">
      <div className="dashboard_header">
        <Nav PageTitle={"Dashboard 🔥"} isActive={isActive} setIsActive={setIsActive} />
      </div>
      <div className="dashboard_sidebar">
        <Sidebar  />
      </div>
      <div className="dahshboard_chart container">
        <DashboardChart />
      </div>
      <div className="dashboard_footer">
        <DashboardFooter/>
      </div>
   
   
    </div>
  );
};

export default Dashboard;
