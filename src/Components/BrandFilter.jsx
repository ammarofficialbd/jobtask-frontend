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

const BrandFilter = ({ selectedBrands, setSelectedBrands }) => {
  const brands = [
    { name: "walton", count: 32 },
    { name: "Foxecom", count: 1 },
    { name: "Minimog", count: 1 },
    { name: "Minimog Fashion Store", count: 1 },
    { name: "Outwears", count: 5 },
    { name: "Pants", count: 10 },
    { name: "Shoes", count: 4 },
  ];

  const handleCheckboxChange = (brandName) => {
    if (selectedBrands.includes(brandName)) {
      // Remove the brand from the selectedBrands array
      setSelectedBrands(selectedBrands.filter((brand) => brand !== brandName));
    } else {
      // Add the brand to the selectedBrands array
      setSelectedBrands([...selectedBrands, brandName]);
    }
  };

  return (
    <FilterContainer>
      <FilterTitle>Brand</FilterTitle>
      <FilterList>
        {brands.map((brand) => (
          <FilterItem key={brand.name}>
            <label>
              <Checkbox
                type="checkbox"
                checked={selectedBrands.includes(brand.name)}
                onChange={() => handleCheckboxChange(brand.name)}
              />
              {brand.name} ({brand.count})
            </label>
          </FilterItem>
        ))}
      </FilterList>
    </FilterContainer>
  );
};

export default BrandFilter;
