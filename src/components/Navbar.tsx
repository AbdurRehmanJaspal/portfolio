import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  const bgColor = useColorModeValue(
    isScrolled ? "whiteAlpha.800" : "transparent",
    isScrolled ? "blackAlpha.800" : "transparent"
  );
  const textColor = useColorModeValue("gray.800", "white");
  const hoverColor = "brand.500";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      position="fixed"
      w="100%"
      bg={bgColor}
      backdropFilter="blur(10px)"
      zIndex={1000}
      transition="all 0.3s ease"
    >
      <Flex
        maxW="1400px"
        mx="auto"
        px={4}
        h="80px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          fontWeight="extrabold"
          fontSize="2xl"
          bgGradient="linear(to-r, brand.500, accent.500)"
          bgClip="text"
        >
          AJ
        </Box>
        <Flex gap={6} align="center" display={{ base: "none", md: "flex" }}>
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
            >
              <MotionButton
                variant="ghost"
                color={textColor}
                _hover={{ color: hoverColor, transform: "translateY(-2px)" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {item}
              </MotionButton>
            </ScrollLink>
          ))}
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            variant="ghost"
            color={textColor}
            _hover={{ color: hoverColor }}
          />
        </Flex>
        <IconButton
          aria-label="Open menu"
          icon={<FaBars />}
          display={{ base: "flex", md: "none" }}
          onClick={() => setIsOpen(true)}
          variant="ghost"
          color={textColor}
        />
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => setIsOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent bg="blackAlpha.900" backdropFilter="blur(10px)">
          <DrawerCloseButton color="white" />
          <DrawerBody>
            <VStack spacing={6} mt={12} align="stretch">
              {navItems.map((item) => (
                <ScrollLink
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="ghost"
                    color="white"
                    _hover={{ color: hoverColor }}
                    w="full"
                  >
                    {item}
                  </Button>
                </ScrollLink>
              ))}
              <Button
                variant="ghost"
                leftIcon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                color="white"
                _hover={{ color: hoverColor }}
                onClick={toggleColorMode}
                w="full"
              >
                Toggle Theme
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
