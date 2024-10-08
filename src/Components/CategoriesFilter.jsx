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
    { name: "Electronics", count: 20 },
    { name: "Clothing", count: 5 },
    { name: "Fitness", count: 5 },
    { name: "Home & Kitchen", count: 3 },
    { name: "Tools", count: 2},
  ];

  const handleCheckboxChange = (catName) => {
    if (category.includes(catName)) {
      // Remove the brand from the selectedBrands array
      setCategory(category.filter((cate) => cate !== catName));
    } else {
      // Add the brand to the selectedBrands array
      setCategory([...category, catName]);
    }
  };

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
                onChange={() => handleCheckboxChange(cat.name)}
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
