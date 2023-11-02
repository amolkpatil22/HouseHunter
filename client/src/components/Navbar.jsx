import React, { useState } from "react";
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
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";
// import Signup from "../Pages/Signup";
// import { logo, user } from "../assets/index";
// import Login from "../Pages/Login";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link as NewLink } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
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

  // const user = useSelector((store) => store.userReducer.user);
//   const token = useSelector((store) => store.authReducer.token);
//   const adminToken = useSelector((store) => store.adminReducer.token);
  // console.log(user);
//   const isLoggedIn = !!token || !!adminToken|| null;
    const isLoggedIn = false;

  const handleLogout = () => {
    // dispatch(logoutUser());
    // localStorage.removeItem("token");
    // localStorage.removeItem("adminToken");
    navigate("/");
  };

  const handleAdmin = () => {
    navigate("/adminLogin");
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

        <Box onClick={handleHomepage} _hover={{ cursor: "pointer" }} >
          <Image w="40" src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vrgc8ioxl9e1x9vpxjsb.png" />
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
                  <Image src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vrgc8ioxl9e1x9vpxjsb.png" w={6} />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <NewLink to="/profile">Profile</NewLink>
                  </MenuItem>
                  <MenuItem>
                    <NewLink to="/wishlist">Wishlist</NewLink>
                  </MenuItem>
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
                  <Image w="36" src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vrgc8ioxl9e1x9vpxjsb.png" />
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
                      <NewLink to="/advertisement">Advertisement</NewLink>
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
                      <NewLink to="/help"> Help</NewLink>
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
          <Image w="20" src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vrgc8ioxl9e1x9vpxjsb.png" alt="logo" />
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

            <Tabs mt={5}>
              <TabList>
                <Tab>Sign In</Tab>
                <Tab>Register</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Login />
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
                  </Center>
                </TabPanel>

                <TabPanel>
                  <SignUp />
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
