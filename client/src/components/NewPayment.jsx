// PaymentPage.js
import React from 'react';
import {
    ChakraProvider,
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    Button,
    VStack,
    HStack,
    useToast,
} from '@chakra-ui/react';
import { FaCreditCard, FaUser, FaCalendar, FaLock } from 'react-icons/fa';

const PaymentPage = () => {
    const toast = useToast();

    const handlePayment = () => {
        // Simulate a successful payment process
        // You can replace this with your actual payment logic
        setTimeout(() => {
            toast({
                title: 'Payment Successful',
                description: 'Property booked successfully!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        }, 500);
    };

    return (
        <ChakraProvider>
            <Box
                maxW="md"
                mx="auto"
                mt={10}
                p={6}
                boxShadow="base"
                rounded="md"
                bg="white"
            >
                <VStack spacing={4} align="stretch">
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<FaCreditCard color="gray.300" />}
                        />
                        <Input type="text" placeholder="Card Number" />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<FaUser color="gray.300" />}
                        />
                        <Input type="text" placeholder="Cardholder Name" />
                    </InputGroup>

                    <HStack spacing={4}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<FaCalendar color="gray.300" />}
                            />
                            <Input type="text" placeholder="Expiry Date" />
                        </InputGroup>

                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<FaLock color="gray.300" />}
                            />
                            <Input type="text" placeholder="CVV" />
                        </InputGroup>
                    </HStack>

                    <Button colorScheme="blue" onClick={handlePayment}>
                        Make Payment
                    </Button>
                </VStack>
            </Box>
        </ChakraProvider>
    );
};

export default PaymentPage;
