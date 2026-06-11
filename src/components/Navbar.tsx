"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Insight", href: "#insight" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-[#0F172A]/80 border-b border-[#334155]/60 backdrop-blur-md shadow-lg shadow-black/5"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 group">
            <span className="font-display font-black text-2xl tracking-tight text-white transition-colors">
              D
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                S
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text hover:text-white transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full animate-out" />
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" asChild className="border-secondary/30 hover:border-secondary text-white">
              <Link href="#contact" className="flex items-center gap-1">
                Hire Me
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-text hover:text-white hover:bg-surface transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-border bg-surface/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-lg text-base font-medium text-text hover:text-white hover:bg-[#0F172A]/50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Button variant="default" size="default" className="w-full justify-center" asChild>
                  <Link href="#contact" onClick={() => setIsOpen(false)}>
                    Hire Me
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
