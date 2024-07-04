import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (selectedPage: number) => void;
}

function PaginationAll({ currentPage, totalPages, onPageChange }:PaginationProps) {
  const handlePageClick = (data: { selected: number }) => {
    onPageChange(data?.selected + 1);
  };

  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
      forcePage={currentPage - 1}
    />
  );
};

export default PaginationAll;
