import React, { useEffect, useRef, useState } from "react";
import { Box, Input, Button, FormControl, FormLabel, Textarea, Flex, useStatStyles, Grid, Spinner } from "@chakra-ui/react";
import { shallowEqual, useSelector } from "react-redux";

let initdata = {
    pan: ""
}

export const Pan = () => {
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
            pan: userdata?.pan,
        })
    }, [userdata])

    const handleSaveChanges = (e) => {
        e.preventDefault();
        // Implement your logic to update user account information here
        console.log("User Info:", userInfo);
    };


    return (
        <Box width={"800px"} mx="auto" p="20px" boxShadow="lg" borderRadius="md" bg="white">
            {isLoading && <Grid justifyContent={"center"} height={"400px"} alignItems={"center"}> <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            /></Grid>}

            {!isLoading && <form onSubmit={handleSaveChanges}>
                <FormControl mb="4" textAlign={"left"}>
                    <FormLabel>Pan:</FormLabel>
                    <Input isDisabled={editStatus}
                        type="text"
                        name="pan"
                        value={userInfo.pan}
                        onChange={handleInputChange}
                        isRequired
                        mb={"10px"}
                    />

                    <Input isDisabled={editStatus}
                        width={"fit-content"}
                        type="file"
                        name="panimage"
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