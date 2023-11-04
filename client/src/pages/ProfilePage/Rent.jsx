import React, { useRef, useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Heading, Text, Divider, ButtonGroup, Box, Button, Card, CardBody, CardFooter, Stack, Image, Flex, Grid, grid, useDisclosure
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import ImageSlider from "./ProfileComponent/ImageSlider";


let data = [
    {
        image: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"],
        description: "This is the description of the first item.",
        title: "SPitz Villa",
        status: "Booked"
    },
    {
        image: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"],
        description: "This is the description of the second item.",
        title: "SPitz Villa 2",
        status: "Booked"
    }
]

export const Rent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()




    return (
        <Box width={"600px"} mx="auto" p="20px" boxShadow="lg" borderRadius="md" bg="white">
            <Heading size={"lg"} color={"#2f742e"}>Total Properties:{data?.length || 0} </Heading>
            <Grid gap={"30px"}>
                {data?.map((e) => {
                    return (
                        <Box>
                            <Card border={"blue"} >
                                <CardBody >
                                    <Flex >
                                        <Image maxWidth={"250px"}
                                            src={e.image}
                                            alt='Green double couch with wooden legs'
                                            borderRadius='lg'
                                        />
                                        <Stack mt='6' spacing='3' alignContent={"center"} >
                                            <Heading size='md'>{e.title}</Heading>
                                            <Text>
                                                {e.description}
                                            </Text>
                                            <Text color='green.600' fontSize='2xl'>
                                                Status: {e.status} ✅
                                            </Text>
                                            <Button onClick={onOpen} colorScheme="orange" size={"sm"} width={"50%"} margin={"auto"}>View</Button>
                                        </Stack>
                                    </Flex>
                                </CardBody>
                                <Divider />
                                {/* <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='blue'>
                                        Buy now
                                    </Button>
                                    <Button variant='ghost' colorScheme='blue'>
                                        Add to cart
                                    </Button>
                                </ButtonGroup>
                            </CardFooter> */}
                            </Card>

                            <Modal isCentered="true" size={"4xl"} isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>{e.title}</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <Card border={"blue"} maxWidth={"100%"} >
                                            <CardBody >
                                                <ImageSlider images={e.image} />
                                                <Stack mt='6' spacing='3' alignContent={"center"} >
                                                    <Heading size='md'>{e.title}</Heading>
                                                    <Text>
                                                        {e.description}
                                                    </Text>
                                                    <Text color='green.600' fontSize='2xl'>
                                                        Status: {e.status} ✅
                                                    </Text>
                                                </Stack>
                                            </CardBody>
                                            <Divider />
                                        </Card>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                                            Close
                                        </Button>
                                        {/* <Button variant='ghost'>Secondary Action</Button> */}
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </Box>

                    )
                })}
            </Grid>
        </Box>
    )
}