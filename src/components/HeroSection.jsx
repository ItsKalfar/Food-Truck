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
        pb={{ base: 14, md: 28 }}
      >
        <Box>
          <Image src={pizza} alt="pizza" className="hero-image" />
          <Image src={heroBg} alt="Hero background" className="hero-bg" />
        </Box>
        <Box
          mt={{ base: 16, md: 0 }}
          ml={{ base: 0, md: 20 }}
          textAlign={{ base: "center", md: "left" }}
          width={"90%"}
          maxW={{ base: "375px", md: "50%" }}
        >
          <Text
            as="h1"
            mb={5}
            width={{ base: "80%", md: "60%" }}
            mx={{ base: "auto", md: "0" }}
          >
            {" "}
            Discover the <span>Best</span> Food and Drinks{" "}
          </Text>
          <Text
            as="p"
            mb={5}
            width={{ base: "60%", md: "80%", lg: "40%" }}
            mx={{ base: "auto", md: "0" }}
            className="p1"
          >
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
