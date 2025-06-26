import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  useToast,
  HStack,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const MotionBox = motion(Box);

const Contact = () => {
  const textColor = useColorModeValue("gray.400", "gray.300");
  const cardBg = useColorModeValue("gray.800", "gray.700");
  const inputBg = useColorModeValue("gray.700", "gray.600");
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "I'll get back to you soon.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "Abdurrehman0000u@gmail.com",
      link: "mailto:Abdurrehman0000u@gmail.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+44 7300 857452",
      link: "tel:+447300857452",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "United Kingdom",
      link: "https://maps.google.com",
    },
  ];

  return (
    <Box id="contact" py={24} bg="gray.900">
      <Container maxW="1400px">
        <VStack spacing={16}>
          <VStack spacing={6} textAlign="center">
            <Heading
              as="h2"
              size="2xl"
              bgGradient="linear(to-r, brand.500, accent.500)"
              bgClip="text"
            >
              Get In Touch
            </Heading>
            <Text fontSize="lg" color={textColor} maxW="800px">
              Ready to collaborate? Drop me a message or connect with me
              directly.
            </Text>
          </VStack>
          <Stack
            spacing={8}
            align="stretch"
            direction={{ base: "column", md: "row" }}
            w="100%"
          >
            <VStack spacing={6} flex={1} align="stretch">
              <MotionBox
                bg={cardBg}
                p={8}
                borderRadius="xl"
                boxShadow="lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {contactInfo.map((info, index) => (
                  <HStack key={index} spacing={4} mb={4}>
                    <Icon as={info.icon} w={6} h={6} color="brand.500" />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="bold" color="white">
                        {info.label}
                      </Text>
                      <Text as="a" href={info.link} color={textColor}>
                        {info.value}
                      </Text>
                    </VStack>
                  </HStack>
                ))}
              </MotionBox>
            </VStack>
            <MotionBox
              as="form"
              flex={2}
              p={8}
              bg={cardBg}
              borderRadius="xl"
              boxShadow="lg"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <VStack spacing={6}>
                <FormControl isRequired>
                  <FormLabel color="white">Name</FormLabel>
                  <Input
                    type="text"
                    bg={inputBg}
                    color="white"
                    borderColor="gray.600"
                    _hover={{ borderColor: "brand.500" }}
                    _focus={{ borderColor: "brand.500" }}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color="white">Email</FormLabel>
                  <Input
                    type="email"
                    bg={inputBg}
                    color="white"
                    borderColor="gray.600"
                    _hover={{ borderColor: "brand.500" }}
                    _focus={{ borderColor: "brand.500" }}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color="white">Message</FormLabel>
                  <Textarea
                    rows={6}
                    bg={inputBg}
                    color="white"
                    borderColor="gray.600"
                    _hover={{ borderColor: "brand.500" }}
                    _focus={{ borderColor: "brand.500" }}
                  />
                </FormControl>
                <Button type="submit" colorScheme="blue" size="lg" w="full">
                  Send Message
                </Button>
              </VStack>
            </MotionBox>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
