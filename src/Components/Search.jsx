
import { IoSearchOutline } from "react-icons/io5";
import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
   width: 200px;/* Adjust width as needed */
  padding: 8px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
     width: 400px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 4px;
  border-radius: 50px;
  font-size: 16px;
  background-color: transparent;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;

`;


const SearchBar = ({search , setSearch}) => {

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SearchBarContainer>
      <Input 
        type="text" 
        placeholder="Search..." 
        value={search} 
        onChange={handleInputChange} 
      />
      <IconContainer>
        <IoSearchOutline className="-ml-4"/>
      </IconContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
