import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import PropertyCard from '../../components/PropertyCard';
import axios from "axios"
import PropertyCard2 from '../../components/PropertyCard2';
import { SpinnerLoader } from '../ProfilePage/ProfileComponent/Spinner';
import { Button } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

const BuyHouse = () => {
  const [propertiesData, setPropertiesData] = useState([])

  const [searchParams,setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("query")||'');
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;
  const [sortOption, setSortOption] = useState('price');
  const [isLoading, setisLoading] = useState(false)

  let search = searchParams.getAll("query");

    const params={
        q:search,
    }
  
  useEffect(() => {
    setisLoading(true)
    if(searchTerm){
      setSearchParams({query:searchTerm})
  }
  else{
     setSearchParams()
  }

// axios.get("https://househunter.up.railway.app/properties/search",{
//   params, headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` }
// }).then((res) => { setisLoading(false); console.log(res); setPropertiesData(res.data.properties) })
// .catch((err) => { setisLoading(false); console.log(err) })
// }, [searchTerm])

    axios({
      url: "https://househunter.up.railway.app/properties/search",
      method: "GET",
      q:params,
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` }
    }).then((res) => { setisLoading(false); console.log(res); setPropertiesData(res.data.properties) })
      .catch((err) => { setisLoading(false); console.log(err) })
  }, [searchTerm])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    // filterAndSortProperties();
  };

  const filterAndSortProperties = () => {
    const filtered = propertiesData.filter((property) =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const sortedProperties = filtered.slice().sort((a, b) => {
      if (sortOption === 'price') {
        return a.price - b.price;
      }
      // Add more sorting options as needed.
      return 0;
    });

    setFilteredProperties(sortedProperties);
    setCurrentPage(1);
  };
  
  // useEffect(() => {
  //   filterAndSortProperties();
  // }, [searchTerm, sortOption, propertiesData]);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  return (
    <Container>
      <h2 style={{ fontSize: 'xx-large', fontWeight: 'bold', marginBottom: '40px' }}>
        Real Estate & Homes For Sale
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
        <Button size={"md"} margin={"10px"} colorScheme='blue'
          _hover={{
            bg: "green.600", color: "white"
          }} onClick={filterAndSortProperties}>Search</Button>
      </SearchAndFilterContainer>
      {isLoading && <SpinnerLoader />}
      {!isLoading && <PropertiesList >
        {propertiesData && propertiesData?.map((property) => (
          <PropertyCard2 key={property.id} property={property} />
        ))}
      </PropertiesList>}

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

// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import styled from 'styled-components';
// import PropertyCard from '../../components/PropertyCard';
// import axios from "axios"

// const BuyHouse = () => {
// const [propertiesData, setPropertiesData] = useState([])
// const [searchTerm, setSearchTerm] = useState('');
// const [filteredProperties, setFilteredProperties] = useState(propertiesData);
// const [currentPage, setCurrentPage] = useState(1);
// const propertiesPerPage = 6;
// const [sortOption, setSortOption] = useState('price');

// useEffect(() => {
//   axios({
//       url: "https://househunter.up.railway.app/properties/buy",
//       method: "GET",
//       headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` }
//   }).then((res) => { setPropertiesData(res.data.properties) })
//       .catch((err) => console.log(err))
// }, [])
// console.log(propertiesData)
// const handleSearchChange = (e) => {
//   setSearchTerm(e.target.value);
// };

// const handleSortChange = (e) => {
//   setSortOption(e.target.value);
// };

//   const filterProperties = () => {
//     const filtered = propertiesData.filter((property) =>
//       property.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProperties(filtered);
//     setCurrentPage(1);
//   };
//   const indexOfLastProperty = currentPage * propertiesPerPage;
//   const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
//   const currentProperties = filteredProperties
//     .sort((a, b) => {
//       if (sortOption === 'price') {
//         return a.price - b.price;
//       }
//       return 0;
//     })
//     .slice(indexOfFirstProperty, indexOfLastProperty);

//   return (
//     <Container>
//       <h2 style={{ fontSize: 'xx-large', fontWeight: 'bold', marginBottom: '15px' }}>
//         Real Estate & Homes For Rent
//       </h2>
//       <SearchAndFilterContainer>
//         <SearchInput
//           type="text"
//           placeholder="Search by property name"
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <SortSelect onChange={handleSortChange} value={sortOption}>
//           <option value="price">Sort by Price</option>
//           {/* Add more sorting  */}
//         </SortSelect>
//         <SearchButton onClick={filterProperties}>Search</SearchButton>
//       </SearchAndFilterContainer>

//       <PropertiesList>
//         {propertiesData.map((property) => (
//           <PropertyCard key={property.id} property={property} />
//         ))}
//       </PropertiesList>

//       <PaginationContainer>
//         <PaginationButton
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous Page
//         </PaginationButton>
//         <h1>{currentPage}</h1>
//         <PaginationButton
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={indexOfLastProperty >= filteredProperties.length}
//         >
//           Next Page
//         </PaginationButton>
//       </PaginationContainer>
//     </Container>
//   );
// };

// export default BuyHouse

// const Container = styled.div`
//   padding: 20px;
// `;

// const PropertiesList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;

// const PaginationContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;
// `;

// const PaginationButton = styled.button`
//   padding: 10px 20px;
//   font-size: 16px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   margin: 0 10px;
// `;

// const SearchAndFilterContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 20px;
// `;

// const SearchInput = styled.input`
//   flex: 1;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const SortSelect = styled.select`
//   margin-left: 10px;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const SearchButton = styled.button`
//   background-color: #007BFF;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   padding: 10px 20px;
//   cursor: pointer;
//   `;
