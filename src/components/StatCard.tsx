"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  index: number;
  icon: LucideIcon;
}

// Icon-specific animation variants for clean entrance and hover micro-interactions
const iconVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.08,
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeInOut" as const,
    },
  },
};

export function StatCard({ value, label, index, icon: Icon }: StatCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: index * 0.08,
      },
    },
    hover: {
      y: -4,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="relative group p-4 sm:p-5 rounded-2xl bg-surface/30 border border-border/60 backdrop-blur-sm shadow-md hover:border-secondary/30 transition-colors duration-150 flex items-center gap-4 overflow-hidden"
    >
      {/* Subtle hover background highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Left Column: Animated Icon Container */}
      <motion.div
        variants={iconVariants}
        className="flex-shrink-0 p-2.5 rounded-xl bg-surface/80 border border-border group-hover:border-secondary/30 group-hover:text-secondary text-text/60 transition-all duration-300"
      >
        <Icon className="w-5 h-5 stroke-[1.75]" />
      </motion.div>

      {/* Right Column: Content */}
      <div className="flex flex-col min-w-0">
        {/* Value */}
        <div className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-secondary group-hover:text-accent transition-colors duration-300">
          {value}
        </div>

        {/* Label */}
        <div className="text-text/60 text-xs sm:text-sm font-medium tracking-wide mt-0.5 transition-colors duration-300 group-hover:text-text/80">
          {label}
        </div>
      </div>
    </motion.div>
  );
}
