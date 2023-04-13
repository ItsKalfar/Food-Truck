import React from "react";
import { Logo } from "../assets";
import { Flex, Box, Spacer, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryBtn } from "../components";

const Navbar = () => {
  return (
    <nav className="container">
      <Flex align="center" justify="space-between" px={2}>
        <Box>
          <Link href="/">
            <Image id="nav-logo" src={Logo} alt="food-truck-logo" />
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Button
            zIndex={10}
            border="2px solid white"
            borderRadius="1.5rem"
            color="white"
            bg={"transparent"}
            p={2}
            px={4}
            _hover={{
              bg: "white",
              color: "#e23744",
              border: "2px solid #e23744",
            }}
            _active={{ bg: "white" }}
          >
            Get in Touch
          </Button>
        </Box>
      </Flex>
    </nav>
  );
};

export default Navbar;
