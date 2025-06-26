import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: "#E6F0FA",
      100: "#B3D4FF",
      500: "#3B82F6",
      600: "#2563EB",
      900: "#1E40AF",
    },
    accent: {
      500: "#A855F7",
      600: "#9333EA",
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "white",
      },
    },
  },
});

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Box>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Box>
      </motion.div>
    </ChakraProvider>
  );
}

export default App;
