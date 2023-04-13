import { useState } from "react";
import { Box, Flex, Button, Text } from "@chakra-ui/react";
import {
  broccoliChesseSoup,
  crunchWrapSupreme,
  griledTomatoes,
  howToGrill,
  mealPrepIdeas,
  postWorkOutMeal,
} from "../assets";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const slides = [
    [
      { id: 1, title: "Grilled Tomatoes at Home", src: griledTomatoes },
      { id: 2, title: "Snacks for Travel", src: mealPrepIdeas },
      {
        id: 3,
        title: "Post-workout Receipes",
        src: postWorkOutMeal,
      },
    ],
    [
      {
        id: 1,
        title: "How to Grill Corn",
        src: howToGrill,
      },
      {
        id: 2,
        title: "Crunchwrap Supreme",
        src: crunchWrapSupreme,
      },
      {
        id: 3,
        title: "Broccoil Cheese Soup",
        src: broccoliChesseSoup,
      },
    ],
  ];

  return (
    <Flex direction="column" align="center">
      <Box maxW="800px" w="100%" p={4} borderRadius="md" overflow="hidden">
        <Box
          display="flex"
          transition="transform 0.3s ease-out"
          transform={`translateX(-${currentSlide * 100}%)`}
        >
          {slides.map((slide, index) => (
            <Flex
              border={"2px solid black"}
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              key={index}
              minWidth="100%"
            >
              <Text fontSize="xl" textAlign="center">
                {slide.map((slide) => (
                  <Box key={slide.id}>{slide.title}</Box>
                ))}
              </Text>
            </Flex>
          ))}
        </Box>
      </Box>
      <Box mt={4}>
        <Button onClick={prevSlide} mr={4}>
          Previous
        </Button>
        <Button onClick={nextSlide}>Next</Button>
      </Box>
    </Flex>
  );
};

export default Carousel;
