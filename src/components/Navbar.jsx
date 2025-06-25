import { Flex, Box, Link } from "@chakra-ui/react";
import React from "react";
import "../styles/fonts.css";

const Navbar = () => {
  //   const [show, setShow] = useState(false);

  return (
    <Box
      shadow="md"
      position="fixed"
      // background="#d6d6d6"
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
        px={{ base: 4, md: 16 }} // Responsive horizontal padding
        py={2}
      >
        <Link className="ff ff-home">HOME</Link>
        <Link className="ff">ABOUT</Link>
        <Link className="ff">PROJECTS</Link>
        <Link className="ff">CONTACT</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
