import React from "react";
import Image from "next/image";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Logo } from "../assets";

const FooterSection = () => {
  return (
    <Box bg={"#f8f8f8"} py={"60px"} px={"40px"}>
      <Flex
        position={"relative"}
        direction={{ base: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={{ base: "space-between", lg: "flex-start" }}
        mx={"auto"}
        maxW={"1230px"}
      >
        <Box mb={12} mx={{ base: "auto", lg: "0" }} w={{ lg: "20%" }}>
          <Image src={Logo} alt="Logo" />
        </Box>

        <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent={{ lg: "space-between" }}
        >
          <Box mb={"4"} w={{ lg: "35%" }} mx={{ lg: "8" }}>
            <Text
              as={"h5"}
              fontFamily={"Source Sans Pro"}
              fontSize={{ base: "15.77px", md: "18.84px" }}
              color={"#0e2368"}
              fontWeight={"600"}
              mb={"2"}
              ml={"0.5"}
            >
              Contact Us
            </Text>
            <Text
              as={"p"}
              fontFamily={"Source Sans Pro"}
              fontSize={{ base: "8.76px", md: "14.66px" }}
              color={"#646874"}
              mb={"2"}
              w={{ base: "95%" }}
            >
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </Text>
            <Text
              as={"p"}
              fontFamily={"Source Sans Pro"}
              fontSize={{ base: "8.76px", md: "14.66px" }}
              color={"#646874"}
              mb={"2"}
            >
              example2020@gmail.com
            </Text>
            <Text
              as={"p"}
              fontFamily={"Source Sans Pro"}
              fontSize={{ base: "8.76px", md: "14.66px" }}
              color={"#646874"}
            >
              (904) 443-0343
            </Text>
          </Box>
          <Box mb={"2"}>
            <Text
              as={"h5"}
              fontFamily={"Source Sans Pro"}
              fontSize={{ base: "15.77px", md: "18.84px" }}
              color={"#0e2368"}
              fontWeight={"600"}
              mb={"2"}
              ml={"0.5"}
            >
              More
            </Text>
            <Text
              as={"p"}
              fontFamily={"Source Sans Pro"}
              fontSize={{ base: "8.76px", md: "14.66px" }}
              color={"#646874"}
              mb={"2"}
              w={"95%"}
            >
              About Us
            </Text>
            <Text
              as={"p"}
              fontFamily={"Source Sans Pro"}
              fontSize={{ base: "8.76px", md: "14.66px" }}
              color={"#646874"}
              mb={"2"}
            >
              Products
            </Text>
            <Text
              as={"p"}
              fontFamily={"Source Sans Pro"}
              fontSize={{ base: "8.76px", md: "14.66px" }}
              color={"#646874"}
              mb={"2"}
            >
              Career
            </Text>
            <Text
              as={"p"}
              fontFamily={"Source Sans Pro"}
              fontSize={{ base: "8.76px", md: "14.66px" }}
              color={"#646874"}
              mb={"2"}
            >
              Contact Us
            </Text>
          </Box>

          <Box>
            <Text
              display={{ base: "none", lg: "block" }}
              fontFamily={"Source Sans Pro"}
              fontWeight={"600"}
              color={"#0e2368"}
            >
              Social Links
            </Text>
            <Text
              textAlign={"center"}
              color={"#828b9c"}
              fontSize={{ base: "8.76px", md: "14.66px" }}
              position={{ lg: "absolute" }}
              bottom={"2"}
              right={"0"}
              width={{ lg: "15rem" }}
            >
              &copy; 2022 Food Truck Example{" "}
            </Text>
            <Flex justifyContent={{ base: "center" }} ml={{ lg: "-0.5rem" }}>
              <IconButton bg={"transparent"}>
                <AiOutlineInstagram color="#0e2368" size={"22"} />
              </IconButton>
              <IconButton bg={"transparent"}>
                <AiOutlineTwitter color="#0e2368" size={"22"} />
              </IconButton>
              <IconButton bg={"transparent"}>
                <FaFacebookF color="#0e2368" size={"16"} />
              </IconButton>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FooterSection;
