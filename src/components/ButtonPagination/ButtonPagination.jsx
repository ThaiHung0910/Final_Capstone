import React from "react";
import { useMediaQuery } from "react-responsive";


const ButtonPagination = ({ currentPage, totalPages, handlePageChange }) => {
  const isSmallScreen = useMediaQuery({maxWidth: '768px'})
  const maxVisibleButtons = !isSmallScreen ? 7 : 5;
  const halfVisibleButtons = Math.floor(maxVisibleButtons / 2);

  const createButton = (element, page, className, key) => (
    <li key={key}>
      <button onClick={() => handlePageChange(page)} className={className}>
        {element}
      </button>
    </li>
  );

  const visibleStartPage = Math.max(1, currentPage - halfVisibleButtons);
  const visibleEndPage = Math.min(totalPages, currentPage + halfVisibleButtons);



  let buttonsPagination = [];

  if (currentPage > 1) {
    buttonsPagination.push(
      createButton(
        <i className="fas fa-angle-left"></i>,
        currentPage - 1,
        "",
        "prev"
      )
    );
  }

  if (visibleStartPage > 1) {
    buttonsPagination.push(createButton(1, 1, "", 1));
    if (visibleStartPage > 2) {
      buttonsPagination.push(
        <li key="left-ellipsis">
          <button onClick={() => handlePageChange(visibleStartPage - 1)}>...</button>
        </li>
      );
    }
  }

  for (let page = visibleStartPage; page <= visibleEndPage; page++) {
    buttonsPagination.push(
      createButton(page, page, currentPage === page ? "Active" : "", page)
    );
  }

  if (visibleEndPage < totalPages) {
    if (visibleEndPage < totalPages - 1) {
      buttonsPagination.push(
        <li key="right-ellipsis">
          <button onClick={() => handlePageChange(visibleEndPage + 1)}>...</button>
        </li>
      );
    }
    buttonsPagination.push(
      createButton(totalPages, totalPages, "", totalPages)
    );
  }

  if (currentPage < totalPages) {
    buttonsPagination.push(
      createButton(
        <i className="fas fa-angle-right"></i>,
        currentPage + 1,
        "",
        "next"
      )
    );
  }

  return (
    <nav className="Pagination">
      <ul className="flex justify-end">
        {totalPages > 1 ? buttonsPagination : ""}
      </ul>
    </nav>
  );
};

export default ButtonPagination;
