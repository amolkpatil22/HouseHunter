import React, { useState } from "react";
import { IconButton, Input, Stack, useColorModeValue, Heading } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./TopSection.css";

const TopSection = () => {
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchParam !== "") {
      const queryParams = new URLSearchParams();
      queryParams.set("search", searchParam);
      navigate(`/buyhouse?query=${searchParam}`);
    }
  };

  return (
    <div id="topsection" className="centered">
      <div>
        <div>
          <Heading
            fontFamily="'Ivar Headline', 'Ivar Headline Subset', 'Adjusted Times', 'Adjusted Times New Roman', 'Times New Roman', serif"
            fontSize={{ base: '18px', sm: '15px', md: '36px', lg: '36px' }}
            color="white"
            fontWeight="bold"
          >
            Agents. Tours. Loans. Homes.
          </Heading>
        </div>

        <Stack direction={"row"} gap={0} marginTop={"10px"}>
          <Input
            padding={"24px 20px"}
            placeholder={"Search..."}
            bg={useColorModeValue("white.500", "white.700")}
            border={0}
            _focus={{
              bg: "white.300",
            }}
            width={{ base: "100%", sm: "80%", md: "70%", lg: "120%" }}
            borderTopRightRadius={"none"}
            borderBottomRightRadius={"none"}
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          />
          <IconButton
            bg={useColorModeValue("blue.400", "blue.800")}
            color={useColorModeValue("white", "white.800")}
            _hover={{
              bg: "green.600",
            }}
            padding={"24px 0px"}
            width={{ base: "40px", sm: "60px", md: "70px", lg: "80px" }}
            borderTopLeftRadius={"none"}
            borderBottomLeftRadius={"none"}
            aria-label="Search"
            icon={<BiSearch />}
            onClick={handleSearch}
          />
        </Stack>
      </div>
    </div>
  );
};

export default TopSection;
