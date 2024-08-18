import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #f4f7f8; /* Adjust to match your design */
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const PageButton = styled.button`
  border: none;
  background: ${({ active }) => (active ? '#27a29c' : 'transparent')};
  color: ${({ active }) => (active ? 'white' : '#333')};
  margin: 0 5px;
  padding: 8px 12px;
  border-radius: 10%;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ active }) => (active ? '#27a29c' : '#e0e0e0')};
  }
`;

const Ellipsis = styled.span`
  margin: 0 8px;
  color: #333;
`;

const Pagination = ({ page, totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationContainer>
      <PageButton onClick={() => onPageChange(page - 1)} disabled={currentPage === 1}>
        &lt;
      </PageButton>
      {pages.map(page => (
        <React.Fragment key={page}>
          {page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1) ? (
            <PageButton
              key={page}
              onClick={() => onPageChange(page)}
              active={page === currentPage}
            >
              {page}
            </PageButton>
          ) : (
            (page === 2 || page === totalPages - 1) && <Ellipsis key={page}>...</Ellipsis>
          )}
        </React.Fragment>
      ))}
      <PageButton onClick={() => onPageChange(page + 1)} disabled={currentPage === totalPages}>
        &gt;
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
