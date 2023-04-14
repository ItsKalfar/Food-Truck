import React from "react";
import { Button } from "@chakra-ui/react";

const PrimaryBtn = ({ text, px, py, pt, pb, fontSize }) => {
  return (
    <Button
      border="2px solid white"
      borderRadius="1.5rem"
      color="white"
      bg={"#e23744"}
      px={px}
      py={py}
      pt={pt}
      pb={pb}
      fontSize={fontSize}
      _hover={{
        bg: "transparent",
        color: "#e23744",
        border: "2px solid #e23744",
      }}
      _active={{ bg: "white" }}
    >
      {text}
    </Button>
  );
};

export default PrimaryBtn;
