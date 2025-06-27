import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Box, Text, Image, Flex, Link } from "@chakra-ui/react";
import bgImg from "./assets/busterswordbg.jpg";
import BlueTextBox from "./components/BlueTextBox.jsx";
import pfp from "./assets/pfp1.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Page = () => {
  return (
    <>
      <Navbar />
      <Box
        bgImage={`url(${bgImg})`}
        bgAttachment="fixed"
        bgSize="cover"
        backgroundPosition={{ base: "75% 80%", md: "center" }}
        minHeight="100vh"
        paddingTop={{ base: "10vh", md: "0" }}
        flexDir={{ base: "column", md: "column" }}
        width="100%"
        zIndex="-1"
        display="flex"
        alignItems="center"
        paddingBottom="10vh"
        paddingLeft={{ base: "0", md: "10vw" }}
        paddingRight={{ base: "0", md: "10vw" }}
        backgroundRepeat="no-repeat"
      >
        <BlueTextBox id="home">
          <Box display="flex" flexDirection="row" alignItems="center" gap={5}>
            <Image
              src={pfp}
              height={{ base: "120px", md: "220px" }}
              width={{ base: "120px", md: "200px" }}
              objectFit="cover"
              objectPosition="50% 10%"
            />
            <Box>
              <Text
                fontFamily="'FF7Pix', system-ui, sans-serif"
                fontSize="1.1rem"
              >
                <Text
                  as="span"
                  color="white"
                  fontWeight="normal"
                  fontSize="1.5rem"
                >
                  Calvin
                </Text>
              </Text>
              <Text
                fontFamily="'FF7Pix', system-ui, sans-serif"
                fontSize="1.2rem"
              >
                <Text
                  as="span"
                  color="cyan"
                  fontWeight="bold"
                  marginRight="2px"
                >
                  LV
                </Text>
                <Text as="span" color="white" fontWeight="normal">
                  99
                </Text>
              </Text>
              <Text
                fontFamily="'FF7Pix', system-ui, sans-serif"
                fontSize="1.2rem"
                fontWeight="bold"
              >
                <Text as="span" color="cyan" marginRight="2px">
                  HP
                </Text>
                <Text as="span" color="white" fontWeight="normal">
                  9999/9999
                </Text>
              </Text>
              <Text
                fontFamily="'FF7Pix', system-ui, sans-serif"
                fontSize="1.2rem"
              >
                <Text
                  as="span"
                  color="cyan"
                  fontWeight="bold"
                  marginRight="2px"
                >
                  MP
                </Text>
                <Text as="span" color="white" fontWeight="normal">
                  999/999
                </Text>
              </Text>
            </Box>
          </Box>
        </BlueTextBox>
        <BlueTextBox mt="10px">
          <Text
            color="white"
            fontFamily="'FF7Pix', system-ui, sans-serif"
            fontSize="1.5rem"
          >
            STUDENT: FOURTH CLASS - SENIOR - CAL POLY POMONA - COMPUTER SCIENCE
            - DATA SCIENCE
          </Text>
        </BlueTextBox>
        <BlueTextBox id="about">
          <Text
            color="white"
            fontFamily="'FF7Pix', system-ui, sans-serif"
            fontSize="3rem"
          >
            About
          </Text>
          <Text
            color="white"
            fontFamily="'FF7Pix', system-ui, sans-serif"
            fontSize="2rem"
          >
            Student for hire. I aspire to be a machine learning engineer / AI
            engineer, with interests in Machine Learning in Music. My strongest
            language is Python, with knowledge in JavaScript, Java, and
            frameworks like React. I also just like to build silly things that I
            care about like Magic: The Gathering and this portfolio site based
            on Final Fantasy VII.
          </Text>
        </BlueTextBox>
        <BlueTextBox id="projects">
          <Text
            color="white"
            fontFamily="'FF7Pix', system-ui, sans-serif"
            fontSize="3rem"
          >
            Projects
          </Text>

          <Text
            color="white"
            fontFamily="'FF7Pix', system-ui, sans-serif"
            fontSize="2.5rem"
          >
            RMP Helper
          </Text>
          <Text
            color="white"
            fontFamily="'FF7Pix', system-ui, sans-serif"
            fontSize="2rem"
          >
            A Google Chrome extension utilizing TypeScript, JavaScript, GraphQL
            and OpenAI API that streamlines the process of viewing professor
            ratings and comments on RateMyProfessor, all in the comfort of an
            extension exclusively for CalPolyPomona's class searching interface.
          </Text>

          <Text
            color="white"
            fontFamily="'FF7Pix', system-ui, sans-serif"
            fontSize="2.5rem"
          >
            Wilderness Survival Simulation
          </Text>
          <Text
            color="white"
            fontFamily="'FF7Pix', system-ui, sans-serif"
            fontSize="2rem"
          >
            A Java console game that aims to demonstrate mine and my fellow
            teammates mastery of Object Oriented Programming and Design
            concepts.
          </Text>

          <Text
            color="white"
            fontFamily="'FF7Pix', system-ui, sans-serif"
            fontSize="2.5rem"
          >
            Music Genre Classifier Using CNN
          </Text>
          <Text
            color="white"
            fontFamily="'FF7Pix', system-ui, sans-serif"
            fontSize="2rem"
          >
            A machine learning project utilizing Python, NumPy, TensorFlow,
            Keras, and among other libraries, that extracts features like
            Spectrogram and MFCCs from songs in the GTZAN dataset, and using CNN
            to classify which song belongs in what genre with a 79.89% testing
            accuracy.
          </Text>

          <Text
            color="white"
            fontFamily="'FF7Pix', system-ui, sans-serif"
            fontSize="2.5rem"
          >
            Magic: The Deckbuilder (WIP)
          </Text>
          <Text
            color="white"
            fontFamily="'FF7Pix', system-ui, sans-serif"
            fontSize="2rem"
          >
            A deckbuilder for the hit game Magic: The Gathering that will have
            an AI deckbuilder for those who are new to magic and those who want
            to try something new using AI.
          </Text>
        </BlueTextBox>
        <BlueTextBox id="contact">
          <Text
            color="white"
            fontFamily="'FF7Pix', system-ui, sans-serif"
            fontSize="2.5rem"
            textAlign="center"
          >
            Contact
          </Text>
          <Link href="https://www.linkedin.com/in/ckamada/">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="14px"
            >
              <FaLinkedin size={48} />
            </Box>
          </Link>
          <Link href="https://github.com/ClavinK">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="14px"
            >
              <FaGithub size={48} />
            </Box>
          </Link>
        </BlueTextBox>
      </Box>
    </>
  );
};

export default Page;
