import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  color: #333;
  background-color: #f9f9f9;
  width: 100%;
  max-width: 150px;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
  @media (min-width: 768px) {
    max-width: 200px; /* Increase max-width on larger screens */
  }
`;

const SortComponent = ({ sortBy, setSortBy }) => {
    return (
        <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
        >
            <option value="">Sort by</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="newest">Newest</option>
        </Select>
    );
};

export default SortComponent;
