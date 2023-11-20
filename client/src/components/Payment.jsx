import {
  Box,
  Image,
  Flex,
  Input,
  FormLabel,
  Checkbox,
  CheckboxGroup,
  Button,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Heading,
  ModalCloseButton,
  useDisclosure,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from 'axios';
import { FaCheck } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Payment() {
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cvv, setCvv] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [carddata, setCarddata] = useState([]);
  const [status, setStatus] = useState(false);
  const [upi1, setUpi1] = useState("");
  const [upi2, setUpi2] = useState("");
  const [upi3, setUpi3] = useState("");
  const [bill, setBill] = useState(0);
  const [propertiesData, setPropertiesData] = useState([])
  const { id } = useParams();
  const property = propertiesData?.find((e) => e._id === id)
  const [isLoading, setisLoading] = useState(false)
  console.log(property)
  useEffect(() => {
    setisLoading(true)
    axios({
      url: "https://househunter.up.railway.app/properties/rent",
      method: "GET",
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` }
    }).then((res) => { setisLoading(false); setPropertiesData(res.data.properties) })
      .catch((err) => { setisLoading(false); console.log(err) })
  }, [])
  function postorders() {
    localStorage.setItem("cartItems", JSON.stringify([]));
  }
  const handleSubmitForm = async (e) => {
    e.preventDefault();
  
    try {
      // Validate card inputs before initiating payment
      if (!name || !cardNum || !cvv || !month || !year) {
        throw new Error("Please fill in all card details");
      }
  
      // Card number should be 16 digits (you can adjust the length requirement as needed)
      if (cardNum.length !== 16 || isNaN(cardNum)) {
        throw new Error("Please enter a valid 16-digit card number");
      }
  
      // CVV should be a 3-digit number
      if (cvv.length !== 3 || isNaN(cvv)) {
        throw new Error("Please enter a valid 3-digit CVV");
      }
      setisLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus(true);
      toast({
        title: `Price ${property.price} \n Payment Successful`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      navigate("/");
    } catch (error) {
      console.error("Payment failed:", error.message);
      toast({
        title: error.message || "Payment Failed",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setisLoading(false);
    }
  };

  const handleSubmitUPI = async (e) => {
    e.preventDefault();
  
    try {
      
      if (!upi1 || !upi2 || !upi3) {
        throw new Error("Please enter UPI IDs");
      }
      setisLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus(true);
      toast({
        title: `Price ${property.price} \n Payment Successful`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      navigate("/");
    } catch (error) {
      console.error("Payment failed:", error.message);
      toast({
        title: error.message || "Payment Failed",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setisLoading(false);
    }
  };
  
  
  return (
    <div>
      <Flex
      justifyContent={{
        base: "center",
        sm: "center",
        md: "space-around",
        lg: "space-around",
        xl: "space-around",
        "2xl": "space-around",
      }}
      direction={{
        base: "column",
        sm: "column",
        md: "row",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
    >
      <Box w="50%">
        <Image
          src='https://photos.zillowstatic.com/fp/82559ca5dad1427b97537e8e365d18cb-cc_ft_1152.webp'
          w="80%"
          margin="75px"
        />
        <Image
          src='https://photos.zillowstatic.com/fp/642514f0f21a90ccab5b2a17e55cee68-cc_ft_1152.webp'
          w="80%"
          margin="75px"
        />
      </Box>

      <Box w="50%" m="30px">
        <Box>
          <Heading as="h2" size="lg" mb="10px" color="blue.200">
            Total Amount : {property?.price}
          </Heading>
        </Box>
        <form onSubmit={handleSubmitForm}>
          <FormLabel p="10px" color="white" bg="blue.200">
            Credit/Debit Card
          </FormLabel>

          <Box mb="10px">
            <Input
              w="95%"
              type="text"
              placeholder="CardHolder's Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Flex w="95%" mb="10px" justifyContent="space-around">
            <Box w="50%">
              <Input
                type="number"
                placeholder="Card Number"
                name="cardNum"
                value={cardNum}
                onChange={(e) => setCardNum(e.target.value)}
              />
            </Box>
            <Box w="49%">
              <Input
                type="number"
                placeholder="CVV"
                name="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </Box>
          </Flex>
          <Flex w="95%" justifyContent="space-around">
            <Box w="50%">
              <Input
                type="number"
                placeholder="MM/YY"
                name="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
            </Box>
            <Box w="49%">
              <Input
                type="number"
                placeholder="Expiry Year"
                name="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Box>
          </Flex>
          <Box p="5px">
            <Checkbox mt="10px" defaultChecked>
              Save Card Details For Future
            </Checkbox>
          </Box>
          <Box mt="10px" p="5px">
            {status ? (
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader color="green" fontSize="40px" textAlign="center">
                    Thank You!
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="50%"
                    >
                      <FaCheck color="green" fontSize="150px" />
                    </Flex>
                    <Flex justifyContent="center" alignItems="center">
                      <Text
                        color="blue.200"
                        fontSize="18px"
                        as="b"
                        textAlign="center"
                        mt="30px"
                      >
                        Payment Successful
                      </Text>
                    </Flex>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={() => {
                        onClose();
                        navigate("/checkout");
                      }}
                    >
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            ) : (
              <Button
                color="green"
                onClick={() => {
                  onOpen();
                  postorders();
                }}
                type="submit"
                bg="blue.200"
                _hover={{
                  bg: "pink.100",
                }}
              >
                Pay Now
              </Button>
            )}
          </Box>
        </form>
        <Box mt="30px">
          <FormLabel p="10px" color="white" bg="blue.200">
            UPI
          </FormLabel>
          <Box>
            <HStack>
              <Image
                src="https://cdn-icons-png.flaticon.com/512/270/270799.png?w=740&t=st=1683531867~exp=1683532467~hmac=c33853ef2dffd7dd06be7379621e7f0e136565092f237d9bca174767fd8fb224"
                width="50px"
                borderRadius="50%"
              />
              <Input
                ml="30px"
                type="text"
                placeholder="Enter UPI ID"
                w="30%"
                value={upi1}
                onChange={(e) => setUpi1(e.target.value)}
              />
              <Button
                color="green"
                bg="blue.200"
                onClick={handleSubmitUPI}
                _hover={{
                  bg: "pink.200",
                }}
              >
                Pay Now
              </Button>
            </HStack>
            <HStack mt="20px">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/825/825454.png?w=740&t=st=1683532131~exp=1683532731~hmac=bb1126fbad4f895b4b4a3b586a6ffba13b903c34ca6c89f30b9117f86354b5ca"
                width="50px"
                borderRadius="50%"
              />
              <Input
                ml="30px"
                type="text"
                placeholder="Enter UPI ID"
                w="30%"
                value={upi2}
                onChange={(e) => setUpi2(e.target.value)}
              />
              <Button
                color="green"
                bg="blue.200"
                onClick={handleSubmitUPI}

                _hover={{
                  bg: "pink.200",
                }}
              >
                Pay Now
              </Button>
            </HStack>
            <HStack mt="20px">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/196/196566.png?w=740&t=st=1683532246~exp=1683532846~hmac=15e1bff948042d30147dcb7b74079d842179146776d00939059556ed755dfd23"
                width="50px"
                borderRadius="50%"
              />
              <Input
                ml="30px"
                type="text"
                placeholder="Enter UPI ID"
                w="30%"
                value={upi3}
                onChange={(e) => setUpi3(e.target.value)}
              />
              <Button
                color="green"
                bg="blue.200"
                onClick={handleSubmitUPI}

                _hover={{
                  bg: "pink.200",
                }}
              >
                Pay Now
              </Button>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Flex>
    </div>
  )
}
export default Payment
