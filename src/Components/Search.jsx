import React from 'react';
import styled from 'styled-components';
import { IoSearchOutline } from "react-icons/io5";
const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 400px; /* Adjust width as needed */
  padding: 8px;
  border-radius: 50px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 8px;
  border-radius: 50px;
  font-size: 16px;
  background-color: transparent;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const Icon = styled.img`
  width: 20px; /* Adjust size as needed */
  height: 20px;
  margin-right: 8px;
`;

const Search = () => {
  return (
    <SearchBarContainer>
      <Input placeholder="Search..." />
      <IconContainer>
      
        <IoSearchOutline />
      </IconContainer>
    </SearchBarContainer>
  );
};

export default Search;
