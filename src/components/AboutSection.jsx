import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { girl } from "../assets";
import Image from "next/image";
import { PrimaryBtn } from "../components";

const AboutSection = () => {
  return (
    <Box id="aboutSection" bg={"#f0f1f7"}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        w={"90%"}
        maxW={{ base: "375px", lg: "1230px" }}
        mx="auto"
        textAlign={{ base: "center", md: "left" }}
      >
        <Box display={{ base: "none", xl: "block" }} h={"100%"}>
          <Image src={girl} alt="About image" id="about-img" />
        </Box>
        <Box
          py={28}
          maxW={{ base: "375px", md: "512px" }}
          mx={{ base: "auto", lg: 0 }}
          ml={{ lg: "48" }}
        >
          <Text as="h2" mb={8} width={"80%"} mx={"auto"}>
            About Us
          </Text>
          <Text as="p" mb={5} className="p1" width={"80%"} mx={"auto"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </Text>
          <Box ml={{ md: "10" }}>
            <PrimaryBtn text={"Read More"} fontSize={"0.687rem"} px={8} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutSection;
