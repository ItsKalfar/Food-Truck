import React from "react";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";

const ArticleCard = ({ img, title }) => {
  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      my={"8"}
      py={10}
      px={6}
      border={"1px solid #444957"}
      borderRadius={"1.5rem"}
      width={"85%"}
      textAlign={"center"}
    >
      <Box mb={"2rem"}>
        <Image src={img} alt={img} className="article-image" />
      </Box>

      <Box>
        <Heading
          as="h3"
          size="md"
          mb={2}
          fontSize={"1rem"}
          fontWeight={"700"}
          color={"#142e85"}
          fontFamily={"Poppins"}
        >
          {title}
        </Heading>
        <Text mb={4} textAlign={"left"} fontSize={"0.75rem"}>
          PLorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley....
        </Text>
        <Button
          border="2px solid #444957"
          borderRadius="1.5rem"
          color="#444957"
          bg={"transparent"}
          p={1}
          px={12}
          fontSize={"0.75rem"}
          _hover={{
            bg: "white",
            color: "#e23744",
            border: "2px solid #e23744",
          }}
          _active={{ bg: "white" }}
        >
          Read More
        </Button>
      </Box>
    </Flex>
  );
};

export default ArticleCard;
