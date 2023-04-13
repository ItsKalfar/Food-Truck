import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Flex,
  Box,
  Heading,
  Text,
  Menu,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { Logo } from "../assets";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer style={{ backgroundColor: "#F8F8F8" }}>
      <Flex direction={"column"}>
        <Image src={Logo} alt={Logo} />
        <Box>
          <Heading as="h4">Contact Us</Heading>
          <Menu>
            <MenuItem>
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </MenuItem>
            <MenuItem>example2020@gmail.com</MenuItem>
            <MenuItem>(904) 443-0343</MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
          </Menu>
        </Box>
        <Box textAlign={"left"}>
          <Heading as="h4">More</Heading>
          <Menu>
            <MenuItem>About Us</MenuItem>
            <MenuItem>Products</MenuItem>
            <MenuItem>Career</MenuItem>
            <MenuItem>Contact Us</MenuItem>
          </Menu>
        </Box>
        <Box>
          <Heading display={{ base: "none", lg: "block" }} as="h5">
            Social Links
          </Heading>
          <Text>&copy; Food Truck Example</Text>
          <Flex>
            <Menu>
              <MenuItem>
                <IconButton bg={"transparent"}>
                  <AiOutlineInstagram size={22} color="#0e2368" />
                </IconButton>
                <IconButton bg={"transparent"}>
                  <AiOutlineTwitter size={22} color="#0e2368" />
                </IconButton>
                <IconButton bg={"transparent"}>
                  <FaFacebookF size={22} color="#0e2368" />
                </IconButton>
              </MenuItem>
            </Menu>
          </Flex>
        </Box>
      </Flex>
    </footer>
  );
};

export default FooterSection;
