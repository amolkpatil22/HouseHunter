import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Box, Image } from '@chakra-ui/react';


const Checkout2 = () => {
  const [propertiesData, setPropertiesData] = useState([])
  const { id } = useParams();
  const property = propertiesData?.find((e) => e._id === id)

  const handleFormSubmit = (e) => {
    e.preventDefault();

  };

  useEffect(() => {
    axios({
      url: "https://househunter.up.railway.app/properties/buy",
      method: "GET",
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` }
    }).then((res) => { setPropertiesData(res.data.properties) })
      .catch((err) => console.log(err))
  }, [])


  const handlesumbit = () => {
    axios({
      url: `https://househunter.up.railway.app/properties/book/${id}`,
      method: "patch",
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` }
    }).then((res) => {console.log(res); alert("Property Added") })
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
    <div>
       <div>
    <StyledPropertyCard>
      <ImageContainer>
        <PropertyImage
          src={property?.images[currentImageIndex]}
          alt={`Property Image ${currentImageIndex}`}
        />
      </ImageContainer>
      <PropertyInfo>
        {/* <h3 style={{ fontSize: 'large', fontWeight: 'bold', marginBottom: '15px' }}>{property?.name}</h3> */}
        <p>Price: ${property?.price}</p>
        <p>Bedrooms: {property?.beds} BHK</p>
        <p>Area: {property?.living_area} sqft</p>
        <AddressInfo>
          Address: {property?.streetAddress}, {property?.location}, {property?.state}, {property?.zipcode}, {property?.country}
        </AddressInfo>
        <p>Listed By: {property?.name}</p>
        <p>{property?.description}</p>
        <button onClick={handlesumbit} style={{ padding: "10px 40px", backgroundColor: "skyblue", borderRadius: "5px", marginTop: ' 5%' }}>Buy Now</button>
      </PropertyInfo>
      {/* <Box>
      <Image src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wfp3fvaw3496f7z7vfrh.png" alt="Amenities"></Image>
      </Box> */}
    </StyledPropertyCard>
    </div>
    <div>
    <Box>
      <Image src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wfp3fvaw3496f7z7vfrh.png" alt="Amenities"></Image>
      </Box>
    </div>
    </div>
  );
};

export default Checkout2;

const StyledPropertyCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 45px;
  border: 1px solid #ccc;
  padding: 5px;
  margin: 5px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  max-width: 100%;
`;

const ImageContainer = styled.div`
  width: 50%;
  max-width: 45%;
  height: 400px;
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 400px;
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