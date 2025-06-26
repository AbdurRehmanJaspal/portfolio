import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const MotionBox = motion(Box);

const Skills = () => {
  const textColor = useColorModeValue("gray.400", "gray.300");
  const cardBg = useColorModeValue("gray.800", "gray.700");

  const skills = [
    {
      category: "Mobile Development",
      items: [
        { name: "React Native", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Swift", level: 85 },
      ],
    },
    {
      category: "State Management & Tools",
      items: [
        { name: "Redux/Redux Toolkit", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "React Navigation", level: 95 },
        { name: "Git", level: 90 },
      ],
    },
    {
      category: "Additional Skills",
      items: [
        { name: "UI/UX Design", level: 90 },
        { name: "Performance Optimization", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "Agile/Scrum", level: 85 },
      ],
    },
  ];

  return (
    <Box id="skills" py={{ base: 16, md: 24 }} bg="gray.900">
      <Container maxW="1400px" px={{ base: 4, md: 6 }}>
        <VStack spacing={{ base: 12, md: 16 }}>
          <VStack spacing={{ base: 4, md: 6 }} textAlign="center">
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              bgGradient="linear(to-r, brand.500, accent.500)"
              bgClip="text"
            >
              Skills & Expertise
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={textColor}
              maxW="800px"
            >
              Technologies and tools I use to create impactful mobile apps.
            </Text>
          </VStack>
          <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            spacing={{ base: 6, md: 8 }}
            w="100%"
          >
            {skills.map((skillGroup, index) => (
              <MotionBox
                key={index}
                p={{ base: 6, md: 8 }}
                bg={cardBg}
                borderRadius="xl"
                boxShadow="lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <VStack spacing={{ base: 4, md: 6 }} align="stretch">
                  <Heading size={{ base: "sm", md: "md" }} color="brand.500">
                    {skillGroup.category}
                  </Heading>
                  <SimpleGrid
                    columns={{ base: 2 }}
                    spacing={{ base: 4, md: 6 }}
                  >
                    {skillGroup.items.map((skill, skillIndex) => (
                      <VStack key={skillIndex} align="center">
                        <CircularProgress
                          value={skill.level}
                          color="brand.500"
                          size={{ base: "60px", md: "80px" }}
                          thickness="8px"
                        >
                          <CircularProgressLabel
                            color="white"
                            fontSize={{ base: "sm", md: "md" }}
                          >
                            {skill.level}%
                          </CircularProgressLabel>
                        </CircularProgress>
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
                          color={textColor}
                        >
                          {skill.name}
                        </Text>
                      </VStack>
                    ))}
                  </SimpleGrid>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Skills;
