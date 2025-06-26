import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image,
  Button,
  useColorModeValue,
  HStack,
  Icon,
  Tag,
  TagLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiLaravel,
  SiFirebase,
  SiSpringboot,
  SiPostgresql,
  SiRedis,
  SiSocketdotio,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAndroid,
  SiIos,
} from "react-icons/si";
import { localImages } from "../assets/index.ts";
import type { IconType } from "react-icons";
import { FaCheckCircle } from "react-icons/fa";

const MotionBox = motion(Box);

interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  features: string[];
  github: string;
  live: string;
  role: string;
  category: string;
  status: string;
}

const Projects = () => {
  const textColor = useColorModeValue("gray.400", "gray.300");
  const cardBg = useColorModeValue("gray.800", "gray.700");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    onOpen();
  };

  const projects = [
    {
      title: "Jaidad Deals",
      description:
        "A comprehensive real estate platform connecting buyers, sellers, tenants, and landlords across Pakistan. Features include property search filters, interactive maps, and real-time agent chat.",
      image: localImages.jaidadDealsImage,
      technologies: [
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
        { name: "WebSocket", icon: SiSocketdotio, color: "#010101" },
      ],
      features: [
        "Property search with advanced filters",
        "Interactive maps integration",
        "Real-time agent chat",
        "Secure transaction management",
      ],
      github: "https://github.com/AbdullahJaspal/jaidad-deals",
      live: "https://jaidaddeals.com",
      role: "Lead Mobile Developer",
      category: "Real Estate",
      status: "Live",
    },
    {
      title: "SpeedFleets",
      description:
        "A sophisticated delivery management app for Kuwait, streamlining operations between businesses, drivers, and customers. Features real-time order tracking and live driver location updates.",
      image: localImages.speedFleetsImage,
      technologies: [
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
      ],
      features: [
        "Real-time order tracking",
        "Live driver location updates",
        "Push notifications",
        "Performance analytics",
      ],
      github: "https://github.com/AbdullahJaspal/speedfleets",
      live: "https://speedfleets.com",
      role: "Senior Mobile Developer",
      category: "Logistics",
      status: "Live",
    },
    {
      title: "Garden",
      description:
        "A multi-vendor marketplace and social platform for gardening enthusiasts, enabling users to buy, sell, and share plants, flowers, and gardening supplies.",
      image: localImages.gardenImage,
      technologies: [
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
        { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
      ],
      features: [
        "Multi-vendor marketplace",
        "Social interaction tools",
        "Real-time chat",
        "Gardening journal",
      ],
      github: "https://github.com/AbdullahJaspal/garden",
      live: "https://garden-app.com",
      role: "Lead Developer",
      category: "E-commerce",
      status: "Live",
    },
    {
      title: "Finiks",
      description:
        "A comprehensive digital campaign app that revolutionized political campaign management. Features event tracking, voter management, messaging, and real-time team communication.",
      image: localImages.finiksImage,
      technologies: [
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
      ],
      features: [
        "Event management",
        "Voter management",
        "Team messaging",
        "Real-time analytics",
      ],
      github: "https://github.com/AbdullahJaspal/Finiks",
      live: "https://finiks-app.com",
      role: "Mobile Developer",
      category: "Political",
      status: "Live",
    },
    {
      title: "MULM TRADES",
      description:
        "A robust business management application offering real-time insights into operations, customer tracking, inventory management, and detailed financial analytics by region.",
      image: localImages.mulmTradesImage,
      technologies: [
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
      ],
      features: [
        "Real-time business insights",
        "Regional analytics",
        "Financial ledger management",
        "Customer relationship tools",
      ],
      github: "https://github.com/AbdullahJaspal/mulm-trades",
      live: "https://play.google.com/store/apps/details?id=com.mulmtrades",
      role: "Mobile Developer",
      category: "Business",
      status: "Live",
    },
    {
      title: "RecipeRendezvous",
      description:
        "A comprehensive recipe application where users can browse, save, and share culinary creations. Features include recipe search, favorites management, and community contributions.",
      image: localImages.recipieImage,
      technologies: [
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ],
      features: [
        "Recipe discovery & search",
        "Personal recipe collection",
        "Community recipe sharing",
        "Nutrition information",
      ],
      github: "https://github.com/AbdullahJaspal/RecipeRendezvous",
      live: "https://play.google.com/store/apps/details?id=com.reciperendezvous",
      role: "Mobile Developer",
      category: "Food & Drink",
      status: "Published",
    },
    {
      title: "PDF Wizard",
      description:
        "A powerful React Native app for converting images to PDFs with batch processing, image editing capabilities, and customizable PDF layouts for enhanced productivity.",
      image: localImages.pdImage,
      technologies: [
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Android", icon: SiAndroid, color: "#3DDC84" },
        { name: "iOS", icon: SiIos, color: "#000000" },
      ],
      features: [
        "Image to PDF conversion",
        "Batch processing",
        "Image editing tools",
        "Custom PDF layouts",
      ],
      github: "https://github.com/AbdullahJaspal/pdf-wizard",
      live: "https://play.google.com/store/apps/details?id=com.pdfwizard",
      role: "Mobile Developer",
      category: "Productivity",
      status: "Published",
    },
    {
      title: "Currency Cove",
      description:
        "The ultimate currency converter with real-time exchange rates, multi-currency support, and historical data tracking for travelers and investors.",
      image: localImages.currencyCoverterImage,
      technologies: [
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
      ],
      features: [
        "Real-time exchange rates",
        "Multi-currency support",
        "Historical rate tracking",
        "Offline mode support",
      ],
      github: "https://github.com/AbdullahJaspal/currency-cove",
      live: "https://play.google.com/store/apps/details?id=com.currencycove",
      role: "Mobile Developer",
      category: "Finance",
      status: "Published",
    },
    {
      title: "My Rat App",
      description:
        "A specialized app for pet rat owners featuring medical appointment scheduling, health tracking, customizable reminders, and care management tools.",
      image: localImages.myRatAppImage,
      technologies: [
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Android", icon: SiAndroid, color: "#3DDC84" },
        { name: "iOS", icon: SiIos, color: "#000000" },
      ],
      features: [
        "Medical appointment tracking",
        "Health monitoring",
        "Custom reminder system",
        "Care schedule management",
      ],
      github: "https://github.com/AbdullahJaspal/my-rat-app",
      live: "https://play.google.com/store/apps/details?id=com.myratapp",
      role: "Mobile Developer",
      category: "Pet Care",
      status: "Published",
    },
    {
      title: "TIC TAC TOE",
      description:
        "A modern take on the classic Tic Tac Toe game with AI opponents, multiplayer support, and strategic gameplay features for entertainment and skill development.",
      image: localImages.ticTacToeImage,
      technologies: [
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Android", icon: SiAndroid, color: "#3DDC84" },
        { name: "iOS", icon: SiIos, color: "#000000" },
      ],
      features: [
        "Single & multiplayer modes",
        "AI difficulty levels",
        "Score tracking",
        "Customizable themes",
      ],
      github: "https://github.com/AbdullahJaspal/tic-tac-toe",
      live: "https://play.google.com/store/apps/details?id=com.tictactoe",
      role: "Mobile Developer",
      category: "Games",
      status: "Published",
    },
    {
      title: "Freedom Pay",
      description:
        "A secure fintech application for seamless money transfers with robust security measures, user-friendly interface, and comprehensive transaction management.",
      image: localImages.freedomPayImage,
      technologies: [
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
        { name: "Express", icon: SiExpress, color: "#000000" },
      ],
      features: [
        "Secure money transfers",
        "Multi-currency support",
        "Transaction history",
        "Real-time notifications",
      ],
      github: "https://github.com/AbdullahJaspal/freedom-pay",
      live: "https://play.google.com/store/apps/details?id=com.freedompay",
      role: "Mobile Developer",
      category: "Fintech",
      status: "Live",
    },
  ];

  return (
    <Box id="projects" py={{ base: 16, md: 24 }} bg="gray.900">
      <Container maxW="1400px" px={{ base: 4, md: 6 }}>
        <VStack spacing={{ base: 12, md: 16 }}>
          <VStack spacing={{ base: 4, md: 6 }} textAlign="center">
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              bgGradient="linear(to-r, brand.500, accent.500)"
              bgClip="text"
            >
              My Projects
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={textColor}
              maxW="800px"
            >
              Explore my mobile apps showcasing innovative solutions and modern
              technologies.
            </Text>
          </VStack>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: 6, md: 8 }}
            w="100%"
          >
            {projects.map((project, index) => (
              <MotionBox
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  bg={cardBg}
                  borderRadius="lg"
                  overflow="hidden"
                  cursor="pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    w="100%"
                    h={{ base: "200px", md: "250px" }}
                    objectFit="cover"
                  />
                  <VStack
                    p={{ base: 4, md: 6 }}
                    spacing={{ base: 3, md: 4 }}
                    align="stretch"
                  >
                    <Heading size={{ base: "sm", md: "md" }} color="white">
                      {project.title}
                    </Heading>
                    <Text
                      color={textColor}
                      fontSize={{ base: "sm", md: "md" }}
                      noOfLines={2}
                    >
                      {project.description}
                    </Text>
                    <HStack wrap="wrap" spacing={2}>
                      {project.technologies.map((tech, techIndex) => (
                        <Tag
                          key={techIndex}
                          size={{ base: "sm", md: "md" }}
                          borderRadius="full"
                          variant="subtle"
                          colorScheme="gray"
                        >
                          <Icon as={tech.icon} color={tech.color} mr={1} />
                          <TagLabel fontSize={{ base: "xs", md: "sm" }}>
                            {tech.name}
                          </TagLabel>
                        </Tag>
                      ))}
                    </HStack>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", md: "4xl" }}
      >
        <ModalOverlay />
        <ModalContent bg={cardBg} mx={{ base: 4, md: 0 }}>
          <ModalHeader color="white" fontSize={{ base: "lg", md: "xl" }}>
            {selectedProject?.title}
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody pb={6}>
            <Image
              src={selectedProject?.image}
              alt={selectedProject?.title}
              borderRadius="lg"
              mb={4}
              w="100%"
              h={{ base: "200px", md: "300px" }}
              objectFit="cover"
            />
            <Text color={textColor} mb={4} fontSize={{ base: "sm", md: "md" }}>
              {selectedProject?.description}
            </Text>
            <List spacing={3} mb={4}>
              {selectedProject?.features.map((feature, idx) => (
                <ListItem
                  key={idx}
                  color={textColor}
                  fontSize={{ base: "sm", md: "md" }}
                >
                  <ListIcon as={FaCheckCircle} color="brand.500" />
                  {feature}
                </ListItem>
              ))}
            </List>
            <HStack spacing={4} wrap="wrap">
              <Button
                as="a"
                href={selectedProject?.github}
                target="_blank"
                colorScheme="blue"
                size={{ base: "sm", md: "md" }}
                w={{ base: "full", md: "auto" }}
              >
                View Code
              </Button>
              <Button
                as="a"
                href={selectedProject?.live}
                target="_blank"
                variant="outline"
                size={{ base: "sm", md: "md" }}
                w={{ base: "full", md: "auto" }}
              >
                Live Demo
              </Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Projects;
