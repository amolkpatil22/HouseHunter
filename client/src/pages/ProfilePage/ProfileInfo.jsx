import React, { useRef, useState } from "react";
import { Box, Input, Button, FormControl, FormLabel, Textarea, Flex, useStatStyles } from "@chakra-ui/react";

let initdata = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
}

export const ProfileInfo = () => {
    const [userInfo, setUserInfo] = useState(initdata);
    let [editStatus, setEditStatus] = useState(true)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    const handleSaveChanges = (e) => {
        e.preventDefault();
        // Implement your logic to update user account information here
        console.log("User Info:", userInfo);
    };




    return (
        <Box width={"600px"} mx="auto" p="20px" boxShadow="lg" borderRadius="md" bg="white">
            <form onSubmit={handleSaveChanges}>
                <FormControl mb="4">
                    <FormLabel>Name:</FormLabel>
                    <Input isDisabled={editStatus}
                        type="text"
                        name="name"
                        value={userInfo.name}
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
                        value={userInfo.email}
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
                        value={userInfo.password}
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
                        value={userInfo.mobile}
                        onChange={handleInputChange}
                        isRequired
                    />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Address:</FormLabel>
                    <Textarea
                        isDisabled={editStatus}
                        name="address"
                        value={userInfo.address}
                        onChange={handleInputChange}
                        isRequired
                    />
                </FormControl>
                {editStatus == true && <Button onClick={() => setEditStatus(false)} colorScheme="orange">Edit Details</Button>}
                {editStatus == false && <Button type="submit" colorScheme="blue">Save Changes</Button>}

            </form>
        </Box>
    )
}