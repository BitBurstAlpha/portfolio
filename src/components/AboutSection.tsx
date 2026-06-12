"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { StatCard } from "./StatCard";
import { BarChart3, Database, LineChart, Brain, GraduationCap, LucideIcon } from "lucide-react";

// Animation variants defined at module level to avoid re-creation on every render
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const educationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      delay: 0.3,
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

const educationIconVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
      delay: 0.4,
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

interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

const STATS_DATA: StatItem[] = [
  {
    value: "10+",
    label: "Analytics Projects",
    icon: BarChart3,
  },
  {
    value: "145K+",
    label: "Data Records Analysed",
    icon: Database,
  },
  {
    value: "20+",
    label: "Dashboard KPIs Built",
    icon: LineChart,
  },
  {
    value: "5+",
    label: "Machine Learning Models",
    icon: Brain,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-b from-[#0A0F1D] via-[#10182A] to-[#151D30] overflow-hidden py-24 sm:py-32 border-t border-border/40"
    >
      {/* Background Glows (Low Opacity) */}
      <div className="absolute top-1/4 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-accent/5 blur-[100px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] rounded-full bg-primary/5 blur-[100px] sm:blur-[130px] pointer-events-none" />

      {/* Decorative subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415505_1px,transparent_1px),linear-gradient(to_bottom,#33415505_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="col-span-1 lg:col-span-6 space-y-6 sm:space-y-8"
          >
            {/* Section Label */}
            <motion.div variants={textVariants}>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                ABOUT
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={textVariants}
              className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight text-heading"
            >
              Data that drives{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block mt-2">
                growth and real-world decisions.
              </span>
            </motion.h2>

            {/* Description Paragraphs */}
            <motion.div
              variants={textVariants}
              className="text-text text-sm sm:text-base leading-relaxed space-y-6 font-normal"
            >
              <p>
                I am a Data Analyst with over 1 year of experience and a First Class BSc (Hons) in Computer Science from London South Bank University.
              </p>
              <p>
                My expertise spans SQL, Python, Power BI, Excel, and Machine Learning, with experience transforming complex datasets into meaningful business insights. I enjoy uncovering patterns, solving business problems, and building dashboards that support data-driven decision making.
              </p>
              <p>
                Through professional experience, academic research, freelance projects, and startup work, I have contributed to customer churn analysis, UK road traffic accident analytics, stock market research, and predictive machine learning solutions. My work involves data cleaning, exploratory data analysis, KPI reporting, dashboard development, and delivering actionable insights to stakeholders.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Statistics Grid & Education Card */}
          <div className="col-span-1 lg:col-span-6">

            {/* Combined Grid for compact spacing and alignment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

              {/* Statistics Cards */}
              {STATS_DATA.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  index={index}
                  icon={stat.icon}
                />
              ))}

              <motion.div
                variants={educationVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
                className="col-span-1 sm:col-span-2 relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-surface/30 border border-border/60 backdrop-blur-sm shadow-md hover:border-primary/30 transition-colors duration-150 group"
              >
                {/* Accent glow backdrop on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex flex-col space-y-3 relative z-10">
                  {/* Top Row: Icon & Category */}
                  <div className="flex items-center gap-2.5 w-full">
                    <motion.div 
                      variants={educationIconVariants}
                      className="p-2 rounded-xl bg-surface/80 border border-border group-hover:border-primary/30 group-hover:text-primary text-text/60 transition-all duration-300"
                    >
                      <GraduationCap className="w-5 h-5 stroke-[1.75]" />
                    </motion.div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-secondary">
                      EDUCATION
                    </div>
                  </div>

                  {/* Degree Title */}
                  <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-accent transition-colors duration-300">
                    First Class BSc (Hons) in Computer Science
                  </h3>

                  {/* Institution */}
                  <div className="text-text/70 text-xs sm:text-sm font-medium">
                    London South Bank University – London, United Kingdom
                  </div>

                  {/* Period */}
                  <div className="text-text/50 text-[11px] sm:text-xs pt-0.5">
                    September 2022 – May 2025
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <div className="w-6 h-10 rounded-full border-2 border-border/80 flex justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-secondary"
          />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-text/30 font-medium font-sans">
          Scroll Down
        </span>
      </motion.div>
    </section>
  );
}
