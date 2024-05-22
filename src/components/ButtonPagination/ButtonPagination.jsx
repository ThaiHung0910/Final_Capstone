import React from "react";

const ButtonPagination = ({ currentPage, totalPages, handlePageChange }) => {
  let buttonsPagination = [];
  let element = (element, page, className, index) => {
    return (
      <li key={index}>
        <button
          onClick={() => handlePageChange(page)}
          className={className}
        >
          {element}
        </button>
      </li>
    );
  };

  if (currentPage === totalPages) {
    buttonsPagination = [
      element(<i className="fas fa-angle-left"></i>, currentPage - 1, "", -1),
      ...buttonsPagination,
    ];
  }

  for (let index = 0; index < totalPages; index++) {
    buttonsPagination = [
      ...buttonsPagination,
      element(
        index + 1,
        index + 1,
        currentPage === index + 1 ? "Active" : "",
        index
      ),
    ];
  }

  if (currentPage < totalPages) {
    buttonsPagination = [
      ...buttonsPagination,
      element(
        <i className="fas fa-angle-right"></i>,
        currentPage + 1,
        "",
        totalPages + 1
      ),
    ];
  }

  return buttonsPagination;
};

export default ButtonPagination;
