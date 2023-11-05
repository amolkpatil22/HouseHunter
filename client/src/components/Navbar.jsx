import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Link,
  Divider,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  InputGroup,
  InputRightElement,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  FormControl,
  FormLabel,
  useToast,
  IconButton,
  Flex
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { logo, user } from "../assets/index";
// import Login from "../Pages/Login";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link as NewLink } from "react-router-dom";
// import Login from "../pages/Login/Login";
import {
  logoutAction,
  userLogin,
  userRegister,
} from "../store/Authentication/action";
import Admin from "../pages/Login/Admin";

import SignUp from "../pages/Login/SignUp";

import Loader from "./Loading";

// import { logoutUser } from "../Redux/Authentication/action";
// import LoginAsAdmin from "../Pages/LoginAsAdmin";

const Navbar = () => {
  const {
    isOpen: mainModalIsOpen,
    onOpen: openMainModal,
    onClose: closeMainModal,
  } = useDisclosure();
  const {
    isOpen: drawerisOpen,
    onOpen: drawerOpen,
    onClose: drawerClose,
  } = useDisclosure();
  const {
    isOpen: modalIsOpen,
    onOpen: modalOpen,
    onClose: modalClose,
  } = useDisclosure();

  const btnRef = React.useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.authReducer.isAuth);
  // const adminToken = useSelector((store) => store.adminReducer.token);
  // console.log(user);
    // const isLoggedIn = !!token || !!adminToken|| null;
  // const isLoggedIn = true;

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
  const [mobile, setMobile]= useState("")
  const [address, setAddress]= useState("")
  const [street, setStreet]= useState("")
  const [city, setCity]= useState("");
  const [postal_code, setPostal_code]= useState(null)
  const [state, setState]= useState("")
  const[pan, setPan]= useState("")

 
const isLoggedIn = !!token || null;


  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("username", JSON.stringify(username));
  }, [token,username])



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
    if(name===""||
      email==="" ||
      password==="" ||
      mobile==="" ||
      address==="" ||
      street==="" ||
      city==="" ||
      postal_code==="" ||
      state==="" ||
      pan===""){
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
      isLoading=false
    });
  };
  const handleLogin = () => {
    let User = {
      email,
      password,
    };
    console.log(User);
    if(email==="" ||
    password===""){
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
        closeMainModal();
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

  const handleLogout = () => {
    dispatch(logoutAction(token)).then((res) => {
      toast({
        title: "Logout Successful",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    });

    navigate("/");
  };

  const handleAdmin = () => {
    closeMainModal()
    navigate("/adminlogin");
  };
  const handleAdminRegister = () => {
    navigate("/adminRegister");
  };

  const id = localStorage.getItem("id");
  const handleHomepage = () => {
    // const profileEdit = user.find((el) => el._id === id);

    navigate(`/`);
  };
   
  return (
    <>
      <Box
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
        justifyContent="space-between"
        // p={3}
        h={20}
        alignItems="center"
        boxShadow="lg"
      >
        {/* First Links */}
        <Box display="flex" justifyContent="space-around" w="35%">
          <NewLink to="/buyhouse">Buy</NewLink>
          <NewLink to="/renthouse">Rent</NewLink>
          <NewLink to="/sellhouse">Sell</NewLink>
          <NewLink to="/homeloans">Home Loans</NewLink>
          <NewLink to="/agentfinder">Agent Finder</NewLink>
        </Box>

        {/* Logo */}

        <Box onClick={handleHomepage} _hover={{ cursor: "pointer" }}>
          <Image
            w="40"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vrgc8ioxl9e1x9vpxjsb.png"
          />
        </Box>

        {/* Other Links */}

        <Box w="35%" display="flex" justifyContent="space-around">
          <NewLink to="/rentals">Manage Rentals</NewLink>
          <NewLink to="/advertisement">Advertisement</NewLink>
          <NewLink to="/help"> Help</NewLink>
          {isLoggedIn ? (
            <>
              <Menu>
                <MenuButton>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtT3AdlQYcUV1lL8eCq7_-7sR6owE5fSSIXFYR3grhiD96GlH-&s"
                    w={6}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                  {/* <NewLink to="/advertisement">Advertisement</NewLink> */}
                  <NewLink to="/profile">Profile</NewLink>
                  </MenuItem>
                  {/* <MenuItem>
                    <NewLink to="/wishlist">Wishlist</NewLink>
                  </MenuItem> */}
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <Link onClick={openMainModal}>Sign In</Link>
          )}
        </Box>
      </Box>

      {/* Hamburger */}

      <Box
        display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
        justifyContent="space-between"
        p={3}
        alignItems="center"
        boxShadow="lg"
      >
        <HamburgerIcon onClick={drawerOpen} _hover={{ cursor: "pointer" }} />

        <Drawer
          isOpen={drawerisOpen}
          placement="left"
          size="100%"
          onClose={drawerClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <Center>
                <Box>
                  <Image
                    w="36"
                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vrgc8ioxl9e1x9vpxjsb.png"
                  />
                </Box>
              </Center>
            </DrawerHeader>
            <DrawerCloseButton />

            <DrawerBody>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                        <NewLink to="/buyhouse">Buy</NewLink>
                      </Box>
                      {/* <AccordionIcon /> */}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                        <NewLink to="/renthouse">Rent</NewLink>
                      </Box>
                      {/* <AccordionIcon /> */}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                        <NewLink to="/sellhouse">Sell</NewLink>
                      </Box>
                      {/* <AccordionIcon /> */}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                      {isLoggedIn?( <NewLink to="/profile">Profile</NewLink>): 
                      (<NewLink to="/advertisement">Advertisement</NewLink>)}
                        {/* <NewLink to="/advertisement">Advertisement</NewLink> */}
                      </Box>
                      {/* <AccordionIcon /> */}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                        <NewLink to="/homeloans">Home Loans</NewLink>
                      </Box>
                      {/* <AccordionIcon /> */}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                        <NewLink to="/agentfinder">Agent Finder</NewLink>
                      </Box>
                      {/* <AccordionIcon /> */}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                        <NewLink to="/rentals">Manage Rentals</NewLink>
                      </Box>
                      {/* <AccordionIcon /> */}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>

                {/* <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                        <Link>Advertise</Link>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem> */}

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                      {isLoggedIn?( <button onClick={handleLogout}>Logout</button>): 
                      (<NewLink to="/help">Help</NewLink>)}
                      </Box>
                      {/* <AccordionIcon /> */}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>
              </Accordion>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Box onClick={handleHomepage} _hover={{ cursor: "pointer" }}>
          <Image
            w="20"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vrgc8ioxl9e1x9vpxjsb.png"
            alt="logo"
          />
        </Box>


        <Box display="flex" justifyContent="space-around">
          {isLoggedIn ? (
            <>
              <Menu>
                <MenuButton>
                  <Image src="" w={6} />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <NewLink to="/profile">Profile</NewLink>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <Link onClick={openMainModal}>Sign In</Link>
          )}
          {/* {isAuth?<Link onClick={handleLogout}>LogOut</Link>:<Link onClick={openMainModal}>SignIn</Link>} */}
        </Box>
      </Box>

      {/* Sign in Modal */}
      <Modal isOpen={mainModalIsOpen} onClose={closeMainModal}>
        <ModalOverlay />
        <ModalContent borderRadius={20}>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Heading
                as="h4"
                size="md"
                fontSize="2xl"
                mt={5}
                fontFamily="serif"
                fontWeight="semibold"
              >
                Welcome to House Hunter
              </Heading>
            </Center>

            <Tabs mt={5} index={activeTab} onChange={(index) => setActiveTab(index)}>
              <TabList>
                <Tab>Sign In</Tab>
                <Tab>Register</Tab>
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
                      _hover={{
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                      onClick={handleAdmin}
                    >
                      Login as Admin
                    </Text>
                    
                   
                  </Center>
                  <Center>Or</Center>
                  <Center>
                    <Text
                      mt={2}
                      mb={2}
                      fontSize="large"
                      fontWeight="semibold"
                      _hover={{
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                      onClick={handleAdminRegister}
                    >
                      Register as Admin
                    </Text>

                  </Center> */}
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
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Login as Admin

      <Modal isOpen={modalIsOpen} onClose={modalClose}>
        <ModalOverlay />
        <ModalContent borderRadius={20}>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Heading
                as="h4"
                size="md"
                fontSize="2xl"
                mt={5}
                fontFamily="serif"
                fontWeight="semibold"
              >
                Welcome to HomeSweeter Admin
              </Heading>
            </Center>

            <Tabs mt={5}>
              <TabList>
                <Tab>Sign In Admin</Tab>
                <Tab>Register as Admin</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <LoginAsAdmin />
                  <Center>
                    <Button
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
                    </Button>
                  </Center>

                  <Divider />

                  <Center>
                    <Text
                      mt={4}
                      mb={4}
                      fontSize="large"
                      fontWeight="semibold"
                      _hover={{
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                      onClick={modalOpen}
                    >
                      Login as Admin
                    </Text>
                  </Center>
                </TabPanel>

                <TabPanel>
                  <Signup />
                  <Divider />

                  <Center>
                    <Text mt={4} mb={4} fontSize="large">
                      Or connect with:
                    </Text>
                  </Center>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal> */}
    </>
  );
};

export default Navbar;
