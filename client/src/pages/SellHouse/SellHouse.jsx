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
  Flex,
  useToast,
  Text
} from '@chakra-ui/react';
import axios from 'axios';

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
    type: 'sell',
    price: 0,
    status: 0
    // userID: 'user123',
  });
  const [isLoading, setisLoading] = useState(false)
  const toast = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImagesChange = (e) => {
    const { value } = e.target;
    const imageUrls = value.split(',').map(url => url.trim());

    setFormData({
      ...formData,
      images: imageUrls,
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

    // Add logic to send the data to your backend or perform any necessary action.


    //  axios.post("https://house-hunter-45uw.onrender.com/properties/add",formData,
    //  {headers:
    //  {authorization:`Bearer ${localStorage.getItem("token")}`}
    //  })
    //  .then((res)=>alert(res.data.message))
    //  .catch((res)=>alert("error"));
    setisLoading(true)
    let request = axios({
      method: "POST",
      url: 'https://house-hunter-45uw.onrender.com/properties/add',
      headers: { authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` },
      data: formData
    }).then((res) => { setisLoading(false); console.log(res) })
      .catch((err) => { setisLoading(false); console.log(err) })
    toast.promise(request, {
      success: { title: 'Property Created Successfully', description: 'Looks great!', duration: 2000, position: "top" },
      error: { title: 'Request Rejected', description: 'Something wrong!', duration: 2000, position: "top" },
      loading: { title: 'Request Sent', description: 'Please wait', duration: 2000, position: "top" },
    })
  };

  return (
    <Box >
        <Box 
       backgroundImage="url('https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2022/10/free-zestimate-bg-desktop.jpg')"
       backgroundSize={"cover"}
       backgroundRepeat={"no-repeat"}
       width={"100%"}
       height={"400px"}
       display="flex"
       flexDirection="column"
       alignItems="center"
       justifyContent="center"
       textAlign="center"
       color="white" 
      //  mb={"5px"}
       // Set text color to contrast with the background
      >
       <Heading mb={4}> Sell your home with confidence </Heading>
       <Text fontSize='lg'>Zillow is making it simpler to sell your home and move forward.</Text>
     </Box>  
     
     <Heading as="h2" size="xl" margin="20px">
        Sell Your Home
      </Heading>
    <Flex
      margin={"auto"}
      // backgroundImage="url('https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9ujjpnuikp0zh913hutw.png')"
      mt={"20px"}
      w={['90%', '90%', '95%']} // Responsive width     
      // border={"1px solid grey"}
      borderRadius={"10px"}
      boxShadow="0 4px 8px 0 rgba(0,0,0,0.4)"
      p={"30px"}
      mb={"50px"}
      
    >
      <Box w={"100%"}  mr={8} > 
      <form onSubmit={handleSubmit}>
        <VStack spacing="0">
          <Flex gap={"30px"} mb={"30px"}>
            <Box>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  size="sm"
                  isRequired
                />
              </FormControl>
              <FormControl>
                <FormLabel>Price</FormLabel>
                <NumberInput defaultValue={0} min={0}>
                  <NumberInputField
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    h="35px"
                    isRequired
                  />
                </NumberInput>
              </FormControl>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  size="sm"
                  isRequired
                />
              </FormControl>

              <FormControl>
                <FormLabel>Street Name</FormLabel>
                <Input
                  name="street_name"
                  value={formData.street_name}
                  onChange={handleChange}
                  size="sm"
                  isRequired
                />
              </FormControl>
              <Flex direction="row">
                <FormControl w="210px" flex="2" mr={8}>
                  <FormLabel>State</FormLabel>
                  <Input
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    size="sm"
                    isRequired
                  />
                </FormControl>

                <FormControl w="210px" flex="2" ml={1}>
                  <FormLabel>Zip Code</FormLabel>
                  <Input
                    type="number"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                    size="sm"
                    isRequired
                  />
                </FormControl>
              </Flex>
            </Box>
            <Box display={"flex"} flexDir={"column"} justifyContent={"space-between"}>
              <FormControl>
                <FormLabel>Image URLs (Separated by Commas)</FormLabel>
                <Input
                  name="images"
                  onChange={handleImagesChange}
                  placeholder="Separate Image URLs by Commas"
                  size="sm"
                  isRequired
                />
              </FormControl>

              <FormControl>
                <FormLabel>Tags (Separated by Commas)</FormLabel>
                <Input
                  name="tags"
                  onChange={handleTagsChange}
                  placeholder="Separate tags by commas"
                  size="sm"
                  isRequired
                />
              </FormControl>
              <FormControl>
                <FormLabel>Living Area</FormLabel>
                <NumberInput defaultValue={0} min={0}>
                  <NumberInputField
                    name="living_area"
                    value={formData.living_area}
                    onChange={handleChange}
                    h="30px"
                    isRequired
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
                      h="30px"
                      isRequired
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
                      h="30px"
                      isRequired
                    />
                  </NumberInput>
                </FormControl>
              </Flex>

              <Flex direction="row">
                <FormControl w="210px" flex="2" mr={8}>
                  <FormLabel>Type</FormLabel>
                  <Select name="type" value={formData.type} onChange={handleChange} h="30px">
                    <option value="sell">Sell</option>
                    <option value="rent">Rent</option>
                  </Select>
                </FormControl>
              </Flex>
            </Box>
          </Flex>


          <Button isDisabled={isLoading} type="submit" w="400px" marginTop="10px" colorScheme="blue">
            Submit
          </Button>
        </VStack>
      </form>
      </Box>
{/* 
      <Box display="flex"
  justifyContent="center"
  alignItems="center"
  height="100vh"
 >
        <img src="https://delivery.digitalassets.zillowgroup.com/api/public/content/2x_Miso_Module_Vector_CMS_Full.png?v=69e15efc" alt="" />
      </Box> */}
    </Flex>
    </Box>
  );
}

export default SellHouse;