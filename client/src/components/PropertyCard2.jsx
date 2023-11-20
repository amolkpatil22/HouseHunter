import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function PropertyCard2({ property }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [property.images]);
  console.log(property)
  return (
    <StyledPropertyCard>
      <Link to={`/checkout2/${property._id}`}>
        <ImageContainer>
          <PropertyImage
            src={property.images[currentImageIndex]}
            alt={`Property Image ${currentImageIndex}`}
          />
        </ImageContainer>
        <PropertyInfo>
          {/* <h3>{property.name}</h3> */}
          <h3>Price: ${property.price}</h3>
          <p>Bedrooms: {property.beds} BHK</p>
          <p>Area: {property.living_area} sqft</p>
          <p>
            Address: {property.address}
          </p>
          <p>Listed By: {property.name}</p>
        </PropertyInfo>
      </Link>
    </StyledPropertyCard>
  );
}

export default PropertyCard2;

const StyledPropertyCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 5px;
  margin: 5px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  max-width: 300px;

`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 95%;
  margin: 0 auto;

`;

const PropertyImage = styled.img`
  width: 300px;
  height: 250px;
  display: block;

  
`;

const PropertyInfo = styled.div`
  padding: 10px;
`;

const AddressInfo = styled.p`
  font-style: italic;
  margin: 0;
  color: #777;
  font-size: 14px;
`;