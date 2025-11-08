import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/Themecontext";
import  ScrollToTop from "./components/Scroll";
import { motion } from "motion/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";

import "./scss/App.scss";

function App() {
  

  return (
    <ThemeProvider>
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration: 1}}
      className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </motion.div>
    </ThemeProvider>
  )
}

export default App;
