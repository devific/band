import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-6", className)}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 24 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-[3px] bg-accent-coral"
      />
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="text-label text-accent-coral"
      >
        {children}
      </motion.span>
    </div>
  );
}
