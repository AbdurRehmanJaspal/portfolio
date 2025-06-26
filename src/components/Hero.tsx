import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaPatreon,
  FaTwitter,
  FaDownload,
} from "react-icons/fa";
import Typed from "typed.js";
import myImage from "../assets/profile.jpg";
import resume from "../assets/Abdullah Jaspal(Senior Software Engineer) (1).pdf";
import { useEffect, useRef } from "react";

const MotionBox = motion(Box);

const Hero = () => {
  const textColor = useColorModeValue("gray.400", "gray.300");
  const accentColor = useColorModeValue("brand.500", "accent.500");
  const cardBg = useColorModeValue("gray.800", "gray.700");
  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: ["Software Engineer", "Mobile App Developer"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <Box
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      pt={{ base: "120px", md: "80px" }}
      bg="gray.900"
      position="relative"
      overflow="hidden"
    >
      <Container maxW="1400px" px={{ base: 4, md: 6 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 8, md: 12 }}
          position="relative"
          zIndex={1}
        >
          <Box
            display={{ base: "flex", md: "none" }}
            justifyContent="center"
            mb={{ base: 6, md: 0 }}
            w="100%"
          >
            <Image
              src={myImage}
              alt="Profile"
              borderRadius="full"
              w="180px"
              h="180px"
              boxShadow="2xl"
              bg="white"
              p={2}
            />
          </Box>
          <VStack
            spacing={{ base: 4, md: 8 }}
            align={{ base: "center", md: "start" }}
            flex={1}
          >
            <Text
              color={accentColor}
              fontWeight="bold"
              fontSize={{ base: "md", md: "lg" }}
            >
              Hey, I'm
            </Text>
            <Heading
              as="h1"
              size={{ base: "2xl", md: "3xl" }}
              bgGradient="linear(to-r, brand.500, accent.500)"
              bgClip="text"
              textAlign={{ base: "center", md: "left" }}
            >
              Abdul Rehman Jaspal
            </Heading>
            <Heading
              as="h2"
              size={{ base: "lg", md: "xl" }}
              color={textColor}
              textAlign={{ base: "center", md: "left" }}
            >
              <span ref={el} />
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={textColor}
              maxW="600px"
              textAlign={{ base: "center", md: "left" }}
            >
              Over 5 years of experience crafting high-performance mobile apps
              with React Native, TypeScript, and modern tools. I build
              intuitive, user-focused solutions for iOS and Android.
            </Text>
            <HStack
              spacing={4}
              wrap={{ base: "wrap", md: "nowrap" }}
              justify={{ base: "center", md: "flex-start" }}
            >
              <Button
                colorScheme="blue"
                size={{ base: "md", md: "lg" }}
                onClick={() => (window.location.href = "#contact")}
                w={{ base: "full", md: "auto" }}
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                size={{ base: "md", md: "lg" }}
                onClick={() => (window.location.href = "#projects")}
                w={{ base: "full", md: "auto" }}
              >
                View My Work
              </Button>
              {/* <Button
                as="a"
                href={resume}
                download
                variant="outline"
                size={{ base: "md", md: "lg" }}
                leftIcon={<FaDownload />}
                w={{ base: "full", md: "auto" }}
              >
                Resume
              </Button> */}
            </HStack>
            <HStack
              spacing={4}
              wrap="wrap"
              justify={{ base: "center", md: "flex-start" }}
            >
              <Button
                as="a"
                href="https://github.com/Abdurrehmanjaspal"
                target="_blank"
                variant="ghost"
                leftIcon={<FaGithub />}
                color={textColor}
                size={{ base: "sm", md: "md" }}
              >
                GitHub
              </Button>
              <Button
                as="a"
                href="https://www.linkedin.com/in/abdullah-jaspal"
                target="_blank"
                variant="ghost"
                leftIcon={<FaLinkedin />}
                color={textColor}
                size={{ base: "sm", md: "md" }}
              >
                LinkedIn
              </Button>
            </HStack>
          </VStack>
          <MotionBox
            flex={1}
            position="relative"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            display={{ base: "none", md: "block" }}
          >
            <Box
              position="absolute"
              top="-10%"
              left="-10%"
              right="-10%"
              bottom="-10%"
              bg={cardBg}
              borderRadius="50%"
              filter="blur(50px)"
              zIndex={0}
            />
            <Image
              src={myImage}
              alt="Profile"
              borderRadius="full"
              w={{ base: "250px", md: "350px" }}
              h={{ base: "250px", md: "350px" }}
              boxShadow="2xl"
              position="relative"
              zIndex={1}
              bg="white"
              p={2}
            />
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
