import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  margin: 20px;
  border: 1px solid #ccc;
  padding: 10px;
`;

const FilterTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

const FilterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FilterItem = styled.li`
  margin: 10px 0;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const CategoriesFilter = ({ category, setCategory}) => {
  const categories = [
    { name: "Electronics", count: 120 },
    { name: "Clothing", count: 85 },
    { name: "Books", count: 50 },
    { name: "Home Appliances", count: 30 },
    { name: "Toys", count: 20 },
  ];

  return (
    <FilterContainer>
      <FilterTitle>Category</FilterTitle>
      <FilterList>
        {categories.map((cat) => (
          <FilterItem key={cat.name}>
            <label>
              <Checkbox
                type="checkbox"
                checked={category.includes(cat.name)}
                onChange={() => setCategory(cat.name)}
              />
              {cat.name} ({cat.count})
            </label>
          </FilterItem>
        ))}
      </FilterList>
    </FilterContainer>
  );
};

export default CategoriesFilter;
