import { useState } from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import {
  broccoliChesseSoup,
  crunchWrapSupreme,
  griledTomatoes,
  howToGrill,
  mealPrepIdeas,
  postWorkOutMeal,
} from "../assets";
import ArticleCard from "./ArticleCard";
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
    setCurrentPage(1);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 1 : prevSlide + 1
    );
    setCurrentPage(2);
  };

  const slides = [
    [
      { id: 1, title: "Grilled Tomatoes at Home", src: griledTomatoes },
      { id: 2, title: "Snacks for Travel", src: postWorkOutMeal },
      {
        id: 3,
        title: "Post-workout Receipes",
        src: mealPrepIdeas,
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
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              key={index}
              minWidth="100%"
            >
              {slide.map((slide) => (
                <ArticleCard
                  key={slide.id}
                  title={slide.title}
                  img={slide.src}
                />
              ))}
            </Flex>
          ))}
        </Box>
      </Box>
      <Flex mt={4} textAlign={"center"} justifyContent={"center"}>
        <IconButton
          bg={"transparent"}
          _hover={{
            bg: "transparent",
          }}
          onClick={prevSlide}
          mr={4}
        >
          <CiSquareChevLeft size={32} />
        </IconButton>
        <Text mt={2} ml={-3}>
          {currentPage}/2
        </Text>
        <IconButton
          _hover={{
            bg: "transparent",
          }}
          bg={"transparent"}
          onClick={nextSlide}
        >
          <CiSquareChevRight size={32} />
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default Carousel;
