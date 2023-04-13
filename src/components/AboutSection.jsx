import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { girl } from "../assets";
import Image from "next/image";
import { PrimaryBtn } from "../components";

const AboutSection = () => {
  return (
    <Box id="aboutSection" bg={"gray.100"}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1230px"
        mx="auto"
      >
        <Box display={{ base: "none", md: "block" }}>
          <Image src={girl} alt="About image" />
        </Box>
        <Box ml={{ base: 0, md: 20 }} textAlign={"center"} py={28}>
          <Text as="h2" mb={8} width={"80%"} mx={"auto"}>
            About Us
          </Text>
          <Text as="p" mb={5} px={2} className="p1" width={"80%"} mx={"auto"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </Text>
          <PrimaryBtn text={"Read More"} fontSize={"0.687rem"} px={8} />
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutSection;
