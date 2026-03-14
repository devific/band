import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Music from "@/pages/Music";
import Contact from "@/pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error - key is valid on Routes for AnimatePresence */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/music" element={<PageTransition><Music /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollProgress />
      <div className="min-h-screen flex flex-col relative bg-bg-base">
        <div className="noise-bg" />
        <Navbar />
        <main className="flex-grow flex flex-col">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
