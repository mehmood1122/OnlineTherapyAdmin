import React from "react";

const SliderBar = (props) => {
  return (
    <div>
      <div className="first_line_bar">
        <div className="firse_line_country">
          <img
            style={{ borderRadius: "50%", marginRight: "10px" }}
            src={props.flag}
            alt=""
          />
          {props.country}
        </div>
        <div className="firse_line_slider">
          <div className="slider">
            <div className="slider_value"></div>
          </div>
        </div>
        <div style={{color:"#858688",fontWeight:"500"}}>{props.ratio}</div>
      </div>
    </div>
  );
};

export default SliderBar;
