import React from "react";
import { Box } from "@chakra-ui/react";

const BlueTextBox = ({ children, ...props }) => {
  return (
    <Box
      shadow="md"
      background="linear-gradient(320deg, rgba(2, 0, 36, 1) 0%, rgba(0, 0, 166, 1) 100%)"
      border="2px solid white"
      borderRadius="3px"
      padding="16px"
      boxShadow="inset 0 0 10px rgba(60, 125, 216, 0.5)"
      maxWidth={{ base: "90%", md: "100%" }}
      mt={{ base: "45px", md: "100px" }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default BlueTextBox;
