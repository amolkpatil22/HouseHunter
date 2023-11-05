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


let data = [{
    description: "Welcome to this spacious 5-bedroom family home in a quiet suburban neighborhood. The property offers a large backyard with a pool, perfect for summer gatherings. The open-concept kitchen and living area make it ideal for entertaining. Don't miss out on this fantastic opportunity!",
    address: "123 Oak Street, Pleasantville, CA 98765",
    street_name: "Oak Street",
    state: "Maharashtra",
    zipcode: 98765,
    beds: 5,
    baths: 3,
    tags: ["Swimming Pool", "Open-Concept", "Family-Friendly"],
    images: [
        "https://myhousemap.in/wp-content/uploads/single-floor-normal-house-front-elevation-designs-47%C3%9734-ft.avif",
        "https://myhousemap.in/wp-content/uploads/single-floor-normal-house-front-elevation-designs-47%C3%9734-ft.avif",
        "https://myhousemap.in/wp-content/uploads/single-floor-normal-house-front-elevation-designs-47%C3%9734-ft.avif"
    ],
    living_area: 2500,
    type: "sqft",
    status: "FOR_SALE",
    price: 450000,
    name: "Family Oasis",
    userID: "user123"
}, {
    description: "Welcome to this spacious 5-bedroom family home in a quiet suburban neighborhood. The property offers a large backyard with a pool, perfect for summer gatherings. The open-concept kitchen and living area make it ideal for entertaining. Don't miss out on this fantastic opportunity!",
    address: "123 Oak Street, Pleasantville, CA 98765",
    street_name: "Oak Street",
    state: "New State",
    zipcode: 98765,
    beds: 5,
    baths: 3,
    tags: ["Swimming Pool", "Open-Concept", "Family-Friendly"],
    images: [
        "https://myhousemap.in/wp-content/uploads/single-floor-normal-house-front-elevation-designs-47%C3%9734-ft.avif",
        "https://myhousemap.in/wp-content/uploads/single-floor-normal-house-front-elevation-designs-47%C3%9734-ft.avif",
        "https://myhousemap.in/wp-content/uploads/single-floor-normal-house-front-elevation-designs-47%C3%9734-ft.avif"
    ],
    living_area: 2500,
    type: "sqft",
    status: "FOR_SALE",
    price: 450000,
    name: "Family Oasis",
    userID: "user123"
}]

export const Sold = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()




    return (
        <Box width={"800px"} mx="auto" p="20px" boxShadow="lg" borderRadius="md" bg="white">
            <Heading mb={"20px"} size={"lg"} color={"#2f742e"}>Total Properties:{data?.length || 0} </Heading>
            <Grid gap={"30px"}>
                {data?.map((e) => {
                    return (
                        <Box>
                            <Card border={"blue"} >
                                <CardBody >
                                    <Flex gap={"10px"}>
                                        <Image width={"300px"}
                                            src={e.images[0]}
                                            alt='Green double couch with wooden legs'
                                            borderRadius='lg'
                                        />
                                        <Stack mt='6' spacing='3' alignContent={"center"} >
                                            <Heading size='md'>{e.name}</Heading>
                                            <Text overflow={"hidden"} maxHeight={"50px"}>
                                                {e.description}
                                            </Text>
                                            <Text color='green.600' fontSize='xl'>
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
                                    <ModalHeader>{e.name}</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <Card border={"blue"} maxWidth={"100%"} >
                                            <CardBody >
                                                <ImageSlider images={e.images} />
                                                <Stack mt='6' spacing='3' alignContent={"center"} >

                                                    <Text >
                                                        {e.description}
                                                    </Text>
                                                    <Flex justifyContent={"space-between"}>
                                                        <Text ><Heading marginRight={"10px"} display={"inline"} size={"sm"}>🟢Status:</Heading>{e.status}</Text>
                                                        <Text ><Heading marginRight={"10px"} display={"inline"} size={"sm"}>🟢Living Area:</Heading>{`${e.living_area} ${e.type}`}</Text>
                                                        <Text ><Heading marginRight={"10px"} display={"inline"} size={"sm"}>🟢Living Area:</Heading>${e.price}</Text>
                                                    </Flex>
                                                    <Text><Heading marginRight={"10px"} display={"inline"} size={"sm"}>🟢Address:</Heading>{`${e.address}, ${e.street_name},${e.zipcode}, ${e.state}`}</Text>
                                                    <Text><Heading marginRight={"10px"} display={"inline"} size={"sm"}>🟢Additional Information:</Heading>{`Beds: ${e.beds}  Baths:${e.baths}`}</Text>

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