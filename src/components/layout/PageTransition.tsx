import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
      className="flex-grow flex flex-col"
    >
      {children}
    </motion.div>
  );
}
