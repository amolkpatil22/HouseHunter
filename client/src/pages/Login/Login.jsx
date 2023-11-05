import React from 'react'
import {
    Button,
    FormControl, 
    FormLabel, 
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (   
      <>
        {/* <Button onClick={onOpen}>Login</Button> */}
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader mt={5} mb={2} ml={20}>Welcome to House Hunter</ModalHeader>
            <ModalHeader>LogIn</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input ref={initialRef} placeholder='Email...' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder='Password...' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter display="flex" flexDirection="column">
              <Button colorScheme='blue' width="100%">
                Login
              </Button>
              <Link 
                 onClick={onClose}
                 fontWeight="600"
                 color="green"
                 _hover={{ textDecoration: 'underline' }} // Add underline effect on hover
                 
              >forgot your password?</Link>
              
            </ModalFooter>
          </ModalContent>
        </Modal>

      </>
    )
}

export default Login