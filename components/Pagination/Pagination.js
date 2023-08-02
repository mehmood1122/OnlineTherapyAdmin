import React from 'react';
import { useState } from 'react';

import { useSelector } from 'react-redux';
const Pagination = ({ currentPagenew, totalPagesnew, onPageChange }) => {
  const {data} = useSelector((value)=>value.patientPaginated)
const [active,setActive] = useState()
  const handlePreviousPage = () => {
    if (currentPagenew > 1) {
      onPageChange(currentPagenew - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPagenew) {
      onPageChange(currentPagenew + 1);
    }
  };
  const style = {
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingRight: "9px",
    paddingLeft: "9px",
    fontSize: "15px",
    color: "#000",
    fontWeight: "500",
  }

  return (
    <div className="pagination">
      <button style={style}
        className="pagination-button"
        disabled={currentPagenew === 1}
        onClick={handlePreviousPage}
      >
        {"<"}
      </button>
      <span>{currentPagenew}</span>
      <button
        style={style}
        className="pagination-button"
        // disabled={currentPagenew === totalPagesnew}
        disabled={data && data.length === 0}
        onClick={handleNextPage}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;