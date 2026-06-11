"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Download, ArrowRight, User } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

// Set to true after you upload your profile image to public/images/profile.png
const SHOW_PROFILE_IMAGE = true;


// Custom SVG components for brand icons that are not in lucide-react
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      {/* Background Glowing Orbs */}
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-primary/10 blur-[80px] sm:blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-secondary/10 blur-[80px] sm:blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-accent/5 blur-[80px] sm:blur-[100px]" />
      </motion.div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415510_1px,transparent_1px),linear-gradient(to_bottom,#33415510_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center"
      >
        {/* Empty Circular Image Placeholder */}
        <motion.div variants={itemVariants} className="mb-5">
          <div className="relative group flex items-center justify-center">
            {/* Outer Glowing Ring */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary to-secondary opacity-40 blur-sm group-hover:opacity-75 group-hover:blur-md transition duration-500" />
            
            {/* Main Circular Box */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-surface border-2 border-dashed border-border/80 flex items-center justify-center text-text/40 overflow-hidden shadow-inner group-hover:border-secondary group-hover:text-secondary transition-all duration-300">
              {SHOW_PROFILE_IMAGE ? (
                <Image
                  src="/images/profile.jpg"
                  alt="Dilshan Samarakoon"
                  fill
                  sizes="(max-width: 640px) 96px, 112px"
                  className="object-cover"
                  priority
                />
              ) : (
                <User className="w-10 h-10 stroke-[1.25]" />
              )}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </motion.div>

        {/* Small Role Label */}
        <motion.div variants={itemVariants} className="mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border/60 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-secondary shadow-md">
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
            Data Analyst
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-heading mb-5"
        >
          Dilshan{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-sm">
            Samarakoon
          </span>
        </motion.h1>

        {/* Slogan */}
        <motion.p
          variants={itemVariants}
          className="text-text text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl mb-6 px-2"
        >
          Turning data into meaningful insights and decisions that drive real impact.
        </motion.p>

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full bg-surface border border-border/80 text-text hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a
            href="mailto:dilshan@example.com"
            aria-label="Gmail"
            className="p-3 rounded-full bg-surface border border-border/80 text-text hover:text-white hover:border-secondary hover:shadow-lg hover:shadow-secondary/10 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-full bg-surface border border-border/80 text-text hover:text-white hover:border-accent hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center px-4"
        >
          <Button variant="default" size="lg" asChild className="w-full sm:w-auto">
            <Link href="#projects" className="flex items-center gap-2">
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto border-border hover:bg-surface/80">
            <a href="/cv.pdf" download className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex [@media(max-height:720px)]:hidden flex-col items-center gap-2 pointer-events-none"
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
