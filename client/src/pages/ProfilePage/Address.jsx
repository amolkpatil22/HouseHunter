import React, { useEffect, useRef, useState } from "react";
import { Box, Input, Button, FormControl, FormLabel, Textarea, Flex, useStatStyles, Stack, Grid } from "@chakra-ui/react";
import { shallowEqual, useSelector } from "react-redux";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import {  SpinnerLoader } from "./ProfileComponent/Spinner";

let initdata = {
    address: "",
    street: "",
    city: "",
    state: "",
    postal_code: "",
}

export const Address = () => {
    const [userInfo, setUserInfo] = useState(initdata);
    let [editStatus, setEditStatus] = useState(true)

    const { userdata, isLoading, isError } = useSelector((store) => {
        return {
            isLoading: store.profileReducer.isLoading,
            isError: store.profileReducer.isError,
            userdata: store.profileReducer.userdata,
        }
    }, shallowEqual)


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    useEffect(() => {
        setUserInfo({
            address: userdata?.address,
            street: userdata?.street,
            city: userdata?.city,
            state: userdata?.state,
            postal_code: userdata?.postal_code,
            country: userdata?.country
        })
    }, [userdata])


    const handleSaveChanges = (e) => {
        e.preventDefault();
        // Implement your logic to update user account information here
        console.log("User Info:", userInfo);
    };



    return (
        <Box width={"800px"} mx="auto" p="20px" boxShadow="lg" borderRadius="md" bg="white">

            {isLoading && <SpinnerLoader></SpinnerLoader>}

            {!isLoading && <form onSubmit={handleSaveChanges}>
                <FormControl mb="4">
                    <FormLabel>address:</FormLabel>
                    <Input isDisabled={editStatus}
                        type="text"
                        name="address"
                        value={userInfo?.address}
                        onChange={handleInputChange}
                        isRequired
                    />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Street:</FormLabel>
                    <Input
                        isDisabled={editStatus}
                        type="text"
                        name="street"
                        value={userInfo?.street}
                        onChange={handleInputChange}
                        isRequired
                    />
                </FormControl>
                <Flex gap={"10px"}>
                    <FormControl mb="4">
                        <FormLabel>City:</FormLabel>
                        <Input
                            isDisabled={editStatus}
                            type="text"
                            name="city"
                            value={userInfo?.city}
                            onChange={handleInputChange}
                            isRequired
                        />
                    </FormControl>
                    <FormControl mb="4">
                        <FormLabel>Postal Code:</FormLabel>
                        <Input
                            isDisabled={editStatus}
                            type="number"
                            name="postal_code"
                            value={userInfo?.postal_code}
                            onChange={handleInputChange}
                            isRequired
                        />
                    </FormControl>
                </Flex>
                <FormControl mb="4">
                    <FormLabel>State:</FormLabel>
                    <Input
                        isDisabled={editStatus}
                        type="text"
                        name="state"
                        value={userInfo?.state}
                        onChange={handleInputChange}
                        isRequired
                    />
                </FormControl>
                {editStatus == true && <Button onClick={() => setEditStatus(false)} colorScheme="orange">Edit Details</Button>}
                {editStatus == false && <Button type="submit" colorScheme="blue">
                    Save Changes
                </Button>}
            </form>}
        </Box>
    )
}