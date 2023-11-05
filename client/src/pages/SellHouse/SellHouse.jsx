import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  VStack,
  Textarea,
  NumberInput,
  NumberInputField,
  Select,
  Heading,
  Flex
} from '@chakra-ui/react';

function SellHouse() {
  const [formData, setFormData] = useState({
    description: '',
    address: '',
    street_name: '',
    state: '',
    zipcode: '',
    beds: 0,
    baths: 0,
    tags: [],
    images: [],
    living_area: 0,
    type: 'sqft',
    status: 'FOR_SALE',
    price: 0,
    name: '',
    userID: 'user123',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImagesChange = (e) => {
    const { value } = e.target;
    const urls = value.split(',').map(url => url.trim());
    setFormData({
      ...formData,
      images: urls,
    });
  };

  const handleTagsChange = (e) => {
    const { value } = e.target;
    const tags = value.split(',').map(tag => tag.trim());
    setFormData({
      ...formData,
      tags: tags,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission of form data
    console.log('Submitted:', formData);
    // Add logic to send the data to your backend or perform any necessary action.
    
        // Reset form fields to their initial state

    setFormData({
      description: '',
    address: '',
    street_name: '',
    state: '',
    zipcode: '',
    beds: 0,
    baths: 0,
    tags: [],
    images: [],
    living_area: 0,
    type: 'sqft',
    status: 'FOR_SALE',
    price: 0,
    name: '',
    userID: 'user123',
    });
  };


  return (
    <Box 
    w="500px"
    margin="auto"
     boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)"
     p={4}
     >
      <Heading as="h1" size="xl" marginBottom="20px">
        Sell Your House
      </Heading>
    <form onSubmit={handleSubmit}>
      <VStack spacing="4">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Price</FormLabel>
          <NumberInput defaultValue={0} min={0}>
            <NumberInputField
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Street Name</FormLabel>
          <Input
            name="street_name"
            value={formData.street_name}
            onChange={handleChange}
          />
        </FormControl>
        <Flex direction="row">
        <FormControl w="210px" flex="2" mr={8}>
        <FormLabel>State</FormLabel>
          <Input
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl w="210px" flex="2" ml={1}>
        <FormLabel>Zip Code</FormLabel>
          <Input
            type="number"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
          />
        </FormControl>
        </Flex>

        <FormControl>
            <FormLabel>Image URLs (Separated by Commas)</FormLabel>
            <Input
              name="images"
              onChange={handleImagesChange}
              placeholder='Seperate Images URLs by Commas'
            />
          </FormControl>

          <FormControl>
            <FormLabel>Tags (Separated by Commas)</FormLabel>
            <Input
              name="tags"
              onChange={handleTagsChange}
            placeholder="Separate tags by commas"
            />
          </FormControl>

        <FormControl>
          <FormLabel>Living Area</FormLabel>
          <NumberInput defaultValue={0} min={0}>
            <NumberInputField
              name="living_area"
              value={formData.living_area}
              onChange={handleChange}
            />
          </NumberInput>
        </FormControl>

        <Flex direction="row">
        <FormControl w="210px" flex="2" mr={8}>
          <FormLabel>Beds</FormLabel>
          <NumberInput defaultValue={0} min={0}>
            <NumberInputField
              name="beds"
              value={formData.beds}
              onChange={handleChange}
            />
          </NumberInput>
        </FormControl>

        <FormControl w="210px" flex="2" ml={1}>
          <FormLabel>Baths</FormLabel>
          <NumberInput defaultValue={0} min={0}>
            <NumberInputField
              name="baths"
              value={formData.baths}
              onChange={handleChange}
            />
          </NumberInput>
        </FormControl>
        </Flex>

        <Flex direction="row">
        <FormControl w="210px" flex="2" mr={8}>
            <FormLabel>Type</FormLabel>
            <Select name="type" value={formData.type} onChange={handleChange}>
              <option value="sqft">Sq. Ft.</option>
              <option value="m²">m²</option>
            </Select>
          </FormControl>

          <FormControl w="210px" flex="2" ml={1}>
            <FormLabel>Status</FormLabel>
            <Select name="status" value={formData.status} onChange={handleChange}>
              <option value="FOR_SALE">For Sale</option>
              <option value="SOLD">Sold</option>
              <option value="PENDING">Pending</option>
            </Select>
          </FormControl>
        </Flex>
        <Button type="submit" w="300px" colorScheme="blue">
          Submit
        </Button>
      </VStack>
    </form>
    </Box>
  );
}

export default SellHouse;
