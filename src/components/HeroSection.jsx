import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { pizza, heroBg } from "../assets";
import Image from "next/image";
import { PrimaryBtn } from "../components";

const HeroSection = () => {
  return (
    <section id="hero-section">
      <Flex
        direction={{ base: "column", md: "row-reverse" }}
        align="center"
        justify="space-between"
        maxW="1230px"
        mx="auto"
        pb={{ base: 14, md: 0 }}
      >
        <Box>
          <Image src={pizza} alt="pizza" className="hero-image" />
          <Image src={heroBg} alt="Hero background" className="hero-bg" />
        </Box>
        <Box
          mt={{ base: 16, md: 0 }}
          ml={{ base: 0, md: 20 }}
          textAlign={"center"}
          width={"90%"}
        >
          <Text as="h1" mb={5} width={"80%"} mx={"auto"}>
            {" "}
            Discover the <span>Best</span> Food and Drinks{" "}
          </Text>
          <Text as="p" mb={5} lineHeight={"1.8"} color={"#444957"}>
            Naturally made Healthcare Products for the better care & support of
            your body.
          </Text>
          <PrimaryBtn px={5} py={5} text={"Explore Now!"} />
        </Box>
      </Flex>
    </section>
  );
};

export default HeroSection;
