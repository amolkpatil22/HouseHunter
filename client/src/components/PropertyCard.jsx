import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function PropertyCard({ property }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to automatically advance the image after a delay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [property.images]);

  return (
    <StyledPropertyCard>
      <ImageContainer>
        <PropertyImage
          src={property.images[currentImageIndex]}
          alt={`Property Image ${currentImageIndex}`}
        />
      </ImageContainer>
      <PropertyInfo>
        <h3>{property.name}</h3>
        <p>Price: ${property.price}</p>
        <p>Bedrooms: {property.bedrooms} BHK</p>
        <p>Area: {property.livingArea} sqft</p>
        <AddressInfo>
          Address: {property.streetAddress}, {property.location}, {property.state}, {property.zipcode}, {property.country}
        </AddressInfo>
        <p>Listed By: {property.listedBy}</p>
      </PropertyInfo>
    </StyledPropertyCard>
  );
}

export default PropertyCard;

const StyledPropertyCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  max-width: 350px;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
`;

const PropertyImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  max-width: 100%;
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