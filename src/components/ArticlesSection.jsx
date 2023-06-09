import { Box, Flex, Text } from "@chakra-ui/react";

import Carousel from "./Carousel";

const ArticlesSection = () => {
  return (
    <Box py={28}>
      <Flex
        direction={"column"}
        textAlign={"center"}
        align="center"
        justify="space-between"
        maxW={{ base: "375px", lg: "1230px" }}
        mx="auto"
      >
        <Text as="h2" width={"80%"} mx={"auto"}>
          Latest Articles
        </Text>
      </Flex>
      <Carousel />
    </Box>
  );
};

export default ArticlesSection;
