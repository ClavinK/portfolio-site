import { Flex, Box } from "@chakra-ui/react";
import { Link } from "react-scroll";
import React from "react";
import "../styles/fonts.css";

const Navbar = () => {
  return (
    <Box
      shadow="md"
      position="fixed"
      background="white"
      top={0}
      left={0}
      width="100%"
      minH="56px"
      fontFamily="system-ui"
      zIndex={1000}
    >
      <Flex
        gap={{ base: 2, md: 8 }}
        justify="space-between"
        align="center"
        px={{ base: 4, md: 16 }}
        py={2}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-100}
          className="ff ff-home"
        >
          HOME
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-100}
          className="ff"
        >
          ABOUT
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-100}
          className="ff"
        >
          PROJECTS
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-100}
          className="ff"
        >
          CONTACT
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
