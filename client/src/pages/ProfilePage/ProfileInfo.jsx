import React, { useEffect, useRef, useState } from "react";
import { Box, Input, Button, FormControl, FormLabel, Textarea, Flex, useStatStyles, Stack, Spinner, Grid } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { SpinnerLoader } from "./ProfileComponent/Spinner";
let initdata = {
    name: "",
    email: "",
    password: "",
    mobile: "",
}

export const ProfileInfo = () => {
    let [editStatus, setEditStatus] = useState(true)

    const [userInfo, setUserInfo] = useState(initdata);


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

        setUserInfo({ name: userdata?.name, email: userdata?.email, password: userdata?.password, mobile: userdata?.mobile })
    }, [userdata])

    const handleSaveChanges = (e) => {
        e.preventDefault();
        // Implement your logic to update user account information here
        console.log("User Info:", userInfo);
    };




    return (
        <Box width={"800px"} mx="auto" p="20px" boxShadow="lg" borderRadius="md" bg="white">

            {isLoading && <SpinnerLoader />}

            {!isLoading && <form onSubmit={handleSaveChanges}>
                <FormControl mb="4">
                    <FormLabel>Name:</FormLabel>
                    <Input isDisabled={editStatus}
                        type="text"
                        name="name"
                        value={userInfo?.name}
                        onChange={handleInputChange}
                        isRequired
                    />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Email:</FormLabel>
                    <Input
                        isDisabled={editStatus}
                        type="text"
                        name="email"
                        value={userInfo?.email}
                        onChange={handleInputChange}
                        isRequired
                    />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>New Password:</FormLabel>
                    <Input
                        isDisabled={editStatus}
                        type="password"
                        name="password"
                        value={userInfo?.password}
                        onChange={handleInputChange}
                        isRequired
                    />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Mobile Number:</FormLabel>
                    <Input
                        isDisabled={editStatus}
                        type="tel"
                        name="mobile"
                        value={userInfo?.mobile}
                        onChange={handleInputChange}
                        isRequired
                    />
                </FormControl>
                {/* <FormControl mb="4">
                    <FormLabel>Address:</FormLabel>
                    <Textarea
                        isDisabled={editStatus}
                        name="address"
                        value={userInfo?.address}
                        onChange={handleInputChange}
                        isRequired
                    />
                </FormControl> */}
                {editStatus == true && <Button onClick={() => setEditStatus(false)} colorScheme="orange">Edit Details</Button>}
                {editStatus == false && <Button type="submit" colorScheme="blue">Save Changes</Button>}

            </form>}
        </Box>
    )
}