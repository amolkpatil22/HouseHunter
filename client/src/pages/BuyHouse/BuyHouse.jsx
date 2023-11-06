import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import PropertyCard from '../../components/PropertyCard';
//import propertiesData from './data';
import axios from "axios"
const BuyHouse = () => {
const [propertiesData, setPropertiesData] = useState([])
const [searchTerm, setSearchTerm] = useState('');
const [filteredProperties, setFilteredProperties] = useState(propertiesData);
const [currentPage, setCurrentPage] = useState(1);
const propertiesPerPage = 9;
const [sortOption, setSortOption] = useState('price');

useEffect(() => {
  axios.get("https://househunter.up.railway.app/properties")
    .then((response) => {
      setPropertiesData(response.data);
      setFilteredProperties(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);
console.log(propertiesData)
const handleSearchChange = (e) => {
  setSearchTerm(e.target.value);
};

const handleSortChange = (e) => {
  setSortOption(e.target.value);
};

  const filterProperties = () => {
    const filtered = propertiesData.filter((property) =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProperties(filtered);
    setCurrentPage(1);
  };
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties
    .sort((a, b) => {
      if (sortOption === 'price') {
        return a.price - b.price;
      }
      return 0;
    })
    .slice(indexOfFirstProperty, indexOfLastProperty);

  return (
    <Container>
      <h2 style={{ fontSize: 'xx-large', fontWeight: 'bold', marginBottom: '15px' }}>
        Real Estate & Homes For Rent
      </h2>
      <SearchAndFilterContainer>
        <SearchInput
          type="text"
          placeholder="Search by property name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <SortSelect onChange={handleSortChange} value={sortOption}>
          <option value="price">Sort by Price</option>
          {/* Add more sorting  */}
        </SortSelect>
        <SearchButton onClick={filterProperties}>Search</SearchButton>
      </SearchAndFilterContainer>

      <PropertiesList>
        {currentProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </PropertiesList>

      <PaginationContainer>
        <PaginationButton
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </PaginationButton>
        <h1>{currentPage}</h1>
        <PaginationButton
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastProperty >= filteredProperties.length}
        >
          Next Page
        </PaginationButton>
      </PaginationContainer>
    </Container>
  );
};

export default BuyHouse

const Container = styled.div`
  padding: 20px;
`;

const PropertiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
`;

const SearchAndFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SortSelect = styled.select`
  margin-left: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  `;
