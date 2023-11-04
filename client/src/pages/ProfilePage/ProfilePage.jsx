import { Box, Button, Flex, Grid, Heading, Image, ListItem, Text, UnorderedList, useDisclosure } from "@chakra-ui/react"
import "./profile.css"
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'
import { Input, FormControl, FormLabel, VStack } from '@chakra-ui/react';
import { Link, Route } from "react-router-dom";
import { ProfileInfo } from "./ProfileInfo";
import { Address } from "./Address";
import { Pan } from "./Pan";
import { Booked } from "./Booked";
import { Rent } from "./Rent";



export const ProfilePage = () => {
    let [element, setelement] = useState("profile")

    return (

        <Box className="mainbox" >
            <Flex gap={"1%"} >
                <Box className="leftdiv" >
                    <Flex className="leftflex1" >
                        <Image src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" h={"60px"} w={"60px"} borderRadius={"50%"}></Image>
                        <Box textAlign={"left"}>
                            <Text>Hello,</Text>
                            <Heading fontSize={"lg"}>Amol patil</Heading>
                        </Box>
                    </Flex>
                    <Flex padding={"10px"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"} mt={"5%"}>
                        <Grid gap={"5px"}  >
                            <Flex gap={"5px"} alignItems={"center"} fontWeight={"500"} fontSize={"xl"} color={"teal"}><AiOutlineUser color="teal"/>Account Setting</Flex>
                            <UnorderedList cursor={"pointer"} marginLeft={"50px"} textAlign={"left"}>
                                <ListItem className="listitem" listStyleType={"none"} onClick={() => { setelement("profile") }} >Profile Information</ListItem>
                                <ListItem className="listitem" listStyleType={"none"} onClick={() => { setelement("address") }} >Manage Addresses</ListItem>
                                <ListItem className="listitem" listStyleType={"none"} onClick={() => setelement("pan")}>PAN Card Information</ListItem>
                            </UnorderedList>
                            <Flex gap={"5px"} alignItems={"center"} fontWeight={"500"} fontSize={"xl"} color={"teal"}><AiOutlineUser color="teal"/>Activity Status</Flex>
                            <UnorderedList cursor={"pointer"} marginLeft={"50px"} textAlign={"left"}>
                                <ListItem className="listitem" listStyleType={"none"} onClick={() => { setelement("booked") }} >Booked Properties</ListItem>
                                <ListItem className="listitem" listStyleType={"none"} onClick={() => { setelement("rented") }} >Rented Properties</ListItem>
                                <ListItem className="listitem" listStyleType={"none"} onClick={() => setelement("sold")}>Sold Properties</ListItem>
                            </UnorderedList>
                        </Grid>
                    </Flex>
                </Box>
                <Box>
                    {element == "profile" && <ProfileInfo />}
                    {element == "address" && <Address />}
                    {element == "pan" && <Pan />}
                    {element == "booked" && <Booked />}
                    {element == "rented" && <Rent />}
                </Box>
            </Flex>
        </Box>

    )
}