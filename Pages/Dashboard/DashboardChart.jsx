import React from "react";
import "../../styles/Dashboard/DashboardChart.css";
// Images
import Dropdown from "../../assets/bold_dropdown.png";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DashboardChart = () => {

  const [MonthlyToggle,setMonthlyToggle] = useState(false)

  function monthlyToggleHandler(){
setMonthlyToggle(!MonthlyToggle)
  }


  let labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <section className="container dashboard_chart_container ">
      <div  className="dashboard_chart_wrapper">
        <div style={{position:"relative"}} className="dashboard_chart_header">
          <div>Sales Analytics</div>
          <button onClick={monthlyToggleHandler}>
            Monthly <img style={{ marginLeft: "5px" }} src={Dropdown} alt="" />
          </button>
          {
            MonthlyToggle ? <>
               <div style={{top:"53px",right:"-2px"}} className="action_dropdown_toggle_chart">
                      <ul className="actions_toogle_list_container">
                        <li className="actions_toogle_list">Weekly</li>
                        <li className="actions_toogle_list">Monthly </li>
                        <li className="actions_toogle_list">Yearly </li>
                        
                      </ul>
                    </div>
            </> : ""
          }
        </div>
        <div className="chart_pic">
          <Line
            className="chart_main"
            
            data={{
              labels,
              datasets: [
                {
                  label: "Line 1",
                  data: [
                    15, 240, 215, 400, 521, 600, 229, 534, 324, 423, 212, 555,
                  ],
                  borderColor: "303974",
                  backgroundColor: "#30397427",
                  // fontSize:"30px",
                  tension: "0.4",
                  fill: true,
                  pointBorderWidht: "1px",
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    display: true,
                    gridDashType: "dot",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardChart;
