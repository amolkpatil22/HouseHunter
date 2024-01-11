import React, { useEffect, useRef, useState } from "react";
import { Box, Input, Button, FormControl, FormLabel, Textarea, Flex, useStatStyles, Stack, Grid, useToast } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { SpinnerLoader } from "./ProfileComponent/Spinner";
import axios from "axios";
import { GetUser } from "./actions";

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
    let dispatch = useDispatch()
    const toast = useToast()
    const token = useSelector((store) => store.authReducer.token);
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
        axios({
            method: "PATCH",
            url: "https://house-hunter-45uw.onrender.com/user/update",
            headers: { Authorization: `Bearer ${token}` },
            data: userInfo
        })
            .then((res) => {
                console.log(res); dispatch(GetUser(token)); toast({
                    title: 'Data updated successfully',

                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            })
            .catch((err) => {
                toast({
                    title: 'Failed to update',
                    description: "Please try again",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            })
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