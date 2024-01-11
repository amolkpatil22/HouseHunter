import React, { useEffect, useRef, useState } from "react";
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
import axios from "axios";
import {  SpinnerLoader } from "./ProfileComponent/Spinner";


export const Booked = ({ token }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        setisLoading(true)
        axios({
            url: "https://house-hunter-45uw.onrender.com/properties/bought",
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => { setisLoading(false); if (res.data.properties) { setdata(res.data.properties) } })
            .catch((err) => { setisLoading(false); console.log(err) })
    }, [])


    return (
        <Box width={"800px"} mx="auto" p="20px" boxShadow="lg" borderRadius="md" bg="white">
            <Heading mb={"20px"} size={"lg"} color={"#2f742e"}>Total Properties:{data?.length || 0} </Heading>
            {isLoading && <SpinnerLoader />}
            {!isLoading && <Grid gap={"30px"}>
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
                                         
                                            <Text color='green.600' fontSize='xl'>
                                                Status: Booked ✅
                                            </Text>
                                            <Text overflow={"hidden"} maxHeight={"50px"}>
                                               Description: {e.description}
                                            </Text>
                                            <Heading size='sm' fontWeight={"medium"}>Booked from: {e.name}</Heading>
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

                                                    <Text overflow={"hidden"} maxHeight={"100px"}>
                                                        {e.description}
                                                    </Text>
                                                    <Flex justifyContent={"space-between"}>
                                                        <Text ><Heading marginRight={"10px"} display={"inline"} size={"sm"}>🟢Status:</Heading>{e.status}</Text>
                                                        <Text ><Heading marginRight={"10px"} display={"inline"} size={"sm"}>🟢Living Area:</Heading>{`${e.living_area} ${e.type}`}</Text>
                                                        <Text ><Heading marginRight={"10px"} display={"inline"} size={"sm"}>🟢Price:</Heading>${e.price}</Text>
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
            </Grid>}
        </Box>
    )
}