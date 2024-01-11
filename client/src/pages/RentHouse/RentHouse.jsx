import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import PropertyCard from '../../components/PropertyCard';
import axios from "axios"
import { SpinnerLoader } from '../ProfilePage/ProfileComponent/Spinner';
import { Button } from '@chakra-ui/react';
import PropertyCard2 from '../../components/PropertyCard2';
import { useSearchParams } from 'react-router-dom';
const RentHouse = () => {
  const [propertiesData, setPropertiesData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('query') || '');
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;
  const [sortOption, setSortOption] = useState('price');
  const [isLoading, setisLoading] = useState(false);

  let search = searchParams.getAll('query');

  const params = {
    q: search,
  };

  useEffect(() => {
    setisLoading(true);
    if (searchTerm) {
      setSearchParams({ query: searchTerm });
    } else {
      setSearchParams();
    }

    axios({
      url: 'https://house-hunter-45uw.onrender.com/properties/rent',
      method: 'GET',
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
    })
      .then((res) => {
        setisLoading(false);
        console.log(res);
        setPropertiesData(res.data.properties);
        filterAndSortProperties();
      })
      .catch((err) => {
        setisLoading(false);
        console.log(err);
      });
  }, [searchTerm, sortOption]);

  useEffect(() => {
    filterAndSortProperties();
  }, [propertiesData]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filterAndSortProperties = () => {
    const filtered = propertiesData.filter(
      (property) =>
        property.address.toLowerCase().includes(searchTerm.toLowerCase()) // Updated to search by address
    );

    let sortedProperties;
    if (sortOption === 'price') {
      sortedProperties = filtered.slice().sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      sortedProperties = filtered.slice().sort((a, b) => b.price - a.price);
    } else {
      // Add more sorting options as needed.
      sortedProperties = filtered;
    }

    setFilteredProperties(sortedProperties);
    setCurrentPage(1);
  };

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);


  return (
    <Container>
      <h2 style={{ fontSize: 'xx-large', fontWeight: 'bold', marginBottom: '40px' }}>
        Real Estate & Homes For Rent
      </h2>
      <SearchAndFilterContainer>
        <SearchInput
          type="text"
          placeholder="Search by address"
          value={searchTerm}
          onChange={handleSearchChange}
        />
         <SortSelect onChange={handleSortChange} value={sortOption}>
          <option value="price">Sort by Price (Asc)</option>
          <option value="price-desc">Sort by Price (Desc)</option>
          {/* Add more sorting options as needed */}
        </SortSelect>
        <Button size={"md"} margin={"10px"} colorScheme='blue'
          _hover={{
            bg: "green.600", color: "white"
          }}>Search</Button>
      </SearchAndFilterContainer>
      {isLoading && <SpinnerLoader />}
      {!isLoading && <PropertiesList>
        {currentProperties.length==0&& <h1 style={{fontSize:"large",fontWeight:"bold"}}>No Results Found. Try Searching with New Keyword.</h1>}
        {currentProperties?.map((property) => (
          <PropertyCard2 key={property.id} property={property} />
        ))}
      </PropertiesList>}

      <PaginationContainer style={{ alignItems: "center", gap: "20px", marginTop: "50px" }}>
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

export default RentHouse

const Container = styled.div`
  padding: 20px;
`;

const PropertiesList = styled.div`
   display: flex;
  flex-wrap: wrap;
  gap:10px;
  width:90%;
  margin:auto;
  justify-content:center;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3182CE;
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
 
  width:90%;
  margin:auto; 
  margin-bottom: 40px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const SortSelect = styled.select`
  margin-left: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// const SearchButton = styled.button`
//   background-color: #007BFF;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   padding: 10px 20px;
//   cursor: pointer;
//   `;
