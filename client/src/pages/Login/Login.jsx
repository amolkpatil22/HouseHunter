import React, { useEffect, useState } from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Center,
  Heading,
  Divider,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  InputGroup,
  InputRightElement,
  useToast,
  IconButton,
  Flex,
  Text,
  Box
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { userLogin, userRegister } from '../../store/Authentication/action';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { styled } from "styled-components"
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const token = useSelector((store) => store.authReducer.token);
  let isLoading = useSelector((store) => store.authReducer.isLoading);
  const isAuth = useSelector((store) => store.authReducer.isAuth);

  const username = useSelector((store) => store.authReducer.username);



  const [activeTab, setActiveTab] = useState(0); // State to manage the active tab

  //  user details
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("")
  const [address, setAddress] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("");
  const [postal_code, setPostal_code] = useState(null)
  const [state, setState] = useState("")
  const [pan, setPan] = useState("")


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    let newUser = {
      name,
      email,
      password,
      mobile,
      address,
      street,
      city,
      postal_code,
      state,
      pan
    };
    if (name === "" ||
      email === "" ||
      password === "" ||
      mobile === "" ||
      address === "" ||
      street === "" ||
      city === "" ||
      postal_code === "" ||
      state === "" ||
      pan === "") {
      toast({
        title: "Please fill in all required fields",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      return; // Prevent registration if any required field is empty
    }
    console.log(newUser);
    dispatch(userRegister(newUser)).then((res) => {
      toast({
        title: "New User Register Successfull",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      setName("");
      setEmail("")
      setPassword("")
      setMobile("")
      setAddress("")
      setStreet("")
      setCity("")
      setPostal_code("")
      setState("")
      setPan("")
      setActiveTab(0);
      isLoading = false
    });
  };
  const handleLogin = () => {
    let User = {
      email,
      password,
    };
    console.log(User);
    if (email === "" ||
      password === "") {
      toast({
        title: "Please fill in all required fields",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      return; // Prevent registration if any required field is empty
    }
    dispatch(userLogin(User))
      .then((res) => {
        toast({
          title: "Login Successful",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        setEmail("")
        setPassword("")
        // closeMainModal();
        navigate("/");
      })
      .catch((error) => {
        toast({
          title: "Wrong Crendentials.",
          description: "check password and email",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      });
  };


  const handleAdmin = () => {
    // closeMainModal()
    navigate("/adminlogin");
  };
  const handleAdminRegister = () => {
    navigate("/adminRegister");
  };


  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("username", JSON.stringify(username || ""));
  }, [token, username])

  return (
    <DIV activeTab={activeTab}  >


      <Box
        w={"100%"}
        h={"auto"}
        backgroundImage="url('https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Buy_a_home.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
       
      >

        <Box
          margin={"auto"}
          mt={"20px"}
          w={['80%', '70%', '40%']} // Responsive width     
          p={4}
          mb={"50px"}
          backgroundColor="rgba(0,0,0,.3)"
          border={"1px solid blue"}
          boxShadow={"inset -2px -2px rgba(0, 0, 0, 0.5)"}
          borderRadius={"20px"}
        // backgroundColor={"red"}

        >
          <Center>
            <Heading
              as="h4"
              size="md"
              fontSize="3xl"
              mt={5}
              fontFamily="serif"
              fontWeight="semibold"
              color={"white"}
              borderBottom={"4px solid rgba(255,255,255,0.6)"}
            >
              Welcome to House Hunter
            </Heading>
          </Center>

          <Tabs mt={5} index={activeTab} onChange={(index) => setActiveTab(index)}>
            <TabList borderBottom={"2px solid rgba(0,0,255,0.6)"}>
              <Tab _selected={{ color: "white", borderBottomColor: "white" }}>Sign In</Tab>
              <Tab _selected={{ color: "white", borderBottomColor: "white" }}>Register</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                {/* login comp */}
                {/* <Login />  */}
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement>
                      <IconButton
                        variant="outline"
                        aria-label="Toggle password visibility"
                        onClick={togglePasswordVisibility}
                        icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <br />
                <Button colorScheme="blue" width="100%" onClick={handleLogin}>
                  Sign In
                </Button>
                <Center>
                  {/* <Button
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      p={2}
                      mt={3}
                      mb={3}
                      w="100%"
                      color="#006aff"
                      fontWeight="semibold"
                      backgroundColor="white"
                      _hover={{
                        border: "2px solid #002aff",
                        borderRadius: "20px",
                      }}
                    >
                      Forgot Your Password?
                    </Button> */}
                </Center>
                <Divider />
                <Center>

                  <Text
                    mt={2}
                    mb={2}
                    fontSize="large"
                    fontWeight="semibold"
                    color={"white"}
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                    onClick={handleAdmin}
                  >
                    Login as Admin
                  </Text>


                </Center>
                <Center color={"white"}>Or</Center>
                <Center>
                  <Text
                    mt={2}
                    mb={2}
                    fontSize="large"
                    fontWeight="semibold"
                    color={"white"}
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                    onClick={handleAdminRegister}
                  >
                    Register as Admin
                  </Text>

                </Center>
                {/* {isLoading && <Loader />} */}

              </TabPanel>

              <TabPanel>
                {/* <SignUp /> */}
                {/* signup comp */}
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                    isRequired
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      isRequired
                    />
                    <InputRightElement>
                      <IconButton
                        variant="outline"
                        aria-label="Toggle password visibility"
                        onClick={togglePasswordVisibility}
                        icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Mobile</FormLabel>
                  <Input
                    type="text"
                    placeholder="Mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    maxLength={10}
                    isRequired
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    isRequired
                  />
                </FormControl>

                <Flex direction="row">
                  <FormControl flex="1" mr={2}>
                    <FormLabel>Street</FormLabel>
                    <Input
                      type="text"
                      placeholder="Street"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      isRequired
                    />
                  </FormControl>

                  <FormControl flex="1" ml={2}>
                    <FormLabel>City</FormLabel>
                    <Input
                      type="text"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      isRequired
                    />
                  </FormControl>
                </Flex>

                {/* Flex container for Postal Code and State */}
                <Flex direction="row">
                  <FormControl flex="1" mr={2}>
                    <FormLabel>Postal Code</FormLabel>
                    <Input
                      type="number"
                      placeholder="Postal Code"
                      value={postal_code}
                      onChange={(e) => setPostal_code(e.target.value)}
                      maxLength={6}
                      isRequired
                    />
                  </FormControl>

                  <FormControl flex="1" ml={2}>
                    <FormLabel>State</FormLabel>
                    <Input
                      type="text"
                      placeholder="State"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </FormControl>
                </Flex>

                <FormControl>
                  <FormLabel>PAN</FormLabel>
                  <Input
                    type="text"
                    placeholder="PAN"
                    value={pan}
                    onChange={(e) => setPan(e.target.value)}
                  />
                </FormControl>
                <br />
                <Button
                  colorScheme="blue"
                  width="100%"
                  onClick={handleRegister}
                >
                  Sign Up
                </Button>
                <Divider />

                <Center>
                  {/* <Text mt={4} mb={4} fontSize="large">
                      Or connect with:
                    </Text> */}
                </Center>
                {/* {isLoading && <Loader />} */}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </DIV>

  )
}
const DIV = styled.div`
  input{
    background-color: white;
    color: black;
    font-weight: 500;
    cursor: pointer;
  }
  input:hover{
    border: 2px solid #136efa;
  }
  label{
    color: white;
  }
  .chakra-tabs__tab{
    font-weight:700;
    font-size: 15px;
  }
 

`
export default Login