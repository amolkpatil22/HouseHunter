import React, { useEffect, useState } from 'react'
import {
    Button,
    Text,
    FormControl, 
    FormLabel, 
    Input,
    Modal,
    Center,
  Heading,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useToast,
    InputGroup,
  InputRightElement,
  IconButton,
  } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Admin = ({adminModal}) => {

  // const {
  //   isOpen: modalIsOpen,
  //   onOpen: modalOpen,
  //   onClose: modalClose,
  // } = useDisclosure();

    const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    
    const handleLogin = () => {
        let User = {
          email,
          password,
        };
        console.log(User);
        onClose()
        
        // dispatch(userLogin(User))
        //   .then((res) => {
        //     toast({
        //       title: "Login Successful",
        //       status: "success",
        //       duration: 2000,
        //       isClosable: true,
        //       position: "top",
        //     });
        //     setEmail("")
        //    setPassword("")
        //     closeMainModal();
        //     navigate("/");
        //   })
        //   .catch((error) => {
        //     toast({
        //       title: "Wrong Crendentials.",
        //       description: "check password.",
        //       status: "error",
        //       duration: 2000,
        //       isClosable: true,
        //       position: "top",
        //     });
        //   });
      };
    
      useEffect(()=>{
        onOpen()
      },[])
    
      
    
    return (   
      <>
        {/* <Button onClick={onOpen} variant="link">
          <Text
            textDecoration="underline"
            color="blue.500"
            _hover={{ color: 'blue.700' }}
          >
            Login as Admin
          </Text>
        </Button> */}
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <Center>
              <Heading
                as="h4"
                size="md"
                fontSize="2xl"
                mt={5}
                fontFamily="serif"
                fontWeight="semibold"
              >
                Welcome to House Hunter Admin Section
              </Heading>
            </Center>
            <FormControl>
                    <FormLabel>Admin Email</FormLabel>
                    <Input
                      placeholder="Admin Email..."
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
                    Admin Login
                  </Button>
            </ModalBody>
  
          
          </ModalContent>
        </Modal>

      </>
    )
}

export default Admin