import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { SpinnerLoader } from '../pages/ProfilePage/ProfileComponent/Spinner';
const Checkout2 = () => {
  const [propertiesData, setPropertiesData] = useState([])
  const { id } = useParams();
  const property = propertiesData?.find((e) => e._id === id)
  const [isLoading, setisLoading] = useState(false)
  const handleFormSubmit = (e) => {
    e.preventDefault();

  };

  useEffect(() => {
    setisLoading(true)
    axios({
      url: "https://househunter.up.railway.app/properties/buy",
      method: "GET",
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` }
    }).then((res) => { setisLoading(false); setPropertiesData(res.data.properties) })
      .catch((err) => { setisLoading(false); console.log(err) })
  }, [])


  const handlesumbit = () => {
    axios({
      url: `https://househunter.up.railway.app/properties/book/${id}`,
      method: "patch",
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` }
    }).then((res) => { console.log(res);})
      .catch((err) => console.log(err))
  }


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === property?.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [property]);

  return (
    <Box>
      {isLoading && <SpinnerLoader></SpinnerLoader>}
      {!isLoading && <StyledPropertyCard>
        <ImageContainer>
          <PropertyImage
            src={property?.images[currentImageIndex]}
            alt={`Property Image ${currentImageIndex}`}
          />
        </ImageContainer>
        <PropertyInfo>
          {/* <h3>{property?.description}</h3> */}
          {/* <h3 style={{ fontSize: 'large', fontWeight: 'bold', marginBottom: '15px' }}>{property?.name}</h3> */}
          <p>Price: ${property?.price}</p>
          <p>Bedrooms: {property?.beds} BHK</p>
          <p>Area: {property?.living_area} sqft</p>
          <AddressInfo>
            Address: {property?.address}
          </AddressInfo>
          <p>Listed By: {property?.name}</p>
          <h3 style={{ overflowY: "hidden", maxHeight: "240px" }}>{property?.description}</h3>
          <Link to={`/checkout/${id}/payment`}>
            <button onClick={handlesumbit} style={{ padding: "10px 40px", backgroundColor: "skyblue", borderRadius: "5px", marginTop: ' 5%' }}>Buy Now</button>
          </Link>
        </PropertyInfo>
      </StyledPropertyCard>}
    </Box>
  )
};

export default Checkout2;

const StyledPropertyCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 45px;
  border: 1px solid #ccc;
  padding: 5px;
  margin:40px;
 align-items:center;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  max-width: 100%;
 
`;

const ImageContainer = styled.div`
  width: 50%;
  max-width: 45%; 
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 450px;
  display: block;
  max-width: 100%;
`;

const PropertyInfo = styled.div`
  width: 50%;
  padding: 10px;
  text-align: start;
`;

const AddressInfo = styled.p`
  font-style: italic;
  margin: 0;
  color: #777;
  font-size: 14px;
`;