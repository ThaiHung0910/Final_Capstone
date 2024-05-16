import React from "react";

const ButtonNavigation = ({ currentPage, totalPages, handlePageChange }) => {
  let buttonsNavigation = [];
  let element = (element, argument, className, index) => {
    return (
      <li key={index}>
        <button
          onClick={() => handlePageChange(argument)}
          className={className}
        >
          {element}
        </button>
      </li>
    );
  };

  if (currentPage === totalPages) {
    buttonsNavigation = [
      element(<i className="fas fa-angle-left"></i>, currentPage - 1, "", -1),
      ...buttonsNavigation,
    ];
  }

  for (let index = 0; index < totalPages; index++) {
    buttonsNavigation = [
      ...buttonsNavigation,
      element(
        index + 1,
        index + 1,
        currentPage === index + 1 ? "Active" : "",
        index
      ),
    ];
  }

  if (currentPage < totalPages) {
    buttonsNavigation = [
      ...buttonsNavigation,
      element(
        <i className="fas fa-angle-right"></i>,
        currentPage + 1,
        "",
        totalPages + 1
      ),
    ];
  }

  return buttonsNavigation;
};

export default ButtonNavigation;
